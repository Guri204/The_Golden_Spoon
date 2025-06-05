function Button(props) {
    return (
        <div className="buttons">
            <button className="first-btn">{props.menuBtn}</button>
            <button className="second-btn">{props.cartBtn}</button>
        </div>
    );
}

export default Button;