import { useDispatch, useSelector } from "react-redux";
import { Base_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed) || [];

  const fetchData = async () => {
    try {
      const res = await axios.get(Base_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 sm:px-6 lg:px-10">
      {feedData.length === 0 ? (
        <h1 className="text-center font-semibold text-xl sm:text-2xl text-gray-400">
          That's all for today! You have gone through all the users
        </h1>
      ) : (
        <div className="flex flex-col items-center gap-8">
          {/* Render each card, for now using the first card */}
          <Card data={feedData[0]} />
        </div>
      )}
    </div>
  );
};

export default Feed;
