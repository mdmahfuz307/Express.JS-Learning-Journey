## **Response Header**

```jsx
let express = require('express');

app = express();

app.get("/six",function(req,res){
    
    res.append("name","Mahfuz Nirob");
    res.append("city","Dhaka");
    res.append("age","24 Years Old");

    res.send();
    res.status(201).end("Hello World");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে **হেডার অ্যাপেন্ড করে** এবং একটি **স্ট্যাটাস কোড সহ রেসপন্স** প্রদান করে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### হেডার অ্যাপেন্ড এবং স্ট্যাটাস কোড সহ GET রিকোয়েস্ট:

```jsx
app.get("/six", function(req, res) {
    res.append("name", "Mahfuz Nirob");
    res.append("city", "Dhaka");
    res.append("age", "24 Years Old");

    res.send();
    res.status(201).end("Hello World");
});

```

- এই অংশটি `/six` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.append()` মেথডটি ব্যবহার করে রেসপন্সের হেডারে অতিরিক্ত তথ্য যোগ করা হয়েছে।
    - `"name": "Mahfuz Nirob"`, `"city": "Dhaka"`, এবং `"age": "24 Years Old"` নামে তিনটি হেডার রেসপন্সের সাথে যোগ করা হয়েছে।
- `res.send()` এর মাধ্যমে রেসপন্স প্রেরণ করা হচ্ছে।
- `res.status(201)` দ্বারা রেসপন্সের জন্য **201 Created** স্ট্যাটাস কোড সেট করা হয়েছে, যা ইঙ্গিত করে যে রিকোয়েস্ট সফল হয়েছে।
- `res.end("Hello World")` এর মাধ্যমে `"Hello World"` টেক্সট সহ রেসপন্সটি ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/six` রুটে **GET** রিকোয়েস্ট আসলে হেডারে অতিরিক্ত কিছু তথ্য যোগ করে, **201** স্ট্যাটাস কোড সহ `"Hello World"` রেসপন্স হিসেবে পাঠায়।