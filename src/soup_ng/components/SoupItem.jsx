import { Link } from "react-router-dom"

import arrowRightIcon from "../../assets/svg_icons/ic_arrow_right_circle.svg"

import PropTypes from "prop-types"

const SoupItem = ({id, title, image}) => {

    return(

        <div className="soup-card-item">

            <img className="soup-card-image"
                src={image}
                alt={title} />

            <Link className="absolute bottom-2 right-1 left-1"
                to={`/soup/${id}`}
                reloadDocument>

                <div className="soup-card-item-title-background">

                    <h1 className="soup-card-item-title-text">
                        {title}
                    </h1>

                    <img className="icon-image"
                        src={arrowRightIcon}
                        alt="arrow" />

                </div>

            </Link>

        </div>
    )

}

SoupItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.any
}

SoupItem.defaultProps = {
    id: "Unknown",
    title: "Unknown",
    image: "Unknown"
}

export default SoupItem