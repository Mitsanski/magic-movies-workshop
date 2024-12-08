import Movie from '../models/Movie.js';
import movie from "../models/Movie.js";

// TODO: Filter in db not in memory
const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery.find({title: {$regex: filter.search, $options: 'i'}});
        // moviesQuery.regex('title', new RegExp(filter.search, 'i'))
    }

    if (filter.genre) {
        moviesQuery.find({genre: filter.genre.toLowerCase()});
        // moviesQuery.where('genre').equals(filter.genre.toLowerCase())
    }

    if (filter.year) {
        moviesQuery.find({year: filter.year});
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
};

const create = (movie, ownerId) => Movie.create({...movie, owner: ownerId})

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, character) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, {$push: {casts: {cast: castId, character}}});
};

const update = (movieId, movie) => Movie.findByIdAndUpdate(movieId, movie);

const remove = (movieId) => Movie.findByIdAndDelete(movieId);

export default {
    getAll,
    create,
    getOne,
    attach,
    update,
    remove
}
