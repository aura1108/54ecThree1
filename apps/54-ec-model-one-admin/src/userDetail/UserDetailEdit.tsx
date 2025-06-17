import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserAuthTitle } from "../userAuth/UserAuthTitle";

export const UserDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="city" source="city" />
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="gender" source="gender" />
        <TextInput label="name" source="name" />
        <TextInput label="pan" source="pan" />
        <TextInput label="phone" source="phone" />
        <TextInput label="pinCode" source="pinCode" />
        <ReferenceInput source="userId.id" reference="UserAuth" label="userId">
          <SelectInput optionText={UserAuthTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
