import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import Trainings from "../Trainings";
import WorkExperience from "../WorkExperience";
import ContactMe from "../ContactMe";

export default function Home(){
    return (
    <>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        <Trainings/>
        <WorkExperience/>
        <ContactMe/>
        <Footer/>
    </>
    )
    
}