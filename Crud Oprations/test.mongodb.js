use('crud');

// db.createCollection('Courses');

// db.Courses.insertOne({
//   Name: "SIgma Web dev",
//   Price: 1,
//   tutor: "Harry Bhai"
// })

// db.Courses.insertMany([
//   {
//     "Name": "Sigma Web Dev",
//     "Price": 1,
//     "Tutor": "Harry Bhai"
//   },
//   {
//     "Name": "JavaScript Mastery",
//     "Price": 499,
//     "Tutor": "CodeWithHarry"
//   },
//   {
//     "Name": "React Complete Guide",
//     "Price": 999,
//     "Tutor": "Hitesh Choudhary"
//   },
//   {
//     "Name": "Node.js Bootcamp",
//     "Price": 799,
//     "Tutor": "Piyush Garg"
//   },
//   {
//     "Name": "MongoDB Essentials",
//     "Price": 599,
//     "Tutor": "Harry Bhai"
//   },
//   {
//     "Name": "Express.js Crash Course",
//     "Price": 699,
//     "Tutor": "Akshay Saini"
//   },
//   {
//     "Name": "CSS Flexbox & Grid",
//     "Price": 299,
//     "Tutor": "Kevin Powell"
//   },
//   {
//     "Name": "HTML Fundamentals",
//     "Price": 199,
//     "Tutor": "Apna College"
//   },
//   {
//     "Name": "MERN Stack Complete",
//     "Price": 1499,
//     "Tutor": "Hitesh Choudhary"
//   },
//   {
//     "Name": "DSA in C++",
//     "Price": 899,
//     "Tutor": "Love Babbar"
//   }
// ])

db.Courses.updateOne({Price: 1}, {$set:{Price: 9999}});

let a = db.Courses.find({Price: 9999});
// console.log(a.toArray());
console.log(a.count());

db.Courses.deleteOne({Price: 1});