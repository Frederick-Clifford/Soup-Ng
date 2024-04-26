import { NAV_BAR_TITLE_TEXT } from "../utils/data"

import PropTypes from "prop-types"

import soupNgIcon from "../../assets/svg_icons/ic_soup_ng.svg"

const NavBar = ({isTransparent}) => {

    return (
        
        <nav className={`cursor-text z-50 h-[50px] flex justify-start ${isTransparent ? "bg-primary-color bg-opacity-40" : "bg-primary-color bg-opacity-100"} fixed items-center gap-2 md:gap-3 p-2 inset-x-0 top-0 nav-bar`}>

            <img className="w-[33px] h-[33px] object-contain"
                src={soupNgIcon}
                alt="soup ng" />

            <h1 className="nav-bar-text">
                {NAV_BAR_TITLE_TEXT}
            </h1>

        </nav>
    )

}

NavBar.propTypes = {
    isTransparent: PropTypes.bool
}

NavBar.defaultProps = {
    isTransparent: false
}

export default NavBar