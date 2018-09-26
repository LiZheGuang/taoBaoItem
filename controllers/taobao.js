const request = require('request');
const cheerio = require('cheerio')

module.exports.getTaoBao = async function(){
  let q = '火腿肠'
//   let sort = ctx.query.sort ==  undefined ?'1':  ctx.query.sort//sort=_bid 从高到低  bind//从低到高  _ratesum信用排序  _sale 销量优先
  let url = 'https://s.m.taobao.com/search?'
  let data = `sort=`+'bind'+`&event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&q=` + encodeURI(q) + `&sst=1&n=40&buying=buyitnow&m=api4h5&abtest=6&wlsort=6&page=1`
  // 价格从高到低
    let content = function () {
        return new Promise((resove, reject) => {
          request(url + data, function (error, response, body) {
            body = JSON.parse(body)
            resove(body)
            if(error){
                reject(error)
            }
          }); 
        })
      }
      let body = await content()
      console.log(body)
      return body
}