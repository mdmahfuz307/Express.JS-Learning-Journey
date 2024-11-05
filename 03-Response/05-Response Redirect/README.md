## **Response Redirect**

```jsx
let express = require('express');

app = express();

app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8000/India");
});

app.get("/India",function(req,res){
    res.send("This is india");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে রিকোয়েস্ট আসলে রিডাইরেক্ট করে অন্য রুটে নিয়ে যায় এবং সেখানে একটি রেসপন্স পাঠায়। এখানে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### Redirect সহ GET রিকোয়েস্ট:

```jsx
app.get("/Bangladesh", function(req, res) {
    res.redirect("<http://localhost:8000/India>");
});

```

- এই অংশটি `/Bangladesh` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/Bangladesh` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `res.redirect()` মেথডটি ব্যবহার করে সার্ভার ইউজারকে `http://localhost:8000/India` রুটে রিডাইরেক্ট করে দেয়।
- অর্থাৎ, `/Bangladesh` রুটে রিকোয়েস্ট পাঠালে ইউজার সরাসরি `/India` রুটে চলে যাবে।

### রেসপন্স সহ GET রিকোয়েস্ট:

```jsx
app.get("/India", function(req, res) {
    res.send("This is india");
});

```

- এই অংশটি `/India` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/India` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `"This is india"` টেক্সটটি রেসপন্স হিসেবে ব্রাউজারে দেখানো হয়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Bangladesh` রুটে রিকোয়েস্ট আসলে `/India` রুটে রিডাইরেক্ট করে এবং `/India` রুটে `"This is india"` মেসেজটি রেসপন্স হিসেবে পাঠায়।