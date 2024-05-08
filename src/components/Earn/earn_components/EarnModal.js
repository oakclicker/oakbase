import React from 'react';
import '../Earn.css';
import Cross from './earn_icons/corss.svg';
import Calendar from './earn_icons/calendar.png';
import MiddleCoin from './earn_icons/middle_icon.png';


const EarnModal = ({ active, setActive, children }) => {

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

            <img src={Calendar} alt='calendar' className='modal_calendar' />
            <h2>Daily reward</h2>
            <p className='dailyReward_timer'>
               12:41:12 <span span className='grey_text'>to next Reward</span>
            </p>

            <div className='daily_rewards_section'>
               <ul className='daily_rewards_list'>
                  <li className='rewards_list_item reward_got'>
                     <p>Day 1</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item reward_can_get'>
                     <p>Day 2</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 3</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 4</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
               </ul>

               <ul className='daily_rewards_list'>
                  <li className='rewards_list_item'>
                     <p>Day 5</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 6</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 7</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 8</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
               </ul>

               <ul className='daily_rewards_list'>
                  <li className='rewards_list_item'>
                     <p>Day 9</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 10</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 11</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
                  <li className='rewards_list_item'>
                     <p>Day 12</p>
                     <img src={MiddleCoin} alt='coin' />
                     <p>1000</p>
                  </li>
               </ul>
            </div>

            <button className='cliam_button button_done'>Claim</button>

         </div>
      </div>
   );
}

export default EarnModal;
