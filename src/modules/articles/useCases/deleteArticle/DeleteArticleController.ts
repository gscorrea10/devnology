import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteArticleUseCase } from './DeleteArticleUseCase';

class DeleteArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteArticleUseCase = container.resolve(DeleteArticleUseCase);
      await deleteArticleUseCase.execute(id);

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

export { DeleteArticleController };
