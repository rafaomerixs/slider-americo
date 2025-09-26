import { useState } from 'react'
import './App.css'
import lebron from './assets/lerbon22.webp'
import tatum from './assets/tatum3.webp'
import sga from './assets/shai001.webp'
import Slider1 from './assets/1.jpg'
import Slider2 from './assets/2.jpg'
import Slider3 from './assets/3.jpg'
import Slider4 from './assets/slider4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={tatum} alt="" className="img-card" />
              <h2 className="titulo-card">Jordam Tatum 3</h2>
              <p className="desc">O Jordan Tatum 3 “Zen” é uma homenagem ao estilo de jogo calmo e preciso de Jayson Tatum.</p>
              <p className="preco">R$ 1.199,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={lebron} alt="" className="img-card" />
              <h2 className="titulo-card">Nike LeBron XXII x Monopoly EP 'Currency'</h2>
              <p className="desc">O LeBron não vai desacelerar tão cedo. O pesadelo do campo aberto está mais rápido e ágil do que nunca. </p>
              <p className="preco">R$ 1.599,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={sga} alt="" className="img-card" />
              <h2 className="titulo-card">Converse Shai 001 Butter</h2>
              <p className="desc">Primeiro tênis assinatura de SGA, une performance e estilo fora da quadra. </p>
              <p className="preco">R$ 3.800,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/4Aoz5hNvTf0?autoplay=1&mute=1&controls=0&loop=1&playlist=4Aoz5hNvTf0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
