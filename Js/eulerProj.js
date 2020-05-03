
//1 exercise
const top = 100;
function sumofMultiplies( multiplier ){

    let sum = 0;
    let multiple = multiplier;
    while(multiple < top){
        sum += multiple;
        console.log("mul:", multiple);
        multiple += multiplier;
    }
    return sum
}

const a = sumofMultiplies(3);
const b = sumofMultiplies(5);

console.log(a,b, a+b)

// 2 exercise  
function fibonaci(maxValue){
    let twoPreev = 0;
    let prev = 1;
    let current = prev + twoPreev;
    let evenSum = 0;
    for(let i = current; current<maxValue; i++ ){
        evenSum += current % 2 === 0? current: 0;
        //console.log(current, evenSum);
        twoPreev = prev;
        prev = current;
        current = prev + twoPreev;
    }

    return evenSum;
}

const sum = fibonaci(4*Math.pow(10,6));
console.log(" fibo sum" , sum);


//3 exercise 
function largestPrimeFactors(maxNumber){

    let primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
    ];
    let primesArray = [];
    let localNumber = maxNumber;
    let latestPrime, largestPrime = 1;
    
    while(localNumber !== 1){

        for (let i = 2; i < 1000000; i++){
            console.log(localNumber, localNumber % i, i );
            if(localNumber % i === 0){
                console.log("here")
                primesArray.push(i);
                localNumber = localNumber / i;
                largestPrime = Math.max(i,latestPrime);
                latestPrime = i;
                break; 
            }
        }
        console.log("latest: ", latestPrime);
    }

    return largestPrime;
}

let prime = largestPrimeFactors(600851475143);
console.log("largest", prime);

// 4 exercise 

function isPalindrome(elem){
    const copyOfElem = elem.toString().slice(0);
    const is = copyOfElem.split('').reverse().join('') === elem.toString();
    console.log("is", is, copyOfElem.split().reverse().join(), elem);
    return is;
}

const palindromicSymptomes = (digitNumber) =>{

    const max = Math.pow(10,digitNumber)-1;
    const range = 10;
    let palindrome = 1;
    for(let i=max; i > max - range; i--){
        for(let j=i; j > 0; j--){
            const product = i*j;
            let is = isPalindrome(product);
            if (is){
                palindrome = Math.max(product, palindrome);
                console.log("pal", palindrome);
                break;
            }
        }
    }
    return palindrome;
}

const largest = palindromicSymptomes(3);
console.log("the largest pal is ", largest);


// problem 5 !unresolved

function divisible(upTo){
    
    // let found = false;
    // numberDivisible = 0;
    // for(let i = 1; !found; i = i + upTo){

    //     for(let j = 1; j <= upTo; j++){

    //         console.log("div in ",i, j, i % j );
    //         if(i % j !== 0){
    //             break;
    //         }
    //         if(j === upTo){
    //             found = true;
    //             numberDivisible = i;
    //         }
    //     }
    // }

    // for (let i = 2; i < upTo; i++){
    //     if(localNumber % i === 0){
    //         primesArray.push(i);
    //         localNumber = localNumber / i;
    //         largestPrime = Math.max(i,latestPrime);
    //         latestPrime = i;
    //         break; 
    //     }
    // }


    let numberDivisible = 1;

    for(let i = upTo; i > 0; i++){
        numberDivisible *= i;
    }

    return numberDivisible;
}

const minDiv = 0;//divisible(10);
console.log("min number divisible", minDiv);


//exercise 6

function squaresDiference(nthNumber){
//! man this is so dumb
    let sq = 0;
    let sum = 0;
    for(let i=1; i<=nthNumber ; i++){
        sq += Math.pow(i,2);
        sum += i;
    }

    return Math.pow(sum,2)-sq;

}

function realCoolSqueresDiference(nth){
    const nSum = (nth * (nth + 1))/2;
    const sqSum = (nth*(nth+1)*(2*nth+1))/6;

    return Math.pow(nSum,2) - sqSum;

}

const diferences = squaresDiference(100);
const superCoolDif = realCoolSqueresDiference(100);
console.log("diference is", diferences, superCoolDif);

//exercise 7

function primesUntil(nth){

    let primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
    ];
    
    primes = [2];
    for (let i = 3; primes.length < nth  ; i=i+2){
        
        for (let j = 0; j < primes.length ; j++){
            //console.log("doing ", i, j, primes)
            if(i % primes[j] === 0){
                break;
            }
            if(j === primes.length-1){
                primes.push(i);
                console.log("found a prime", i);
            }
           
        }
    }
    

    return primes[primes.length-1];

}
const longPrime = primesUntil(10001);
console.log("super prime long", longPrime);


//Excersice 8

const longNumber = `
73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450
`

function largestKindOfHash(adjacenDigits){

    const number = longNumber.replace(/[\n\r]/g,'');

    let valuesAtIthindex = [];

    let maxSoFar = 0;
    

    // for(let i=0; i< adjacenDigits; i++ ){
    //     currentDigits.push(i);
    //     firstProduct *=  parseInt(number[i]);
    // }
    // valuesAtIthindex.push(firstProduct);
    // console.log("hey the first one is", firstProduct);

    for(let i=0; i < number.length - adjacenDigits; i++ ){

        const part = number.slice(i,i+adjacenDigits).split('');
        
        valuesAtIthindex[i] = part.reduce((prod, dig)=>{
            return parseInt(prod) * parseInt(dig);
        },1);
        
        console.log("hey part", part, valuesAtIthindex[i]);
        maxSoFar = Math.max(maxSoFar, valuesAtIthindex[i]);
    }

    return maxSoFar;
}

const largestDigits = largestKindOfHash(13);
console.log('the largest prod', largestDigits);
