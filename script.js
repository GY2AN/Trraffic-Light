function stopButtonLight(){
    document.getElementById("stopLight").style.backgroundColor = "red";
    document.getElementById("readyLight").style.backgroundColor = "black";
    document.getElementById("goLight").style.backgroundColor = "black";
}

function readyButtonLight(){
    document.getElementById("stopLight").style.backgroundColor = "black";
    document.getElementById("readyLight").style.backgroundColor = "yellow";
    document.getElementById("goLight").style.backgroundColor = "black";
}

function goButtonLight(){
    document.getElementById("stopLight").style.backgroundColor = "black";
    document.getElementById("readyLight").style.backgroundColor = "black";
    document.getElementById("goLight").style.backgroundColor = "green";
}