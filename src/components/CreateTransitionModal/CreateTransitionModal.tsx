import { X, ArrowCircleDown, ArrowCircleUp, } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import './CreateTransitionModal.scss'

Modal.setAppElement('#root')

type ModalPros = {
  isOpen: boolean;
  onRequestClose: () => void
}

export default function CreateTransitionModal(props: ModalPros) {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);
  function handleCreateNewTransition(event: FormEvent) {
    console.log(name + type + value)

    event.preventDefault();
  }

  return (
    <Modal className="newTransationModal" overlayClassName="overlayModal" isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <div className="title">
        <h2>Cadastrar transação</h2>
        <button onClick={props.onRequestClose}><X size={28} color="#363F5F"/></button>
      </div>
      <form onSubmit={handleCreateNewTransition} id="formModal">
        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
        <input type="number" placeholder="Valor" value={value} onChange={e => setValue(Number(e.target.value))}/>
        <div className="checkBox">
          <button type="button" onClick={() => setType('input')} className={`${type === 'input' && "input"}`}>
            <ArrowCircleUp size={30} color="#33CC95"/>
            <span>Entrada</span>
          </button>
          <button type="button" onClick={() => setType('output')} className={`${type === 'output' && "output"}`}>
            <ArrowCircleDown size={30} color="#E62E4D"/>
            <span>Saída</span>
          </button>
        </div>
        <input type="text" placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)}/>
        <button className="createBtn" type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
}