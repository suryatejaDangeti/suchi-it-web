import { useEffect } from "react";
import { customerServices } from "../../services/customer";


const Services = () => {

    useEffect(() => {
        customerServices();
    }, []);

    const data = {
        "status":"success",
        "services":[
            {
                "id":1,
                "title":"Training",
                "description":"Training in software development involvesacquiring and refining skills through structured learning and practicalexperience.",
                "status":"ON",
                "image":"training.png",
                "working_status":"Working",
                "createdAt":"2024-07-1209:44:47.000000",
                "updatedAt":"2024-07-1209:44:47.000000",
                "color":"02bdf2"
            },
            {
                "id":2,
                "title":"Consulting",
                "description":"Consulting involves providing expertadvice and guidance to individuals or organizations seeking solutions to specific challenges or opportunities withintheir industry or domain.",
                "status":"ON",
                "image":"consulting.png",
                "working_status":"Coming Soon",
                "createdAt":"2024-07-1209:44:47.000000",
                "updatedAt":"2024-07-1209:44:47.000000",
                "color":"02bdf2"
            },
            {
                "id":3,
                "title":"Solutions",
                "description":"Solutions generally refers to the answers,strategies, or methods devised to solve problems or address challenges effectively within various contexts, such astechnology, business, or personal matters.",
                "status":"ON",
                "image":"solutions.png",
                "working_status":"ComingSoon",
                "createdAt":"2024-07-12 09:44:47.000000",
                "updatedAt":"2024-07-12 09:44:47.000000",
                "color":"02bdf2"
            }
            ]
        }

    return (
        <div className="flex justify-center items-center h-screen flex-wrap">
            {/* <h1 className="w-full">Our services</h1> */}
           {
            data.services.map((service) =>  
            { return (

                <div className="w-1/4 border rounded-xl h-[60%] flex flex-col justify-center ml-4 mr-4 p-4 shadow-xl cursor-pointer hover:shadow-2xl">
                    <img className="w-80 h-80 self-center" src = {`https://suchiit.com/app_apis/uploads/${service.image}`} alt= "" />
                    <h1 className="text-lg font-bold mt-1 mb-1">{service.title}</h1>
                    <p className="text-sm mt-1 mb-1">{service.description}</p>
                 </div>
            )
            })
           }
        </div>
    )
}

export default Services;