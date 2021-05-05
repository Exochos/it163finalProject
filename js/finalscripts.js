var products = [
    {
        name:'Electric Bike Mk1',
        price:'$2000',
        inventory: '26',
        img:'bike01.png',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk2',
        price:'$3000',
        inventory: '26',
        img:'bike02.jpg',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk3',
        price:'$1500',
        inventory: '26',
        img:'bike03.jpg',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk4',
        price:'$1200',
        inventory: '26',
        img:'bike04.jpg',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk5',
        price:'$15000',
        inventory: '26',
        img:'bike05.jpg',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk6',
        price:'$3000',
        inventory: '26',
        img:'bike06.jpg',
        desc: 'todo',
    },
    {
        name:'Electric Bike Mk7',
        price:'$1500',
        inventory: '26',
        img:'bike07.jpg',
        desc: 'todo',
    },
]; 


function buildTable(data){ 
    var table=document.getElementById('myTable'); 
    for(var i = 0; i < data.length; i ++){ 
        var row= `<tr>
                        <td><img src='../images/${data[i].img}' alt='${data[i].name}' width="300px"></td>
                        <td><b>Name: </b>${data[i].name}</td>
                        <td><b>Price: </b>${data[i].price}</td>
                        <td><b>Inventory: </b>${data[i].inventory}</td>
                        <td><b>About: </b>${data[i].desc}</td>
                  </tr>
                    `;
        table.innerHTML += row;
    }
}

buildTable(products);


//navDropDown() onclick function that drops the nav 
function navDropDown(){ 
    document.getElementById("myDropDown").classList.toggle("show"); 
}


//set DOM elements to variables
var minutes=document.getElementById("mins");
var seconds=document.getElementById("seconds"); 
var totalSeconds = 0; 
//call setInterval on setTime function 
setInterval(setTime, 1000); 

//setTime function that adds total seconds. 
function setTime(){ 
    ++totalSeconds; 
    seconds.innerHTML=pad(totalSeconds % 60); 
    minutes.innerHTML=pad(parseInt(totalSeconds/60)); 
}

function pad(val) { 
    var valString = val + ""; 
    if(valString.length<2){ 
        return "0" + valString; 
    }else { 
        return valString; 
    }
}

//for random number alert between 1-10
//displays winner box if randomNumber == 10 
var randomNumber = Math.floor(Math.random() * 11); 
if (randomNumber == 10) { 
    var modal = document.getElementById("pop_up");
    var span = document.getElementsByClassName("close")[0]; 
    modal.style.display="block"; 
} 



