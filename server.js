const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();
const app3 = express();

// Parse the request body as JSON
app1.use(body.json());
app2.use(body.json());
app3.use(body.json());

const handler = serverNum => (req, res) => {
  console.log(`server ${serverNum}`, req.method, req.url, req.body);
  if (serverNum == 1) {
    let x = 1;
    let i;
    console.log("Server 1!");
    for (i = 0; i < 25*200*1000*1000; i++){
        x = x + 1
    }
    console.log(x)
    console.log("Server 1 is done!");
  } else if (serverNum == 2) {
      console.log("*")
      console.log("**")
      console.log("***")
      console.log("****")
      console.log("*****")
      console.log("*******")
      console.log("Server 2 is done!")
  } else if (serverNum == 3) {
    let randomNum;
    for (randomNum = 1; randomNum < 1000000; randomNum *= 2) {
      console.log(randomNum)
    }

    console.log("Server 3 is done!")
  }
  res.send(`Hello from server ${serverNum}!`);
};


// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));

app1.listen(3001);
app2.listen(3002);
app3.listen(3003);