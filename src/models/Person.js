import { Schema, model } from "mongoose";

const personSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    docIdentidad: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    celular: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Person", personSchema);
