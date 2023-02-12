const mongoose = require("mongoose");
const issueSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    returnDate: {
      type: Date,
        default: "",
    },
    returnedDate: {
      type: Date,
      default: "",
    },
    rent: {
      type: Number,
      default: 0,
    },
    fine: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "issued",
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("issues", issueSchema);
