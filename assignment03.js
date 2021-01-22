

/* Problem no.1: kilometerToMeter */

function kilometerToMeter (kilometer) {
    let meter = kilometer * 1000;
    if (meter>=0){
        return meter;
    }
    else {
        console.log('Negative number-a kaj hobe na. Positive number den.')
    }
}



/* Problem no.2: budgetCalculator */

function budgetCalculator(watch, mobile, laptop) {
    const watchPrice = watch * 50;
    const mobilePrice = mobile * 100;
    const laptopPrice =  laptop * 500;
    let totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}



/* Problem no.3: hotleCost */

function hotelCost (day){
    let cost = 0;
    if(day <= 10){
       cost = day * 100;
    } else if (day <= 20){
        let costFirst = 10 * 100;
        let remainingDay = day - 10;
        let costSecond = remainingDay * 80;
        cost = costFirst + costSecond;
    }
    else{
        costFirst = 10 * 100;
        costSecond = 10 * 80;
        let remainingDay = day - 20;
        let costThird = remainingDay * 50;
        cost = costFirst + costSecond + costThird;
    }
if (cost>=0){
    return cost;
}
else {
    console.log("Wuhu...kaj hobe na. Positive number den.");
}
}


/* Problem no.4: megaFriend */

function megaFriend(name){
    let largeName = "";
    for (let i = 0; i < name.length; i++) {
      let element = name[i];
      if (element.length > largeName.length) {
        largeName = name[i];
      }
    }
    return largeName;
  }
  