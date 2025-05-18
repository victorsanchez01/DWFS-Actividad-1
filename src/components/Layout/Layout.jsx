import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="layout__main">
                <div className="layout__content">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout