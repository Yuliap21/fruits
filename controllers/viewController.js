const RESOURCE_PATH = '/fruits'
const viewController = {
  index(req, res, next){
    res.render('Index', { fruits: res.locals.data.fruits })
  },
  show(req, res, next){
    res.render('Show', { fruit: res.locals.data.fruit })
  },
  edit(req, res, next){
    res.render('Edit', { fruit: res.locals.data.fruit })
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}
module.exports = viewController;
