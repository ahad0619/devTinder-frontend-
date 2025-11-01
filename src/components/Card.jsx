import axios from 'axios';
import { Base_URL, defaultPhoto } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const Card = ({ data, className = "" }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, gender, age, about, photoUrl, _id } = data;

  const fetchData = async (status, _id) => {
    try {
      await axios.post(`${Base_URL}/request/${status}/${_id}`, {}, { withCredentials: true });
      dispatch(removeFeed(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`flex justify-center mt-10 px-2 sm:px-4 ${className}`}>
      <div className="card bg-base-300 w-full sm:w-80 md:w-96 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
        {/* User Photo */}
        <figure className="overflow-hidden rounded-t-xl">
          <img
            className="w-full h-48 object-cover"
            src={photoUrl || defaultPhoto}
            alt={`${firstName} ${lastName}`}
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4 flex flex-col justify-between h-64">
          {/* Name, Gender & Age */}
          <div className="flex justify-between items-center">
            <h2 className="card-title text-lg font-bold">{firstName} {lastName || ""}</h2>
            <span className="text-sm text-gray-500">
              {gender || "Gender"} ▪ {age || "--"} Years
            </span>
          </div>

          {/* About section */}
          <p className="text-sm text-gray-700 mt-3 line-clamp-4">{about || "No description available."}</p>

          {/* Action buttons */}
          <div className="card-actions flex justify-center gap-4 mt-4">
            <button
              className="btn btn-outline btn-secondary w-24"
              onClick={() => fetchData("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary w-24"
              onClick={() => fetchData("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
