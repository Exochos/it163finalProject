
//for random number alert between 1-10
var randomNumber = Math.floor(Math.random() * 11); 

//displays winner box if randomNumber === 10 
if(randomNumber === 10){ 
    var modal = document.getElementById("pop_up");
    var span = document.getElementsByClassName("close")[0]; 
     modal.style.display="block"; 
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


function myFunction() {
    
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
      
    } else {
      x.className = "topnav";
    }
  } 


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

//start of store items 
var row=document.getElementById('items-rows'); 
buildrows(products); 
function buildrows(data){ 
    var row=document.getElementById('row'); 
    
    for(var i = 0; i < data.length; i++){ 
        var price= data[i].price; 
        
        var newrow= ` <div class="col-sm-3" >
                      <div class="inside shadow">
                      <img class="rounded-circle z-depth-2" alt="100x100" src="./images/$(data[i].img}"
                           data-holder-rendered="true">
                        <p class="bName">Bicycle Name: ${data[i].name}</p>
                        <p>Bicycle Type: ${data[i].studio}</p>
                        
                        <p>Bicycle Description: <p id="cost">${data[i].price}</p>
                        <button onClick="addToCart('${data[i].name}',${data[i].price})">Add to Cart</button>
                       </div>
                       </div> 
        `;
        row.innerHTML+=newrow;
        } 
       
    }

 cart=[];
var total = 0; 
function addToCart(name, price) { 
    var name = name; 
    for(var i = 0; i < products.length; i++){ 
        if(products[i].price == price && products[i].name == name){ 
           let obj = products[i]; 
           cart.push(obj); 
        }
    } 

    if(cart.length>0){ 
        total = cart.reduce((accumulator, current) => accumulator + current.price, 0); 
        console.log(total); 
        return total;
    }  


 
}



console.log(cart); 
console.log(total); 
console.log('working'); 

