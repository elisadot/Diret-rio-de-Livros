import BookService from '../services/books-service.js'

class BookController {
    searchBooks() {
        const bookService = new BookService()
        return bookService.searchBooks()
    }    
}

export default BookController
