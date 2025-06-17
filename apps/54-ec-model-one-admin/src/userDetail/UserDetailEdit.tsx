import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
        <ReferenceArrayInput source="userId" reference="UserAuth">
          <SelectArrayInput
            optionText={UserAuthTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
