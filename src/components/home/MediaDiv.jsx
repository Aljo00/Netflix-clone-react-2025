import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useUser } from "../../context/UserContext";
import { db } from "../../config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

const MediaDiv = ({ img, name, id }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [inMyList, setInMyList] = React.useState(false);

  React.useEffect(() => {
    if (!user) return setInMyList(false);
    const checkInList = async () => {
      const q = query(
        collection(db, "myList"),
        where("uid", "==", user.uid),
        where("tmdbId", "==", id)
      );
      const querySnapshot = await getDocs(q);
      setInMyList(!querySnapshot.empty);
    };
    checkInList();
  }, [user, id]);

  const handleAddToList = async (e) => {
    e.stopPropagation();
    if (!user) return;
    const q = query(
      collection(db, "myList"),
      where("uid", "==", user.uid),
      where("tmdbId", "==", id)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      await addDoc(collection(db, "myList"), {
        uid: user.uid,
        tmdbId: id,
        img,
        name,
      });
      setInMyList(true);
      toast.success("Added to My List");
    } else {
      toast.info("Already in My List");
    }
  };

  return (
    <div
      onClick={() => navigate(`/player/${id}`)}
      className="flex-shrink-0 relative flex-col items-center p-0 cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt={name}
        className="h-44 object-cover rounded-sm"
      />
      <button
        onClick={handleAddToList}
        className={`absolute top-2 right-2 p-2 rounded-full z-10 transition-colors ${
          inMyList ? "bg-green-600" : "bg-black/60 hover:bg-red-600"
        }`}
        disabled={inMyList}
      >
        {inMyList ? (
          <FaCheck className="text-white text-lg" />
        ) : (
          <FaPlus className="text-white text-lg" />
        )}
      </button>
      <div>
        <h1 className="absolute bottom-1 lef-0 mt-2 text-md font-medium bg-black/30 pl-2">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default MediaDiv;
