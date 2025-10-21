import { createRoot } from 'react-dom/client'
import './App.css'
import Test from './Test.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'


const root = createRoot(document.getElementById('root'))



root.render(
    <>
        < Test />
        <Header />
        < Footer />
    </>
)


