class BaseService {
  constructor(model) {
    this.model = model;
  }

  save(objects) {
    return this.model.insertMany(objects);
  }

  load() {
    return this.model.find();
  }

  async insert(object) {
    return await this.model.create(object);
  }

  async update(id, object) {
    return await this.model.findByIdAndUpdate(id, object);
  }

  async removeBy(property, value) {
    return await this.model.deleteOne({ [property]: value });
  }

  async find(id) {
    return await this.model.findById(id);
  }

  async findBy(property, value) {
    return await this.model.find({ [property]: value });
  }
}

module.exports = BaseService;
