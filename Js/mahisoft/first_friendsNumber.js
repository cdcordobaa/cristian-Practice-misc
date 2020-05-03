function solution(a, b) {
    
    let divisorsList = [];
    let aSum = 0;
    
    for (let i = 0; i < a; i++){
        if (a%i === 0){
            divisorsList.push(i);
            aSum += i;
        }
    }
    console.log(divisorsList, aSum);
    return aSum === b;
}

console.log(solution(220, 284));