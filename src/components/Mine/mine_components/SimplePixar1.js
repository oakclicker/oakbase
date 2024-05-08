import React from 'react';
import '../Mine.css';
import Cross from './mine_icons/corss.svg';
import PixarPrew from './mine_icons/Pixar_prew.png';
import MiddleCoin from './mine_icons/middle_coin.png';


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

            <h2>Pickaxe 1</h2>

            <img src={PixarPrew} className='PixarPrew' alt='pixare' />
            
            <div className='info_container'>
               <h3>Simple pickaxe</h3>
               <p>Adds +1 per click</p>
               <p>+1 per click on level increase</p>
               <div className='price_and_lvl'>
                  <div>
                     <img src={MiddleCoin} alt='coin' />
                     <span className='update_price'>3000</span>
                  </div>
                  <span className='info_lvl'>49 lvl</span>
               </div>
            </div>

            <div className='your_balance'>
               <p>Balance: </p>
               <div>
                  <img src={MiddleCoin} alt='coin' />
                  <span className='update_price'>3000</span>
               </div>
            </div>

            <button className='upgrate_button'>
               Upgrade
            </button>

         </div>
      </div>
   );
}

export default EarnModal1;
