import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const INITIAL_STATE = {
  user: {
    profilePicture:
      "https://media.comicbook.com/2021/07/rick-and-morty-season-5-episode-3-morty-adult-swim-1274605-1280x0.jpeg",
    coverPicture: "https://wallpaperaccess.com/full/85323.png",
    isAdmin: false,
    _id: "611a2b87cfe2ce1e90465f7d",
    username: "Morty",
    email: "morty@gmail.com",
    password: "$2b$10$D1BtVBeUzHMbQ2EnNmdu7e/aeFttGj6TXdyGmflfLlIfJ.q2i3wAm",
    createdAt: "2021-08-16T09:10:31.091Z",
    updatedAt: "2021-08-16T15:55:38.302Z",
    __v: 0,
    city: "New York",
    describe: "I love my Inter-Dimentional travels",
    from: "Earth 264",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
