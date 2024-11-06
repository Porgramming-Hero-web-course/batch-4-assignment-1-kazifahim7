{
    

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

    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))










}