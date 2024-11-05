## **Post Request With Header Properties**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){

    let userName = req.header('userName');
    let password = req.header('password');

    res.send("User Name:" + userName  + " Password:" +password);

});

// Postman e Headers e giye fistName & lastName add korte hobe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা `/` রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং **হেডার** থেকে `userName` ও `password` এর মান নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট এবং হেডার থেকে ডেটা গ্রহণ করা:

```jsx
app.post("/", function(req, res) {
    let userName = req.header('userName');
    let password = req.header('password');

    res.send("User Name:" + userName + " Password:" + password);
});
```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন হেডার থেকে `userName` এবং `password` এর মান সংগ্রহ করে।
    - `req.header('userName')` দ্বারা **userName** হেডারের মান এবং `req.header('password')` দ্বারা **password** হেডারের মান অ্যাক্সেস করা হয়েছে।
- `res.send("User Name:" + userName + " Password:" + password)` এই লাইনটি `userName` এবং `password` কে কনক্যাটিনেট করে রেসপন্স হিসেবে পাঠাচ্ছে।

### Postman এ Headers সেট করা:

এই রিকোয়েস্ট পাঠানোর জন্য **Postman** এ যেতে হবে এবং **Headers** সেকশনে `userName` ও `password` হেডারগুলো অ্যাড করতে হবে:

- **userName:** যেকোনো ব্যবহারকারীর নাম
- **password:** যেকোনো পাসওয়ার্ড

এরপর **POST** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে `"User Name: [userName] Password: [password]"` রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে হেডার থেকে `userName` এবং `password` সংগ্রহ করে এবং এই তথ্যগুলো রেসপন্স হিসেবে পাঠায়।