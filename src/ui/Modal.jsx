import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";


{
  /* <FontAwesomeIcon icon="fa-regular fa-circle-xmark" style={{color: "#4294b8",}} /> */
}

function Modal({ isVisible, hideModal, children }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div onClick={hideModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="new-recipe__actions">
          <button type="button" onClick={hideModal} >
            {/* <FontAwesomeIcon icon={faXmark} /> */}
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="xl"
              style={{ color: "#4294b8" }}
            
            />
          </button>
          {/* <button type="submit">
            Add New Recipe <FontAwesomeIcon icon={faPlusCircle} />
          </button> */}
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
