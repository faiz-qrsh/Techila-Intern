let emp=[];

function loadData(){
    let table=document.getElementById('empTable');
    emp.forEach((e)=>{
        let row=table.insertRow(0);
        row.setAttribute('id',e.sr.toString());
        let c1=row.insertCell(0);
        let c2=row.insertCell(1);
        let c3=row.insertCell(2);
        let c4=row.insertCell(3);
        let c5=row.insertCell(4);
        c1.innerHTML=e.sr;
        c2.innerHTML=e.name;
        c3.innerHTML=e.email;
        c4.innerHTML=e.city;
        c5.innerHTML=`<button type='button' id='deleteBtn' class='btn btn-danger' onclick='deleteEmployee()' value=${e.sr}>Delete</button>`;
    });
}

function deleteEmployee(){
    let i=Number(document.getElementById('deleteBtn').value);
    refresh();
    emp.splice(i-1,1);
    loadData();
    document.getElementById((i).toString()).style.display='none';
}

function addEmployee(){
    let table=document.getElementById('empTable');
    let row=table.insertRow(0);
    row.setAttribute('id','inputRow');
    let c1=row.insertCell(0);
    let c2=row.insertCell(1);
    let c3=row.insertCell(2);
    let c4=row.insertCell(3);
    let c5=row.insertCell(4);
    c1.innerHTML=`<input type='number' id='sr' value=${emp.length+1} required>`;
    c2.innerHTML="<input type='text' id='name' required>";
    c3.innerHTML="<input type='email' id='email' required>";
    c4.innerHTML="<input type='text' id='city' required>";
    c5.innerHTML="<button type='button' class='btn btn-secondary' onclick='handleNewData()'>Add</button>"
}

function handleNewData(){
    let sr= document.getElementById("sr").value;
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let city=document.getElementById("city").value;
    let newEmp={
        sr: sr,
        name: name,
        email: email,
        city: city
    }
    refresh();
    emp.push(newEmp);
    loadData();
    document.getElementById('inputRow').style.display='none';
}

function refresh(){
    for (let index = 1; index <= emp.length; index++) {
        document.getElementById((index).toString()).style.display='none';
    }
}