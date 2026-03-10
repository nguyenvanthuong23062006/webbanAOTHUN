import "./productList.css";
function Card({imag,infor,btn}){
    return(
        <>
        <div className="card">
            <div className="card_img">{imag}</div>
            <div className="card_infor">{infor}</div>
            <div className="card_btn">{btn}</div>
        

        </div>
        </>
    )
}
export default Card;