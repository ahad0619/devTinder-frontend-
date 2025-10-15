

const Shimmer = () => {
    return (
        <div>
            <div className="bg-black min-h-screen flex flex-wrap justify-center items-start gap-6 p-10">
                {Array(6)
                    .fill("")
                    .map((_, i) => (
                        <div
                            key={i}
                            className="w-60 h-72 bg-gray-800 rounded-lg overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent animate-shimmer"></div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Shimmer
