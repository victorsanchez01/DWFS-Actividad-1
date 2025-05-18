import React from 'react'
import { useParams } from 'react-router-dom'
import './BookDetailPage.css'
import BookDetailView from '../../components/BookDetailView/BookDetailView'

function BookDetailPage() {
    const { id } = useParams();

    return (
        <div className="book-detail-page">
            <BookDetailView bookId={id} />
        </div>
    )
}

export default BookDetailPage