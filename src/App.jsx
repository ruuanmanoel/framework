import App2 from "./App2"
import BarcodeScanner from "./components/BarcodeScanner "
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"

function App() {
  return (

    <div className="w-full h-full">
        <Header />
        <Layout />
        <BarcodeScanner />
        {/* <App2 /> */}
    </div>
    
  )
}

export default App