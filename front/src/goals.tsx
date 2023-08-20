import { Datagrid, List, TextField } from 'react-admin';

export const GoalList = () => (
    <List>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);



import { Edit, SimpleForm, TextInput } from 'react-admin';

export const GoalEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

import { Create } from 'react-admin';

export const GoalCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);