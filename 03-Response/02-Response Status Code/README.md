## **Response Status Code**

```jsx
let express = require('express');

app = express();

app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});

app.post("/two",function(req,res){
    res.end("This is Simple String Response");
});

app.get("/three",function(req,res){
    res.status(401).end("Unauth");  // End er vitor kicu dlew hbe na dlew hbe
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা বিভিন্ন **HTTP মেথড** (**GET** এবং **POST**) ব্যবহার করে বিভিন্ন রিকোয়েস্ট পরিচালনা করে। নতুন একটি রুট **HTTP Status Code** সহ ব্যবহার করা হয়েছে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো।

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### রুট এবং রেসপন্স:

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
    res.end("This is Simple String Response");
});
```

- এই অংশটি `/two` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- `/two` রুটে **POST** রিকোয়েস্ট পাঠানো হলে `res.end("This is Simple String Response");` এর মাধ্যমে `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে পাঠানো হয়।

### GET রিকোয়েস্ট (HTTP Status Code সহ):

```jsx
app.get("/three", function(req, res) {
    res.status(401).end("Unauth");  // End এর ভিতরে কিছু দিলেও বা না দিলেও হবে
});
```

- এই অংশটি `/three` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.status(401)` দ্বারা সার্ভার `401 Unauthorized` স্ট্যাটাস কোড সেট করে, যা ইঙ্গিত করে যে রিকোয়েস্টটি অনুমোদিত নয়।
- `res.end("Unauth")` অংশটি `"Unauth"` মেসেজটি রেসপন্স হিসেবে পাঠায়। **`res.end()`** এর ভিতরে কিছু থাকলেও বা না থাকলেও রেসপন্স শেষ হয়ে যাবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/one` এবং `/two` রুটে যথাক্রমে **GET** এবং **POST** রিকোয়েস্ট পরিচালনা করে। `/three` রুটে `401 Unauthorized` স্ট্যাটাস কোড সহ একটি **GET** রিকোয়েস্ট পরিচালনা করে, যেখানে রেসপন্সে "Unauth" পাঠানো হয়।