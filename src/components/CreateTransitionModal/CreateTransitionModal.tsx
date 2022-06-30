import Modal from 'react-modal';
import './CreateTransitionModal.scss'

Modal.setAppElement('#root')

type ModalPros = {
  isOpen: boolean;
  onRequestClose: () => void
}

export default function CreateTransitionModal(props: ModalPros) {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      
    </Modal>
  );
}