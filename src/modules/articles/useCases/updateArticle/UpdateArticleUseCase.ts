import { inject, injectable } from 'tsyringe';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { Articles } from '@prisma/client';

interface IRequest {
  title?: string;
  description?: string;
  url: string;
  publishedAt?: string;
}

@injectable()
class UpdateArticleUseCase {
  constructor(@inject('ArticlesRepository') private articlesRepository: IArticlesRepository) {}

  async execute(id: string, data: IRequest): Promise<Articles> {
    if (data.url === undefined) {
      throw new AppError('URL is required');
    }

    const article = await this.articlesRepository.findById(id);

    if (!article) {
      throw new AppError('Article does not exist');
    }

    const response = await this.articlesRepository.updateArticle(data);

    return response;
  }
}

export { UpdateArticleUseCase };
