import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
        <ReferenceArrayInput source="userId" reference="UserAuth">
          <SelectArrayInput
            optionText={UserAuthTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
