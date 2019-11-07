const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.camara.cl/camara/diputados.aspx#tab';

axios.get(url)
  .then(response => {
    // console.log(response.data);
    let getData = html => {
      data = [];
      const $ = cheerio.load(html);
      const txt = $('.diputadosWrapper', '#ctl00_mainPlaceHolder_pnlComposicion').text()
      // console.log(txt)
      $('#diputadosWrapper ul li').each((i, elem) => {
        data.push({
          text : $(elem).text(),
        });
      });
      console.log(data);
    }
    
    getData(response.data)
  })
  .catch(error => {
    console.log(error);
  })