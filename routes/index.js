
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.ejs', { title: 'Hello! Express' });
};


exports.demo = function(req, res){
    res.render('demo.ejs', 
        { 
            title: 'Hello! Demo', 
            header: 'Demo'
        });
};

exports.app = function(req, res){
    res.render('bootstrap.ejs', 
        { 
            title: 'Hello! Bootstrap', 
            content: 'Bootstrap is so good'
        });
};
