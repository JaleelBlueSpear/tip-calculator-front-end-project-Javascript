class Tip {
  constructor(bill, service, guests) {
    this.bill = bill;
    console.log(bill);
    this.service = service;



    this.guests = guests;
  }


  calculateCurrentBill(){

    console.log(parseFloat(this.bill.value) / parseFloat(this.guests.value));
    return parseFloat(this.bill.value) / parseFloat(this.guests.value);
  }
  serviceCalculator(){
    switch(this.service.value){
      case "Great":
        return 0.85;
      case "good":
        return 0.54;
      case "Ok":
        return 0.28;

      case "bad":
        return 0.15;
      case "Very bad":
        return 0.12;
      default:
        return .03;
    }
  }

  calculateTip(){

    return this.serviceCalculator() * this.calculateCurrentBill();
  }
}




class TipEventManager {
  constructor(calculate){
    this.calculate = calculate;
  }


  setEvent(bill, service, guests, tip, div) {
    this.calculate.addEventListener("click", (e) => {
      createDivTip(div, tip.calculateTip());
    });
  }
}

const createDivTip = (div, tip) => {
  div.innerHTML = "";


  div.style.display = "flex";
  const h1 = document.createElement("h1");
  if (String(tip) == "NaN"){
    h1.textContent = "Please provide values to the required fields";
    div.appendChild(h1);
    return;
  }



  h1.textContent = `Tip: $${parseInt(tip)}`
  div.appendChild(h1);
}


const bill = document.querySelector("#currentBill");
const service = document.querySelector("#service");
const guests = document.querySelector("#guests");
const calculate = document.querySelector("#calculateBtn");
const div = document.querySelector("#tipDiv");

const tipCalculator = new Tip(bill, service, guests);
const tip = new TipEventManager(calculate);
tip.setEvent(bill.value, service.value, guests.value, tipCalculator, div);
