import scss from "./wellcome.module.scss";
import first from "../../../assets/first.png";
import frame1 from "../../../assets/Frame 25.png";

const Wellcome = () => {
  return (
    <section className={scss.Wellcome}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <p>Рекламное агенство ADVUP</p>
          </div>
          <div className={scss.intraduse}>
            <div className={scss.intraduse_title}>
              <h1>Новый поток клиентов</h1>
              <h1> Вашему продукту</h1>
            </div>
            <div className={scss.get_started}>
              <img src={first} alt="" />
              <div className={scss.button}>
                <button>Приступим</button>
              </div>
            </div>
          </div>
          <div className={scss.firstFrame}>
            <img src={frame1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
