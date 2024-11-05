## **Response Set Cookies**

```jsx
let express = require('express');

app = express();

app.get("/Seven",function(req,res){
    res.cookie('name','Nirob');
    res.cookie('city','Gazipur');
    res.cookie('age','30 years old');
    res.end('cookie set success');
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **কুকি সেট** করে এবং রেসপন্স হিসেবে একটি মেসেজ পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### কুকি সেট সহ GET রিকোয়েস্ট:

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
- `res.end('cookie set success')` এর মাধ্যমে `"cookie set success"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে, যা ইঙ্গিত করে যে কুকি সফলভাবে সেট হয়েছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Seven` রুটে **GET** রিকোয়েস্ট আসলে তিনটি কুকি সেট করে এবং রেসপন্সে `"cookie set success"` মেসেজটি পাঠায়।