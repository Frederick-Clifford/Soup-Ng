import PropTypes from "prop-types"

import { BANGA_SOUP_ID, EGUSI_SOUP_ID, GROUNDNUT_SOUP_ID, OGBONO_SOUP_ID, OKORO_SOUP_ID, SOUP_SECTION_NEXT_BUTTON_TEXT, SOUP_SECTION_PREV_BUTTON_TEXT, STRING } from "../utils/data"

import backArrowIcon from "../../assets/svg_icons/ic_previous_arrow.svg"
import forwardArrowIcon from "../../assets/svg_icons/ic_next_arrow.svg"

import { Link } from "react-router-dom"

const SoupTitleAndListItem = ({ title, subject }) => {

    return(

        <div className="flex flex-col gap-0.5 px-1">

            <h1 className="sub-title-text">
                {title}
            </h1>

            <ul className="list-disc flex flex-col gap-1 pl-5 pr-1">

                {subject.map((item, index) =>
                
                    <li className="subject-text" key={index}>
                        {item}
                    </li>
                )}

            </ul>
        </div>
    )
}

SoupTitleAndListItem.propTypes = {
    title: PropTypes.string,
    subject: PropTypes.array
}

SoupTitleAndListItem.defaultProps = {
    title: "Unknown",
    subject: []
}









const SoupTitleAndSubjectItem = ({ title, subject }) => {

    return(

        <div className="flex flex-col gap-0.5 px-1">

            <h1 className="sub-title-text">
                {title}
            </h1>

            <p className="subject-text">
                {subject}
            </p>
        </div>
    )
}

SoupTitleAndSubjectItem.propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string
}

SoupTitleAndSubjectItem.defaultProps = {
    title: "Unknown",
    subject: "Unknown"
}











const SoupSection = ({ soup }) => {

    //DON'T CHANGE THE ORDER OF THIS ARRAY, PLEASE
    const soupIds = [
        BANGA_SOUP_ID,
        EGUSI_SOUP_ID,
        GROUNDNUT_SOUP_ID,
        OGBONO_SOUP_ID,
        OKORO_SOUP_ID
    ]

    const selectedSoupId = soupIds.indexOf(soup.id)

    function previousPage() {

        if (selectedSoupId === 0) {

            return `/soup/${soupIds[soupIds.length - 1]}`
        } else {

            return `/soup/${soupIds[selectedSoupId - 1]}`
        }
    }

    function nextPage() {

        if (selectedSoupId === (soupIds.length - 1)) {

            return `/soup/${soupIds[0]}`
        } else {
            
            return `/soup/${soupIds[selectedSoupId + 1]}`
        }
    }

    return(
        
        <section className="flex flex-col gap-2 px-1 container-margin">

            <img className="ml-1 large-image"
                src={soup.image}
                alt="soup" />

            {soup.text.map((item, index) =>

                item.id === STRING ?
                <SoupTitleAndSubjectItem key={index} {...item} />
                :
                <SoupTitleAndListItem key={index} {...item} /> 
            )}

            <div className="mt-5 flex justify-center items-center gap-2 px-2 py-1">

                <Link className="soup-button"
                    reloadDocument
                    to={previousPage()}>

                    <img className="soup-button-icon"
                        src={backArrowIcon}
                        alt="back arrow" />

                    {SOUP_SECTION_PREV_BUTTON_TEXT}
                </Link>

                <Link className="soup-button"
                    reloadDocument
                    to={nextPage()}>
                    {SOUP_SECTION_NEXT_BUTTON_TEXT}

                    <img className="soup-button-icon"
                        src={forwardArrowIcon}
                        alt="forward arrow" />
                </Link>
            </div>
            
        </section>
    )
}

export default SoupSection