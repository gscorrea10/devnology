import { container } from 'tsyringe';
import { CrawlerImportArticle } from '../../../../crawlers/CrawlerImportArticle';

class ImportArticleUseCase {
  async execute() {
    const crawlerImportArticle = container.resolve(CrawlerImportArticle);
    const article = await crawlerImportArticle.execute();
    return article;
  }
}

export { ImportArticleUseCase };
