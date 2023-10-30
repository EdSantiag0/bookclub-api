import { Author } from "../models";
import * as Yup from "yup";

class AuthorController {
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome é obrigatório.")
          .min(3, "Nome deve conter mais de 3 caracteres"),
        avatar_url: Yup.string().url(" Avatar url deve ser no formato de URL."),
      });

      await schema.validate(req.body);

      const createAuthor = await new Author({
        ...req.body,
      });

      await createAuthor.save();

      return res.json({ createAuthor });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async getAll(req, res) {
    try {
      const authors = await Author.findAll({
        order: [["name", "ASC"]],
      });

      return res.json(authors);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }
}

export default new AuthorController();