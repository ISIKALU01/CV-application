import BasicInfoView from './BasicInfoView';
import ContactInfoView from './ContactInfoView';
import EducationInfoView from './EducationInfoView';
import ExperienceInfoView from './ExperienceInfoView';


function Preview(props) {
  const { formData } = props;

  return (
    <div className="preview__container">
      <main className="preview__printable">
        <BasicInfoView data={formData.basicInfo} />
        <ContactInfoView data={formData.contactInfo} />

        <section className="preview__main-col">
          <EducationInfoView data={formData.educationInfo} />
          <ExperienceInfoView data={formData.experienceInfo} />
        </section>

      </main>
    </div>
  );
}

export default Preview;