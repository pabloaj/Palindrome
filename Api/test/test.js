const request = require('supertest')
const app = require('../index')
const expect = require('chai').expect;

describe("GET /apihost/iecho",function(){
    it("return if is  palindrome",async function() {
        const  response = await  request(app).get("/apihost/iecho")
      .query({text:'madam'});
       expect(response.status).to.eql(200);    
       expect(response.body.response.palindrome).to.eql(true)  

    })
    
    it("return if is not palindrome", async function(){
        const  response = await  request(app).get("/apihost/iecho")
      .query({text:'palindrome'});
       expect(response.status).to.eql(200);    
       expect(response.body.response.palindrome).to.eql(false)  

    })
    it("return error 400 error: no text ", async function(){
        const  response = await  request(app).get("/apihost/iecho")
       .query({text:''});
       expect(response.status).to.eql(400);    
    })
    it("return undefined error 400 error: no text ", async function(){
        const  response = await  request(app).get("/apihost/iecho")
        .query({tex :''});
       expect(response.status).to.eql(400);    
    })
})