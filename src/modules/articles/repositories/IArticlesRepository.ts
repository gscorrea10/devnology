import { Articles } from '@prisma/client';
import { ICreateArticleDTO } from '../dtos/ICreateArticleDTO';
import { IUpdateArticleDTO } from '../dtos/IUpdateArticleDTO';

interface IArticlesRepository {
  createArticle({ title, description, url, publishedAt }: ICreateArticleDTO): Promise<Articles>;
  listArticles(): Promise<Articles[]>;
  deleteArticle(id: string): Promise<void>;
  updateArticle({ title, description, url, publishedAt }: IUpdateArticleDTO): Promise<Articles>;
  findById(id: string): Promise<Articles | null>;
}

export { IArticlesRepository };
