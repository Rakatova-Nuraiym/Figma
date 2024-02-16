import scss from "./Section3.module.scss";
import first from "../../../assets/advantages-1.png";
import second from "../../../assets/advantages-2.png";
import third from "../../../assets/advantages-3.png";
import forth from "../../../assets/advantages-4.png";

const Section3 = () => {
  return (
    <div className={scss.Section3}>
      <div className="container">
        <div className={scss.content}>
          <h1>Наши преимущества</h1>
          <div className={scss.cards1}>
            <div className={scss.background1}>
              <div className={scss.text1}>
                <h1>Всегда выполняем ваши запросы</h1>
                <p>
                  Разнообразный и богатый опыт консультация с <br />
                  профессионалами из IT играет важную роль в формировании
                </p>
              </div>
              <img className={scss.img1} src={first} alt="" />
            </div>
            <div className={scss.background2}>
              <div className={scss.text2}>
                <h1>Профессиональный подход:</h1>
                <p>
                  Рекламные агентства имеют опыт работы в разных отраслях <br />{" "}
                  и знают, как эффективно привлекать целевую аудиторию.
                </p>
              </div>
              <img  src={second} alt="" />
            </div>
          </div>
          <div className={scss.cards2}>
            <div className={scss.background3}>
              <img className={scss.img3} src={third} alt="" />
              <h1>Креативность</h1>
            </div>
            <div className={scss.background4}>
              <div className={scss.text3}>
                <h1>Доступ к новейшим технологиям</h1>
                <p>
                  Рекламные агентства обычно имеют доступ к самым передовым{" "}
                  <br />
                  инструментам и технологиям в области <br /> маркетинга и
                  рекламы.
                </p>
              </div>
              <img className={scss.img4} src={forth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
