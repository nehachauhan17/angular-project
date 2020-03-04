import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform{
    
    transform(value: string, any?: number){
        if( !value) {
            return null;
        }
        let isSymbol= [" ", "-"];
        for(var i=0; i < isSymbol.length; i++){
            var value = this.splitTextOnSymbolBasis(isSymbol[i], value);
        }
        return value;
    }
    private splitTextOnSymbolBasis(symbol: string, words: string): string{
        let splitwords = words.split(symbol);
        for(var i=0; i < splitwords.length; i++){
            if(i>0 && this.isprepositions(splitwords[i])){
                splitwords[i] = splitwords[i].toLowerCase();
            }
            else{
                splitwords[i] = this.toTitleCase(splitwords[i]);
            }
        }
        return splitwords.join(symbol);
    }
    private isprepositions(word: string): Boolean{
        var prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }
    private toTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1);
    }
}