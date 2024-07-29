import React from 'react'

const ImageGallery = () => {
    const images = require.context('../images', true);
    const imageList = images.keys().map(image => images(image));
  return (
    <ul className='image-gallery'>
        {
            imageList.map((imgUrl, index) => {
                return (
                    <li className={index % 2 === 0 ? 'item short' : 'item tall'}>
                        <figure>
                            <img src="https://drive.google.com/thumbnail?id=1_7m9A7EDiVw5Rd4ozN94tzfuObtTi0uX&sz=w1000" alt=""/>

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
