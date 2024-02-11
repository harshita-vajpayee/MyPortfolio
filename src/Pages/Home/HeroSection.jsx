export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Harshita Vajpayee</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        An enthusiastic Full Stack Web Developer with a strong dedication towards creating web apps.
                        <br/>I am a full stack developer who learns through making wide variety of projects.
                    </p>
                </div>
<button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/Hero.jpeg" width="400px" height="auto"></img>
            </div>
        </section>
    )
}