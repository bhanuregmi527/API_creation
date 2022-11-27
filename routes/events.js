const express= require('express');
const Events=require('../model/events');
const authController= require('../controllers/authController');
const router= express.Router();
const { getEvents,getEventsById,createEvents,deleteEventsById}=require('../controllers/Event');

router.post('/signup',authController.signup);

router.route('/events').get(getEvents)
router.route('/events/:id').get(getEventsById)
router.route('/event').post(createEvents)
router.route('/events/:_id').delete(deleteEventsById)

module.exports=router