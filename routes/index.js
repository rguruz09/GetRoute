
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('distance', { title: 'Express' });
};