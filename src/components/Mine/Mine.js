import React from 'react';
import { useState } from 'react';
import './Mine.css';
import SmallCoin from './mine_components/mine_icons/small_coin.png';
import MainCoin from './mine_components/mine_icons/Main_coin.png';
import Pixar from './mine_components/mine_icons/Pixar.png';
import ArrowRight from './mine_components/mine_icons/arrow_to_right.svg';
import EarnModal1 from './mine_components/SimplePixar1.js';
import EarnModal2 from './mine_components/SimplePixar2.js';
import EarnModal3 from './mine_components/SimplePixar3.js';
import EarnModal4 from './mine_components/SimplePixar4.js';
import EarnModal5 from './mine_components/SimplePixar5.js';
import EarnModal6 from './mine_components/SimplePixar6.js';

const Mine = () => {

  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive4, setModalActive4] = useState(false);
  const [modalActive5, setModalActive5] = useState(false);
  const [modalActive6, setModalActive6] = useState(false);

  
  return (
    <div className='Mine'>
      
      <div className='mine_header'>
        <div className='mine_header_element'>
          <p>Profit per click</p>
          <div className='mine_header_text'>
            <img src={SmallCoin} alt='Coin' />
            <p>+15,3</p>
          </div>
        </div>

        <div className='mine_header_element'>
          <p>Profit per hour</p>
          <div className='mine_header_text'>
            <img src={SmallCoin} alt='Coin' />
            <p>+15,3</p>
          </div>
        </div>
      </div>

      <div className='scroll'>
        <p className="balance">
          <p className='balance_counter'>10 500,00 </p>
          <img src={MainCoin} alt='coin' />
        </p>


        
          <div className='power_section scroll'>
            <h3 className='mine_section_name'>Power</h3>

              <div className='item_container' onClick={() => setModalActive1(true)}>
                <img src={Pixar} alt="pixar" className='item_image' />

                <div className='item_content'>
                  <p className='item_name'>Simple pickaxe 1</p>
                  <div className='item_price'>
                      <div>
                        <p>3 000</p>
                        <img src={SmallCoin} alt='coin' />
                      </div>
                      <p className='item_lvl'>49 lvl</p>
                  </div>
                </div>

                <div></div>
                <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
              </div>

              <div className='item_container' onClick={() => setModalActive2(true)}>
                <img src={Pixar} alt="pixar" className='item_image' />

                <div className='item_content'>
                  <p className='item_name'>Simple pickaxe 2</p>
                  <div className='item_price'>
                      <div>
                        <p>5 000</p>
                        <img src={SmallCoin} alt='coin' />
                      </div>
                      <p className='item_lvl'>16 lvl</p>
                  </div>
                </div>

                <div></div>
                <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
              </div>

              <div className='item_container' onClick={() => setModalActive3(true)}>
                <img src={Pixar} alt="pixar" className='item_image' />

                <div className='item_content'>
                  <p className='item_name'>Simple pickaxe 3</p>
                  <div className='item_price'>
                      <div>
                        <p>9 000</p>
                        <img src={SmallCoin} alt='coin' />
                      </div>
                      <p className='item_lvl'>77 lvl</p>
                  </div>
                </div>

                <div></div>
                <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
              </div>

          </div>

          <div className='power_section last_power_section'>
            <h3 className='mine_section_name'>Mining</h3>

            <div className='item_container' onClick={() => setModalActive4(true)}>
              <img src={Pixar} alt="pixar" className='item_image' />

              <div className='item_content'>
                <p className='item_name'>Simple pickaxe 4</p>
                <div className='item_price'>
                    <div>
                      <p>5 000</p>
                      <img src={SmallCoin} alt='coin' />
                    </div>
                    <p className='item_lvl'>10 lvl</p>
                </div>
              </div>

              <div></div>
              <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
            </div>

            <div className='item_container' onClick={() => setModalActive5(true)}>
              <img src={Pixar} alt="pixar" className='item_image' />

              <div className='item_content'>
                <p className='item_name'>Simple pickaxe 5</p>
                <div className='item_price'>
                    <div>
                      <p>5 000</p>
                      <img src={SmallCoin} alt='coin' />
                    </div>
                    <p className='item_lvl'>150 lvl</p>
                </div>
              </div>

              <div></div>
              <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
            </div>

            <div className='item_container' onClick={() => setModalActive6(true)}>
              <img src={Pixar} alt="pixar" className='item_image' />

              <div className='item_content'>
                <p className='item_name'>Simple pickaxe 6</p>
                <div className='item_price'>
                    <div>
                      <p>5 000</p>
                      <img src={SmallCoin} alt='coin' />
                    </div>
                    <p className='item_lvl'>112 lvl</p>
                </div>
              </div>

              <div></div>
              <p><img src={ArrowRight} className='arrow_to_right' alt="Arrow To Right" /></p>
            </div>
            
          </div>
          <p className='costil'>aaaaa</p>
      </div>


        {/* -------- */}

        <EarnModal1 active={modalActive1} setActive={setModalActive1} />
        <EarnModal2 active={modalActive2} setActive={setModalActive2} />
        <EarnModal3 active={modalActive3} setActive={setModalActive3} />
        <EarnModal4 active={modalActive4} setActive={setModalActive4} />
        <EarnModal5 active={modalActive5} setActive={setModalActive5} />
        <EarnModal6 active={modalActive6} setActive={setModalActive6} />

    </div>
  );
}

export default Mine;
