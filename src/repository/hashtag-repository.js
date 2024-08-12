import Hashtag from "../models/hashtag.js"
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {
    constructor() {
        super(Hashtag)
    }
    async bulkCreate (data) {
        try {
        const tags = await Hashtag.insertMany(data);
        return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getHastag (id)
    {
        try {
           let hashtag = await Hashtag.get(id);
           return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async findByName (text)
    {
        try {
           let hashtags = await Hashtag.find({
            text:text
           });
           return hashtags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteHashtag (data)
    {
        try {
           let hashtag = await Hashtag.destroy(data);
           return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;