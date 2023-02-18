const mongoose = require("mongoose");

const contractScheme = mongoose.Schema({
    lenderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    principle: { type: Number, required: true },
    interest: { type: Number, required: true },
    loanStartDate: { type: Date, required: true },
    loanDueDate: { type: Date, required: true },
    isRepaid: { type: Boolean, default: false },
})
const ContractModel = mongoose.model("contract", contractScheme)

module.exports = ContractModel;