import { useState } from "react";
import scss from "./letter.module.scss";
import axios from "axios";
import letter from "../../../../assets/letter.svg";
import letter2 from "../../../../assets/Group 30.png";
import vector from "../../../../assets/Vector 1.png";
import vector2 from "../../../../assets/Vector 4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url =
  "https://api.elchocrud.pro/api/v1/dacac33df125a79cbb44bcde51498a32/blogger";
const url2 =
  "https://api.elchocrud.pro/api/v1/09c2f59f0ef032e231d8b30fb9e89917/advertiser";

const Letter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComments] = useState("");

  const [completed, setCompleted] = useState(false);

  const blogging = () => {
    setCompleted(true);
  };
  const advertising = () => {
    setCompleted(false);
  };

  const postReq = async () => {
    if (name !== "" && email !== "" && number !== "" && comment !== "") {
      const newObj = {
        name,
        email,
        number,
        comment,
      };
      const response = await axios.post(completed ? url : url2, newObj);
      console.log(response.data);

      toast.success("wellcome!");

      setName("");
      setEmail("");
      setNumber("");
      setComments("");
    } else {
      toast.error("full the field!");
    }
  };

  return (
    <div className={scss.Letter}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Оставить заявку</h1>
            <div>
              <p> Рекламные агентства имеют опыт работы в разных отраслях и </p>
              <p>знают, как эффективно привлекать целевую аудиторию.</p>
            </div>
          </div>

          <div className={scss.buttonsCard}>
            <p>Кто по жизни?</p>
            <div className={scss.buttons}>
              <button
                onClick={blogging}
                className={completed ? scss.blogging : scss.newOne}
              >
                блогер
              </button>
              <button
                onClick={advertising}
                className={!completed ? scss.blogging : scss.newOne}
              >
                Рекламодатель
              </button>
            </div>
          </div>
          <div className={scss.inputs}>
            <div>
              <label htmlFor="name">Ваше имя</label>
              <input
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email">Почта</label>
              <input
                placeholder="Введите электронную почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="number">Телефон</label>
              <input
                placeholder="Введите ваш номер телефона"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id="number"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="comment">Комментарий</label>
              <textarea
                placeholder="Введите ваш номер телефона"
                value={comment}
                onChange={(e) => setComments(e.target.value)}
                name=""
                id="comment"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className={scss.letterFooter}>
            <button
              onClick={() => {
                postReq();
              }}
            >
              Отправить
            </button>

            <ToastContainer />
            <p>
              Нажав на кнопку, вы соглашаетесь
              <p>на обработку персональных данных</p>
            </p>
          </div>
        </div>
      </div>
      <img className={scss.first} src={letter} alt="" />
      <img className={scss.second} src={letter2} alt="" />
      <img className={scss.vector} src={vector} alt="" />
      <img className={scss.vector2} src={vector} alt="" />
      <img className={scss.vector3} src={vector2} alt="" />
    </div>
  );
};

export default Letter;
