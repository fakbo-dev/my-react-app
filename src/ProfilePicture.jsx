import imgUrl from "./assets/vincent.jpg"

function ProfilePicture() {

    const handleClick = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => handleClick(e)} src={imgUrl} alt="Profile Image" />
    )
}

export default ProfilePicture;