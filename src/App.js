import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro';
import { Container } from 'react-bootstrap';
import ImageGallery from './components/ImageGallery';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const imageLinks = [];
  const effectRan = useRef(false);


  async function getData() {
    try {
        let res = await axios({
            url: process.env.REACT_APP_GOOGLE_DRIVE_URL,
            method: 'get',
            timeout: 8000,

        })

        // Don't forget to return something
        return res.data
    }
    catch (err) {
        console.error(err);
    }
  }
  useEffect(() => {
    const abortController = new AbortController();
    getData()
      .then(response => {
          response.items.forEach(element => {
              imageLinks.push(element.alternateLink.split("/")[5]);
          });

          setImages(imageLinks);
          console.log("it works");

      });

    },[])





  return (
    <div className="App">
      <Container>
        <Intro/>
        <ImageGallery imageLinks={images}/>
      </Container>
    </div>
  );
}

export default App;
