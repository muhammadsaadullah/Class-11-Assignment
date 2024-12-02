export default function ArrayMap(){
    // const fruits = ["Apple", "Banana", "Orange", 80, 811, 849];
    const fruits = [
        {fruitName: "Apple", price: 200},
        {fruitName: "Orange", price: 500},
        {fruitName: "Mango", price: 800},
    ]
    return (
        <div>
            {
                fruits.map((phal) => {
                    return(
                        <div>
                            <div className="border border-red-500 my-3">
                                <h1>{phal.fruitName}</h1>
                                <p>{phal.price}</p>    
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}