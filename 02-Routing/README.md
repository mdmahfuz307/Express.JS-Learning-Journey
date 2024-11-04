# **Routing**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){    // Browser just get request dte pare post,put ai gula pare na tai amra oi gula Postman dye check krbo.
    res.send("Home Page ");
});

app.post("/about",function(req,res){
    res.send("About Page");
});

app.put("/contact",function(req,res){
    res.send("Contact Page");
});

app.delete("/terms",function(req,res){
    res.send("Terms Page");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করে, যেখানে বিভিন্ন **HTTP মেথড** (`GET`, `POST`, `PUT`, `DELETE`) ব্যবহার করে বিভিন্ন রুট সেট করা হয়েছে। নিচে প্রতিটি অংশের বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরির জন্য প্রয়োজন।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### বিভিন্ন HTTP মেথড সহ রুট ডিফাইন করা:

### GET মেথড:

```jsx
app.get("/", function(req, res) {
    res.send("Home Page ");
});

```

- এই অংশটি `/` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন "Home Page" মেসেজটি ব্রাউজারে দেখানো হয়।

### POST মেথড:

```jsx
app.post("/about", function(req, res) {
    res.send("About Page");
});

```

- এই অংশটি `/about` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/about` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন "About Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### PUT মেথড:

```jsx
app.put("/contact", function(req, res) {
    res.send("Contact Page");
});

```

- এই অংশটি `/contact` রুটে একটি `PUT` রিকোয়েস্ট সেট করেছে।
- যখন `/contact` রুটে **PUT** রিকোয়েস্ট পাঠানো হয়, তখন "Contact Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### DELETE মেথড:

```jsx
app.delete("/terms", function(req, res) {
    res.send("Terms Page");
});

```

- এই অংশটি `/terms` রুটে একটি `DELETE` রিকোয়েস্ট সেট করেছে।
- যখন `/terms` রুটে **DELETE** রিকোয়েস্ট পাঠানো হয়, তখন "Terms Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### সার্ভার শুরু করা:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে "Server Run Success" মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করে যা **GET**, **POST**, **PUT**, এবং **DELETE** রিকোয়েস্ট হ্যান্ডল করতে পারে এবং নির্দিষ্ট রুটে নির্দিষ্ট মেসেজ রেসপন্স হিসেবে প্রদান করে।