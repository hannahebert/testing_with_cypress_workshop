const Router = require('express');
const { BingoItemsController } = require('../controllers/bingo-items.controller.js');

const router = new Router();

router.post('/api/v1/login', BingoItemsController.login);
router.post('/api/v1/logout', BingoItemsController.logout);
router.get('/api/v1/bingo-items', BingoItemsController.getItems);
router.get('/api/v1/bingo-items/:category', BingoItemsController.getItemsByCategory);
router.get('/api/v1/bingo-items/:id', BingoItemsController.getItem);
router.post('/api/v1/bingo-items', BingoItemsController.createItem);
router.put('/api/v1/bingo-items/:id', BingoItemsController.updateItem);
router.delete('/api/v1/bingo-items/:id', BingoItemsController.deleteItem);

module.exports = { router };