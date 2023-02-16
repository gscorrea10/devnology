import { Articles } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateArticleDTO } from '../../dtos/ICreateArticleDTO';
import { IUpdateArticleDTO } from '../../dtos/IUpdateArticleDTO';

class ArticlesRepository {
  async createArticle({
    title,
    description,
    url,
    publishedAt,
  }: ICreateArticleDTO): Promise<Articles> {
    const article = await prisma.articles.create({
      data: {
        title,
        description,
        url,
        publishedAt,
        updatedAt: null,
      },
    });

    return article;
  }

  async listArticles(): Promise<Articles[] | null> {
    const articles = await prisma.articles.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return articles;
  }

  async deleteArticle(id: string): Promise<void> {
    await prisma.articles.delete({
      where: {
        id,
      },
    });
  }

  async updateArticle({
    title,
    description,
    url,
    publishedAt,
  }: IUpdateArticleDTO): Promise<Articles> {
    const articles = await prisma.articles.update({
      where: {
        url: url,
      },
      data: {
        description: description,
        publishedAt: publishedAt,
        title: title,
        url: url,
      },
    });

    return articles;
  }

  async findById(id: string): Promise<Articles | null> {
    const article = await prisma.articles.findUnique({
      where: {
        id,
      },
    });
    return article;
  }
}

export { ArticlesRepository };
