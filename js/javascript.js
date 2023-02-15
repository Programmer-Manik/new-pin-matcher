function getpin(){
    const pin = genartepin();

    const pinString = pin + "";

    if(pinString.length === 4){
        return pin ;

    }
    else{
        return  getpin();
    }
}


function genartepin(){
    const randoms = Math.round(Math.random()*10000); 
    return randoms;
}

document.getElementById('btn-genarate').addEventListener('click', function(){

    const pin = getpin();

    const hellopni = document.getElementById('input-filed');
    hellopni.value = pin ;
})