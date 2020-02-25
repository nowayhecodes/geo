const mongoose = require("mongoose");
const sequence = require("mongoose-sequence")(mongoose);
const geocoder = require("../utils/geocoder");

const PartnerSchema = new mongoose.Schema(
  {
    _id: Number,
    tradingName: {
      type: String,
      trim: true
    },
    onwerName: {
      type: String,
      trim: true
    },
    document: {
      type: String,
      trim: true,
      unique: true
    },
    coverageArea: {
      type: {
        type: String,
        default: "MultiPolygon"
      },
      coordinates: {
        type: []
      }
    },
    address: {
      type: {
        type: String,
        default: "Point"
      },
      street: String,
      coordinates: {
        type: [Number],
        index: "2dsphere"
      }
    }
  },
  { _id: false, timestamps: true }
);

PartnerSchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address.street);
  this.address = {
    coordinates: [loc[0].longitude, loc[0].latitude],
    street: undefined
  };

  next();
});

PartnerSchema.plugin(sequence);

module.exports = mongoose.model("Partner", PartnerSchema);
