
// love button functionality
let loveBtns = document.querySelectorAll(".loveBtn");
let navLoveBtn = document.querySelector("#loveCountId")
for (let loveBtn of loveBtns) {
  loveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var currentLoveValue = parseInt(navLoveBtn.innerText);
    currentLoveValue += 1;
    navLoveBtn.innerText = currentLoveValue;
  })
}
//copy button 
let copyBtns = document.querySelectorAll(".copy");
let copyCountBtn = document.querySelector("#copyCountId");

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", (e) => {
    let copyValue = parseInt(copyCountBtn.innerText);
    copyValue += 1;
    copyCountBtn.innerText = copyValue;

    let card = e.currentTarget.closest("[id^='card-']");
    let number = card.querySelector(".number").innerText.trim();

    navigator.clipboard.writeText(number).then(() => {
      console.log("Copied:", number);
      alert("Copied: " + number);
    });
  });
}


// call button features
var callHistory = [];
let callBtns = document.querySelectorAll(".callBtn");
let coinCountBtn = document.querySelector("#coinCountId");
let historyDiv = document.querySelector("#historyDiv");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", (e) => {
    let currentCoin = parseInt(coinCountBtn.innerText);
    if (currentCoin <= 0) {
      alert("Not Enough Coins");
      return;
    }
    currentCoin -= 20;
    coinCountBtn.innerText = currentCoin;

    let card = e.currentTarget.closest("[id^='card-']");
    let service = card.querySelector(".numberDes").innerText;
    let number = card.querySelector(".number").innerText;
    let now = new Date();
    let time = now.toLocaleTimeString();
    alert("calling "+service+ " "+number);

    // save call log
    let log = {
      service: service,
      number: number,
      time: time
    };
    console.log(log);
    callHistory.push(log);

    // create history DOM element dynamically
    let newDiv = document.createElement("div");
    newDiv.classList.add("custom");

    let innerDiv1 = document.createElement("div");
    let header = document.createElement("h1");
    let para = document.createElement("p");

    header.innerText = log.service;
    para.innerText = log.number;
    para.classList.add("text-[#4A4A4A]");

    innerDiv1.appendChild(header);
    innerDiv1.appendChild(para);

    let innerDiv2 = document.createElement("div");
    innerDiv2.innerText = log.time;

    newDiv.appendChild(innerDiv1);
    newDiv.appendChild(innerDiv2);

    historyDiv.appendChild(newDiv);
  });
}

let deleteBtn= document.querySelector("#deleteBtn")
deleteBtn.addEventListener("click",(e)=>{
  callHistory=[];
  historyDiv.innerHTML = "";
});