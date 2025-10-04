import { useDispatch, useSelector } from "react-redux";
import { Base_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=> store.feed)


  const fetchData = async () => {
    try {
      if(feed) return
      const res = await axios.get(Base_URL + "feed", { withCredentials: true });
      dispatch(addFeed(res.data));
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Feed
    </div>
  );
};

export default Feed;
