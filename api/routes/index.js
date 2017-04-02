const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const businessCtrl = require('../controllers/business.controller');
const reviewCtrl = require('../controllers/review.controller');


router.route('/search').get(userCtrl.searchByNameOrTag);
router.route('/business/interact/:id').post(businessCtrl.updateInteractivity);
router.route('/business/mostPopular').get(businessCtrl.getMostPopular);
router.route('/review/user/:userID').get(reviewCtrl.getUserReviews);
router.route('/review/edit/:reviewID').post(reviewCtrl.editReview);

module.exports = router;
