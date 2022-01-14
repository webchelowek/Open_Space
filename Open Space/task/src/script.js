let controls = new Array();

for (let i = 1; i < 7; i++) {
    controls.push(document.getElementById("cb" + i));
}

for (let i = 1; i < 6; i++) {
    controls.push(document.getElementById("r" + i));
}

document.getElementById("ok").addEventListener('click', () => {
        if(document.getElementById("pass").value === "TrustNo1"){

        for (let i = 0; i < controls.length; i++) {
            controls[i].disabled = false;
        }
        document.getElementById('ok').setAttribute('disabled', 'disabled');
        document.getElementById('pass').setAttribute('disabled', 'disabled');
    }
});

let checker = function (){
    let allIsOn = true;
    for (let i = 1; i < 7; i++) {
        if(!document.getElementById("cb" + i).checked){
            allIsOn = false;
        }
    }
    for (let i = 1; i < 6; i++) {
        if(document.getElementById("r" + i).value !== '100'){
            allIsOn = false;
        }
    }

    if(allIsOn){
        document.getElementById("but2").disabled = false;
    }
}

document.getElementById("but2").addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        setInterval(() => {
            document.getElementById('rocket').style.animationName = 'flying';
        }, 1);
    }
})