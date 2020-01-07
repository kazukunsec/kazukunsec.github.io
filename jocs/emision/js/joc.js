const canvas = document.querySelector("canvas");
//Modificacion para ampliar el rectángulo
canvas.width = 2000;
canvas.height = 900;
const ctx = canvas.getContext("2d");
var imgArray = new Array();

imgArray[1] = new Image();
imgArray[1].src = "img/antena.jfif";

imgArray[0] = new Image();
imgArray[0].src = "img/20081025212522-tallerradio-.jpg";
imgArray[2] = new Image();
imgArray[2].src = "img/ondas.jpg";
var imIncorrectas = new Array();
imIncorrectas[0] = new Image();
imIncorrectas[0].src = "img/radio.jfif";

imIncorrectas[1] = new Image();
imIncorrectas[1].src = "img/radio2.jfif";
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
class Bola {
  constructor(x, y, radius, dx, dy, color, image, mass = 1) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 4;
    this.dy = 4;
    this.color = color;
    this.mass = mass;
    this.image = image;
  }

  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.fillStyle = this.color;

    ctx.drawImage(
      this.image,
      this.x - this.image.width / 2,
      this.y - this.image.height / 2
    );

    ctx.fill();

    //ctx.drawImage(this.image, this.x, this.y, 50, 40);
    ctx.closePath();
  };

  move = numBolas => {
    this.edgeDetection();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    for (let i = 0; i < numBolas.length; i++) {
      if (this === numBolas[i]) continue;
      if (
        distance(this.x, this.y, numBolas[i].x, numBolas[i].y) <=
        this.radius + numBolas[i].radius
      ) {
        this.collisionEffect(numBolas[i]);
      }
    }
  };

  edgeDetection = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
  };

  rotate = (dx, dy, angle) => {
    return {
      dx: dx * Math.cos(angle) - dy * Math.sin(angle),
      dy: dx * Math.sin(angle) + dy * Math.cos(angle)
    };
  };

  collisionEffect = otherBola => {
    const angle = -Math.atan2(otherBola.y - this.y, otherBola.x - this.x);
    const u1 = this.rotate(this.dx, this.dy, angle);
    const u2 = this.rotate(otherBola.dx, otherBola.dy, angle);

    const v1 = {
      dx:
        ((this.mass - otherBola.mass) * u1.dx) / (this.mass + otherBola.mass) +
        (2 * otherBola.mass * u2.dx) / (this.mass + otherBola.mass),
      dy: u1.dy
    };

    const v2 = {
      dx:
        ((this.mass - otherBola.mass) * u2.dx) / (this.mass + otherBola.mass) +
        (2 * otherBola.mass * u1.dx) / (this.mass + otherBola.mass),
      dy: u2.dy
    };

    const rotatedv1 = this.rotate(v1.dx, v1.dy, -angle);
    const rotatedv2 = this.rotate(v2.dx, v2.dy, -angle);

    this.dx = rotatedv1.dx;
    this.dy = rotatedv1.dy;

    otherBola.dx = rotatedv2.dx;
    otherBola.dy = rotatedv2.dy;
  };
}

const randomRange = (min, max) => {
  while (true) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    if (randomNum !== 0) return randomNum;
  }
};

const distance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

let BolasCorrect = [];
const spawnBolasCorrect = noOfBolas => {
  for (let i = 0; i < noOfBolas; i++) {
    const radius = 32;
    let x = randomRange(radius, canvas.width - radius);
    let y = randomRange(radius, canvas.height - radius);
    const properties = [
      // -> x, y, r, dx, dy, color, mass
      //x, y, radius, dx, dy, color, img, mass = 1
      x,
      y,
      radius,
      randomRange(-30, 30),
      randomRange(-10, 30),
      "rgba(63,191,63,0) ",
      imgArray[i]
    ];

    if (i != 0) {
      for (let j = 0; j < i; j++) {
        let d = distance(x, y, BolasCorrect[j].x, BolasCorrect[j].y);
        if (d <= radius + BolasCorrect[j].radius) {
          x = randomRange(radius, canvas.width - radius);
          y = randomRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    BolasCorrect.push(new Bola(...properties));
  }
};

let BolasIncorrect = [];
const spawnBolasIncorrect = noOfBolas => {
  for (let i = 0; i < noOfBolas; i++) {
    const radius = 32;
    let x = randomRange(radius, canvas.width - radius);
    let y = randomRange(radius, canvas.height - radius);

    const properties = [
      // -> x, y, r, dx, dy, color, mass
      x,
      y,
      radius,
      randomRange(-3, 3),
      randomRange(-3, 3),
      "rgba(229,25,25,0)",
      imIncorrectas[i]
    ];

    if (i != 0) {
      for (let j = 0; j < i; j++) {
        let d = distance(x, y, BolasIncorrect[j].x, BolasIncorrect[j].y);
        if (d <= radius + BolasIncorrect[j].radius) {
          x = randomRange(radius, canvas.width - radius);
          y = randomRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    BolasIncorrect.push(new Bola(...properties));
  }
};
var test;
const destructCorrect = Bola => {
  const updatedBolasCorrect = BolasCorrect.filter(
    (items, index) => Bola !== index

    // document.body.append(BolasCorrect.image)
  );

  console.log(updatedBolasCorrect);
  BolasCorrect = updatedBolasCorrect;

  updateScore(score);

  console.log(updatedBolasCorrect);
  // console.log(BolasCorrect);
  if (BolasCorrect.length == 0) {
    modal();
  } else {
    /*var newDiv = document.createElement("img");
    newDiv.innerHTML = BolasCorrect[0].image;
    */
    //Obtener indice de BolasCorrect
    /*console.log(Bola.image);
    var test = document.getElementById("score");
    var z = document.createElement("img"); // is a node
    z.src = BolasCorrect[Bola].image;
    document.body.appendChild(z);
    //test.appendChild(Bola.image);
    */
    /*  var z = document.createElement("img");

   z.setAttribute("src", imgArray[Bola]);

   z.setAttribute("alt", "The Pulpit Rock");

   document.body.appendChild(z); 
   */
    //var pastedImage = new Image();
    var elemren = document.getElementById("imagenes");
    var z = document.createElement("img");
    z.setAttribute("src", imgArray[Bola].src);
    z.setAttribute("id", "prueba");
    z.setAttribute("width", "400px");
    z.setAttribute("height", "400px");
    z.setAttribute("margin", "40px");

    z.setAttribute("alt", "The Pulpit Rock");

    if (z) {
      elemren.appendChild(z);
      imgArray.remove(Bola);
    } else {
      var x = document.createElement("img");
      x.setAttribute("src", imgArray[Bola].src);

      x.setAttribute("alt", "The Pulpit Rock");
      z.appendChild(x);
      imgArray.remove(Bola);
    }
  }
};

const destructIncorrect = Bola => {
  const updatedBolasIncorrect = BolasIncorrect.filter(
    (items, index) => Bola !== index
  );
  BolasIncorrect = updatedBolasIncorrect;
  updateScore(score=-5);
};

canvas.addEventListener("mousedown", event => {
  let x = event.x;
  let y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log(x, y);

  for (let i = 0; i < BolasCorrect.length || i < BolasIncorrect.length; i++) {
    if (
      distance(x, y, BolasCorrect[i].x, BolasCorrect[i].y) <=
      BolasCorrect[i].radius
    ) {
      destructCorrect(i);
    } else if (
      distance(x, y, BolasIncorrect[i].x, BolasIncorrect[i].y) <=
      BolasIncorrect[i].radius
    ) {
      destructIncorrect(i);
    }
  }
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  BolasCorrect.forEach(Bola => Bola.move(BolasCorrect));
  BolasIncorrect.forEach(Bola => Bola.move(BolasIncorrect));
}

spawnBolasCorrect(3);
spawnBolasIncorrect(2);
animate();

function modal() {
  $(document).ready(function() {
    $("#modalFinal").modal("show");
    var temp = getCookie();
    temp[0].idcard=score;
    console.log(temp[0].idcard=score);
    
    setCookie(temp[0].name,temp[0].idcard,365);
  });
 
}
