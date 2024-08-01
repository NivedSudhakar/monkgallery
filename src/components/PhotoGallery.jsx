import React, { useEffect, Button } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoGallery = ( {images} ) => {

  const elementSize = 400;

  return (
    <PhotoProvider maskOpacity={0.5}
      toolbarRender={ ({ index }) => {
        console.log(images);
        const dateTaken = new Date(images[index].createdDate.split("T")[0]);
        console.log(dateTaken);
        const className = `
          absolute left-0 p-2 w-full min-h-24
          text-xs text-white bg-black/50
        `;
        return (
          <div className={className}>
            Date Taken: {dateTaken.getMonth()}/{dateTaken.getDate()}/{dateTaken.getFullYear()}
          </div>
        );
    }}>
        <div className='image-gallery'>
            {images.map((imgUrl, index) => (
                <PhotoView className='photo-view' key={index} src={`https://drive.google.com/thumbnail?id=${imgUrl.alternateLink.split("/")[5]}&sz=w1000`}>
                    <img src={`https://drive.google.com/thumbnail?id=${imgUrl.alternateLink.split("/")[5]}&sz=w1000`} alt=""/>
                </PhotoView>
            ))}
        </div>
    </PhotoProvider>
  )
}

export default PhotoGallery