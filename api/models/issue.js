const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: { type: String, required: true },
    status: { type: Boolean, default: false },
    comments: ['Comment']
});

module.exports = mongoose.model('Issue', issueSchema);
