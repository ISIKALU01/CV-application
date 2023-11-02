import CloseIcon from '@mui/icons-material/Close';

function ItemBanner(props) {
    const { id, name, deleteItem } = props;
  
    return (
      <div key={id} className="submitted-item__wrapper">
        <span className="submitted-item__name" data-id={id}>
          {name}
        </span>
        <button
          className="btn submitted-item__delete btn-icon"
          type="button"
          onMouseDown={() => deleteItem(id)}
        >
          <CloseIcon />
        </button>
      </div>
    );
  }
  
  export default ItemBanner;