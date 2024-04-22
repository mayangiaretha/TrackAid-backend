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
  accountNo: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: false,
  },
  accountName: {
    type: String,
    required: false,
  },
  invoiceNo: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  items: [
    {
      product: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
      },
      unitPrice: {
        type: Number,
        required: false,
      },
      total: {
        type: Number,
        required: false,
      },
    },
  ],
  total: {
    type: Number,
    required: false,
  },
  dueDate: {
    type: String,
    required: false

  },
  status: {
    type: String,
    enum: ['pending', 'paid'],
    default: 'pending',
  },
  createdAt: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
});

let invoicesModel = mongoose.model('invoice', invoiceSchema);
export default invoicesModel;
