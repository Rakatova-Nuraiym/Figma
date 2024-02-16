import scss from "./footer.module.scss";
import img from "../../../assets/footer.png";
import vector from "../../../assets/Vector.png";
import twittwr from "../../../assets/twitter.png";
import vk from "../../../assets/vk.png";
import telegramm from "../../../assets/telegramm.png";
import facebook from "../../../assets/facebook.png";
import massege from "../../../assets/messege.png";
import instagramm from "../../../assets/instagram .ng.png";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainPart}>
            <div className={scss.left}>
              <img src={img} alt="" />
              <p>
                С другой стороны рамки и место обучения кадров позволяет
                <p> оценить значение направлений прогрессивного развития!</p>
              </p>
            </div>
            <div className={scss.button}>
              <p>Остались вопросы?</p>
              <button>
                <img src={vector} alt="" />
                Почта
              </button>
            </div>
          </div>
          <div className={scss.links}>
            <h2>Блогерам</h2>
            <h2>Рекламодателям</h2>
            <h2>Пользовательское соглашение</h2>
            <h2>Наши кейсы</h2>
            <h2>Помощь</h2>
          </div>
          <div className={scss.lastFooter}>
            <p>© 2024 Elcho911. All rights reserved.</p>
            <div>
              <img src={twittwr} alt="" />
              <img src={vk} alt="" />
              <img src={telegramm} alt="" />
              <img src={facebook} alt="" />
              <img src={massege} alt="" />
              <img src={instagramm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
