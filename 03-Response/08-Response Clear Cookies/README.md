## **Response Clear Cookies**

```jsx
let express = require('express');

app = express();

app.get("/Seven",function(req,res){
    res.cookie('name','Nirob');
    res.cookie('city','Gazipur');
    res.cookie('age','30 years old');
    res.end('cookie set success');
});

app.get("/Eight",function(req,res){
    res.clearCookie('Nirob');
    res.clearCookie('age');
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে কুকি সেট করে এবং অন্য একটি রুটে কুকি ক্লিয়ার করে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### কুকি সেট করার জন্য GET রিকোয়েস্ট:

```jsx
app.get("/Seven", function(req, res) {
    res.cookie('name', 'Nirob');
    res.cookie('city', 'Gazipur');
    res.cookie('age', '30 years old');
    res.end('cookie set success');
});
```

- এই অংশটি `/Seven` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.cookie()` মেথডটি ব্যবহার করে তিনটি কুকি তৈরি করা হয়েছে এবং ক্লায়েন্টের ব্রাউজারে পাঠানো হয়েছে:
    - `name` কুকির মান `"Nirob"`
    - `city` কুকির মান `"Gazipur"`
    - `age` কুকির মান `"30 years old"`
- `res.end('cookie set success')` এর মাধ্যমে `"cookie set success"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে, যা নির্দেশ করে যে কুকিগুলো সফলভাবে সেট হয়েছে।

### কুকি ক্লিয়ার করার জন্য GET রিকোয়েস্ট:

```jsx
app.get("/Eight", function(req, res) {
    res.clearCookie('Nirob');
    res.clearCookie('age');
});
```

- এই অংশটি `/Eight` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.clearCookie()` মেথডটি ব্যবহার করে নির্দিষ্ট কুকি মুছে ফেলা হয়েছে:
    - `Nirob` কুকি এবং `age` কুকি মুছে ফেলা হয়েছে।
- তবে এখানে `res.end()` বা `res.send()` এর মতো কোনো রেসপন্স মেথড নেই, তাই রিকোয়েস্ট পাঠানোর পর কোনো মেসেজ প্রদর্শন করবে না।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Seven` রুটে **GET** রিকোয়েস্ট আসলে তিনটি কুকি সেট করে এবং `/Eight` রুটে **GET** রিকোয়েস্ট পাঠালে `Nirob` ও `age` কুকি মুছে ফেলে।