function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let charArray = S.split('');
    let lettersMap = new Map();
    let countersMap = new Map();
    for(let i = 0; i < charArray.length; i++){
        
        if (i === 0){
            lettersMap.set(charArray[i], 1);
            continue;
        }
        
        if(charArray[i] === charArray[i-1]){
            countLetterInMap = lettersMap.get(charArray[i]);
            lettersMap.set(charArray[i], ++countLetterInMap);
            console.log('charArray[i] === charArray[i-1]', countLetterInMap,charArray[i] ,charArray[i] === charArray[i-1]);
            continue;
        }
        
        // last char exist in position i + k
        let k = K;
        if(charArray[i-1] === charArray[i+k]){
            let posibleCount = 1;
            let jth = i+k+1;
            while (jth < charArray.length && charArray[jth] === charArray[jth-1]){
                posibleCount++;
                jth++;
            }
            // set the index and the val
            countersMap.set(posibleCount, i);
        }
        
        countLetterInMap = lettersMap.get(charArray[i]);

        keys = lettersMap.keys();

        lettersMap.set(charArray[i], 1);
    }
    
    
    console.log("leters", lettersMap );
    console.log("index", countersMap );
    
    
    
    
    
    
    
}