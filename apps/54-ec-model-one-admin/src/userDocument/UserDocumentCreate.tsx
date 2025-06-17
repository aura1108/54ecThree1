import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserAuthTitle } from "../userAuth/UserAuthTitle";

export const UserDocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="pan" source="pan" />
        <TextInput label="pdf1" source="pdf1" />
        <TextInput label="pdf2" source="pdf2" />
        <TextInput label="pdf3" source="pdf3" />
        <ReferenceInput source="userId.id" reference="UserAuth" label="userID">
          <SelectInput optionText={UserAuthTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
