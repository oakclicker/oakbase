import React from 'react';
import '../Friends.css';
import user from './friends_icons/User_icon.svg';
import coin_icon from '../friends_components/friends_icons/coin.png';

const FriendsList = () => {
  return (
    <div className='friend_card'>
        <img src={user} className='user_icon' alt="User icon" />
        <div className='friend_text transparent'>
          <p className='friend_name transparent'>Friend Name</p>
          <div className='friend_info transparent'>
            <span className='check transparent'>8600</span>
            <img className='coin transparent' src={coin_icon} alt="Coin icon" />
          </div>
        </div>
        <div className='bonus_display transparent'>
          <span className='friend_bonus transparent'>+2k</span>
          <img className='coin transparent transparent' src={coin_icon} alt="Coin icon" />
        </div>
    </div>
  );
}

export default FriendsList;
