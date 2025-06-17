import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERAUTH_TITLE_FIELD } from "../userAuth/UserAuthTitle";

export const UserDocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"userDocuments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="pan" source="pan" />
        <TextField label="pdf1" source="pdf1" />
        <TextField label="pdf2" source="pdf2" />
        <TextField label="pdf3" source="pdf3" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userID"
          source="userauth.id"
          reference="UserAuth"
        >
          <TextField source={USERAUTH_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
