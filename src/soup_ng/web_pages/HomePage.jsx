import HomeSection from "../components/HomeSection"
import Background from "../components/Background"
import NavBar from "../components/NavBar"

const HomePage = () => {

    return(

        <>

            <NavBar isTransparent={true} />

            <Background />
            
            <main>

                <HomeSection />

            </main>

        </>
    )

}

export default HomePage