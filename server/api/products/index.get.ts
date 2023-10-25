import ProductModel from '@/server/models/Products.model';

export default defineEventHandler(async (event) => {
  return await ProductModel.find();
});