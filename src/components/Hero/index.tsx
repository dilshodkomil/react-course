import "./index.css"

export const Hero = () => {
    return <div className="container hero__bg">
        <section className="hero">
            <div className="hero__title">The future is <strong>now</strong></div>
            <div className="hero__description">Rocketeer helmets is a visionary enterprise that is trying to improve your health by building modern and comfortable helmets for you.</div>
            <div className="hero__form">
                <div className="hero__form-item">
                    <div className="hero__form-label">Enter your email to get the latest news</div>
                    <input type="text" className="hero__form-input" placeholder="Enter your email here" />
                </div>
                <div className="hero__form-item">
                    <button className="hero__form-submit">Submit</button>
                </div>
            </div>
        </section>
    </div>
}