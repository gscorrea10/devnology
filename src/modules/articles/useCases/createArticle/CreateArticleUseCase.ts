import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';
import { ICreateArticleDTO } from '../../dtos/ICreateArticleDTO';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateArticleUseCase {
  constructor(@inject('ArticlesRepository') private articlesRepository: IArticlesRepository) {}
  async execute({ title, description, url, publishedAt }: ICreateArticleDTO) {
    if (!title || !url) {
      throw new AppError('You must enter a Title and URL');
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `http://${url}`;
    }

    const article = await this.articlesRepository.createArticle({
      title,
      description,
      url,
      publishedAt,
    });

    return article;
  }
}

export { CreateArticleUseCase };
