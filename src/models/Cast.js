import {Schema, model} from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, "Casts name should be at least 5 characters"],
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only alpha numeric characters!"]
    },
    age: {
        type: Number,
        required: true,
        min: [1, "The age of the cast member should be at least 1 year."],
        max: [120, "The age of the cast member should be less than 120 years."]
    },
    born: {
        type: String,
        required: true,
        minLength: [10, "Casts place of birth should be at least 10 characters long."],
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only alpha numeric characters!"]
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//, "Invalid image url!"]
    },
});

const Cast = model('Cast', castSchema);

export default Cast;
