import { client } from "../index.js";

export function updateMoviebyId(id, data) {
    return client.db("guvi").collection("movies").updateOne({ id: id }, { $set: data });
}
export function delteMoviebyId(id) {
    return client
        .db("guvi")
        .collection("movies")
        .deleteOne({ id: id });
}
export function getMoviebyId(id) {
    return client.db("guvi").collection("movies").findOne({ id: id });
}
export function createMovies(data) {
    return client.db("guvi").collection("movies").insertMany(data);
}
