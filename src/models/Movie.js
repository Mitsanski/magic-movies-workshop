import {Schema, model, Types} from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        minLength: [2, "Movie name should be at least 2 characters long"],
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only alpha numeric characters!"]
    },
    genre: {
        type: String,
        required: [true, "Movie genre is required"],
        lowercase: true,
        minLength: [3, "Genre should be at least 3 characters long"],
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only alpha numeric characters!"]
    },
    director: {
        type: String,
        required: true,
        minLength: [5, "Director name should be at least 5 characters long"],
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only alpha numeric characters!"]
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Movie should be released after 1900'],
        max: [2024, 'Movie should be released before 2024'],
    },
    rating: {
        type: Number,
        validate: {
          validator: function(value) {
              if (this.year >= 2000){
                return !!value;
              }
              return true;
          },
            message: 'Rating is required for movies after 2000 year'
        },
        min: [1, "Rating should be between 1 and 5"],
        max: [5, "Rating should be between 1 and 5"]
    },
    description: {
        type: String,
        required: true,
        minLength: [20, "Description should be at least 20 characters!"],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//, "Invalid image url!"]
    },
    casts: [{
        character: {
            type:String,
            validate: [/^[A-Za-z0-9 ]+$/, "Character name can contain only alpha numeric characters!"],
            minLength: [5, "Character name should be at least 5 characters!"],
            },
        cast: {
            type: Types.ObjectId,
            ref: 'Cast'
        },
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;
