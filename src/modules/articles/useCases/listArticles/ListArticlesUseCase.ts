import { Articles } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';

@injectable()
class ListArticlesUseCase {
  constructor(@inject('ArticlesRepository') private articlesRepository: IArticlesRepository) {}
  async execute(): Promise<Articles[]> {
    const articles = await this.articlesRepository.listArticles();
    return articles;
  }
}

export { ListArticlesUseCase };
