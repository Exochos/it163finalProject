
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



var products = [
    {name:'Avengers: Age of Something', studio:'disney/marvel', price:125.35 },
    {name:'Chicken Run', studio:'dreamworks', price:6549.53 },
    {name:' is the End', studio:"don't remember", price:10.99},
    {name:'the End', studio:"don't remember", price:12.99},
    {name:' End', studio:"don't remember", price:250.10 },
    {name:'This ', studio:"don't remember", price:100.50 },
    {name:' is the', studio:"don't remember", price:200.00 },
   

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
                      <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
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

