function Card({ item }) {
    // const{src,photographer}=item
    // const{large}=src
    return (
        < div className="picture" >

            <div className="imageContainer">
                <img src={item.src.large} alt="" />
            </div>
            <div className="info">
                {item.photographer}
            </div>


        </div >
    )

}

export default Card