## **JSON Response**

```jsx
let express = require('express');

app = express();

app.get("/three",function(req,res){

    let MyJSONArray = [
        {
            name : "Nirob",
            city : "Dhaka",
            Occupation : "Software Engr."
        },
        {
            name : "Mahfuz",
            city : "Rajshahi",
            Occupation : "Software Developer"
        },
        {
            name : "Miraz",
            city : "Rangpur",
            Occupation : "Project Manager"
        },

    ]
    res.json(MyJSONArray);
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **JSON ফরম্যাটে ডেটা** রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরির জন্য প্রয়োজন।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### JSON ডেটা সহ GET রিকোয়েস্ট:

```jsx
app.get("/three", function(req, res) {
    let MyJSONArray = [
        {
            name : "Nirob",
            city : "Dhaka",
            Occupation : "Software Engr."
        },
        {
            name : "Mahfuz",
            city : "Rajshahi",
            Occupation : "Software Developer"
        },
        {
            name : "Miraz",
            city : "Rangpur",
            Occupation : "Project Manager"
        }
    ];
    res.json(MyJSONArray);
});

```

- এই অংশটি `/three` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- এখানে `MyJSONArray` নামে একটি অ্যারে ডিফাইন করা হয়েছে, যাতে কয়েকটি অবজেক্ট রয়েছে। প্রতিটি অবজেক্টে তিনটি প্রপার্টি আছে: `name`, `city`, এবং `Occupation`।
- যখন ইউজার `/three` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `res.json(MyJSONArray);` এর মাধ্যমে **JSON ফরম্যাটে** `MyJSONArray` অ্যারের পুরো ডেটা রেসপন্স হিসেবে ক্লায়েন্টে পাঠানো হয়।
- **`res.json()`** মেথডটি ব্যবহার করার মাধ্যমে সার্ভার JSON ফরম্যাটে ডেটা রেসপন্স হিসেবে পাঠায়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/three` রুটে **GET** রিকোয়েস্ট আসলে **JSON ফরম্যাটে** ডেটা রেসপন্স হিসেবে পাঠায়, যেখানে তিনটি ব্যক্তির তথ্য রয়েছে, যেমন নাম, শহর, এবং পেশা।