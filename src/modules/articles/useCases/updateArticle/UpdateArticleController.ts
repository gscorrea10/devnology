import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateArticleUseCase } from './UpdateArticleUseCase';

class UpdateArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, url, description, publishedAt } = request.body;
    const updateArticleUseCase = container.resolve(UpdateArticleUseCase);
    const result = await updateArticleUseCase.execute(id, { title, url, description, publishedAt });

    return response.status(200).json(result);
  }
}

export { UpdateArticleController };
