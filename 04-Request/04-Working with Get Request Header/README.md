## **Working With Get Request Header**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " +lastName);

});

// Postman e Headers e giye fistName & lastName add korte hobe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে **হেডার থেকে ইউজারের নাম** নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট এবং হেডার থেকে ডেটা গ্রহণ করা:

```jsx
app.get("/", function(req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " + lastName);
});

```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন হেডার থেকে `firstName` এবং `lastName` এর মান সংগ্রহ করে।
    - `req.header('firstName')` দ্বারা **firstName** হেডারের মান এবং `req.header('lastName')` দ্বারা **lastName** হেডারের মান অ্যাক্সেস করা হয়েছে।
- `res.end(firstName + " " + lastName)` এর মাধ্যমে `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### Postman এ Headers সেট করা:

এই রিকোয়েস্ট পাঠানোর জন্য Postman-এ যেতে হবে এবং **Headers** সেকশনে `firstName` ও `lastName` হেডারগুলো এভাবে অ্যাড করতে হবে:

- **firstName:** Nirob
- **lastName:** Mahfuz

এরপর **GET** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে **"Nirob Mahfuz"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `firstName` এবং `lastName` হেডার থেকে তথ্য সংগ্রহ করে এবং পূর্ণ নাম রেসপন্স হিসেবে পাঠায়।