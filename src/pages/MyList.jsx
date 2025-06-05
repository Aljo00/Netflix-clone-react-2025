import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const MyList = () => {
  const { user } = useUser();
  const [myList, setMyList] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) return;
    const fetchMyList = async () => {
      const q = query(collection(db, "myList"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setMyList(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchMyList();
  }, [user]);

  const handleRemove = async (id) => {
    await deleteDoc(doc(db, "myList", id));
    setMyList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-white tracking-tight">
        My List
      </h1>
      {myList.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-xl text-gray-300">No items in your list yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {myList.map((item) => (
            <div
              key={item.tmdbId}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg bg-black/60 hover:scale-105 transition-transform"
              onClick={() => navigate(`/player/${item.tmdbId}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.img}`}
                alt={item.name}
                className="h-56 w-full object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item.id);
                }}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-800 text-white p-2 rounded-full z-20 shadow-lg transition-colors"
                title="Remove from My List"
              >
                Remove
              </button>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col">
                <span className="text-lg font-semibold text-white truncate">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
