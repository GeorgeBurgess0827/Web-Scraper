 //import axios from 'axios';
 const axios = require("axios")
 const cheerio = require('cheerio');
 const { response } = require("express");
 const express = require('express');
 const { title } = require("process");
 const j2cp = require('json2csv').Parser;
 const fs = require('fs');
const { Console } = require("console");
 
 const app = express()
 const port = 3000
 const url = 'https://books.toscrape.com/catalogue/category/books/sequential-art_5/index.html'
 const baseUrl = 'https://books.toscrape.com/catalogue/category/books/sequential-art_5/'
 const linkUrl = 'https://books.toscrape.com/catalogue/'
 const book_data = []
 const book_display = []

 
 async function getGenre(){
  try{

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const genre = $("h1").text();
    console.log(`Scraping Complete for ${genre}!`);
  } catch(error) {
    console.error(error);
  }
  
  
}

 async function getBooks(url){
   try{
 
     const response = await axios.get(url);
     const $ =cheerio.load(response.data);
     

     let article = $("article");


    article.each(function(){


      let title = $(this).find("h3 a").attr("title");
      let link =  $(this).find("h3 a").attr("href"); //fff
      let price = $(this).find(".price_color").text();
      let stock = $(this).find(".availability").text().trim();

      let newLink = link.slice(9);
      link = linkUrl + newLink;

      const entries = new Map([
        ['Title', title],
        ['Link', link],
        ['Price', price],
        ['Stock', stock]
      ]);
      
      const obj = Object.fromEntries(entries);

      book_data.push(obj);
      book_display.push( {
        title,
        link,
        price,
        stock

      });



    })

    if ($(".next a").length ){
        next_page = baseUrl + $(".next a").attr("href");
        getBooks(next_page);
     }else{  
     const parser = new j2cp();
     const csv = parser.parse(book_data, {
      header : false
     });
     fs.writeFileSync("./books.csv",csv);

    }
    //console.log(book_data);
    


   } catch(error) {
     console.error(error);
   }
 }

 getGenre();
 getBooks(url);


 //console.log(`Scraping Complete for ${getGenre()}!`);
 
 
 app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

 app.get('/', (req, res) => {
  res.send(`Example app listening on port ${port}`)
})

app.get('/results', (req, res) => {
  res.json(book_display)
})






