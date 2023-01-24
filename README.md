# Web-Scraper

Web Scraper for Books
This is a web scraper built using Node.js and several libraries, including axios, cheerio, express, and json2csv. It scrapes a website for information on books, including the title, link, price, and stock, and saves this information to a CSV file.

## Getting Started
1. Clone the repository to your local machine<br>
`git clone https://github.com/GeorgeBurgess0827/Web-Scraper.git`<br> 
2. Install the dependencies<br>
`npm install`<br>
3. Start the script<br>
`node app.js`

## How it works
The script starts by defining several constants, including the URL of the website to be scraped, a base URL, a link URL, and arrays to store the data and display of the books. It also defines a variable for the genre of the books.

It then defines two asynchronous functions, `getGenre` and `getBooks`. The `getGenre` function uses the axios and cheerio libraries to make a request to the URL and then parse the HTML to find the genre of the books. The `getBooks` function uses axios and cheerio again to make a request to the URL and parse the HTML to find the title, link, price, and stock of each book. It also saves this information to a CSV file.

The code then calls the `getGenre` and `getBooks` functions and starts an express server to handle requests to the '/' and '/results' routes. The '/results' route returns the `book_data` array in JSON format.

## Built With
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
- [Cheerio](https://cheerio.js.org/) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Json2csv](https://juanjodiaz.github.io/json2csv/#/) - A library to convert JSON objects to CSV

## Authors
George Burgess

## Acknowledgments
- [Abayomi Ogunnusi](https://dev.to/drsimplegraffiti/i-scraped-dev-to-using-axios-and-cheerio-26ko) for providing a helpful guide on using axios and cheerio to scrape a website
- [Treavers Media](https://www.youtube.com/watch?v=-3lqUHeZs_0&ab_channel=CodewithAniaKub%C3%B3w) for providing a helpful guide on using axios and cheerio to scrape a website
- [CodewithAniaKubw](https://www.youtube.com/watch?v=-3lqUHeZs_0&ab_channel=CodewithAniaKub%C3%B3w) for providing a helpful guide on using axios and cheerio to scrape a website
- [books to scrape](https://books.toscrape.com/) for providing a website with publicly accessible book data for scraping

## Note
In order to run this script, you need to change the url to the website you want to scrape. Also, you need to create a .csv file in the root of the project and name it "books.csv"
