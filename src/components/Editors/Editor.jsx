import { useEffect, useState } from 'react';

import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';


function Editor(props) {
  const {
    formData,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    submitBackgroundInfo,
    deleteBackgroundInfo,
    submitCategoryInfo,
    deleteCategoryInfo,
  } = props;



  return (
    <div className="editor">
      <header className="header">
        <h1 className="header-title">cv generator</h1>
        <p className="header-description">
          Create your CV by filling out the forms below! Your CV will be
          dynamically updated in the preview.
        </p>
        <a className="header-github" href="" rel="noopener noreferrer">
          Check out the Github repo for this project here
        </a>

      </header>

      <BasicInfo data={formData.basicInfo} handleChange={handleBasicInfoChanges} />
      <ContactInfo data={formData.contactInfo} handleChange={handleContactInfoChanges} />
      

      
    </div>
  );
}

export default Editor;