const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


function toLower(str) {
    return str.toLowerCase();
}


const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        set: toLower,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumbers: [{
        type: String
    }],
    workingDays: [{
        type: String
    }],
    workingHours: {
        from: {
            type: String
        },
        to: {
            type: String
        }
    },
    address: {
        type: String
    },
    location: {
        address: String,
        // Always store coordinates longitude (East/West), latitude (North/South) order.
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    tags: [{
        type: String
    }],
    category: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    interactivity: {
        type: Number,
        default: 0
    },
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity"
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    totalRatings: {
        type: Number,
        default: 0
    },
    photos: [{
        type: String
    }],
    /*
      1: Full payment needed
      2: Deposit needed
      3: No payment needed
    */
    paymentRequired: {
        type: Number,
        default: 3
    },
    deposit: {
        type: Number
    },
    logo: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date
});


//Helper function to compare encrypted paswords
businessSchema.statics.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}


//Helper function to get a business by its id
businessSchema.statics.getBusinessById = function(id, callback) {
    this.findById(id, callback);
}


//Helper function to get a business by its email
businessSchema.statics.getBusinessByEmail = function(email, callback) {
    var query = {
        email: email
    };
    this.findOne(query, callback);
}


mongoose.model('Business', businessSchema);
