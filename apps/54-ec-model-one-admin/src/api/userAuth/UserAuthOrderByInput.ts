import { SortOrder } from "../../util/SortOrder";

export type UserAuthOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  otp?: SortOrder;
  pan?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  userDetailsId?: SortOrder;
  userDocumentId?: SortOrder;
  verified?: SortOrder;
};
