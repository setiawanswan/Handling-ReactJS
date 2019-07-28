import React from 'react';
import './ImageList.css';
import ImageCard from './ImagesCard';

const ImageList = props => {
    const image = props.images.map((image) => {
        return (
            <div >
                <ImageCard key={image.id} img={image} />
            </div>
        )
    });

    return <div className="image-list">{image}</div>
};

export default ImageList; 