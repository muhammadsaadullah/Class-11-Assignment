import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
        let fullName = "John Doe";
        let address = "Karachi, Pakistan";
        // let favDish = "Biryani";
        // let favColor = "Green";
        let rollNumber = 234802394;

        let fullName2 = "Ali jawad"
        let address2 = "Hyd"
        let rollNumber2 = "213897"
    return (
        <div>
            <ChildComponent 
                name={fullName} 
                address={address} 
                // dish={favDish}
                // color={favColor}
                rollNO={rollNumber}
            />

            <ChildComponent 
                name={fullName2}
                address={address2}
                rollNO={rollNumber2}
            />

        </div>
    );
}