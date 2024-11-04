## **Simple String Response**

```jsx
let express = require('express');

app = express();

// Simple String Response

// res.send()  --> response er body k nirdes kore
// res.end()   --> response er ses e ki hocche seta nirdes kore

app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});

app.post("/two",function(req,res){
    res.end("This is Simple String Response");  // End dlew hbe send dlew hbw
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা বিভিন্ন **HTTP মেথড** (**GET** এবং **POST**) ব্যবহার করে রিকোয়েস্ট পরিচালনা করতে পারে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো।

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

### রুট এবং রেসপন্স সম্পর্কে টিপ্পনী:

```jsx
// res.send()  --> response এর body কী হবে তা নির্দেশ করে
// res.end()   --> response এর শেষটা নির্দেশ করে

```

- **`res.send()`**: এটি সম্পূর্ণ রেসপন্সটি ক্লায়েন্টকে পাঠায়, যা রেসপন্সের `body` এর কনটেন্ট হিসেবে কাজ করে।
- **`res.end()`**: এটি শুধু রেসপন্স শেষ করে, কিন্তু সাধারণত কোনো অতিরিক্ত প্রসেসিং না করে কেবল রেসপন্স বন্ধ করে দেয়।

### GET রিকোয়েস্ট:

```jsx
app.get("/one", function(req, res) {
    res.send("This is Simple String Response");
});

```

- এই অংশটি `/one` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/one` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে ব্রাউজারে পাঠানো হয়।

### POST রিকোয়েস্ট:

```jsx
app.post("/two", function(req, res) {
    res.end("This is Simple String Response");  // End দিলেও হবে, send দিলেও হবে
});

```

- এই অংশটি `/two` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- `/two` রুটে **POST** রিকোয়েস্ট পাঠানো হলে `res.end("This is Simple String Response");` এর মাধ্যমে `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে পাঠানো হয়।
- `res.send()` এবং `res.end()` দুটোই ব্যবহার করা যাবে, তবে সাধারণত `res.send()` পুরো রেসপন্সটি পাঠাতে ব্যবহৃত হয়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/one` রুটে **GET** এবং `/two` রুটে **POST** রিকোয়েস্ট পরিচালনা করে।