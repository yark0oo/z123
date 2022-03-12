function getResult(mass) {
    let days = 0;
    let sum = 0;
    for (numb1 of mass) {
        sum += numb1;
    }
    sredn = sum / mass.length;
    sredn = Math.round(sredn)
    for (numb of mass) {
        days += Math.abs(sredn-numb1);
    }
    console.log(days);
}

getResult([2, 1, 4, 1]); 
getResult([4, 2, 4, 5]); 
getResult([2, 2, 4, 1]); 
getResult([2, 2, 4, 1, 3]) 