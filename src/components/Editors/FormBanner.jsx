import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function FormBanner(props) {
    const { type, handleDelete, handleEdit, mainText, subText, id } = props;
  
    return (
      <div className="form-banner__completed form-banner__editable">
        <p className="form-banner__list-item-text">
          <span className="list-item__main-text">{mainText} </span>
          <span className="list-item-sub-text">/ {subText} </span>
        </p>
  
        <div className="form-banner__btn-container">
          <button
            type="button"
            className="btn btn__edit-item"
            onClick={() => handleEdit(id)}
          >
            <EditIcon />
          </button>
          <button
            type="button"
            className="btn btn__delete-item"
            onClick={() => handleDelete(id, type)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
  
  export default FormBanner;