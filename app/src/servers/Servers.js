import React from "react";
import PropTypes from "prop-types";
import {
    List,
    Datagrid,
    TextField,
    Toolbar,
    SaveButton,
    Create,
    SimpleForm,
    TextInput,
    Edit,
    DisabledInput,
    EditButton,
    ShowButton,
    SimpleShowLayout,
    Show,
    Filter
} from "react-admin";

const UrlField = ({ record = {}, source }) => (
    <a href={record[source]} target="_blank" rel="noopener noreferrer">
        {record[source]}
    </a>
);

UrlField.propTypes = {
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

const PostFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        {/*<TextInput label="userdata" source="userdata" defaultValue="" />*/}
    </Filter>
);

const PostCreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save & Show" redirect="show" submitOnEnter={true} />
        <SaveButton
            label="Save and add"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const ServerPostCreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton label="Save & Show" redirect="show" submitOnEnter={true} />
        <SaveButton
            label="Save and add"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const ServerPostList = props => (
    <List {...props} filters={<PostFilter />} perPage={50}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="ip" />
            <UrlField source="url" />
            <UrlField source="1Pass" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const ServerPostCreate = props => (
    <Create {...props}>
        <SimpleForm toolbar={<PostCreateToolbar />}>
            <TextInput source="name" />
            <TextInput source="ip" />
            <TextInput source="url" />
            <TextInput source="1Pass" />
        </SimpleForm>
    </Create>
);

export const ServerPostEdit = props => (
    <Edit title="Edit" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="ip" />
            <TextInput source="url" />
            <TextInput source="1Pass" />
        </SimpleForm>
    </Edit>
);
export const ServerPostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="ip" />
            <UrlField source="url" />
            <UrlField source="1Pass" />
        </SimpleShowLayout>
    </Show>
);