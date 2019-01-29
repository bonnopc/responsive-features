import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class ItemComponent extends Component {
    static propTypes = {
        item: PropTypes.shape({
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    }

    maxLength = 60;

    render(){
        const { item, icon } = this.props
        console.log("ItemComponent", icon)
        return(
            <div className="item">
                <span className="icon">{ icon ? icon : ""}</span>
                <h3 className="heading">{item && item.heading}</h3>
                <p className="item-description">
                {
                    item && item.description ?
                    <Fragment>
                        {
                            item.description.length > this.maxLength ?
                            `${item.description.substring(0, this.maxLength)}...` :
                            item.description
                        }
                    </Fragment> : ""
                }
                </p>
            </div>
        )
    }
}