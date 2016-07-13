/**
 * Created by Vittorio on 08/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    taskName: {
        type: String,
        required: 'TaskeName is required'
    },
    taskDesc: {
        type: String,
        trim: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    modifiedOn: {
        type: Date
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

var ProjectSchema = new Schema({
    projectName: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    contributors: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }]
    },
    tasks: [taskSchema]
});

mongoose.model('Project', ProjectSchema);