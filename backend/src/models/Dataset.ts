import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const datasetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    organization: {
      type: String,
      required: true,
    },

    source: {
  type: String,
  required: true,
  trim: true,
},

geography: {
  type: String,
  required: true,
  trim: true,
},

year: {
  type: Number,
  required: true,
},

    tags: [
      {
        type: String,
      },
    ],

    resources: [resourceSchema],

    license: {
      type: String,
      default: "Open Government License",
    },

    updateFrequency: {
      type: String,
      default: "Monthly",
    },

    downloads: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Dataset", datasetSchema);