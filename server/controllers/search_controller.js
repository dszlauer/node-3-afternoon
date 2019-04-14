const swag = require("../models/swag");

module.exports = {
  search: (req, res, next) => {
    const { category } = req.query;
    if (!category) {
      res.status(200).send(swag);
    } else {
      const filteredSwag = swag.filter(swag => swag.category === category);
      res.status(200).send(filteredSwag);
    }
  }
};
/*  
swag.filter( swag => {
        const { id, title, category, price } = swag;
        let search = id + tile + category + price;
        return search.toLowerCase().includes(categoy.lowerCase())
})
*/
// const swag = require("../models/swag");

// //This controller will need access to the swag model so let's require it from server/models/swag. This controller will only need one method. Let's export an object that has a method called search. The method should capture req, res, and next as parameters.
// module.exports = {
//   search: (req, res, next) => {
//     const { category } = req.query;
//     if (!category) {
//       res.status(200).send(swag);
//     } else {
//       const filteredSwag = swag.filter(swag => swag.category === category);
//       res.status(200).send(filteredSwag);
//     }
//   }
// };
