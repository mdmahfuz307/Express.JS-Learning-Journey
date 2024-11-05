## **Working With Multipart Form Data**

**Multer npm Install**

```jsx
npm install --save multer
```

```jsx
let express = require('express');
let multer = require('multer');
let multer = multer();

let app = express();
// for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

app.post("/",function(req,res){

    let ReqBody = req.body;

    res.send(JSON.stringify(ReqBody));

});

// Postman e giye Body te jabo than form-data select kore key and value add korbo

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা **multipart/form-data** ফরম্যাটে পাঠানো ডেটা গ্রহণ করে। এটি **Postman** এর মাধ্যমে ফাইল আপলোড এবং ফরম্যাটেড ডেটা প্রেরণ করার জন্য উপযোগী। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let multer = require('multer');
let multer = multer();

```

- প্রথমে `express` এবং `multer` লাইব্রেরিগুলোকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে।
- `multer` লাইব্রেরিটি ফাইল আপলোডের জন্য ব্যবহৃত হয় এবং এখানে `multer()` ফাংশনটি ব্যবহার করে একটি **multer** ইনস্ট্যান্স তৈরি করা হয়েছে।

```jsx
let app = express();
// for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

```

- `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।
- `app.use(multer.array())` ব্যবহার করে **multipart/form-data** ফরম্যাটে আসা ডেটা পার্স করার জন্য মুলটারকে কনফিগার করা হয়েছে। এটি ফর্মের মাধ্যমে একাধিক ফাইল বা ডেটা গ্রহণের অনুমতি দেয়।
- `app.use(express.static('public'))` লাইনটি `public` নামক একটি ফোল্ডারকে স্ট্যাটিক ফাইল সার্ভ করার জন্য নির্ধারণ করেছে। এই ফোল্ডারে থাকা ফাইলগুলো সরাসরি ক্লায়েন্টের কাছে প্রদর্শন করা যাবে।

### POST রিকোয়েস্ট এবং ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let ReqBody = req.body;

    res.send(JSON.stringify(ReqBody));
});

```

- এখানে `/` রুটে একটি **POST** রিকোয়েস্ট সেট করা হয়েছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন `req.body` থেকে ডেটা সংগ্রহ করা হয় এবং সেটিকে `ReqBody` নামে একটি ভেরিয়েবলে রাখা হয়।
- `res.send(JSON.stringify(ReqBody))` এর মাধ্যমে `ReqBody` অবজেক্টটিকে JSON স্ট্রিং এ রূপান্তর করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### Postman ব্যবহার করে ডেটা পাঠানো:

- Postman এ **Body** সেকশনে গিয়ে **form-data** সিলেক্ট করতে হবে।
- এখানে **key** এবং **value** জোড়া হিসেবে ডেটা প্রদান করতে হবে, যা সার্ভারে পাঠানো হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা **multipart/form-data** ফরম্যাটে আসা POST রিকোয়েস্ট গ্রহণ করে এবং সেই ডেটাকে JSON স্ট্রিং হিসেবে রেসপন্স দেয়। **Multer** লাইব্রেরিটি এখানে ফাইল আপলোডের জন্য ব্যবহৃত হয়েছে এবং **Postman** দিয়ে ডেটা পাঠানোর জন্য ব্যবস্থা করা হয়েছে।