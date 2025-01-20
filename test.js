const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("request received");
});
server.listen(3000,()=>{
    console.log("server started");
});

//콘솔 로그의 영어 내용을 한글로 변환하여
//다시 저장하여도 노드몬 패키지를 사용하여
//서버의 재실행 없이 변경사항이 반영됨