## **Simple Post Request**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){
    res.send("This is Simple post request");
});

// Browser e giye hit krle hbe na cz Browser e kono Post request jai na tai PostMan use krte hbe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং একটি সাধারণ রেসপন্স পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট হ্যান্ডলিং:

```jsx
app.post("/", function(req, res) {
    res.send("This is Simple post request");
});

```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন সার্ভার `res.send()` মেথডটি ব্যবহার করে `"This is Simple post request"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠায়।

### ব্রাউজারে POST রিকোয়েস্ট করা যাবে না:

এই লাইনটিতে কমেন্টে উল্লেখ করা হয়েছে যে, সরাসরি ব্রাউজারে গিয়ে এই রিকোয়েস্ট হিট করলে কাজ করবে না, কারণ ব্রাউজার থেকে সরাসরি **POST** রিকোয়েস্ট পাঠানো যায় না। এজন্য **Postman** বা অন্য কোনো API টেস্টিং টুল ব্যবহার করতে হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে `"This is Simple post request"` মেসেজটি রেসপন্স হিসেবে পাঠায়। তবে, এই রিকোয়েস্টটি ব্রাউজার থেকে সরাসরি পাঠানো যাবে না, এজন্য **Postman** ব্যবহার করতে হবে।