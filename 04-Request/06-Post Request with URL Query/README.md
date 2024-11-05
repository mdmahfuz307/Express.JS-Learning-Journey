## **Post Request With URL Query**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Mahfuz&lastName=Nirob(ai ta use kore post man e Post request debo)

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা `/` রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং **query parameters** থেকে ইউজারের নাম নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট এবং কুয়েরি প্যারামিটার থেকে ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন **query parameters** এর মাধ্যমে `firstName` এবং `lastName` এর মান পাঠানো যায়।
    - `req.query.firstName` দ্বারা **firstName** প্যারামিটারটি এবং `req.query.lastName` দ্বারা **lastName** প্যারামিটারটি অ্যাক্সেস করা হয়েছে।
- `res.send(firstName + " " + lastName)` এর মাধ্যমে `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### উদাহরণ রিকোয়েস্ট (Postman এ পাঠানো যাবে):

```
<http://localhost:8000?firstName=Mahfuz&lastName=Nirob>

```

এই URL টি দিয়ে **POST** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে **"Mahfuz Nirob"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে `firstName` এবং `lastName` কুয়েরি প্যারামিটার থেকে নাম নিয়ে এবং পূর্ণ নাম রেসপন্স হিসেবে পাঠায়।