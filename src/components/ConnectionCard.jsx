import { Link } from "react-router-dom"


const ConnectionCard = ({data}) => {
    const {firstName , lastName , age , gender , _id , photoUrl} = data

    
    return (
        <div>

            <div className="flex gap-8  p-2 items-center m-10 bg-black mb-2">
                <div className="border w-18 h-18 flex  justify-center rounded-full overflow-hidden bg-gray-700">
                    <img
                        src={photoUrl}
                        alt="Profile picture"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="card-title align-text-top">{firstName}  {lastName || ""} </h2>
                    <p>{age || ""} Years | {gender || ""}</p>
                </div>
                <div>
                    <Link to={`/chat/${_id}`}> 
                    <button className="btn btn-primary ml-30">Message</button>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default ConnectionCard
