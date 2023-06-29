import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ isVisible, hideModal, children }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div onClick={hideModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="new-recipe__actions">
          <button type="button" onClick={hideModal}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* <button type="submit">
            Add New Recipe <FontAwesomeIcon icon={faPlusCircle} />
          </button> */}
        </div>
        <div className='mt-4'>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
