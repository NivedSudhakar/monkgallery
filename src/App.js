import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro';
import { Container } from 'react-bootstrap';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Container>
        <Intro/>
        <ImageGallery/>
      </Container>
    </div>
  );
}

export default App;
