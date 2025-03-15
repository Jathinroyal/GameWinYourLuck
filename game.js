const gifts = [
    "1:Teddy Bear", "2:Smart Watch", "3:Gift Card", "4:Bluetooth Speaker", "5:Chocolate Box",
    "6:Perfume", "7:Headphones", "8:Notebook", "9:Wireless Mouse", "10:Water Bottle",
    "11:Sunglasses", "12:Wristband", "13:Power Bank", "14:Table Lamp", "15:Pen Drive",
    "16:Coffee Mug", "17:Keychain", "18:Portable Fan", "19:Diary", "20:Photo Frame",
    "21:Mini Projector", "22:Phone Stand", "23:Desk Organizer", "24:LED String Lights", "25:Backpack",
    "26:Handmade Candle", "27:Electric Kettle", "28:Planner", "29:Board Game", "30:Personalized T-shirt",
    "31:Makeup Kit", "32:Travel Pillow", "33:Scented Soap", "34:Desk Clock", "35:Fitness Band",
    "36:Wireless Earbuds", "37:Poster", "38:Rubik's Cube", "39:Stress Ball", "40:Slippers",
    "41:Tabletop Plant", "42:Bookmark", "43:Socks", "44:Magic Mug", "45:Puzzle Set",
    "46:USB LED Light", "47:Mini Speaker", "48:Custom Keychain", "49:Laptop Sleeve", "50:Tote Bag"
];

const eve=document.getElementById("eve");
const result=document.getElementById("result");
const data=document.getElementById("outside");
 eve.addEventListener('click',function(){
   let ran= Math.random()*50;
  let random=Math.floor(ran);
   result.textContent=`Congraculations you won ${gifts[random]}`;
 });

 gifts.forEach(function(value){
  //<div class="inside"></div>
  const boxElements=`<div class="inside">${value}</div>`;
  data.insertAdjacentHTML("beforeend",boxElements);
 });
 //foreach //map //reduce
//   gifts.forEach(function(values){
// console,console.log(values);

//   });
//   gifts.map(function(values){
// return values.toUpperCase();
//   });

//   const marks=[10,20,30];
//   let con=marks.reduce(function(pre,cur){
    
//      return pre+cur;
//   },10);
//   console.log(con);
