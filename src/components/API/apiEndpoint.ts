export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_MOVIE_DB_KEY as string,
  },
};
