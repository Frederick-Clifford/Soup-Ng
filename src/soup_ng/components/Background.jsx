import backgroundVideoOne from "../../assets/video/food_vid_one.mp4"
import backgroundVideoTwo from "../../assets/video/food_vid_two.mp4"

const Background = () => {

    return(

        <>
        
            <video className="background block md:hidden" autoPlay muted loop>
                
                <source src={backgroundVideoTwo} />
            </video>

            <video className="background hidden md:block" autoPlay muted loop>
                
                <source src={backgroundVideoOne} />
            </video>

        </>

    )
}

export default Background