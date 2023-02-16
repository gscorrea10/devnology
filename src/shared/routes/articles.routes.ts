import { Router } from 'express';
import { CreateArticleController } from '../../modules/articles/useCases/createArticle/CreateArticleController';
import { DeleteArticleController } from '../../modules/articles/useCases/deleteArticle/DeleteArticleController';
import { ImportArticleController } from '../../modules/articles/useCases/importArticle/ImportArticleController';
import { ListArticlesController } from '../../modules/articles/useCases/listArticles/ListArticlesController';
import { UpdateArticleController } from '../../modules/articles/useCases/updateArticle/UpdateArticleController';

const articleRoutes = Router();
const createArticleController = new CreateArticleController();
const listArticlesController = new ListArticlesController();
const updateArticleController = new UpdateArticleController();
const deleteArticleController = new DeleteArticleController();
const importArticleController = new ImportArticleController();

articleRoutes.post('/', createArticleController.handle);
articleRoutes.get('/', listArticlesController.handle);
articleRoutes.put('/update/:id', updateArticleController.handle);
articleRoutes.delete('/delete/:id', deleteArticleController.handle);
articleRoutes.get('/import', importArticleController.handle);

export { articleRoutes };
