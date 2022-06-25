import BookService from '../services/books-service.js'

class BookController {
    searchBooks() {
        const bookService = new BookService()
        return bookService.searchBooks()
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
