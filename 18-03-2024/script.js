function handleRequiredOnes(id) {
    let value = document.getElementById(id).value;
    if (value === '') {
        document.getElementById(id).style.borderColor = 'red';
        document.getElementById('err-msg').innerHTML = id + " is Required";
    }
}
