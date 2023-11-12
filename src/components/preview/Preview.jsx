import BasicInfoView from './BasicInfoView';


function Preview(props) {
  const { formData } = props;

  return (
    <div className="preview__container">
      <main className="preview__printable">
        <BasicInfoView data={formData.basicInfo} />
      </main>
    </div>
  );
}

export default Preview;