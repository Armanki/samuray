import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return  <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo