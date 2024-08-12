class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create (data)
    {
        try {
            console.log(data);
           let result = await this.model.create(data);
           return result;
        } catch (error) {
            console.log('Somethimg went wrong in crud repo while creating');
            throw error;
        }
    }
    async destroy (data)
    {
        try {
            console.log(data);
           let result = await this.model.findByIdAndDelete(data);
           return result;
        } catch (error) {
            console.log('Somethimg went wrong in crud repo while deleting');
            throw error;
        }
    }
    async get(id)
    {
        try {
           let result = await this.model.findById(id);
           return result;
        } catch (error) {
            console.log('Somethimg went wrong in crud repo while find by id');
            throw error;
        }
    }
    async getAll ()
    {
        try {
           let result = await this.model.find(id);
           return result;
        } catch (error) {
            console.log('Somethimg went wrong in crud repo while get all');
            throw error;
        }
    }
    async update (id,data)
    {
        try {
           let result = await this.model.findByIdAndUpdate(id, data, {new:true});
           return result;
        } catch (error) {
            console.log('Somethimg went wrong in crud repo while updating');
            throw error;
        }
    }
}

export default CrudRepository;