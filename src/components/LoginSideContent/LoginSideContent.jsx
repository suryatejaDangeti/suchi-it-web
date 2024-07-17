import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: '-30px', position: 'absolute' }}>
        <ul style={{ margin: "0px"}}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <button className="slick-dot">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
  };

const slider =  <div className="mx-auto max-w-screen-md mt-5">
<Slider {...settings}>
  <div className="text-center text-white">
    <h3>New Scheduling And Routing Options</h3>
    <p>Please Login and access our services</p>
  </div>
  <div className="text-center text-white">
    <h3>New Scheduling And Routing Options</h3>
    <p>Please Login and access our services</p>
  </div>
</Slider>
<style jsx global>{`
        .slick-dots li button:before {
          color: #fff !important; /* Change dot color to white */
          opacity: 1 !important; /* Ensure dots are fully visible */
        }

        .slick-dots li.slick-active button:before {
          color: #000 !important; /* Change active dot color to white */
        }
      `}</style>
</div>



const LoginSideContent = () => {
    return (
        <div className="bg-primary w-1/2 max-[640px]:hidden h-screen flex flex-col justify-center items-center">
                <div className="w-[400px] h-[400px]">
                    <img className="min-w-full max-w-full" src = "/loginbg.png" alt="logo" />
                    <div>
                    {slider}
                    </div>
                </div>
            </div>
    )
}

export default LoginSideContent;






