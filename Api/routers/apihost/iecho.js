const express = require('express')
const router = express.Router();
const checkString = require('../../utils/functions/checkString')
router.get('/', function(req,res){
    const {text}  = req.query
    
try{
    if (typeof(text)==="undefined" || text.length  === 0){
       return res.status(400).json({error: "no text"})
    }   
    
        const response = checkString(text)
     return   res.status(200).json({response})
        

    
}
catch(e ){
   return res.send(e)
}
});
module.exports = router;