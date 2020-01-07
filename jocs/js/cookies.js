var jsonCookie = {};

// Eliminar la cookie
function deleteCookie() {
    document.cookie = "cookie=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// Crear cookie
function setCookie(name, idcard ,days) {
    var arr = new Array();
    var obj = new Object();

    // Dades per la cookie
    obj.name = name;
    obj.idcard = idcard;
    arr.push(obj);

    // Agafar la antigua cookie
    var temp = getCookie();
    if (temp != null) {
        
        // Ajuntar la nova i antigua cookie
        for (var i = 0; i < temp.length; i++) {
            var ob = new Object();
            ob.name = temp[i].name;
            ob.idcard = temp[i].idcard;
            arr.push(ob);
        }
    }
    var objWarp = new Object();
    objWarp.user = arr;
    var val = JSON.stringify(objWarp);

    // Expiració de la cookie
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    
    // Crear cookie
    document.cookie = "user_cookie="+val+expires  + ";path=/";
}

function getCookie() {
    var key,val,res;
    
    // Agafar totes les cookies
    var oldCookie = document.cookie.split(';');
    for (var i = 0; i < oldCookie.length; i++) {
        key = oldCookie[i].substr(0,oldCookie[i].indexOf("="));
        val = oldCookie[i].substr(oldCookie[i].indexOf("=")+1);
        key = key.replace(/^\s+|\s+$/g,"");

        // Trobar "user_cookie"
        if(key == "user_cookie") {
            res = val;
        }
    }

    if (res == undefined) {
        return null;
    } 
    else {
        res = JSON.parse(res);
        return res.user;
    }
}