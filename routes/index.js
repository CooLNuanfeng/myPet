var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','animal');

var animalSchema = require('../dataModel/animalModel').animalSchema;

/*
  需要填充的数据信息
  name : String,
  callName : String,
  type : String,
  description : String,
  title : String,
  bannerSrc : String,
  text : String,
  imgSrc : String,
  hrefUrl : String
*/

db.on('error',console.error.bind(console,'链接错误'));

var animalModel = null;

db.once('open',function(){
	
  /*
    var animalModel = db.model('Animal',animalSchema);
    // 自定义生成的数据信息示例
  	var animal = new animalModel({
      'name':'俄罗斯蓝猫',
      'callName':'咪咪',
      'type':'猫类',
      "description":"俄罗斯蓝猫（Russian Blue），历史上曾被称做阿契安吉蓝猫，曾有过三种不同的名字。最初是阿契安吉蓝猫。直到20世纪40年代才有现在的名字。另外有段时间它则叫做马耳他猫。",
      "bannerSrc":"/images/banner3.jpg",
      "text" : "俄罗斯蓝猫（Russian Blue），历史上曾被称做阿契安吉蓝猫",
      "imgSrc":"/images/003.jpg",
      "hrefUrl":"http://baike.baidu.com/subview/34615/34615.htm"
    });

  	//animal.sayName();
  	//animal.save();
    
    // new animalModel 的对象可以使用 methods 的扩展方法
  	animal.findByName('忠犬',function(err,datas){
  		//animals 数据集合
  		console.log(datas,'findByName');
  	});
    
    // db.model('Animal',animalSchema) 可以直接使用 statics 的扩展方法
  	animalModel.findByType('猫类',function(err,datas){
  		console.log(datas,'findByType');
  	});
  	animalModel.findAnimal(function(err,datas){
  		//animals 数据集合
  		console.log(datas,'findAnimal');
  	});

  */

  animalModel = db.model('Animal',animalSchema);

});


/* GET home page. */
router.get('/', function(req, res, next) {

  animalModel.findAnimal(function(err,datas){
      res.render('index', {
        title: '萌宠联盟',
        focusImg : datas,
        hotDates : datas
      });
  });

  /*
  //初始自定义的数据
  res.render('index', { 
  	title: '萌宠联盟',
  	focusImg : [
  		{
  			"bannerSrc":"/images/banner1.jpg",
  			"hrefUrl" : "http://baike.baidu.com/view/28807.htm?fromtitle=%E5%93%88%E5%A3%AB%E5%A5%87&fromid=123197&type=syn",
  			"name" : "哈士奇",
  			"text" : "二货萌宠,宠物界的表情帝"
  		},
  		{
  			"bannerSrc":"/images/banner2.jpg",
  			"hrefUrl" : "http://baike.baidu.com/subview/23751/13870555.htm?fromtitle=%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A&fromid=4152961&type=syn",
  			"name" : "拉布拉多",
  			"text" : "中大型犬类，个性温和、活泼，智商高，也对人很友善"
  		},
  		{
  			"bannerSrc":"/images/banner3.jpg",
  			"hrefUrl" : "http://baike.baidu.com/subview/34615/34615.htm",
  			"name" : "俄罗斯蓝猫",
  			"text" : "俄罗斯蓝猫（Russian Blue），历史上曾被称做阿契安吉蓝猫"
  		}
  	],
  	hotDates : [
  		{
  			"name":"哈士奇",
  			"description":"西伯利亚雪撬犬（俄语：Сибирский хаски，Sibirskiy haski，英语：Siberian husky）常见别名哈士奇。西伯利亚雪撬犬体重介于25~55磅(16~27kg)之间，身高大约20~23.5英寸(51~60cm)，是一种中型犬。",
  			"imgSrc":"/images/001.jpg",
  			"hrefUrl":"http://baike.baidu.com/view/28807.htm?fromtitle=%E5%93%88%E5%A3%AB%E5%A5%87&fromid=123197&type=syn"
  		},
  		{
  			"name": "拉布拉多",
  			"description": "拉布拉多猎犬是一种中大型犬类，个性温和、活泼，智商高，也对人很友善，是非常适合被选作导盲犬或其他工作犬的狗品种，跟哈士奇和金毛寻回猎犬并列三大无攻击性犬类。",
  			"imgSrc":"/images/002.jpg",
  			"hrefUrl":"http://baike.baidu.com/subview/23751/13870555.htm?fromtitle=%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A&fromid=4152961&type=syn"
  		},
  		{
  			"name": "俄罗斯蓝猫",
  			"description": "俄罗斯蓝猫（Russian Blue），历史上曾被称做阿契安吉蓝猫，曾有过三种不同的名字。最初是阿契安吉蓝猫。直到20世纪40年代才有现在的名字。另外有段时间它则叫做马耳他猫。",
  			"imgSrc":"/images/003.jpg",
  			"hrefUrl":"http://baike.baidu.com/subview/34615/34615.htm"
  		}
  	]
  });
  */
});

router.get('/dogs', function(req, res, next) {
  res.render('dogs', { title: '这里是汪星人的底盘' });
});

router.get('/cats', function(req, res, next) {
  res.render('cats', { title: '这里是喵星人的底盘' });
});

router.get('/turtle', function(req, res, next) {
  res.render('turtle', { title: '这里是乌龟的底盘' });
});

router.get('/fists', function(req, res, next) {
  res.render('fists', { title: '这里是鱼的底盘' });
});

router.get('/rodents', function(req, res, next) {
  res.render('rodents', { title: '这里是鼠类的底盘' });
});


router.get('/others', function(req, res, next) {
  res.render('others', { title: '这里是其他宠物的底盘' });
});


router.get('/registered', function(req, res, next) {
  res.render('registered', { title: '注册页面' });
});


router.get('/use/index', function(req, res, next) {
  res.render('../admin/adminIndex', { title: '后台录入页' });
});


module.exports = router;
