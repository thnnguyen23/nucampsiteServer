const express = require('express');
const promotionRouter = express.Router();

const Promotion = require('../models/promotion')

promotionRouter.route('/')

.get((req, res, next) => {
    Promotion.find()
    .then(promotions => res.status(200).json(promotions))
    .catch(err => next(err))
})
.post((req, res, next) => {
    Promotion.create(req.body)
    .then(promotions => res.status(200).json(promotions))
    .catch(err => next(err))
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    Promotion.deleteMany()
    .then(promotions => res.status(200).json(promotions))
    .catch(err => next(err))
});

promotionRouter.route('/:promotionId')

.get((req, res, next) => {
    Promotion.findById(eq.params.promotionId)
    .then(promotion => res.status(200).json(promotion))
    .catch(err => next(err))
})
.post((req, res) => {
    redirect.end('POST operation not su pport on /promotions/:promotionId')
})
.put((req, res, next) => {
    Promotion.findByIdAndUpdate(req.params.promotionId, req.body, { new: true })
    .then(promotion => res.status(200).json(promotion))
    .catch(err => next(err))
})
.delete((req, res, next) => {
    Promotion.findByIdAndDelete(req.params.promotionId)
    .then(promotion => res.status(200).json(promotion))
    .catch(err => next(err))
})

module.exports = promotionRouter;