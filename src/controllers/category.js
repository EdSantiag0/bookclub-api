import { Category } from "../models";

class CategoryController {
  async getAll(req, res) {
    const categories = await Category.findAll({
      order: [["name", "ASC"]],
    });
    return res.json(categories);
  }
}

export default new CategoryController();
