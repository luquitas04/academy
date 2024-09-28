import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import styles from "./App.module.scss"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
