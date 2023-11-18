import { useEffect, useState } from 'react'
import './sass/editor.scss'
import './sass/components.scss'
import './sass/banners.scss'
import './sass/preview.scss'

import Editor from './components/Editors/Editor'
import Preview from './components/preview/Preview';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';

import { v4 as uuidv4 } from 'uuid';


function App() {

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('cvFormData')) || {
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

  const togglePreview = () => {
    setPreviewVisibility((prevState) => !prevState);
  };


  const printPreview = () => {
    window.print();
  };


  const handleBasicInfoChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      basicInfo: { ...prevFormData.basicInfo, [name]: value }
    }));

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

    const newInfo = [...parentEl.querySelectorAll('input')]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }));

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

    const category = parentEl.querySelector('.form-input__item-category').value;
 
    const submittedItems = [
      ...parentEl.querySelectorAll('.submitted-item__name'),
    ].map((el) => ({ content: el.textContent, id: el.dataset.id }));


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
    {previewVisible && <Preview formData={formData} />}
      <div className="btn-container__preview">
        <button
          className="btn__toggle-preview"
          type="button"
          onClick={togglePreview}
        >
          <VisibilityIcon />
        </button>
        
        {previewVisible && (
          <button
            type="button"
            className="btn__print-preview"
            onClick={printPreview}
          >
            <PrintIcon />
          </button>
        )}
        </div>
    </div>

    
  )
}

export default App
