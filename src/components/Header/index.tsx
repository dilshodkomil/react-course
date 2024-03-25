
import "./index.css"

export const Header = () => {
    return <div className="container header__bg header__fixed">
        <div className="header">
            <div className="header__logo">Rocketeer</div>
            <div className="header__nav">
                <a href="/" className="header__nav-item">Home</a>
                <a href="/" className="header__nav-item">About us</a>
                <a href="/" className="header__nav-item">View Product</a>
                <a href="/" className="header__nav-item">Pricing</a>
            </div>
        </div>
    </div>
}