var data={}

function handleNext(e){
    e.target.parentElement.style.display='none';
    e.target.parentElement.nextElementSibling.style.display='block';
}

function storeData(e){
    data[e.target.name]=e.target.value;
    console.log(data);
}

function handlePrev(e){
    e.target.parentElement.style.display='none';
    e.target.parentElement.previousElementSibling.style.display='block';
}

function handleSubmit(e){
    e.target.parentElement.style.display='none';
    e.target.parentElement.nextElementSibling.style.display='block';
    let output=e.target.parentElement.nextElementSibling;
    let html='<h3>Entered Details</h3>';
    for (let key in data) {
        html+="<p>"+key+":  "+data[key]+"</p>";
    }
    output.innerHTML=html;
}