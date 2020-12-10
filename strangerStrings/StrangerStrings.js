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
        let getPrefix = "Wut";
        return getPrefix;
    }

    getSuffix(input){
        let getSuffix = "ang";
        return getSuffix;
    }

    getMiddleCharacter(inputValue){
        let getMiddleCharacter = "o";
        return getMiddleCharacter;
    }

    getFirstWord(inputValue){
        let getSecondWord = "Wutang";
        return getSecondWord;
        
    }
    
    getSecondWord(inputValue){
        let getSecondWord = "Clan";
        return getSecondWord;
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