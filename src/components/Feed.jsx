import { useDispatch, useSelector } from "react-redux";
import { Base_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed) || []
  const fetchData = async () => {
    try {
      const res = await axios.get(Base_URL + "feed", { withCredentials: true });
      dispatch(addFeed(res.data));

    }
    catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {feedData.length == 0 ? (
        <h1 className="flex justify-center mb-6 font-semibold text-2xl text-gray-400">
          Thats all for today! you have gone through all the users
        </h1>) : (
        <div>
          <Card data={feedData[0]} />
        </div>
      )
      }
    </>
  );
};

export default Feed;
