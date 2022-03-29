function insert(num){
   screen.value= screen.value+num
}

function equal(){
    screen.value=eval(screen.value)
}

function restart(){
    screen.value = screen.value.substring(0, screen.value.length = 0)
}

function backspace(){
    screen.value=screen.value.substring(0, screen.value.length - 1)
}
    
function percen(){
    screen.value = screen.value/100;
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
    }