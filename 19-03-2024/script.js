let regExp = /[a-zA-Z]/g;

function handleRequiredOnes(id) {
    let input = document.getElementById(id);
    let text = input.value;
    switch (id) {

        case 'Name': validateName(input, text); break;

        case 'Email': validateEmail(input, text); break;

        case 'Phone-Number': validatePhoneNumber(input, text); break;

        case 'Amount': validateAmount(input, text); break;
    }
}

function goToNextStep() {
    let name = document.getElementById('Name');
    let num = document.getElementById('Phone-Number');
    let email = document.getElementById('Email');
    let amt = document.getElementById('Amount');
    if (name.value && num.value && email.value && amt.value) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        let circle2=document.getElementById('circle2').style;
        circle2.backgroundColor = 'cornflowerblue';
        circle2.color = 'white';
        circle2.borderColor = 'white';
    } else {
        validateName(name, name.value);
        validateEmail(email, email.value);
        validatePhoneNumber(num, num.value);
        validateAmount(amt, amt.value);
    }
}

function validateName(input, text) {
    let errTag = document.getElementsByClassName('name-err');
    if (text === '') {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='name-err'>Name is required!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Name is required!';
        }
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'black';
        if (errTag.length != 0) errTag[0].style.display = 'none';
    }
}

function validateEmail(input, text) {
    let errTag = document.getElementsByClassName('email-err');
    if (text === '') {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='email-err'>Email is required!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Email is required!';
        }
        input.style.borderColor = 'red';
    } else if ((!(text.includes('@')) || !(text.includes('.')))) {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='email-err'>Email is invalid!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Email is invalid!';
        }
        input.style.borderColor = 'red';
    }
    else {
        input.style.borderColor = 'black';
        if (errTag.length) errTag[0].style.display = 'none';
    }
}

function validatePhoneNumber(input, text) {
    let errTag = document.getElementsByClassName('num-err');
    if (text === '') {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='num-err'>Phone Number is required!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Phone Number is required!';
        }
        input.style.borderColor = 'red';
    } else if ((regExp.test(text)) || text.length != 10) {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='num-err'>Phone Number is invalid!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Phone Number is invalid!';
        }
        input.style.borderColor = 'red';
    }
    else {
        input.style.borderColor = 'black';
        if (errTag.length != 0) errTag[0].style.display = 'none';
    }
}

function validateAmount(input, text) {
    let errTag = document.getElementsByClassName('amt-err');
    if (text === '') {
        if (errTag.length === 0)
            input.insertAdjacentHTML("afterend", "<p class='amt-err'>Amount is required!</p>");
        else {
            errTag[0].style.display = 'block';
            errTag[0].innerHTML = 'Amount is required!';
        }
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'black';
        if (errTag.length != 0) errTag[0].style.display = 'none';
    }
}