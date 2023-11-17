import { useEffect, useState } from 'react'
import './sass/editor.scss'
import './sass/components.scss'
import './sass/banners.scss'
import './sass/preview.scss'

import Editor from './components/Editors/Editor'
import Preview from './components/preview/Preview';

import { v4 as uuidv4 } from 'uuid';


function App() {

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('cvFormData')) ||{
      basicInfo: {
        firstName: '',
        lastName: '',
        age: '',
        occupation: '',
        selfSummary: '',
      },
      contactInfo: {
        email: '',
        phoneNumber: '',
        location: '',
        website: '',
      },
      educationInfo: [],
      experienceInfo: [],
      skillsInfo: [],
      otherInfo: [],
    },
  );

  const [previewVisible, setPreviewVisibility] = useState(true);

  useEffect(() => {
    localStorage.setItem('cvFormData', JSON.stringify(formData));
  }, [formData]);


  console.log(formData)


  const handleBasicInfoChanges = (e) => {
    const { name, value } = e.target;
    // console.log(e.target)

    setFormData({...formData, basicInfo:{...formData.basicInfo, [name]: value}})
    /*
    setFormData((prevFormData) => ({
      ...prevFormData,
      basicInfo: { ...prevFormData.basicInfo, [name]: value }
    }));
    */
  };

  const handleContactInfoChanges = (e) => {
    const {name, value} = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      contactInfo: { ...prevFormData.contactInfo, [name]: value}
    }));
  }


  
  const submitBackgroundInfo = (e, type) => {
    e.preventDefault();

    const parentEl = e.target.closest('form');
    console.log(parentEl)

    const newInfo = [...parentEl.querySelectorAll('input')]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }));

    console.log(newInfo)

    const addlInfo = [
      ...parentEl.querySelectorAll('.submitted-item__name'),
    ].map((el) => ({ id: el.dataset.id, content: el.textContent }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: [...prevFormData[type],
        {
          ...newInfo,
          id: uuidv4(),
          additionalInfo: addlInfo,
          currentInfoItem: '',
        },
      ],
    }));
  };

  const deleteBackgroundInfo = (id, type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: prevFormData[type].filter((item) => item.id !== id),
    }));
  };


  const submitCategoryInfo = (e, type) => {
    e.preventDefault();

    const parentEl = e.target.closest('form');
    console.log(parentEl)

    const category = parentEl.querySelector('.form-input__item-category').value;
    console.log(category)

    const submittedItems = [
      ...parentEl.querySelectorAll('.submitted-item__name'),
    ].map((el) => ({ content: el.textContent, id: el.dataset.id }));

    console.log(submittedItems)

    if (!category) return;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: [
        ...prevFormData[type],
        {
          category,
          items: submittedItems,
          id: uuidv4(),
        },
      ],
    }));
  };

  const deleteCategoryInfo = (id, type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: prevFormData[type].filter((item) => item.id !== id),
    }));
  };

  return (
    <div className='App'>
    <Editor 
    formData={formData} 
    handleBasicInfoChanges={handleBasicInfoChanges}
    handleContactInfoChanges={handleContactInfoChanges}
    submitBackgroundInfo={submitBackgroundInfo}
    deleteBackgroundInfo={deleteBackgroundInfo}
    submitCategoryInfo={submitCategoryInfo}
    deleteCategoryInfo={deleteCategoryInfo}
    />
    <Preview formData={formData} />
    </div>
  )
}

export default App
