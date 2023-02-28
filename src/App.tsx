import { Announcement } from "./components/Announcement"
import { Dash } from "./components/Dash"
import { Header } from "./components/Header"
import { News } from "./components/News"
import './index.css'
import { Container } from "./styles"

function App() {
  return (
    <div>
      <Header />
      <Announcement />
      <Container>
        <Dash />
        <News />
      </Container>
    </div>
  )
}

export default App
