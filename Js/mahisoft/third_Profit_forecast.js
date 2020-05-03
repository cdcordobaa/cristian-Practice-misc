
function solution(inputArr) {
    console.log(inputArr);
    


    let inputCopy = [...inputArr].sort();
    let max = inputCopy[inputCopy.length-1];
    let firstMaxIndex = inputCopy.indexOf(max);

    let valuesSubArray = inputArr.slice(0,firstMaxIndex);
    let min = valuesSubArray.sort()[0];
    let minIndex = valuesSubArray.indexOf(min);
    

    console.log(max, min, firstMaxIndex)
    return max - min;
}

let  test1 = '1 2 1 5 2 6 3';
a = solution(test1.split(' '));

console.log("solution", a)


function solution1(s) {

    let compress = '';
    
    let strArr = s.split('');

    for(let i = 0; i < strArr.length; i++){
        let times = 0
        let continueIndex = 0;
        for(let j = i; strArr[i] === strArr[j]; j++){
            times ++;
            continueIndex = j;
        }
        compress = `${compress}${times > 1? `${times}${strArr[i]}`:  strArr[i]}`;
        i = continueIndex;
        // console.log(" compr", compress);
    }

    return compress;
}

test3 = 'ABBBBCFLL';

comp = solution1(test3);

console.log("string comp", comp);
