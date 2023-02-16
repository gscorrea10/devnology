import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateArticleUseCase } from './CreateArticleUseCase';

class CreateArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, url, description, publishedAt } = request.body;
    const createArticleUseCase = container.resolve(CreateArticleUseCase);

    const result = await createArticleUseCase.execute({
      title,
      url,
      description,
      publishedAt,
    });

    return response.status(201).json(result);
  }
}

export { CreateArticleController };
