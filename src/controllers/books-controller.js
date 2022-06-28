import BookService from '../services/books-service.js'

class BookController {
    searchBooks(params) {
        const bookService = new BookService()
        return bookService.searchBooks(params)
    }    

    registerBook(req, res) {
        const bookService = new BookService()
        return bookService.registerBook(req)
    }

    updateBook(req, res) {
        const bookService = new BookService()
        return bookService.updateBook(req)
    }

    deleteBook (req, res) {
        const bookService = new BookService()
        return bookService.deleteBook(req)
    }
}

export default BookController
