import Header from '../../components/prd4/Header/Header';
import ImageSlider from '../../components/prd4/Slider/Slider';
import Exam from '../../components/prd4/Exam/Exam';
import Feature from '../../components/prd4/Feature/Feature';
import VerticalNav from '../../components/prd4/NavBar/verticaltabbar';

const SectionPage=()=> {
  return (
    <div>
      <Header></Header>
      <ImageSlider></ImageSlider>
      <VerticalNav></VerticalNav>
      <Exam></Exam>
      <Feature></Feature>
    </div>
  );
}
export default SectionPage; 