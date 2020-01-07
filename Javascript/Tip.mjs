class Tip {
  constructor(bill, service, guests) {
    this.bill = bill;
    this.service = service;
    this.guests = guests;
  }


  calculateCurrentBill(){

    return this.bill / this.guests;
  }
  serviceCalculator(){
    switch(this.service){
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
    }
  }

  calculateTip(){

    return this.serviceCalculator() * this.calculateCurrentBill();
  }
}

export default Tip;
