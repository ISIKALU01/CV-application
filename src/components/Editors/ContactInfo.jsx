function ContactInfo(props){
    const {data, handleChange} = props

    return (
        <form className="form form__container form__contact-info">
            <h1 className="form-title">Contact Info</h1>
        <fieldset className="form-fieldset form__basic-info">
          <label className="form-label">
            <span className="form-label__title">Email:</span>
            <input
              type="text"
              name="email"
              className="form-input form-input__email"
              placeholder="davisleevtobi@gmail.com"
              onChange={handleChange}
              value={data.email}
            />
          </label>
          <label className="form-label">
            <span className="form-label__title">Phone Number:</span>
            <input
              type="text"
              name="phoneNumber"
              className="form-input form-input__phone-number"
              placeholder="081xxxxxxxxx"
              onChange={handleChange}
              value={data.phoneNumber}
            />
          </label>
          <label className="form-label">
            <span className="form-label__title">Location:</span>
            <input
              type="text"
              name="Location"
              className="form-input form-input__location"
              placeholder="Lagos, Nigeria"
              onChange={handleChange}
              value={data.location}
            />
          </label>
          <label className="form-label">
            <span className="form-label__title">Website:</span>
            <input
              type="text"
              name="Website"
              className="form-input form-input__website"
              placeholder="www.site.com"
              onChange={handleChange}
              value={data.website}
            />
          </label>
        </fieldset>
        </form>
    )

}

export default ContactInfo;
