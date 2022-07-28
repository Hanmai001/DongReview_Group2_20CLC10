const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//path /news/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.get('/post', newsController.post);
router.post('/store', newsController.store);
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
