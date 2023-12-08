function fn_BtnClick(btn) {
    var Val = document.getElementById('txtCalc').value;
    document.getElementById('txtCalc').value = `${Val}${btn}`;
}

function fn_Calculate() {
    try {
        var Val = document.getElementById('txtCalc').value;
        document.getElementById('txtCalc').value = eval(Val);
    }
    catch {
        document.getElementById('txtCalc').value = '';
        alert("Error");
    }
}

function fn_Clear() {
    document.getElementById('txtCalc').value = '';
}