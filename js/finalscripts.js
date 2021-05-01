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
buildTable(products);
function buildTable(data){ 
    var table=document.getElementById('myTable'); 
    
    for(var i = 0; i < data.length; i ++){ 
        var row= `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].studio}</td>
                        <td>${data[i].releaseDate}</td>
                  </tr>
        `;
        table.innerHTML += row;
    }
}


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
var randomNumber = Math.floor(Math.random() * 11); 
//console.log(randomNumber); 
//displays winner box if randomNumber == 10 
if(randomNumber == 10){ 
    var modal = document.getElementById("pop_up");
    var span = document.getElementsByClassName("close")[0]; 
    modal.style.display="block"; 
} 



