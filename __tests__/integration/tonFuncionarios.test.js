const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../util/truncate')

describe('Funcionarios', () => {

    it('listando funcionario com response false', async () => {
      const response = await request(app)
        .get('/')
        .send();
      expect(response.body).toStrictEqual(
        { code: '470', message: 'Sem funcionarios cadastrados' },
      );
    });

    it('parametros inválidos', async () => {
      const response = await request(app)
        .post('/')
        .send({
          nome: 'Renan Eiras Melo',
          idade: '29',
        });
      expect(response.body).toStrictEqual({
        code: '490',
        message: 'parametros inválidos',
      });
    });

    it('cadastrando um funcionário response true', async () => {
      const response = await request(app)
        .post('/')
        .send({
          nome: 'Renan Eiras Melo',
          idade: '29',
          cargo: 'Desenvolvedor',
        });
      expect(response.body).toStrictEqual({
        message: 'funcionário cadastrado',
      });
    });

    it('listando funcionario', async () => {
      const response = await request(app)
        .get('/')
        .send();
      expect(response.body).toStrictEqual([
        {
          id: 1,
          nome: 'Renan Eiras Melo',
          idade: 29,
          cargo: 'Desenvolvedor',
        },
      ]);
    });

    it('atualizar o funcionario', async () => {
      const response = await request(app)
        .put('/1')
        .send({
          idade: 20,
          nome: 'marcelim',
        });
      expect(response.body).toStrictEqual({
        message: 'dados atualizados'
      });
    });

    it('deletando funcionario', async () => {
      const response = await request(app)
        .delete('/1')
        .send()
      expect(response.body).toStrictEqual({
        message: 'funcionário excluido',
      });
    });

    it('deletando funcionario com id errado', async () => {
      const response = await request(app)
        .delete('/100')
        .send();
      expect(response.body).toStrictEqual({
        code: "470",
        message: 'O id: 100 não corresponde a nenhum funcionario',
      });
    });

    it('Update de funcionario com id errado', async () => {
      const response = await request(app)
        .put('/100')
        .send();
      expect(response.body).toStrictEqual({
        code: '470',
        message: 'Funcionario não encontrado',
      });
    });

  // it('the fetch fails with an error', () => {
  //   const response = await request(app)
  //       .put('/100')
  //       .send();
  //  fetchData().catch(e => expect(e).toMatch('error'));
  // })
})
