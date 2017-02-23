var express = require('express');
//var router = express.Router();
var client = require('cheerio-httpcli');

var eng_k_arr = [];
var kor_e_arr = [];

var eng_j_arr = [];
var jpn_e_arr = [];




exports.index = function(req, response){
	var word = req.query.word;
	// console.log(word,"<<<<");
	if (req.query.word == null) {
		response.render('index', {eng_k_arr:[], kor_e_arr:[], eng_j_arr:[], jpn_e_arr:[]});
	} else{
		client.fetch('http://dic.daum.net/search.do?q='+ word + '&dic=eng&search_first=Y',
				function(err, $, res, doc) {
					eng_k_arr = [];
					kor_e_arr = [];
					$('ul.list_example > li > div.box_example > span.txt_example > span.txt_ex').each (function (idx){

						eng_k_arr.push(($(this).contents().text()));
					});
					$('ul.list_example > li > div.box_example > span.mean_example > span.txt_ex').each (function (idx){

						kor_e_arr.push(($(this).contents().text()));
					});
	//response.render('search',{eng_k_arr:eng_k_arr, kor_e_arr:kor_e_arr});
					console.log("dynamic vaues no timeout are>>>>>>>>>",eng_k_arr);
					console.log("length is>>>>>>>>>",eng_k_arr.length);
				});

			client.fetch('http://ejje.weblio.jp/sentence/content/'+ word,
								function(err, $, res, doc) {
								  eng_j_arr = [];
									jpn_e_arr = [];
									$('div.kiji > div > p.qotCE').each (function (idx){

										eng_j_arr.push(($(this).contents().eq(0).text() + $(this).contents().eq(1).text()));
									})

									$('div.kiji > div > p.qotCJ').each (function (idx){

										jpn_e_arr.push(($(this).contents().eq(0).text()));
									})

								});

								setTimeout(function(){
								    response.render('index',{eng_k_arr:eng_k_arr, kor_e_arr:kor_e_arr, eng_j_arr:eng_j_arr, jpn_e_arr:jpn_e_arr});
										console.log(">>>WORD IS"+word);
								}, 10000);
	}
};




//module.exports = router;
