## File Upload

**Multer npm Install**

```jsx
npm install --save multer
```

```jsx
let express = require('express');
let multer = require('multer');
let app = express();

let storage = multer.diskStorage({

    destination:function (req,file,callback) {
        callback(null,'./uploads');
    },
    filename:function (req,file,callback){
        callback(null,file.originalname);
    }
});

// PostMan r giye Body te jbo than Form-data select kore KEY er name dlm (myfile) KEY er type dbo File thaa VALUE te select Files e giye file upload dye debo.
let upload = multer({storage:storage}).single('myfile');
app.post("/",function(req,res){

    upload(req,res,function(error){
        if(error){
            return res.end("Error uploading file");
        }
        else{
        res.end("File is uploaded successfully!");
        }
    });
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** অ্যাপ্লিকেশন তৈরি করেছে যা **Multer** লাইব্রেরি ব্যবহার করে ফাইল আপলোড করার কাজ করে। নিচে কোডের প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let multer = require('multer');
let app = express();

```

- এখানে প্রথমে `express` এবং `multer` লাইব্রেরিগুলোকে ইনপোর্ট করা হয়েছে। `express` ওয়েব সার্ভার তৈরি করার জন্য ব্যবহৃত হয়, আর `multer` ফাইল আপলোড করার জন্য ব্যবহৃত হয়।
- `app` নামক একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।

### Storage Configuration

```jsx
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads'); // ফাইলটি কোথায় সেভ হবে তা নির্ধারণ করা
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // ফাইলের নাম কী হবে তা নির্ধারণ করা
    }
});

```

- `multer.diskStorage()` ফাংশনের মাধ্যমে একটি স্টোরেজ কনফিগারেশন তৈরি করা হয়েছে।
- `destination` ফাংশনটি নির্দেশ করে যে আপলোড করা ফাইলটি `uploads` ফোল্ডারে সংরক্ষিত হবে।
- `filename` ফাংশনটি ফাইলের নাম নির্ধারণ করে। এখানে `file.originalname` ব্যবহার করা হয়েছে, যা আপলোড করা ফাইলের আসল নাম ধরে রাখবে।

### File Upload Endpoint

```jsx
let upload = multer({ storage: storage }).single('myfile');
app.post("/", function(req, res) {
    upload(req, res, function(error) {
        if (error) {
            return res.end("Error uploading file");
        } else {
            res.end("File is uploaded successfully!");
        }
    });
});

```

- `upload` নামক একটি ভেরিয়েবল তৈরি করা হয়েছে, যা `multer` এর কনফিগারেশন ধারণ করছে। এখানে `single('myfile')` বলা হয়েছে, মানে একক ফাইল আপলোড করার জন্য যে ফিল্ডের নাম **myfile**।
- `app.post("/", function(req, res) {...})` মাধ্যমে `/` রুটে একটি **POST** রিকোয়েস্ট তৈরি করা হয়েছে।
- `upload(req, res, function(error) {...})` ফাংশনটি ফাইল আপলোডের জন্য ব্যবহৃত হচ্ছে।
    - যদি আপলোডের সময় কোনো ত্রুটি ঘটে, তাহলে `"Error uploading file"` বার্তা দেখানো হয়।
    - যদি আপলোড সফল হয়, তাহলে `"File is uploaded successfully!"` বার্তা দেখানো হয়।

### Postman ব্যবহার করে ফাইল আপলোড করা

- Postman এ গেলে **Body** ট্যাবে যেতে হবে এবং **form-data** নির্বাচন করতে হবে।
- এখানে একটি **key** তৈরি করতে হবে যার নাম হবে `myfile` এবং **type** নির্বাচন করতে হবে **File**।
- এরপর **Value** সেকশনে ফাইলটি আপলোড করতে হবে।

### সার্ভার শুরু করা

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর `"Server Run Success"` বার্তাটি কনসোলে প্রদর্শিত হবে, যা নির্দেশ করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা **Multer** লাইব্রেরি ব্যবহার করে ফাইল আপলোড করার জন্য ডিজাইন করা হয়েছে। ব্যবহারকারী Postman এর মাধ্যমে ফাইল আপলোড করে এবং সার্ভার সফলভাবে ফাইলটি গ্রহণ করে একটি বার্তা পাঠায়।