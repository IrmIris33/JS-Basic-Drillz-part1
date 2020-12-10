class StrangerStrings {

    getHelloWorld(){
        let str = "Hello World";
        return str;
    }

    concatenation(firstSegment, secondSegment){
        let concat = firstSegment + secondSegment;
        return concat;
    }

    getPrefix(input){
        let pref = input.substring(0,3);
        return pref;
    }

    getSuffix(input){
        let end = input.length;
        let start = end-3;
        let getSuffix = input.substring(start,end);
        return getSuffix;
    }

    getMiddleCharacter(inputValue){
        let getMid = inputValue.split("");
        return getMid[4];
    }

    getFirstWord(inputValue){
        let firstWord = inputValue.slice(0, 6);
        return firstWord;
        
    }
    
    getSecondWord(inputValue){
        let getSec = inputValue.slice(7);
        return getSec;
    
    }
    
    reverse(inputValue) {
        let reverse = "";
        for (let i = inputValue.length -1; i >= 0; i--){
            reverse += inputValue[i];
            }
        return reverse;
    }     
}
module.exports = StrangerStrings;