# **First Express Application**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    res.send("Hello Express JS");
})

app.listen(8000,function(){
    console.log("Server Run Success");
})
```

এই কোডটি একটি সহজ **Express.js** সার্ভার তৈরি করেছে, যা **Node.js** এ তৈরি করা হয়েছে। নিচে প্রতিটি লাইনের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে। `express` হচ্ছে Node.js এর জন্য একটি ওয়েব ফ্রেমওয়ার্ক, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

```jsx
app.get("/", function(req, res){
    res.send("Hello Express JS");
});

```

এই অংশটি একটি রুট (**Route**) সেট করেছে। যখন ইউজার ব্রাউজারে `/` (মূল) রুটে যায়, তখন এটি একটি `GET` রিকোয়েস্ট পাঠায়। এখানে, `/` রুটে `GET` রিকোয়েস্ট পেলে এই ফাংশনটি কার্যকর হয় এবং `res.send("Hello Express JS");` এর মাধ্যমে "Hello Express JS" টেক্সটটি ব্রাউজারে পাঠানো হয়।

```jsx
app.listen(8000, function(){
    console.log("Server Run Success");
});

```

এই লাইনটি সার্ভারকে **৮০০০** পোর্টে চালু করে। যখন সার্ভার সফলভাবে চালু হয়, তখন `console.log("Server Run Success");` অংশটি কনসোলে "Server Run Success" বার্তাটি প্রদর্শন করে।

### সংক্ষেপে

এই কোডটি **৮০০০** পোর্টে একটি Express.js সার্ভার চালু করে এবং রুট পেজে ("/") গেলে "Hello Express JS" বার্তা প্রদর্শন করে।