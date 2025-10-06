
import { defaultPhoto } from '../utils/constants';
const Card = ({ data, className = "" }) => {
    // console.log(data[0])
    const { firstName, gender, age, about , lastName, photoUrl } = data || ""
    // console.log(data)
    return (
        <div className={`w-[30vw] h-[50vh] ml-[35vw] mt-[10vh] ${className}`}>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                    className="h-40"
                        src={photoUrl || defaultPhoto}
                        alt="User Photo" />
                </figure>
                <div className="card-body h-64">
                    <div className="flex justify-between">
                        <h2 className="card-title">{firstName}  {lastName ? lastName : ""}</h2>
                        <span>{gender ? gender : "Gender"} ▪ {age ? age : ""}  Years</span>
                    </div>
                    
                    <p className="mt-4 ">{about}</p>

                    <div className="card-actions flex justify-center gap-5">
                        <button className="btn btn-secondary">Ignore</button>
                        <button className="btn btn-primary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
