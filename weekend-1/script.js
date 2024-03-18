function showMore(id){
    let content='content'+id;
    let clicked=document.getElementById(content).style.display;
    for (let index = 1; index <= 3; index++) {
        if(('content'+index)==content){
            document.getElementById(content).style.display='block';
        }else{
            document.getElementById('content'+index).style.display='none';
        }
    }
}

function handleNext(id){
    let collapsible='collapsible'+(id+1);
    let content1='content'+id;
    let content2='content'+(id+1);
    document.getElementById(collapsible).disabled=false;
    document.getElementById(content1).style.display='none';
    document.getElementById(content2).style.display='block';
}