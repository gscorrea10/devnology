import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListArticlesUseCase } from './ListArticlesUseCase';

class ListArticlesController {
  async handle(request: Request, response: Response) {
    const listArticlesUseCase = container.resolve(ListArticlesUseCase);
    const result = await listArticlesUseCase.execute();

    return response.json(result);
  }
}

export { ListArticlesController };
