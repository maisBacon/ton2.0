const tonFuncionariosRepository = require('../repository/tonFuncionariosRepository');

class TonFuncionariosService {
  async index() {
    const user = await tonFuncionariosRepository.index();
    if (user.length === 0) return undefined;
    return user.map(elem => {
      return {
        id: elem.id,
        nome: elem.nome,
        idade: elem.idade,
        cargo: elem.cargo,
      };
    });
  }

  async store(nome, idade, cargo) {
    const user = await tonFuncionariosRepository.store(nome, idade, cargo);
    return {
      id: user.id,
      nome: user.nome,
      idade: user.idade,
      cargo: user.cargo,
    };
  }

  async update(id, nome, idade, cargo) {
    const query = {
      nome,
      idade,
      cargo,
    };
    const user = await tonFuncionariosRepository.update(id, query);
    if (!user) return undefined;
    return { nome: user.nome, idade: user.idade, cargo: user.cargo };
  }

  async delete(id) {
    const user = await tonFuncionariosRepository.delete(id);
    return {
      id: user.id,
      nome: user.nome,
      idade: user.idade,
      cargo: user.cargo,
    };
  }
}

module.exports = new TonFuncionariosService();
