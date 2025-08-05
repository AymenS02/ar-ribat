import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Account" }
}, { timestamps: true });

export default mongoose.models.Video || mongoose.model("Video", videoSchema);

