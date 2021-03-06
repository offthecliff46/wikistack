// /users which will send a list of all the authors on our site. You already have an userList module in your /views folder. The items in this list of authors are links that each go to:

// /users/id where id is the author's id which will send a list of links of each article written by that author

const router = require('express').Router();
const models = require("../models");
const Page = models.Page;
const User = models.User;


const { userPages, userList } = require("../views");


router.get("/", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(userList(users));
    } catch (error) { next(error) }
  });

/// we've only said that a page belongs to a user. We should also specify that a user can have many pages.
  router.get('/:id', async(req, res, next) => {

    try {
    //const user = await User.findById(req.params.id)
     //const pages = await Page.findAll({ where: {authorId: req.params.id}});
    // res.send(userPages(user,pages ))

    const user = await User.findById(req.params.id, {
      include: [Page]
    })
    res.send(userPages(user,user.pages ))

    }
         catch (error) { 
             next(error)
          } 
   });




module.exports = router;