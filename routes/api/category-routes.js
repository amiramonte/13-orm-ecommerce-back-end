const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET route to find all categories and their associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    })
    return res.status(200).json(categoryData)
  } catch (error) {
      return res.status(400).json(error)
  }

});

// GET route to get single category and its associated product
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product]
    })
    return res.status(200).json(categoryData)
  } catch (error) {
      return res.status(400).json(error)
  }

});

// POST route to create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body)
    return res.status(200).json(categoryData)

  } catch (error) {
    return res.status(400).json(error);
  }
});

// PUT route to update a category by its `id` value from the URL
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(categoryData)
  } catch (error) {
    return res.status(400).json(error)
  }
});

// DELETE route to delete a category by its `id` value in the URL
router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(categoryData)
  } catch (error) {
    return res.status(400).json(error)
  }
});

module.exports = router;
