/**
 * Created by Vittorio on 08/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        type: String
    },
    contributors: {
        type: String
    },
    tasks: {
        type: String
    }
});

mongoose.model('Project', ProjectSchema);