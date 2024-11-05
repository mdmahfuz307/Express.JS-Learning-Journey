## Working With Request

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    res.send("This is simple get Request");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে এবং রেসপন্স হিসেবে একটি সাধারণ মেসেজ পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট:

```jsx
app.get("/", function(req, res) {
    res.send("This is simple get Request");
});

```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন সার্ভার `res.send()` মেথডটি ব্যবহার করে `"This is simple get Request"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠায়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `"This is simple get Request"` মেসেজটি রেসপন্স হিসেবে পাঠায়।