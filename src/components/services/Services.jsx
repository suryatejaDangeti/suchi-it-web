import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customerServices } from "../../services/customer";


const Services = () => {

    const [service, setServices] = useState([]);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        customerServices();
        (async () => {
            try {
                const serviceData = await customerServices();
                setServices(serviceData.data.services);
                setLoader(false);
            } catch(error) {
                navigate('/')
            }
        })()

    }, []); 

    return (
        <div className="flex flex-col w-full justify-center items-center max-[640px]:flex-col max-[640px]:h-[100%] mt-[20%] md:mt-[15%] h-96">
            {
                loader ?
                <>
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </> :
                <>
                    <div className="w-full flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold max-[640px]:text-2xl">Our Services</h1>
                        <hr className="w-[8%] border border-primary mt-2 mb-12 max-[640px]:w-[15%] max-[640px]:mb-3" />
                    </div>
                    <div className="flex w-full justify-center items-center max-[640px]:flex-col max-[640px]:h-[100%]">
                        {
                            service.map((service) =>  
                                { 
                                    return (
                                        <div className="card card-compact bg-base-100 w-96 shadow-xl h-[100%] mx-8 hover:shadow-2xl max-[640px]:mt-4 max-[640px]:mb-4 max-[640px]:w-80">
                                            <figure className={`bg-[#${service.color}] sm:h-[320] sm:w-[320] md:h-[384px] md:w-[384px]`}>
                                                <img
                                                className="self-center w-[200px]"
                                                src={`https://suchiit.com/app_apis/uploads/${service.image}`}
                                                alt={service.title} />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{service.title}</h2>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Services;