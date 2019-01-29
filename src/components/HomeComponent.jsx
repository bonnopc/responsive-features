import React, { Component } from "react"
import Items from "../assets/items"
import ItemComponent from "./ItemComponent"
import { 
    FaBolt, FaGreaterThanEqual, FaLeaf, FaMortarPestle, FaRulerCombined,
    FaStreetView, FaTruckLoading
} from "react-icons/fa";

export default class HomeComponent extends Component {
    state = {
        items: []
    }

    componentDidMount(){
        this.generateItemsData()
    }

    generateItemsData = () => this.setState({ items: Items })

    renderIcons = index => {
        let icon = "",
            icons = [
            <FaBolt/>,
            <FaGreaterThanEqual/>,
            <FaLeaf/>,
            <FaTruckLoading/>,
            <FaMortarPestle/>,
            <FaRulerCombined/>,
            <FaStreetView/>
        ]

        if(icons[index]) icon = icons[index]

        return icon
    }

    render = () => (
        <div className="main">
            <div className="container">
                <h1 className="heading">Responsive Features</h1>
                <h3 className="sub-heading">Lorem ipsum dolor sit amet</h3>
                <div className="items-list">
                    {
                        this.state.items.map((item,index) => (
                            <ItemComponent 
                                key={index} 
                                item={item} 
                                icon={this.renderIcons(index)}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}