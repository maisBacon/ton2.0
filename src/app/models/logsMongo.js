const mongoose = require('mongoose');

const Logs = new mongoose.Schema(
  {
    action: String,
    nome: String,
    idade: Number,
    cargo: String,
    response: JSON,
    error: Boolean,
    id_ton_funcionario: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Logs', Logs);
