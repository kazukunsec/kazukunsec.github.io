var score = 0;

const scoreContainer = document.querySelector('#score')
var total =5;
console.log(scoreContainer.data);

function updateScore(){

    if(score>=0){
        score=5+score;
        scoreContainer.innerHTML = score
    }else{
        score=0;
        scoreContainer.innerHTML = score
    }
};
