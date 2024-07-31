import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro';
import { Container } from 'react-bootstrap';
import ImageGallery from './components/ImageGallery';
import PhotoGallery from './components/PhotoGallery';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [stats, setStats] = useState([]);
  const [age, setAge] = useState();
  const imageLinks = [];
  const effectRan = useRef(false);


  async function getDriveData() {
    try {
        let res = await axios({
            url: process.env.REACT_APP_GOOGLE_DRIVE_URL,
            method: 'get',
            timeout: 8000,
        })
        return res.data
    }
    catch (err) {
        console.error(err);
    }
  }

  async function getSheetsStats() {
    try {
        let res = await axios({
            url: process.env.REACT_APP_GOOGLE_SHEETS_URL_STATS,
            method: 'get',
            timeout: 8000,
        })
        return res.data
    }
    catch (err) {
        console.error(err);
    }
  }

  async function getSheetsAge() {
    try {
        let res = await axios({
            url: process.env.REACT_APP_GOOGLE_SHEETS_URL_AGE,
            method: 'get',
            timeout: 8000,
        })
        return res.data
    }
    catch (err) {
        console.error(err);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    getDriveData()
      .then(response => {
          response.items.forEach(element => {
              imageLinks.push(element.alternateLink.split("/")[5]);
          });

          setImages(imageLinks);
          console.log("it works");

      });

      getSheetsStats()
        .then(response => {
          setStats(response.values[response.values.length-1]);
        })

      getSheetsAge()
        .then(response => {
          setAge(response.values[0][0]);
          console.log(age);
        })

    },[])





  return (
    <div className="App">
      <Container>
        <Intro date={stats[0]} weight={stats[1]} age={age}/>
        <PhotoGallery imageLinks={images}/>
      </Container>
    </div>
  );
}

export default App;
