import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserDetailTitle } from "../userDetail/UserDetailTitle";
import { UserDocumentTitle } from "../userDocument/UserDocumentTitle";

export const UserAuthCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="otp" source="otp" />
        <TextInput label="pan" source="pan" />
        <TextInput label="phone" source="phone" />
        <ReferenceInput
          source="userDetails.id"
          reference="UserDetail"
          label="userDetails"
        >
          <SelectInput optionText={UserDetailTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userDocument.id"
          reference="UserDocument"
          label="userDocuments"
        >
          <SelectInput optionText={UserDocumentTitle} />
        </ReferenceInput>
        <BooleanInput label="verified" source="verified" />
      </SimpleForm>
    </Create>
  );
};
