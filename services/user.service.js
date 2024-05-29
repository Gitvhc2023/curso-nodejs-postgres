const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
    // return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM task');
    // return rta.rows;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
    // return { id };
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
    // return {
    //   id,
    //   changes,
    // };
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
    // return { id };
  }
}

module.exports = UserService;
