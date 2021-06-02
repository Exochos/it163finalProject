/*       __                                  __     
  ____/ /___  _____   ________  ____ _____/ /_  __
 / __  / __ \/ ___/  / ___/ _ \/ __ `/ __  / / / /
/ /_/ / /_/ / /__   / /  /  __/ /_/ / /_/ / /_/ / 
\__,_/\____/\___/  /_/   \___/\__,_/\__,_/\__, /  
                                         /____/   */

   $(document).ready(function() {
      styler();
  
      // Click handler for light mode & dark mode
      $('#lite').click(function() {
          $('#styler').attr('href', './css/style1.css');
          localStorage.style = './css/style1.css';
      });
  
      // Click handler for dark mode 
      $('#dark').click(function() {
          $('#styler').attr('href', './css/style2.css');
          localStorage.style = './css/style2.css';
      });
  
      // Click Handler for login
      $('#login').click(function() {
          validate();
      });
  
  });
  
  function styler() {
      if(typeof(Storage)!=="undefined") {
          if (localStorage.style) {
              $('#styler').attr('href', localStorage.style);
          }
      }
  }
      
  
  
  // Validator for login //
  function validate() {
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     let success = 0;
     const loginlist = [
          { 
            username: 'admin',
            password: 'password',
          },
          { 
            username: 'root',
            password: 'password',
          },
          { 
            username: 'jeremy',
            password: '123456',
          },];
  
          Object.keys(loginlist).forEach(key => {
              if ((username == loginlist[key].username) && (password == loginlist[key].password)) {
                  console.log('Success');
                  $('#loginForm').css('display', 'none');
                  $('#home').toggle();
                  success = 1;
              }
            });
          if (success == 0) {
              alert('Username Or Password is incorrect');
          }
  }
  // End Validator //
  
  
  
  //for random number alert between 1-10
  var randomNumber = Math.floor(Math.random() * 11); 
  
  //displays winner box if randomNumber === 10 
  var modal = document.getElementById("pop_up");
  if (randomNumber === 10) { 
       modal = document.getElementById("pop_up");
      var span = document.getElementsByClassName("close")[0]; 
       modal.style.display="block"; 
       //MODAL NEEDS TO BE SET
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
      console.log(minutes.innerHTML);
      if(minutes.innerHTML == 00 && seconds.innerHTML == 05 ){ 
      
          var formContainer = document.getElementById('form_container');
          formContainer.style.display = 'block'; 
          
      }
  } 
  
  
  
  //form data taken 
  function getPeopleInfo(){ 
      var first = document.getElementById("first_name").value; 
      var last = document.getElementById("last_name").value; 
      
      console.log(first);
      console.log(last);
      // <h2 class="section-header">CART</h2>
      var cartTitle = document.getElementById('cart_header');
      var cartTotal = document.getElementById('cart_total'); 
      var storeGreeting = document.getElementById('store_greeting'); 
      cartTitle.innerText = first +"'s Cart";
      cartTotal.innerText = first +"'s Total";
      storeGreeting.innerText = "Welcome " + first + " " + last + " To Our Store!"; 
  
      var formContainer = document.getElementById('form_container');
      formContainer.style.display = 'none'; 
      //cartTitle.innerText = name; 
      
  } 
  
  
  //show time
  function pad(val) { 
      var valString = val + ""; 
      if(valString.length<2){ 
          return "0" + valString; 
      }else { 
          return valString; 
      }
  }
  
  //set interview questions
  var mins = document.getElementById('mins'); 
  console.log('hello world'); 
  
  
  
  function myFunction() {
      
      var x = document.getElementById("myTopnav");
      
      if (x.className === "topnav") {
        x.className += "responsive";
        
      } else {
        x.className = "topnav";
      }
    } 
  
  
  var products = [
      {
          name:'Electric Bike Mk1',
          price:'2000',
          inventory: '26',
          img:'bike01.png',
          desc: '33 pounds, 20-35 Mile Range, 2 Hour Recharge',
      },
      {
          name:'Electric Bike Mk2',
          price:'3000',
          inventory: '26',
          img:'bike02.jpg',
          desc: '35 pounds, 25-40 Mile Range, 2.5 Hour Recharge',
      },
      {
          name:'Electric Bike Mk3',
          price:'1500',
          inventory: '26',
          img:'bike03.jpg',
          desc: '28 pounds, 25-35 Mile Range, 2 Hour Recharge',
      },
      {
          name:'Electric Bike Mk4',
          price:'1200',
          inventory: '26',
          img:'bike04.jpg',
          desc: '26 pounds, 15-25 Mile Range, 2 Hour Recharge',
      },
      {
          name:'Electric Bike Mk5',
          price:'15000',
          inventory: '26',
          img:'bike05.jpg',
          desc: '20 pounds, 15-20 Mile Range, 1.5 Hour Recharge',
      },
      {
          name:'Electric Bike Mk6',
          price:'3000',
          inventory: '26',
          img:'bike06.jpg',
          desc: '32 pounds, 25-30 Mile Range, 2 Hour Recharge',
      },
      {
          name:'Electric Bike Mk7',
          price:'1500',
          inventory: '26',
          img:'bike07.jpg',
          desc: '30 pounds, 20-30 Mile Range, 2 Hour Recharge',
      },
      {
          name:'Electric Bike Mk8',
          price:'2500',
          inventory: '10',
          img:'bike08.jpg',
          desc: '28 pounds, 40-50 Mile Range, 2.5 Hour Recharge',
      },
      {
          name:'Electric Bike Mk9',
          price:'3500',
          inventory: '5',
          img:'bike09.jpg',
          desc: '40 pounds, 50-60 Mile Range, 3 Hour Recharge',
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
                        <img class="rounded-circle rounded-img z-depth-2" alt="100x100" src="./images/${data[i].img}"
                             data-holder-rendered="true">
                          <p class="bName"><b>Bicycle Name: </b>${data[i].name}</p>
                          <p><b>Bicycle Inventory: </b>${data[i].inventory}</p>
                          <p><b>Bicycle Description: </b>${data[i].desc} </p>
                          <p id="cost"><b>Price: $</b>${data[i].price}</p>
                          <button class="btn btn-primary shop-item-button" onclick="addToCartClicked('images/${data[i].img}','${data[i].name}', ${data[i].price} )">Add to Cart</button>                       </div>
                         </div> 
          `;
          row.innerHTML += newrow;
          } 
      }
  
  //start of ready() for cart functionality 
  function ready(){
      //remove from cart
     var removeCartItemButtons = document.getElementsByClassName('btn-danger'); 
     for(var i=0; i < removeCartItemButtons.length; i++){ 
         var buttons = removeCartItemButtons[i]; 
         //event listener
         buttons.addEventListener('click', removeCartItem)
     }
  
     //set quantitites. can't have zero
     var quantityInputs = document.getElementsByClassName('cart-quantity-input'); 
     for(var i = 0; i < quantityInputs.length; i++){ 
         var input = quantityInputs[i]; 
         input.addEventListener('change',quantityChanged);
     }
    
  }
  
  //removes cart item 
  function removeCartItem(event){ 
     var buttonClicked=event.target; 
         buttonClicked.parentElement.parentElement.remove(); 
         updateCartTotal();
         console.log('clicked');
        
  }
  //changes quantity in cart 
  function quantityChanged(event){ 
     var input = event.target; 
     //check if value input is valid 
     if(isNaN(input.value) || input.value <= 0) { 
         input.value=1; 
     } 
     updateCartTotal();
  }
  
  //add to cart clicked 
  function addToCartClicked(image,name, price) {
     var image=image;
     var name = name; 
     var price = price; 
     //console.log(image,name, price);
     addItemToCart(image, name, price); 
     updateCartTotal(); 
  }
  
  
  function addItemToCart(image, name, price){ 
   
     var cartRow = document.createElement('div')
     cartRow.classList.add('cart-row')
     var cartItems = document.getElementsByClassName('cart-items')[0]
     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
     for (var i = 0; i < cartItemNames.length; i++) {
         if (cartItemNames[i].innerText == name) {
             alert('This item is already added to the cart');
             return
         }
     }
  
     
     var cartRowContents=`
                  <div class="cart-item cart-column">
                      <img class="cart-item-image" src="${image}" width="100" height="100">
                      <span class="cart-item-title">${name}</span>
                  </div>
                  <span class="cart-price cart-column">${price}</span>
                  <div class="cart-quantity cart-column">
                      <input class="cart-quantity-input" type="number" value="1">
                      <button class="btn btn-danger" type="button">REMOVE</button>
                  </div>
             </div>` 
             cartRow.innerHTML=cartRowContents; 
     cartItems.append(cartRow); 
     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem); 
     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged); 
  }
  
  
  //update cart total
  function updateCartTotal() {
     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
     var total = 0
     for (var i = 0; i < cartRows.length; i++) {
         var cartRow = cartRows[i]
         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
         var price = parseFloat(priceElement.innerText.replace('$', ''))
         var quantity = quantityElement.value
         total = total + (price * quantity)
     }
     total = Math.round(total * 100) / 100
     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);
  } 
  
  