import { Link } from "react-router-dom"

import { HOME_SECTION_BUTTON_TEXT, HOME_SECTION_SUBJECT_TEXT, HOME_SECTION_TITLE_TEXT_PART_ONE, HOME_SECTION_TITLE_TEXT_PART_THREE, HOME_SECTION_TITLE_TEXT_PART_TWO } from "../utils/data"

const HomeSection = () => {

    return(

        <section className="flex flex-col items-center px-2 gap-1 container-margin">

            <h1 className="home-title-text">

                <span>
                    {HOME_SECTION_TITLE_TEXT_PART_ONE}
                </span>

                <br className="block xs:hidden" />

                <span>
                    {HOME_SECTION_TITLE_TEXT_PART_TWO}
                </span>

                <br className="hidden xs:block" />

                <span>
                    {HOME_SECTION_TITLE_TEXT_PART_THREE}
                </span>
            </h1>

            <p className="home-subject-text">
                {HOME_SECTION_SUBJECT_TEXT}
            </p>

            <Link className="rounded-button-full-w mt-3 mb-1"
                to="/soups">
                {HOME_SECTION_BUTTON_TEXT}
            </Link>

        </section>
    )

}

export default HomeSection