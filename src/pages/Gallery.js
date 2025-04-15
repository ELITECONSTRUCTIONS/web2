import React,{Fragment} from 'react';
import ImageGallery from '../components/Gallery/ImageGallery';
import PageHeader from '../components/PageHeader';
import Header from '../components/Header';

const PageGallery = () => {
  return (
    <Fragment>
      <Header/>
      <ImageGallery />
      </Fragment>
  );
};

export default PageGallery; 