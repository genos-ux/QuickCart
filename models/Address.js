import { model, models, Schema } from "mongoose"

const addressSchema = new Schema({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  pincode: {type: Number, required: true },
  area: {type: String, required: true },
  city: {type: String, required: true }

});


const Address = models.address || model('address',addressSchema);

export default Address;