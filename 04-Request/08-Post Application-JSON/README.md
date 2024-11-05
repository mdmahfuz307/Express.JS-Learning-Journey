## **Post Application-JSON**

**Body  Parser npm Install**

```jsx
npm install body-parser
```

```jsx
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

app.post("/",function(req,res){
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);
    // JSON takhe specific kono data dhorte chaile [ let name = JSONData['name'];  ]
    res.send(JSONString);
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা JSON ডেটা গ্রহণ করে এবং সেই ডেটাকে আবার JSON স্ট্রিং আকারে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let bodyParser = require('body-parser');

```

এই লাইনে `express` এবং `body-parser` লাইব্রেরিগুলোকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে। `express` ওয়েব সার্ভার তৈরি করতে সাহায্য করে, এবং `body-parser` POST রিকোয়েস্টের বডিতে পাঠানো JSON ডেটা পার্স করার জন্য ব্যবহৃত হয়।

```jsx
let app = express();
app.use(bodyParser.json());

```

- `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।
- `app.use(bodyParser.json())` দ্বারা সার্ভারটি JSON ফরম্যাটে আসা ডেটা গ্রহণ করার জন্য কনফিগার করা হয়েছে। এটি রিকোয়েস্টের বডিতে JSON ডেটা থাকলে সেটিকে স্বয়ংক্রিয়ভাবে JavaScript অবজেক্টে রূপান্তরিত করে।

### POST রিকোয়েস্ট এবং JSON ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);
    // JSON takhe specific kono data dhorte chaile [ let name = JSONData['name'];  ]
    res.send(JSONString);
});

```

- এখানে `/` রুটে একটি **POST** রিকোয়েস্ট সেট করা হয়েছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন `req.body` থেকে JSON ডেটা সংগ্রহ করা হয় এবং সেটিকে `JSONData` নামে একটি ভেরিয়েবলে রাখা হয়।
- `JSON.stringify(JSONData)` এর মাধ্যমে `JSONData` অবজেক্টটিকে JSON স্ট্রিং এ রূপান্তর করা হয়েছে।
- `res.send(JSONString)` এর মাধ্যমে এই JSON স্ট্রিংটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে JSON ডেটা গ্রহণ করে এবং সেই ডেটাকে JSON স্ট্রিং আকারে রেসপন্স হিসেবে পাঠায়। JSON ডেটা গ্রহণের জন্য `body-parser` ব্যবহার করা হয়েছে।