import { createBrowserRouter }  from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from "./pages/HomePage/HomePage"
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"
import Layout from "./components/Layout/Layout.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/home",
        element: (
            <Layout>
                <HomePage/>
            </Layout>
        )
    },
    {
        path: "/book/:id",
        element: (
            <Layout>
                <BookDetailPage/>
            </Layout>
        )
    },
    {
        path: "/checkout",
        element: (
            <Layout>
                <CheckoutPage/>
            </Layout>
        )
    }
])

export default router