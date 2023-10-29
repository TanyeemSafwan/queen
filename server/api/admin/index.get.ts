import AdminModel from "~/server/models/Admin.model";

export default defineEventHandler(async (event) => {
  return await AdminModel.find();
});