import puppeteer from 'puppeteer';
import axios from 'axios';
import { AppError } from '../shared/errors/AppError';

class CrawlerImportArticle {
  async execute() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 700 });
    const urlPage = 'https://devgo.com.br/';

    try {
      await page.goto(urlPage, { waitUntil: 'networkidle2', timeout: 30000 });
    } catch {
      throw new AppError('Error to load page');
    }

    await page.waitForSelector('#__next > div > div.blog-articles-area.css-lap1ur > div');
    await page.$$('#__next > div > div.blog-articles-area.css-lap1ur > div > div');

    const articles = await page.$$eval(
      '#__next > div > div.blog-articles-area.css-lap1ur > div > div',
      (elements) => {
        return elements
          .map((element) => {
            const titleArticle = element.querySelector('h1');
            const title = titleArticle ? titleArticle.textContent : '';
            const urlArticle = element.querySelector('a');
            const url = urlArticle ? urlArticle.href : null;
            return { title, url };
          })
          .filter((article) => article.title !== null && article.url !== null);
      },
    );

    for (let article of articles) {
      try {
        await axios.post('http://localhost:8080/article', {
          title: article.title,
          url: article.url,
        });
      } catch {
        throw new AppError('Error to save article');
      }
    }

    await browser.close();
    return articles;
  }
}

export { CrawlerImportArticle };
