import "./style.scss"
import useCollection from "./useCollection";


const Collection = () => {
    const {
        data,
        isData,
        active,
        isColor,
        changeColor,
        set,
        sweatshirt,
        isTop,
        chooseSweatshirt,
        chooseTop,
        handleActive
    } = useCollection()

    return (
        <div className={"container-fluid"}>

            <div className={"container"}>
                {active && active.length !== 0 ? <div className={"left"}><img src={active[0].img}/></div> : null}
                <div className={"right"}>

                    {
                        isData.map((el) => {
                            return (<div onClick={() => handleActive(el.id)} className={"product"} key={el.id}>
                                <img src={el.img} alt=""/>
                            </div>)
                        })
                    }
                </div>

            </div>
            <div className={"information"}>
                <div className={"sizes"}>
                    <p> Размер: <span>XS (44)</span></p>
                    <button className={"size-xs size"}>XS</button>
                    <button className={"size"}>S</button>
                    <button className={"size"}>M</button>

                </div>

                <div className={"colors"}>
                    <p>Цвет: <span></span></p>
                    {/*<input type={"radio"} className={"color"}/>*/}
                    {/*<input type={"radio"} className={"color"}/>*/}
                    <button className={"color black"}
                            onClick={() => changeColor("black")}>

                    </button>
                    <button className={"color white"}
                            onClick={() => changeColor("white")}>
                    </button>

                </div>

                <div className={"set"}>
                    <p>Комплект: <span></span></p>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <button className={"part"}
                                onClick={() => chooseTop()}>
                            <div className={"check"} style={{backgroundColor: isTop ? "black" : 'transparent'}}></div>
                        </button>
                        <p className={"name"}>Топ</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <button className={"part"}
                                onClick={() => chooseSweatshirt()}>
                            <div className={"check"}
                                 style={{backgroundColor: sweatshirt ? "black" : 'transparent'}}></div>
                        </button>
                        <p className={"name"}>Свитшот</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <button className={"part"}>
                            <div className={"check"} style={{backgroundColor: set ? "black" : 'transparent'}}></div>
                        </button>
                        <p className={"name"}>Брюки</p>
                    </div>

                </div>

                <div className={"last-part"}>
                    <p>ИТОГО:<span>3 470 РУБ.</span></p>

                    <button className={"btn"}>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}
export default Collection