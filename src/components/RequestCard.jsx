

const RequestCard = ({ data }) => {
    const { firstName, lastName, age, gender, photoUrl } = data.fromUserId
    console.log(data.fromUserId)
    return (
        <>
            <div className="flex justify-center pb-4 ">
                <div className="card bg-neutral text-neutral-content w-96 flex items-center p-4 gap-4">
                    <div className="border w-18 h-18 flex  justify-center rounded-full overflow-hidden bg-gray-700">
                        <img
                            src="https://img.freepik.com/premium-photo/beauty-woman-face-portrait-beautiful-spa-model-girl-with-perfect-fresh-clean-skin-generated-by-ai_911060-3271.jpg?w=2000"
                            alt="Profile picture"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="card-body p-0 text-center items-center">
                        <div className="flex gap-4">
                            <h2 className="card-title align-text-top">{firstName} {lastName} </h2>
                            <p>30 years | Female</p>
                        </div>
                        <p>About</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn btn-ghost">Deny</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default RequestCard
