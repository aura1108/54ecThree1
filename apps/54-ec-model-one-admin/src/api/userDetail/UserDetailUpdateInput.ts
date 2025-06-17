import { UserAuthUpdateManyWithoutUserDetailsInput } from "./UserAuthUpdateManyWithoutUserDetailsInput";

export type UserDetailUpdateInput = {
  address?: string;
  city?: string;
  dob?: Date;
  email?: string;
  gender?: string;
  name?: string;
  pan?: string;
  phone?: string;
  pinCode?: string;
  userId?: UserAuthUpdateManyWithoutUserDetailsInput;
};
