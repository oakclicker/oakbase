import React, { useState, useEffect } from 'react';
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
import ProgressBar from './components/ProgressBar/ProgressBar'; // Импорт ProgressBar

function App() {
  const [userData, setUserData] = useState(null);
  const [userDb, setUserDb] = useState(null);
  const [ubalance, setBalance] = useState(0);
  const [click, setClick] = useState(0);
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
        console.log('Sending request to fetch user data');
        const response = await fetch('https://oakgame.tech/loadUser?user_id=' + userData.id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          console.log(response);
          throw new Error('Failed to fetch user data');
        }
        const userDb = await response.json();
        setUserDb(userDb);
        setBalance(parseInt(userDb.balance));
        setClick(parseInt(userDb.click_count));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (userData) { // Проверяем, что userData загружены
      fetchUserData();
    }
  }, [userData]); // Используем только userData в зависимости
  
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

  const handleAddBalance = () => {
    setButtonPressed(true);
    setTimeout(() => {
      setButtonPressed(false);
    }, 200);
  
    if (energy > 0) {
      setEnergy(prevEnergy => prevEnergy - 1);
      setBalance(prevBalance => prevBalance + click);
      
      // Сбросить предыдущий таймер
      clearTimeout(debouncedAddBalance);
      
      // Установить новый таймер для отправки запроса через 3 секунды
      setDebouncedAddBalance(setTimeout(() => {
        sendBalanceUpdateRequest();
      }, 2000));
    }
  };
  
  const sendBalanceUpdateRequest = async () => {
    try {
      const response = await fetch('https://oakgame.tech/updateBalance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userData.id,
          balance: ubalance
        })
      });
      if (!response.ok) {
        throw new Error('Failed to update balance');
      }
      setBalance(prevBalance => prevBalance + click); // обновляем баланс в UI
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };
  
  
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Предотвращаем действие по умолчанию (нажатие на Enter)
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
                  <p className="balance">
                      <span className='balance_counter'>{ubalance}</span>
                      <img src={MainCoin} alt='coin' />
                  </p>
                    <button className={`add-balance-button ${buttonPressed && 'pressed'}`} onClick={handleAddBalance} onKeyDown={handleKeyDown}>
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
