import ReactDOM from "react-dom";
import './modal.css';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div id="modalContent">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };