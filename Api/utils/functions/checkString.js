function checkString(value){
   const arrayString  = value.split('');
   const reverseString = arrayString.reverse();
   const convertReverse =  reverseString.join('');
   if (value === convertReverse){
       return{
            "palindrome": true,
            "text": convertReverse
       }
   }
   else{
       return {
        palindrome : false,
           text:convertReverse
       }
   }
    
    }
module.exports = checkString;