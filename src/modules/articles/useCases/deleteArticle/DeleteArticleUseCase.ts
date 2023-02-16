import { inject, injectable } from 'tsyringe';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class DeleteArticleUseCase {
  constructor(@inject('ArticlesRepository') private articlesRepository: IArticlesRepository) {}
  async execute(id: string): Promise<void> {
    const article = await this.articlesRepository.findById(id);

    if (!article) {
      throw new AppError('Article does not exist');
    }

    await this.articlesRepository.deleteArticle(id);
  }
}

export { DeleteArticleUseCase };
