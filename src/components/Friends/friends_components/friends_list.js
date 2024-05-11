import React from 'react';
import '../Friends.css';
import coin_icon from '../friends_components/friends_icons/coin.png';

const FriendsList = ({ friend_name, friend_image, friend_money }) => {
  return (
    <div className='friend_card'>

        <img src={friend_image} className='user_icon' alt='User' />
        <div className='friend_text transparent'>
          <p className='friend_name transparent'>{friend_name}</p>
          <div className='friend_info transparent'>
            <span className='check transparent'>{friend_money}</span>
            <div className='coin_container'>
            <img className='coin transparent' src={coin_icon} alt="Coin" style={{ width: '40px', height: '40px' }} />
            </div>
          </div>
        </div>
        <div className='bonus_display transparent'>
          <span className='friend_bonus transparent'>+2k</span>
          <div className='coin_container'>
            <img className='coin transparent' src={coin_icon} alt="Coin" style={{ width: '40px', height: '40px' }}  />
          </div>
          
        </div>

    </div>
  );
}

export default FriendsList;
