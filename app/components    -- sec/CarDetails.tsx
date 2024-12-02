export default function CarDetals() {
    const carName = [
        {
            name: "Honda",
            model: "2023",
            color: "Black",
            price: 1000000
        },
        {
            name: "Toyota",
            model: "2023",
            color: "White",
            price: 2000000
        },
        {
            name: "Suzuki",
            model: "2023",
            color: "Red",
            price: 3000000
        },
        {
            name: "BMW",
            model: "2023",
            color: "Blue",
            price: 4000000
        },
        {
            name: "Mercedes",
            model: "2023",
            color: "Green",
            price: 5000000
        },
    ]

    return (
        <div>
            {
                carName.map((car) => {
                    return (
                        <div className="flex bg-red-500 border text-white border-black my-4">
                            <p>{car.name}</p>
                            <p>{car.model}</p>
                            <p>{car.color}</p>
                            <p>{car.price}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}  