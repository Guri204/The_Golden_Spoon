import Button from "./Button";


function Banner(props) {
    return(
        <section className="banner">
            <div className="banner-content">
                <h2>{props.bannerHeading}</h2>
                <p>{props.paragraph}</p>
                <Button menuBtn={props.menuBtn} cartBtn={props.cartBtn}/>
            </div>
        </section>

    );
}

export default Banner;