import scss from "./keis.module.scss";
import men from "../../../assets/men.png";
import faire from "../../../assets/faire.png";
import line from "../../../assets/Line 3.png";
import firstCard from "../../../assets/firstCard.png";
import secondCard from "../../../assets/secondCard.png";
import thirdCard from "../../../assets/thirdCard.png";
import forthCard from "../../../assets/fothCard.png";
import { useKeenSlider } from "keen-slider/react";

const Keis = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
    },
  });
  const card = [
    {
      title: "Игровой проект War Thunder",
      text: "Специальный проект с Моргенштерном",
      img: firstCard,
    },
    {
      title: "Казино Stake x Drake ",
      text: "Азарт, Рэп, Реклама",
      img: secondCard,
    },
    {
      title: "Игровой проект Free Fire",
      text: "Уникальная рекламная компания",
      img: thirdCard,
    },
    {
      title: "VK Music",
      text: "Музыкальный сервис соц. сети ВКонтакте",
      img: forthCard,
    },
  ];

  return (
    <div className={scss.Keis}>
      <div className="container">
        <div className={scss.content}>
          <h2>Наши кейсы</h2>
          <div className={scss.keis_mainPart}>
            <div className={scss.men_img}>
              <img src={men} alt="" />
            </div>
            <div>
              <div className={scss.right}>
                <div className={scss.right_header}>
                  <img src={faire} alt="" />
                  <button className={scss.first_button}>игры</button>
                  <button className={scss.second_button}>коллабрация</button>
                </div>
                <div className={scss.right_text}>
                  <div>
                    <h1>Игровой проект </h1>
                    <h1>War Thunder X ДУЛО</h1>
                  </div>
                  <p>
                    Разнообразный и богатый опыт консультация с профессионалами
                    из IT играет важную роль в формировании всесторонне
                    сбалансированных нововведений. Значимость этих проблем
                    настолько очевидна, что новая модель организационной.
                  </p>
                  <button>подробнее</button>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.under_keis}>
            <div className={scss.under_keis_container}>
              <div className={scss.black_cub}></div>
              <div></div>
              <div>
                <h3>Общее кол-во просмотров</h3>
                <h1>20.000+</h1>
              </div>
            </div>
            <img src={line} className={scss.line} alt="" />
            <div>
              <div className={scss.under_keis_container}>
                <div className={scss.black_cub}></div>
                <div></div>
                <h3>Лайков</h3>
                <h1>20.000+</h1>
              </div>
            </div>
            <img src={line} className={scss.line} alt="" />
            <div className={scss.under_keis_container}>
              <div className={scss.black_cub}></div>
              <div>
                <h3>охваты</h3>
                <h1>20.000+</h1>
              </div>
            </div>
          </div>
        </div>

        <div className={scss.render_card}>
          <div ref={sliderRef} className="keen-slider">
            {card.map((item, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <div className={scss.cardText}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keis;
