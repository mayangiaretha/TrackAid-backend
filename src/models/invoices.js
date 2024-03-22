import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
  invoiceId: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  items: [
    {
      productName: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
    },
  ],
  amount: {
    type: Number,
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ['pending', 'paid'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

let invoicesModel = mongoose.model('invoice', invoiceSchema);
export default invoicesModel;
