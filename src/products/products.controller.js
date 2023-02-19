const productsService = require("./products.service");

function read(req, res, next) {
  res.json({ data: { product_title: "some product title" } });
}

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

// Validation //

function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}

module.exports = {
  read: [read],
  list: [list],
};
