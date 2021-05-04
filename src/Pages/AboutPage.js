import React from 'react'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Title title={'Skills'} span={'Skills'}/>
            <div className="skils-container">
                <SkillsSection skill={'HTML'} progress={'Intermidate'} width={'50%'}/>
                <SkillsSection skill={'CSS'} progress={'Intermidate'} width={'50%'}/>
                <SkillsSection skill={'Java'} progress={'Beginner'} width={'45%'}/>
                <SkillsSection skill={'JavaScript'} progress={'Begineer'} width={'40%'}/>
                <SkillsSection skill={'ReactJS'} progress={'Beginner'} width={'20%'}/>
            </div>

            <Title title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque vitae placeat in autem dolor?'}/>
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque vitae placeat in autem dolor?'}/>
                <ServicesSection image={gamedev} title={'Game Development'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque vitae placeat in autem dolor?'}/>
            </div>
        </div>
    )
}

export default AboutPage;



