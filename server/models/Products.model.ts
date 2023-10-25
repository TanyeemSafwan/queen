import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
     id: {
      type: Number,
      required: true
     },
		 name: {
      type: String,
      required: true
     },
		 price: {
      type: Number,
      required: true
     },
		 image: {
      type: String,
      required: true
     },
  },
  { timestamps: true }
);

export default mongoose.model("Product", schema);