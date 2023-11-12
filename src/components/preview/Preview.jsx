import BasicInfoView from './BasicInfoView';
import ContactInfoView from './ContactInfoView';


function Preview(props) {
  const { formData } = props;

  return (
    <div className="preview__container">
      <main className="preview__printable">
        <BasicInfoView data={formData.basicInfo} />
        <ContactInfoView data={formData.contactInfo} />
      </main>
    </div>
  );
}

export default Preview;