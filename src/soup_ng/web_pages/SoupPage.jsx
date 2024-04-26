import { useParams } from "react-router-dom"

import { BANGA_SOUP, EGUSI_SOUP, GROUNDNUT_SOUP, OGBONO_SOUP, OKORO_SOUP, SOUP_ITEMS } from "../utils/data"

import NavBar from "../components/NavBar"
import ErrorPage from "./ErrorPage"
import SoupSection from "../components/SoupSection"

import PropTypes from "prop-types"

const Soup = ({ soup }) => {

    return(

        <>

            <NavBar isTransparent={false} />      

            <main>

                <SoupSection soup={soup} />
                
            </main>

            <footer className="bg-primary-color flex items-center justify-center text-[18px] text-black font-pacifico py-3">
                &#169; 2024
            </footer>

        </>
    )

}

Soup.propTypes = {
    soup: PropTypes.object
}

Soup.defaultProps = {
    soup: BANGA_SOUP
}







const SoupPage = () => {

    const { soupId } = useParams()

    if (soupId === SOUP_ITEMS[0].id) {

        return(<Soup soup={BANGA_SOUP} />)
    } else if (soupId === SOUP_ITEMS[1].id) {

        return(<Soup soup={EGUSI_SOUP} />)
    } else if (soupId === SOUP_ITEMS[2].id) {

        return(<Soup soup={GROUNDNUT_SOUP} />)
    } else if (soupId === SOUP_ITEMS[3].id) {

        return(<Soup soup={OGBONO_SOUP} />)
    } else if (soupId === SOUP_ITEMS[4].id) {

        return(<Soup soup={OKORO_SOUP} />)
    } else {

        return(<ErrorPage />)
    }

}

export default SoupPage