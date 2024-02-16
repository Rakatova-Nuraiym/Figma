// import scss from "./lenta.module.scss";
// import first from "../../../assets/2.png";
// import second from "../../../assets/3.png";
// import third from "../../../assets/4.png";
// import forth from "../../../assets/5.png";
// import fifth from "../../../assets/6.png";
// import sixth from "../../../assets/7.png";
// import { useKeenSlider } from "keen-slider/react";

// const img = [
//   {
//     img: first,
//   },
//   {
//     img: second,
//   },
//   {
//     img: third,
//   },
//   {
//     img: forth,
//   },
//   {
//     img: fifth,
//   },
//   {
//     img: sixth,
//   },
//   {
//     img: first,
//   },
// ];

// const animation = { duration: 1000, easing: (t) => t };

// const Lenta = () => {
//    const [sliderRef] = useKeenSlider({
//      loop: true,
//      renderMode: "performance",
//      drag: false,
//      created(s) {
//        s.moveToIdx(1, true, animation);
//      },
//      updated(s) {
//        s.moveToIdx(s.track.details.abs + 1, true, animation);
//      },
//      animationEnded(s) {
//        s.moveToIdx(s.track.details.abs + 1, true, animation);
//      },
//    });

//   return (
//     <div className={scss.MainLenta}>
//       <div className="container">
//         <div ref={sliderRef} className="keen-slider">
//           {img.map((item, index) => (
//             <img
//               key={index}
//               src={item.img}
//               alt=""
//               className="keen-slider__slide number-slide1"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lenta;

import scss from './lenta.module.scss'
import img1 from "../../../assets/2.png";
import img2 from "../../../assets/3.png";
import img3 from "../../../assets/4.png";
import img4 from "../../../assets/5.png";
import img5 from "../../../assets/6.png";
import img6 from "../../../assets/7.png";
import { useKeenSlider } from "keen-slider/react";
const logos = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
 
];
const animation = { duration: 9000, easing: (t) => t };
const Lenta = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className={scss.Rectangle}>
      <div className={scss.content}>
        <div className={scss.Parent}>
          <div ref={sliderRef} className={scss.keen_slider}>
            {logos.map((item, index) => (
              <div key={index} className="keen-slider__slide number-slide1">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lenta;
