import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import UserController from "../controllers/user";
import CategoryController from "../controllers/category";
import AuthorController from "../controllers/author";
import BookController from "../controllers/book";

const routes = new Router();

// ---- unauthenticated routes -------------
routes.post("/user", UserController.create);
routes.post("/login", UserController.login);
routes.post("/forgot-password", UserController.forgotPassword);
routes.post("/reset-password", UserController.resetPassword);

// ---- authenticated routes -------------
routes.use(authMiddleware);
routes.post("/user", UserController.get);
routes.get("/category", CategoryController.getAll);
routes.post("/author", AuthorController.create);
routes.get("/author", AuthorController.getAll);
routes.post("/book", BookController.create);
routes.get("/book", BookController.findAll);

export default routes;
