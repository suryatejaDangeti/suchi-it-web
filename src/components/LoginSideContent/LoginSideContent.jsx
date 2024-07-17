import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const LoginSideContent = () => {
    return (
        <div className="bg-primary w-1/2 max-[640px]:hidden h-screen flex flex-col justify-center items-center">
                <div className="w-[400px] h-[400px]">
                    <img className="min-w-full max-w-full" src = "/loginbg.png" alt="logo" />
                    <div className="mt-10">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                        >
                            <p className="text-xl font-bold text-white">Hello in login page</p>
                            <p className="text-xl font-bold text-white">Login or Register</p>
                        </Carousel>
                    </div>
                </div>
            </div>
    )
}

export default LoginSideContent;