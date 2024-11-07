{
    //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    // in this function i use regex  for remove non word character from string 

    const countWordOccurrences=(sentence:string,word:string):number=>{
        let count : number =0;
        const splitSentence: string[] = sentence.toLowerCase().replace(/[^\w\s]/g, '').split(' ')
        const FinalWord :string = word.toLowerCase()

        splitSentence.forEach((text :string)=>{
            if(text.includes(FinalWord)){
                count++ ;
            }
        })

        return count
    }

    // test 

    const sentenceText: string = "TypeScript is great. I love TypeScript!";
    const word : string = "typescript"

    console.log(countWordOccurrences(sentenceText,word))










}