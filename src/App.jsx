import { useEffect, useState } from 'react'
import './sass/editor.scss'
import Editor from './components/Editors/Editor'

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


  return (
    <>
    <Editor 
    formData={formData} 
    handleBasicInfoChanges={handleBasicInfoChanges}
    handleContactInfoChanges={handleContactInfoChanges}
    />
    </>
  )
}

export default App
