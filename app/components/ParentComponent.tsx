import Card from "./card";

export default function ParentComponent() {
    let Car = [
        {
            name: "Honda",
            image: "/Civic.jpg",
            price: 3000000,
            stars: "/rating.png",
            rating: "199 Reviews"
        },
        {
            name: "Toyota",
            image: "/Corolla.jpg",
            price: 2000000,
            stars: "/rating.png",
            rating: "249 Reviews"
        },
        {
            name: "Suzuki",
            image: "/Alto.png",
            price: 1300000,
            stars: "/rating.png",
            rating: "328 Reviews"
        },
        {
            name: "BMW",
            image: "/bmw.jpg",
            price: 400000000,
            stars: "/rating.png",
            rating: "436 Reviews"
        },
        {
            name: "Mercedes",
            image: "/merc amg one.jpg",
            price: 500000000,
            stars: "/rating.png",
            rating: "589 Reviews"
        },
    ]
    return (
        <div>
            <div className="flex flex-row justify-self-center w-[80%]">
                {
                    Car.map((vehical) => {
                        return (
                            <div className="w-full px-1.5 py-3 mt-52">
                                <Card 
                                    name={vehical.name}
                                    image={vehical.image}
                                    price={vehical.price}
                                    stars={vehical.stars}
                                    rating={vehical.rating}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}