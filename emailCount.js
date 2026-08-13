const analyzeEmailDomains =  (text)=> {

    if(typeof text !== 'string'){
        return "Invalid"
    }

   const words = text.split(" ");
   let emailCount = 0;
   let longestDomain = "";
   for(let word of words){
    if(word.includes("@")){
        emailCount++
        const parts = word.split("@");
        const domain = parts[1];
        if(domain.length > longestDomain.length){
            longestDomain = domain
        }
    }
   }
   
    return {emailCount,longestDomain}
}

// const t = "Contact support@gmail.com admin@yahoo.com info@programminghero.com"
const t = [10,20]
const result = analyzeEmailDomains(t);
console.log(result);


// output of the code

// { emailCount: 3, longestDomain: 'programminghero.com' }