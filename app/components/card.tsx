import Image from "next/image";

export default function Card(props: any) {
    return (
        <div className="flex w-full">

            <div className="flex flex-col w-full h-52 border justify-center items-center bg-white">
                <div className=" flex justify-center items-center h-96 w-10/12">
                    <Image
                        src={props.image}
                        alt=""
                        width={135}
                        height={130}
                    />
                </div>
                <div className="flex flex-col justify-center items-center pt-2 w-10/12">
                    <div>
                        <h1 className="text-blue-800 font-semibold">
                            {props.name}
                        </h1>
                    </div>
                    <div className="text-green-500 text-sm">
                        PKR {props.price}/-
                    </div>
                    <div className="flex flex-row gap-2 m-3 pb-1 justify-center items-center">
                        <div className="flex -mt-[2px]">
                            <Image
                                src={props.stars}     
                                alt=""
                                width={70}
                                height={100}
                            />                      
                        </div>
                        <div className="text-sm text-gray-500">
                            {props.rating}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}