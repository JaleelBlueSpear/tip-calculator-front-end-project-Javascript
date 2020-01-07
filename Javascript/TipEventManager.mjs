
import Tip from "./Tip.mjs";

class TipEventManager {
  constructor(calculate){
    this.calculate = calculate;
  }


  setEvent(bill, service, guests) {
    this.calculate.setEventHandler("click", (e) => {
      const tip = new Tip(bill, service, guests);
      return tip.calculateTip();
    });
  }
}

export default TipEventManager;
