var products = [
    {name:'Avengers: Age of Something', studio:'disney/marvel', releaseDate:'6/20/2012' },
    {name:'Chicken Run', studio:'dreamworks', releaseDate:'10/10/2003' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },
    {name:'This is the End', studio:"don't remember", releaseDate:'9/20/2015' },

]; 
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
var randomNumber = Math.floor(Math.random() * 11); 
console.log(randomNumber); 
//displays winner box if randomNumber === 10 
if(randomNumber === 10){ 
    var modal = document.getElementById("pop_up");
    var span = document.getElementsByClassName("close")[0]; 
    modal.style.display="block"; 
} 



//start of store items 
var row=document.getElementById('row'); 

buildrows(products); 
function buildrows(data){ 
    var row=document.getElementById('row'); 
    
    for(var i = 0; i < data.length; i++){ 
        var newrow= ` <div class="col-sm-3" >
                      <div class="inside shadow">
                      <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                   data-holder-rendered="true">
                        <p class="bName">Bicycle Name: ${data[i].name}</p>
                        <p>Bicycle Type: ${data[i].studio}</p>
                        <p>Bicycle Cost: ${data[i].releaseDate}</p>
                        <p>Bicycle Description: ${data[i].releaseDate}</p>
                       </div>
                       </div> 
        `;
        row.innerHTML+=newrow;
    }
}