import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro';
import { Container } from 'react-bootstrap';
import ImageGallery from './components/ImageGallery';
import PhotoGallery from './components/PhotoGallery';
import { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [stats, setStats] = useState([[]]);
  const [age, setAge] = useState();

  const data = {
    labels: stats.map(x => x[0]),
    datasets: [
      {
        label: 'Weight (g)',
        data: stats.map(x => x[1]),
        fill: false,
        borderColor: 'rgb(0,0,0)',
        tension: 0
      }
    ]
  };


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
              imageLinks.push(element)
              //imageLinks.push(element.alternateLink.split("/")[5]);
          });

          setImages(imageLinks);

      });

      getSheetsStats()
        .then(response => {
          setStats(response.values.slice(1));
        })



      getSheetsAge()
        .then(response => {
          setAge(response.values[0][0]);
        })

    },[])



  return (
    <div className="App">
      <Container>
        <Intro date={stats[stats.length-1][0]} weight={stats[stats.length-1][1]} age={age}/>
        <PhotoGallery images={images}/>
        <div className='lineChart'>
          <Line data={data} />
        </div>

      </Container>
    </div>
  );
}

export default App;
//npm run build
//firebase deploy --only hosting:monkgallery
