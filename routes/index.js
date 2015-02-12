var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: '萌宠联盟', 
  	hotDates : [
  		{
  			"name":"哈士奇",
  			"descript":"西伯利亚雪撬犬（俄语：Сибирский хаски，Sibirskiy haski，英语：Siberian husky）常见别名哈士奇。西伯利亚雪撬犬体重介于25~55磅(16~27kg)之间，身高大约20~23.5英寸(51~60cm)，是一种中型犬。",
  			"imgSrc":"/images/001.jpg",
  			"hrefUrl":"http://baike.baidu.com/view/28807.htm?fromtitle=%E5%93%88%E5%A3%AB%E5%A5%87&fromid=123197&type=syn"
  		},
  		{
  			"name": "拉布拉多",
  			"descript": "拉布拉多猎犬是一种中大型犬类，个性温和、活泼，智商高，也对人很友善，是非常适合被选作导盲犬或其他工作犬的狗品种，跟哈士奇和金毛寻回猎犬并列三大无攻击性犬类。",
  			"imgSrc":"/images/002.jpg",
  			"hrefUrl":"http://baike.baidu.com/subview/23751/13870555.htm?fromtitle=%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A&fromid=4152961&type=syn"
  		},
  		{
  			"name": "俄罗斯蓝猫",
  			"descript": "俄罗斯蓝猫（Russian Blue），历史上曾被称做阿契安吉蓝猫，曾有过三种不同的名字。最初是阿契安吉蓝猫。直到20世纪40年代才有现在的名字。另外有段时间它则叫做马耳他猫。",
  			"imgSrc":"/images/003.jpg",
  			"hrefUrl":"http://baike.baidu.com/subview/34615/34615.htm"
  		}
  	],
  });
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


module.exports = router;
