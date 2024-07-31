import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoGallery = ( {imageLinks} ) => {

  return (

    <PhotoProvider maskOpacity={0.5}>
        <div className='image-gallery'>
            {imageLinks.map((imgUrl, index) => (
                <PhotoView className='photo-view' key={index} src={`https://drive.google.com/thumbnail?id=${imgUrl}&sz=w1000`}>
                    <img src={`https://drive.google.com/thumbnail?id=${imgUrl}&sz=w1000`} alt=""/>
                </PhotoView>
            ))}
        </div>
    </PhotoProvider>
  )
}

export default PhotoGallery