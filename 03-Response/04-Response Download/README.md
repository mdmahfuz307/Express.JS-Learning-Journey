## **Response Download**

```jsx
let express = require('express');

app = express();

// Response Download
app.get("/five",function(req,res){
    res.download("./uploads/nirob.jpg"); // Browser e sora sori download krte bolbe
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা একটি নির্দিষ্ট রুটে ফাইল ডাউনলোড করার রেসপন্স প্রদান করে। এখানে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

### ফাইল ডাউনলোড রেসপন্স সহ GET রিকোয়েস্ট:

```jsx
app.get("/five", function(req, res) {
    res.download("./uploads/nirob.jpg"); // ব্রাউজারে সরাসরি ডাউনলোড শুরু হবে
});

```

- এই অংশটি `/five` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.download()` মেথডটি ব্যবহার করা হয়েছে, যা একটি নির্দিষ্ট ফাইল ক্লায়েন্টের কাছে ডাউনলোড করার জন্য পাঠায়।
- এখানে `"./uploads/nirob.jpg"` ফাইলটি ডাউনলোডের জন্য নির্দিষ্ট করা হয়েছে, যা সার্ভারের `uploads` ফোল্ডারের মধ্যে আছে।
- যখন ইউজার `/five` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন ব্রাউজার সরাসরি `"nirob.jpg"` ফাইলটি ডাউনলোড করতে শুরু করবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/five` রুটে **GET** রিকোয়েস্ট পাঠালে `uploads` ফোল্ডারে থাকা `"nirob.jpg"` ফাইলটি ডাউনলোড হিসেবে ক্লায়েন্টের ব্রাউজারে সরাসরি পাঠায়।