

const ConnectionCard = ({data}) => {
    const {firstName , lastName , age , gender} = data
    
    return (
        <div>

            <div className="flex gap-8  p-2 items-center m-10 bg-black mb-2">
                <div className="border w-18 h-18 flex  justify-center rounded-full overflow-hidden bg-gray-700">
                    <img
                        src="https://img.freepik.com/premium-photo/beauty-woman-face-portrait-beautiful-spa-model-girl-with-perfect-fresh-clean-skin-generated-by-ai_911060-3271.jpg?w=2000"
                        alt="Profile picture"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="card-title align-text-top">{firstName}  {lastName || ""} </h2>
                    <p>{age || ""} Years | {gender || ""}</p>
                </div>
                <div>
                     <button className="btn btn-primary ml-30">Message</button>
                </div>
            </div>



        </div>
    )
}

export default ConnectionCard
