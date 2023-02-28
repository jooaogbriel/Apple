import { Announcement } from "./components/Announcement"
import { Dash } from "./components/Dash"
import { Header } from "./components/Header"
import './index.css'
import { Container } from "./styles"

function App() {
  return (
    <div>
      <Header />
      <Announcement />
      <Container>
        <Dash />
      </Container>
    </div>
  )
}

export default App
