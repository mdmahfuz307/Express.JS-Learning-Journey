## **Get Request With URL Query**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Nirob&lastName=Mahfuz (ai ta use kore post man e get request debo)

app.listen(8000,function(){ 
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে **কুয়েরি প্যারামিটার থেকে ইউজারের নাম** নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট এবং কুয়েরি প্যারামিটার হ্যান্ডলিং:

```jsx
app.get("/", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
});

```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন **query parameters** এর মাধ্যমে `firstName` এবং `lastName` নামের দুইটি মান পাঠাতে পারে।
    - `req.query.firstName` দ্বারা **firstName** প্যারামিটারটি এবং `req.query.lastName` দ্বারা **lastName** প্যারামিটারটি অ্যাক্সেস করা হয়েছে।
- `res.end(firstName + " " + lastName)` এর মাধ্যমে ইউজারের `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### উদাহরণ রিকোয়েস্ট (Postman এ পাঠানো যাবে):

```
<http://localhost:8000?firstName=Nirob&lastName=Mahfuz>

```

এই URL এ গেলে বা Postman-এ এই **GET** রিকোয়েস্ট পাঠালে, রেসপন্স হিসেবে **"Nirob Mahfuz"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `firstName` এবং `lastName` কুয়েরি প্যারামিটার গ্রহণ করে এবং রেসপন্স হিসেবে পূর্ণ নাম পাঠায়।