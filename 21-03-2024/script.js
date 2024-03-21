var userData={}

function storeData(e){
    userData[e.target.name]=e.target.value;
    console.log(userData);
}