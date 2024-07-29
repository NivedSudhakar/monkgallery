import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = ( {imageLinks} ) => {

  return (
    <ul className='image-gallery'>
        {
            imageLinks.map((imgUrl, index) => {
                return (
                    <li className={index % 2 === 0 ? 'item short' : 'item tall'}>
                        <figure>
                            <img src={`https://drive.google.com/thumbnail?id=${imgUrl}&sz=w1000`} alt=""/>

                        </figure>
                    </li>
                )
            })

            /*<img src={imgUrl} alt='a fantastic picture of Monk' />*/
        }


    </ul>
  )
}

export default ImageGallery
//1_7m9A7EDiVw5Rd4ozN94tzfuObtTi0uX'
//1_7m9A7EDiVw5Rd4ozN94tzfuObtTi0uX