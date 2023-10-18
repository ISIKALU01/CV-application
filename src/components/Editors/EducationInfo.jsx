import { useEffect, useState } from "react";


function EducationInfo(props){
    const {data} = props

    const emptyState = {
        institution: '',
        degreeProgram: '',
        startingYear: '',
        graduatingYear: '',
        onGoing: true,
        gpa: '',
        id: '',
        additionalInfo: [],
        currentInfoItem: '',
      };
    
    const [educInfo, setEducInfo] = useState(
      JSON.parse(localStorage.getItem('cvEducationInfo')) || emptyState,
    );

    console.log(data.length)

    useEffect(() => {
        localStorage.setItem('cvEducationInfo', JSON.stringify(educInfo));
      }, [educInfo]);

    const handleChange = (e) => {
      const { name, value, type, checked} = e.target;
      console.log(name, value, type, checked)
    
      setEducInfo((prevInfo) => ({
        ...prevInfo,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };

    return (
        <form 
          className="form form__container form__education-info">
          <h1 className="form-title">Education Background</h1>

          <fieldset className="form-fieldset form__education-info">
            <label className="form-label">
              <span className="form-label__title">
                University/Institution/Organization:
              </span>
              <input
                type="text"
                name="institution"
                className="form-input form-input__education-institution"
                placeholder="University"
                value={educInfo.institution}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              <span className="form-label__title">Program/Degree/Course:</span>
              <input
                type="text"
                name="degreeProgram"
                className="form-input form-input__degree-program"
                placeholder="Ph.D in Philosophy"
                value={educInfo.degreeProgram}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              <span className="form-label__title">Starting Year:</span>
              <input
                type="month"
                name="startingYear"
                className="form-input form-input__starting-year"
                min="1900-01"
                value={educInfo.startingYear}
                onChange={handleChange}
                required
              />
            </label>
            <div className="form-label">
              <span className="form-label__title">On-going:</span>
              <div className="switch-ongoing">
                <input
                  className="form-input switch-ongoing__input"
                  type="checkbox"
                  name="onGoing"
                  id="ongoingSwitchEduc"
                  onChange={handleChange}
                  checked={educInfo.onGoing}
                />
                <label
                  aria-hidden="true"
                  className="switch-ongoing__label"
                  htmlFor="ongoingSwitchEduc"
                >
                  On
                </label>
                <div aria-hidden="true" className="switch-ongoing__marker" />
              </div>
            </div>
            {!educInfo.onGoing && (
              <label className="form-label">
                <span className="form-label__title">Graduating Year:</span>
                <input
                  type="month"
                  name="graduatingYear"
                  className="form-input form-input__graduating-year"
                  min="1900-01"
                  value={educInfo.graduatingYear || '2014-10'}
                  onChange={handleChange}
                />
              </label>
            )}
            <label className="form-label">
              <span className="form-label__title">GPA (optional):</span>
              <input
                type="text"
                name="gpa"
                className="form-input form-input__gpa"
                placeholder="3.9/4.0"
                value={educInfo.gpa}
                onChange={handleChange}
              />
            </label>
    
            <label className="form-label">
              <span className="form-label__title">
                Additional info (ex. awards, courses, thesis project)
              </span>
    
    
              <div className="form-input__items-wrapper">
                <input
                  type="text"
                  name="currentInfoItem"
                  className="form-input form-input__addl-info-item form-input__items"
                  placeholder="Press enter to submit an item..."
                  value={educInfo.currentInfoItem}
                  onChange={handleChange}
                />
                <button type="button" className="btn btn__submit-item">
                  <span className="btn__submit-font">+</span>
              </button>
              </div>
            </label>
          </fieldset>
          <button type="submit" className="btn btn__submit">
            Submit education background
          </button>
        </form>
      );
}

export default EducationInfo;