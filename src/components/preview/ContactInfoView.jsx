import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';

function ContactInfoView(props) {
    const { data } = props;
  
    return (
      <section className="preview__area preview-area__contact-info">
        <div className="preview__contact-wrapper">
          <span className="preview__contact-icon icon-mail">
            <MailIcon />
          </span>
          <span className="preview__email preview__contact-content">
            {data.email || 'johndoe@site.com'}
          </span>
        </div>
        <div className="preview__contact-wrapper">
          <span className="preview__contact-icon icon-phone">
            <SmartphoneIcon />
          </span>
          <span className="preview__phone-number preview__contact-content">
            {data.phoneNumber || '+234 081 0000'}
          </span>
        </div>
        <div className="preview__contact-wrapper">
          <span className="preview__contact-icon icon-location">
            <LocationOnIcon />
          </span>
          <span className="preview__location preview__contact-content">
            {data.location || 'London, UK'}
          </span>
        </div>
        <div className="preview__contact-wrapper">
          <span className=" preview__contact-icon icon-link">
            <LinkIcon />
          </span>
          <span className="preview__website preview__contact-content">
            {data.website || 'linkedin.sample.com/johndoe'}
          </span>
        </div>
      </section>
    );
  }
  
  export default ContactInfoView;