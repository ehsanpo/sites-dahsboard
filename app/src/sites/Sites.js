import React from "react";
import PropTypes from "prop-types";
import RichTextInput from "ra-input-rich-text";
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    DateField,
    ReferenceField,
    Toolbar,
    SaveButton,
    Create,
    SimpleForm,
    DateInput,
    TextInput,
    LongTextInput,
    BooleanInput,
    ReferenceInput,
    AutocompleteInput,
    Edit,
    DisabledInput,
    required,
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

const LongTextField = ({ record = {}, source }) => (
    <div class="pre-white">{record[source]}</div>
);

LongTextField.propTypes = {
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

const PostFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <BooleanField label="User data" source="userdata" defaultValue={true} />
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

export const PostList = props => (
    <List {...props} filters={<PostFilter />} perPage={50}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="url" />
            <DateField source="last-update" />
            <BooleanField source="live" />
            <BooleanField source="avtal" />
            <BooleanField source="userdata" />
            <DateField source="dataRemoveDate" />
            <ReferenceField
                label="Server"
                source="serverId"
                reference="servers"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="domain" />
            <TextField source="mail" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm toolbar={<PostCreateToolbar />}>
            <TextInput source="name" />
            <TextInput source="url" />
            <DateInput source="last-update" />
            <DateInput source="dataRemoveDate" />
            <ReferenceInput source="serverId" reference="servers">
                <AutocompleteInput optionText={choice => `${choice.name} `} />
            </ReferenceInput>
            <TextInput source="domain" defaultValue="external" />
            <TextInput source="mail" defaultValue="external" />
            <BooleanInput source="live" defaultValue={false} />
            <BooleanInput source="avtal" defaultValue={false} />
            <BooleanInput source="userdata" defaultValue={false} />
            <BooleanInput source="pixel" defaultValue={false} />
            <BooleanInput source="ga" defaultValue={false} />
            <TextInput source="gaCode" />
            <TextInput source="1Pass" />
            <LongTextInput source="note" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit title="Edit" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />

            <TextInput source="name" validate={required()} />
            <TextInput source="url" />
            <DateInput source="dataRemoveDate" />
            <DateInput source="last-update" />
            <ReferenceInput source="serverId" reference="servers">
                <AutocompleteInput optionText={choice => `${choice.name} `} />
            </ReferenceInput>
            <TextInput source="domain" />
            <TextInput source="mail" />
            <BooleanInput source="live" />
            <BooleanInput source="avtal" />
            <BooleanInput source="userdata" />
            <BooleanInput source="pixel" />
            <BooleanInput source="ga" />
            <BooleanInput source="monitor" />
            <TextInput source="1Pass" />
            <TextInput source="gaCode" />
            {/* <LongTextInput source="note" />*/}
            <RichTextInput source="note" />
        </SimpleForm>
    </Edit>
);
export const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="url" />
            <DateField source="last-update" />
            <br />
            <label
                class="MuiFormLabel-root-183 MuiInputLabel-root-178 MuiInputLabel-formControl-179 MuiInputLabel-animated-182 MuiInputLabel-shrink-181 Labeled-label-172"
                data-shrink="true"
            >
                <span>1Pass</span>
            </label>
            <UrlField source="1Pass" />


            <BooleanField source="live" />
            <BooleanField source="ga" />
            <BooleanField source="pixel" />
            <BooleanField source="avtal" />
            <BooleanField source="userdata" />
            <DateField source="dataRemoveDate" />
            <ReferenceField
                label="Server"
                source="serverId"
                reference="servers"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="domain" />
            <TextField source="mail" />
            <TextField source="gaCode" />
            <LongTextField source="note" />
        </SimpleShowLayout>
    </Show>
);