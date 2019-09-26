function displayRadioValue() {
    var ele = document.getElementsByName('FirstQuetion');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            console.log(ele[i].value);
        }
    }
}
function gotoFirstQuetaion() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
}
function gotoSecondQuetaion() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
}

function gotothirdQuetaion() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}

function submit() {

    document.getElementById("quetions").style.display = "none";
    document.getElementById("result").style.display = "block";

    var ele1 = document.getElementsByName('FirstQuetion');
    var firtanswer, secondanswer, thirsanswer;
    var degree = 0;
    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked) {
            firtanswer = ele1[i].value;
        }
    }
    var ele2 = document.getElementsByName('SecondQuetion');

    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked) {
            secondanswer = ele2[i].value;
            console.log(secondanswer);
            
        }
    }

    var ele3 = document.getElementsByName('ThirdQuetion');

    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked) {
            thirsanswer = ele3[i].value;
        }
    }

    if (firtanswer == "blackboard") {
        degree = degree + 1;
    }
    if (secondanswer == "pencil") {
        degree = degree + 1;
    }
    if (thirsanswer == "desk") {
        degree = degree + 1;
    }
    console.log(degree);
    document.getElementById("data").innerHTML=degree;
}

function rest() {
    var ele1 = document.getElementsByName('FirstQuetion');
    for (i = 0; i < ele1.length; i++) {
        ele1[i].checked = false;
    }
    var ele2 = document.getElementsByName('SecondQuetion');

    for (i = 0; i < ele2.length; i++) {
        ele2[i].checked = false;
    }

    var ele3 = document.getElementsByName('ThirdQuetion');

    for (i = 0; i < ele3.length; i++) {
        ele3[i].checked = false;
    }
}

function back() {
    document.getElementById("quetions").style.display = "block";
    document.getElementById("result").style.display = "none";
}