## ১. অ্যাপ্লিকেশন স্তর (Application Level Middleware)

অ্যাপ্লিকেশন স্তরে মিডলওয়্যারগুলি অ্যাপ্লিকেশন শুরু হওয়ার সময় ব্যবহার করা হয় এবং এটি পুরো অ্যাপ্লিকেশন জুড়ে প্রযোজ্য হয়। অর্থাৎ, যখনই কোন রিকোয়েস্ট করা হবে, তখন এই মিডলওয়্যারগুলি কার্যকর হবে।

### উদাহরণ:

```jsx
let express = require('express');
let app = express();

app.use(function(req,res,next){

    console.log("I am application level middleware");
    next();
})

app.get('/', function(req, res) {
    res.send("This is Home page");
});

app.get('/contact', function(req, res) {
    res.send("This is contact page");
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
});
```

এই কোডটি Express.js ব্যবহার করে একটি সার্ভার তৈরি করেছে এবং এতে একটি **অ্যাপ্লিকেশন স্তরের মিডলওয়্যার** যুক্ত করা হয়েছে। এটি বিস্তারিতভাবে ব্যাখ্যা করা হল:

```jsx
let express = require('express');
let app = express();

```

এখানে Express.js লাইব্রেরিটি ইমপোর্ট করা হয়েছে এবং `app` নামের একটি অ্যাপ্লিকেশন অবজেক্ট তৈরি করা হয়েছে, যা সার্ভারের মূল অবজেক্ট হিসেবে কাজ করবে।

### অ্যাপ্লিকেশন স্তরের মিডলওয়্যার

```jsx
app.use(function(req,res,next){
    console.log("I am application level middleware");
    next();
})

```

এই অংশটি একটি **অ্যাপ্লিকেশন স্তরের মিডলওয়্যার** যোগ করেছে। `app.use()` ব্যবহার করে এই মিডলওয়্যারটি পুরো অ্যাপ্লিকেশন জুড়ে কার্যকর হবে, যা প্রতিটি রিকোয়েস্টের আগে চালানো হবে।

- `console.log("I am application level middleware");`: যখনই কোনো রিকোয়েস্ট আসবে, এই মেসেজটি কনসোলে প্রদর্শিত হবে।
- `next();`: `next()` ফাংশনটি পরবর্তী রাউটে বা মিডলওয়্যারে যেতে নির্দেশ করে। এটি না থাকলে রিকোয়েস্ট এখানে আটকে যাবে এবং পরবর্তী রাউটে যেতে পারবে না।

### রুটসমূহ (Routes)

```jsx
app.get('/', function(req, res) {
    res.send("This is Home page");
});

```

এই অংশে `"/"` রুটটি ডিফাইন করা হয়েছে। যখনই কেউ এই রুটে রিকোয়েস্ট করবে, তাকে `"This is Home page"` মেসেজটি দেখানো হবে।

```jsx
app.get('/contact', function(req, res) {
    res.send("This is contact page");
});

```

এখানে `"/contact"` রুটটি ডিফাইন করা হয়েছে। যখন কেউ এই রুটে রিকোয়েস্ট করবে, তাকে `"This is contact page"` মেসেজটি পাঠানো হবে।

### সার্ভার চালু করা

```jsx
app.listen(8000, function() {
    console.log('Server running on port 8000');
})

```

এই অংশটি সার্ভারটি ৮০০০ পোর্টে চালু করে এবং কনসোলে `"Server running on port 8000"` মেসেজটি দেখায়। এই মেসেজটি নিশ্চিত করে যে সার্ভারটি সফলভাবে চালু হয়েছে।

### কোডের কাজের প্রক্রিয়া

- যখনই কোনো রিকোয়েস্ট আসবে, প্রথমে মিডলওয়্যার `console.log("I am application level middleware");` চালাবে এবং কনসোলে মেসেজটি দেখাবে।
- তারপর `next()` ফাংশনের মাধ্যমে রিকোয়েস্টটি রাউটে পাঠানো হবে, যেখানে `"/"` বা `"/contact"` রুট অনুযায়ী রেসপন্স পাঠানো হবে।

### ব্যবহারের সুবিধা:

- প্রতিটি রিকোয়েস্টের জন্য মিডলওয়্যারটি স্বয়ংক্রিয়ভাবে কার্যকর হয়।
- সাধারণ কনফিগারেশন বা কমন কাজগুলো সেন্ট্রালাইজড ভাবে করা যায়।