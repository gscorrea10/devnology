import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportArticleUseCase } from './ImportArticleUseCase';

class ImportArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importArticleUseCase = container.resolve(ImportArticleUseCase);
    const article = await importArticleUseCase.execute();

    return response.status(201).json(article);
  }
}

export { ImportArticleController };
