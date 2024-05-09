import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RatingIcon from './icons/rating.png';
import MineIcon from './icons/mine.png';
import AppIcon from './icons/menu.png';
import EarnIcon from './icons/task.png';
import FriendsIcon from './icons/friends.png';
import RatingActiveIcon from './icons/active/rating-active.png';
import MineActiveIcon from './icons/active/mine-active.png';
import AppActiveIcon from './icons/active/menu-active.png';
import EarnActiveIcon from './icons/active/tasks-active.png';
import FriendsActiveIcon from './icons/active/friends-active.png';
import Rating from './components/Rating/Rating';
import Mine from './components/Mine/Mine';
import Earn from './components/Earn/Earn';
import Friends from './components/Friends/Friends';
import MainButton from './icons/main_button.png';
import MainCoin from './icons/main_coin.png';
import Light from './icons/light.svg';
import ProgressBar from './components/ProgressBar/ProgressBar'; 

function App() {
  const [userData, setUserData] = useState(null);
  const [userDb, setUserDb] = useState(null);
  const [energy, setEnergy] = useState(1000);
  const [activeWindow, setActiveWindow] = useState('App');
  const [buttonPressed, setButtonPressed] = useState(false);
  const [debouncedAddBalance, setDebouncedAddBalance] = useState(null);

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;
    const userData = telegramApp.initDataUnsafe.user;
    setUserData(userData);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://oakgame.tech/loadUser?user_id=' + userData.id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userDb = await response.json();
        setUserDb(userDb);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (userData) {
      fetchUserData();
    }
  }, [userData]);

  useEffect(() => {
    const energyInterval = setInterval(() => {
      setEnergy(prevEnergy => {
        if (prevEnergy < 999) {
          return prevEnergy + 2;
        } else {
          return 1000;
        }
      });
    }, 1000);

    return () => clearInterval(energyInterval);
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleAddBalance = async () => {
    setButtonPressed(true);
    setTimeout(() => {
      setButtonPressed(false);
    }, 200);

    if (energy > 0) {
      setEnergy(prevEnergy => prevEnergy - 1);
      try {
        const response = await fetch('https://oakgame.tech/updateBalance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: userData.id,
            balance: 1
          })
        });
        if (!response.ok) {
          throw new Error('Failed to update balance');
        }
        setUserDb(prevUserDb => ({
          ...prevUserDb,
          balance: prevUserDb.balance + 1
        }));
      } catch (error) {
        console.error('Error updating balance:', error);
      }
    }
  };

  useEffect(() => {
    const debouncedFunction = debounce(handleAddBalance, 3000);
    setDebouncedAddBalance(debouncedFunction);
    return () => clearTimeout(debouncedFunction);
  }, [handleAddBalance]);

  const handleAddBalanceDebounced = useCallback(() => {
    debouncedAddBalance();
  }, [debouncedAddBalance]);

  const handleWindowChange = (windowName) => {
    setActiveWindow(prevWindow => (prevWindow !== windowName ? windowName : prevWindow));
  };

  const getIcon = (windowName) => {
    switch (windowName) {
      case 'Rating':
        return activeWindow === 'Rating' ? RatingActiveIcon : RatingIcon;
      case 'Mine':
        return activeWindow === 'Mine' ? MineActiveIcon : MineIcon;
      case 'App':
        return activeWindow === 'App' ? AppActiveIcon : AppIcon;
      case 'Earn':
        return activeWindow === 'Earn' ? EarnActiveIcon : EarnIcon;
      case 'Friends':
        return activeWindow === 'Friends' ? FriendsActiveIcon : FriendsIcon;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {activeWindow === 'App' && (
        <div className="app-window">
          {userDb && (
            <div id="usercard" className="user-card">
              <div className="user-panel">
                <img src={userDb.photo_url} alt="Avatar" className="avatar transparent" />
                <div className='userInfo_container transparent'>
                  <p className='transparent user_name'>{userDb.fullname}</p>
                  <p className='transparent user_id'>ID: {userDb.user_id}</p>
                </div>
              </div> 
            </div>
          )}

          <div className='balance-container'>
            <div className='user_balance_container'>
              {userDb && (
                <p className="balance">
                  <p className='balance_counter'>{userDb.balance}</p>
                  <img src={MainCoin} alt='coin' />
                </p>
              )}
              <button className={`add-balance-button ${buttonPressed && 'pressed'}`} onClick={handleAddBalanceDebounced}>
                <img src={MainButton} alt='Main Button' className='transparent' />
              </button>
            </div>
          </div>

          <div className='Strange_line_container'>
            <p className='light_counter'>
              <img src={Light} alt='light' className='light_icon' />
              {energy}(+2)<span className='grey_text'>/1,000</span>
            </p>
            <ProgressBar value={energy} max={1000} />
          </div>
        </div>
      )}
      <div className="navigation">
        <button className={`nav-button ${activeWindow === 'Rating' && 'active'}`} onClick={() => handleWindowChange('Rating')}>
          <img src={getIcon('Rating')} alt="Rating Icon" />
          <p className='menu__text'>Rating</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Mine' && 'active'}`} onClick={() => handleWindowChange('Mine')}>
          <img src={getIcon('Mine')} alt="Mine Icon" />
          <p className='menu__text'>Mine</p>
        </button>
        <button className={`nav-button ${activeWindow === 'App' && 'active'}`} onClick={() => handleWindowChange('App')}>
          <img src={getIcon('App')} alt="App Icon" />
          <p className='menu__text'>App</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Earn' && 'active'}`} onClick={() => handleWindowChange('Earn')}>
          <img src={getIcon('Earn')} alt="Earn Icon" />
          <p className='menu__text'>Earn</p>
        </button>
        <button className={`nav-button ${activeWindow === 'Friends' && 'active'}`} onClick={() => handleWindowChange('Friends')}>
          <img src={getIcon('Friends')} alt="Friends Icon" />
          <p className='menu__text'>Friends</p>
        </button>
      </div>

      {activeWindow === 'Rating' && <Rating />}
      {activeWindow === 'Mine' && <Mine />}
      {activeWindow === 'Earn' && <Earn />}
      {activeWindow === 'Friends' && <Friends />}
    </div>
  );
}

export default App;
