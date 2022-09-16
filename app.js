const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
let date = require(__dirname + "/date.js")

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items = ["Buy Food","Cook Food","Eat Food"];
var workItems = []

app.get("/",function(req,res){
    let day = date.getDate();
    res.render('list', {listTitle: day,newListItems: items});
})

app.post("/",function(req,res){
    // console.log(req.body)
    var item = req.body.newItem
    if(req.body.button === 'Work'){
        workItems.push(item);
        res.redirect('/work')
    }else{
        items.push(item);
        res.redirect("/");
    }



    //但是这样会报错，会说list.ejs中的newListItem没有define
    //原因是必须要在第一次res.render的时候就把所有的值传过去
    // res.render("list",{newListItem: item})

    //因此，我们为了修复这个bug，就需要redirect
    //表示当post request is triggered，redirect到“/”（home route）
    //也就是上面app.get里面的所有代码块
    res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", newListItems:workItems})
})
app.post("/work",function(req,res){
    let item = req.body.newItem
    workItems.push(item);
    res.redirect("/work")
})
app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})




    // var crtDay = today.getDay();
    // var day = "";
    // switch (crtDay) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    
    //     default:
    //         console.log("Error:current day is equal to" + crtDay);
    // }
   