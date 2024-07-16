import { useEffect, useState } from "react";
import { customerServices } from "../../services/customer";


const Services = () => {

    const [service, setServices] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        customerServices();
        (async () => {
            const serviceData = await customerServices();
            setServices(serviceData.data.services);
            setLoader(false);
        })()

    }, []); 

    return (
        <div className="flex flex-col w-full justify-center items-center max-[640px]:flex-col max-[640px]:h-[100%] mt-[10%] h-96">
            {
                loader ?
                <>
                    <span className="loading loading-spinner loading-lg text-[#02bdf2]"></span>
                </> :
                <>
                    <div className="w-full flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold max-[640px]:text-2xl">Our services</h1>
                        <hr className="w-[8%] border border-[#02bdf2] mt-2 mb-6 max-[640px]:w-[15%] max-[640px]:mb-3" />
                    </div>
                    <div className="flex w-full justify-center items-center max-[640px]:flex-col max-[640px]:h-[100%]">
                        {
                            service.map((service) =>  
                                { 
                                    return (
                                        <div className="card card-compact bg-base-100 w-96 shadow-xl h-[100%] mx-8 hover:shadow-2xl max-[640px]:mt-4 max-[640px]:mb-4 max-[640px]:w-80">
                                            <figure className="bg-[#02bdf2]">
                                                <img
                                                className="self-center"
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