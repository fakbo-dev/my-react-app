// Click Event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler



function Button() {

    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} Stop clicking me`);

    // let count = 0;

    // const handleClick = (name) => {

    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OUCH";

    return (

        <>
            <button onClick={(e) => handleClick(e)}>Click Me</button>
        </>
    )
}

// export default Button;


// import imgUrl from "./assets/vincent.jpg"

// function ProfilePicture() {

//     const handleClick = (e) => e.target.style.display = "none";
//     return (
//         <img onClick={(e) => handleClick(e)} src={imgUrl} alt="Profile Image" />
//     )
// }

// export default ProfilePicture;