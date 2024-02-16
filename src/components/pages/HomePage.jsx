import Keis from "./Keis/Keis";
// import Cards from "./Cards/Cards";
import Wellcome from "./homeSection/Wellcome";
import Lenta from "./lenta/Lenta";
import Section3 from "./Section3/Section3";
import Letter from "./homeSection/letter/Letter";


const HomePage = () => {
  return (
    <div>
      <Wellcome />
      <Lenta />
      <Keis />
      <Section3 />
      <Letter/>
    </div>
  );
};

export default HomePage;
