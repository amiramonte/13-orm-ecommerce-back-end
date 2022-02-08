const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET route to get all tags and associated Product data
router.get('/', async(req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    return res.status(200).json(tagData)
  
  } catch (error) {
      return res.status(400).json(error)
  }
});

// GET route to get a single Tag by id in the URL and its associated Product Data
router.get('/:id', async(req, res) => {
  try {
    const tagData = await Tag.findOne({
      include: [{
        model: Product,
        through: ProductTag
      }],
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(tagData)
  } catch (error) {
      return res.status(400).json(error)
  }
});

// POST route to create new tag
router.post('/', async(req, res) => {
  try {
    const tagData = await Tag.create(req.body)
    return res.status(200).json(tagData)
  } catch (error) {
      return res.status(400).json(error)
  }
});

// PUT route to update a tag by it's id that is specified in the URL
router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id:req.params.id
      }
    })
    return res.status(200).json(tagData)
  } catch (error) {
      return res.status(400).json(error)
  }
});

// DELETE route to delete tag by its id value in the URL
router.delete('/:id', async(req, res) => {
try {
  const tagData = await Tag.destroy({
    where: {
      id:req.params.id
    }
  })
  return res.status(200).json(tagData)
} catch (error) {
    return res.status(400).json(error)
}
});

module.exports = router;
