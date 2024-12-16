import { Header } from "../layout/Header";
import { Footer } from '../Footer/Footer';
import { Gallery } from '../Gallery/Gallery';
const Portfolio = () => {
    return (
        <div className="min-h-screen">
        <Header />
        <main>
        <Gallery />
        </main>
        <Footer />
      </div>
      )
}

export default Portfolio
