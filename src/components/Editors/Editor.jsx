import { useEffect, useState } from 'react';

import BasicInfo from './BasicInfo';
import CategoryInfo from './CategoryInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';



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
        <h1 className="header-title">CV Builder</h1>
        <p className="header-description">
          Unleash your Full Potential
        </p>
        <a className="header-des2" href="" rel="noopener noreferrer">
          Take Your career to New Heights with our CV Builder All-in-One-Platform.
        </a>
      </header>

      <BasicInfo 
          data={formData.basicInfo} 
          handleChange={handleBasicInfoChanges} 
      />

      <ContactInfo 
          data={formData.contactInfo} 
          handleChange={handleContactInfoChanges} 
      />

      <EducationInfo 
         data={formData.educationInfo} 
         handleSubmit={submitBackgroundInfo} 
         deleteEducInfo={deleteBackgroundInfo} 
       />

      <ExperienceInfo
         data={formData.experienceInfo}
         handleSubmit={submitBackgroundInfo} 
         deleteEducInfo={deleteBackgroundInfo}
       />

      <CategoryInfo
         data={formData.skillsInfo}
         handleSubmit={submitCategoryInfo}
         handleDelete={deleteCategoryInfo}
         infoType="skillsInfo"
       />

      <CategoryInfo
         data={formData.otherInfo}
         handleSubmit={submitCategoryInfo}
         handleDelete={deleteCategoryInfo}
         infoType="otherInfo"
       />

    </div>
  );
}

export default Editor;