import {useEffect, useState} from "react";
import img1 from "../../assets/images/topbryukiblack1.png";
import img2 from "../../assets/images/switshotbryukiblack2.png";
import img3 from "../../assets/images/switshotbryukiblack3.png";
import img4 from "../../assets/images/switshotbryukiblack4.png";
import img5 from "../../assets/images/switshotbryukiblack5.png";
import img6 from "../../assets/images/topbryukiblack2.png";
import img7 from "../../assets/images/topbryukiblack3.png";
import img8 from "../../assets/images/topbryukiblack4.png";
import img9 from "../../assets/images/topbryukiblack5.png";
import img10 from "../../assets/images/topbryukiwhite1.png"
import img11 from "../../assets/images/topbryukiwhite2.png"
import img12 from "../../assets/images/topbryukiwhite3.png"
import img13 from "../../assets/images/topbryukiwhite4.png"
import img14 from "../../assets/images/topbryukiwhite5.png"
import img15 from "../../assets/images/switshotbryukiwhite1.png"
import img16 from "../../assets/images/switshotbryukiwhite2.png"
import img17 from "../../assets/images/switshotbryukiwhite3.png"
import img18 from "../../assets/images/switshotbryukiwhite4.png"
// import img19 from "../../assets/images/switshotbryukiwhite5.png"


// import {data} from "../data";
const UseCollection = () => {
    const data = [{
        id: 1,
        img: img1,
        type: 'top',
        color: "black"
    },
        {
            id: 2,
            img: img2,
            type: "sweatshirt",
            color: "black"
        },
        {
            id: 3,
            img: img3,
            type: "sweatshirt",
            color: "black"
        },
        {
            id: 4,
            img: img4,
            type: "sweatshirt",
            color: "black"
        },
        {
            id: 5,
            img: img5,
            type: "sweatshirt",
            color: "black"
        },
        {
            id: 6,
            img: img6,
            type: 'top',
            color: "black"
        },
        {
            id: 7,
            img: img7,
            type: 'top',
            color: "black"
        },
        {
            id: 8,
            img: img8,
            type: 'top',
            color: "black"
        },
        {
            id: 9,
            img: img9,
            type: 'top',
            color: "black"
        },
        {
            id: 10,
            img: img10,
            type: 'top',
            color: "white"
        },
        {
            id: 11,
            img: img11,
            type: 'top',
            color: "white"
        },
        {
            id: 12,
            img: img12,
            type: 'top',
            color: "white"
        },
        {
            id: 13,
            img: img13,
            type: 'top',
            color: "white"
        },
        {
            id: 14,
            img: img14,
            type: 'top',
            color: "white"
        },
        {
            id: 15,
            img: img15,
            type: "sweatshirt",
            color: "white"
        },
        {
            id: 16,
            img: img16,
            type: "sweatshirt",
            color: "white"
        }, {
            id: 17,
            img: img17,
            type: "sweatshirt",
            color: "white"
        },
        {
            id: 18,
            img: img18,
            type: "sweatshirt",
            color: "white"
        },
        // {
        //     id: 19,
        //     img: img19,
        //     type:"sweatshirt",
        //     color: "white"
        // },
    ]
    const [isData, setData] = useState(data.filter(el => el.type === "top" && el.color === "white"))
    const [active, setActive] = useState([isData[0]])
    const [isColor, setColor] = useState(false)
    const [set, setSet] = useState(true)
    const [sweatshirt, setSweatshirt] = useState(false)
    const [isTop, setTop] = useState(true)
    const [button,setButton]=useState('XS')
    const [btnStyle,setBtnStyle]=useState(false)
    const [colorName,setColorName]=useState("Белый")
    const [isSetName,setIsSetName]=useState("Брюки + Топ")
    useEffect(() => {
        setActive([isData[0]])
    }, [isData])

    const changeSize=()=>{
       setBtnStyle(!btnStyle)
    }
    const changeColor = (color) => {
        if (color === "black") {
            setColor(true)
            setColorName("Черный")
            if (isTop) {
                changeItems("top", "black")
                // setIsSetName("Брюки + Топ")
            }
            if (sweatshirt) {
                changeItems("sweatshirt", "black")
                // setIsSetName("Брюки + Свитшот")

            }

        }
        if (color === "white") {
            setColor(false)
            if (isTop) {
                changeItems("top", "white")
                // setIsSetName("Брюки + Топ")
            }
            if (sweatshirt) {
                changeItems("sweatshirt", "white")
                // setIsSetName("Брюки + Свитшот")

            }
        }
    }

    const changeItems = (item, color) => {
        if (item === "sweatshirt") {
            if (color === 'black') {
                setData(data.filter(el => el.type === "sweatshirt" && el.color === "black"))
                setIsSetName("Брюки + Свитшот")

            } else {
                setData(data.filter(el => el.type === "sweatshirt" && el.color === "white"))
                setIsSetName("Брюки + Свитшот")


            }
        }
        if (item === "top") {
            if (color === 'black') {
                setData(data.filter(el => el.type === "top" && el.color === "black"))
                setIsSetName("Брюки + Топ")

            } else {
                setData(data.filter(el => el.type === "top" && el.color === "white"))
                setIsSetName("Брюки + Топ")


            }
        }

    }
    const chooseSweatshirt = () => {
        setSweatshirt(true)
        setTop(false)
        changeItems("sweatshirt")
    }
    const chooseTop = () => {
        setTop(true)
        setSweatshirt(false)
        changeItems("top")
    }

    const handleActive = (id) => {
        setActive(isData.filter(el => el.id === id))
    }
    return {
        data,
        isData,
        setData,
        active,
        setActive,
        setColor,
        changeColor,
        isColor,
        setSet,
        set,
        isTop,
        sweatshirt,
        chooseSweatshirt,
        chooseTop,
        handleActive,
        changeSize,
        button,
        setButton,
        btnStyle,colorName,
        isSetName
    }
}
export default UseCollection
