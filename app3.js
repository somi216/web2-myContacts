const express = require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    console.log("app.js : /")
    res.status(200);
    res.send("Hello node!");
})

app.use(express.json());
app.use(express.urlencoded({extend:true}));
//이 미들웨어 함수는 HTTP POST 요청의 본문(body)에
//인코딩된 데이터를 해석하고, req.body 객체에 채워넣어주는 역할을 합니다.

//extended 속성의 값으로 true를 입력하게 되면 qs 모듈을 사용하여 쿼리스트링을 해석합니다.   qs 모듈은 node.js 내장 모듈이 아니므로 외부에서 다운 받아야 하는데 npm 을 통해 설치합니다.
//qs 모듈은 URL 쿼리 문자열을 자바스크립트 객체 형태로 변환하거나,
//객체를 URL 쿼리 문자열로 변환하는 기능을 하며,
//querystring 모듈과는 다르게 배열이나 객체를 다루는 데 있어서 보다 복잡한 구조를 지닌 객체나 배열의 경우에도 변환이 가능합니다.

app.use("/contacts",require("./routes/contactRoutes2"));

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})