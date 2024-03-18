let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  
  BookInstance.find({'status':{$eq:'Available'} })
    .populate('book')
    .exec()
    .then(list_bookinstance => {
      res.send(list_bookinstance.map(function(BookInstance){
        return BookInstance.book.title + ":" + BookInstance.status;
      }));
    })
    .catch(err => res.send('Status not found'));
};