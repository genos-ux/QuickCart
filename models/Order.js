import { model, models, Schema } from "mongoose"


const orderSchema = Schema({
    userId: {type: String, required: true, ref: 'user'},
    items: [{
        product: { type: String, required: true, ref: 'product' },
        quantity: { type: Number, required: true }
    }],
    amount: {type: Number, required: true},
    address: {type: String, ref: 'address', required: true},
    status: { type: String, required: true, default: 'Order Placed'},
    date: { type: Number, required: true}
})

const Order = models.order || model('order',orderSchema);

export default Order;