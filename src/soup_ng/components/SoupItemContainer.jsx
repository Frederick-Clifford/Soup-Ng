import { SOUP_ITEMS } from "../utils/data"

import SoupItem from "./SoupItem"

const SoupItemContainer = () => {

    return(
        
        <section className="px-1 container-margin">

            <div className="soup-card-items-container">

                {SOUP_ITEMS.map((item, index) =>
            
                    <SoupItem key={index} {...item} />
                )}

            </div>
        
        </section>
    )

}

export default SoupItemContainer