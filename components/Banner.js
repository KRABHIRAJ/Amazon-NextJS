import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Banner() {
  return (
    <div className="relative">
      <Carousel
        
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
                <div>
                    <img src="https://links.papareact.com/gi1" />
                </div>
                <div>
                    <img src="https://links.papareact.com/6ff" />
                </div>
                <div>
                    <img src="https://links.papareact.com/7ma" />
                </div>
        </Carousel>
        <div className="absolute  z-100 w-full h-32 bottom-0  bg-gradient-to-t from-[#EAEDED] to-transparent " />
    </div>
  )
}

export default Banner
