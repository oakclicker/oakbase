import React from 'react';
import '../Mine.css';
import Cross from './mine_icons/corss.svg';



const EarnModal1 = ({ active, setActive }) => {

   const closeModal = () => {
      setActive(false)
   };

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "modal_box active" : "modal_box"} onClick={e => e.stopPropagation()}>

            <div className='modal_header'>
               <button onClick={closeModal} className='close_modal_button'>
                  <img src={Cross} alt='Cross' className='close_modal_image' />
               </button>
            </div>

            <h2>Pixar 6</h2>


         </div>
      </div>
   );
}

export default EarnModal1;
