import React from "react";
import PropTypes from "prop-types";
import RichTextInput from "ra-input-rich-text";

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

let HtmlToReactParser = require("html-to-react").Parser;
let htmlToReactParser = new HtmlToReactParser();

const HTMLField = ({ record = {}, source }) => {
    console.log(record[source]);
    var reactElement = htmlToReactParser.parse(record[source]);

    return <div class="pre-white">{reactElement}</div>;
};

HTMLField.propTypes = {
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

export const WikisPostCreateToolbar = props => (
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

export const WikisPostList = props => (
    <List {...props} filters={<PostFilter />} perPage={50}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const WikisPostCreate = props => (
    <Create {...props}>
        <SimpleForm toolbar={<PostCreateToolbar />}>
            <TextInput source="name" />
            <RichTextInput source="body" />
        </SimpleForm>
    </Create>
);

export const WikisPostEdit = props => (
    <Edit title="Edit" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <RichTextInput source="body" />
        </SimpleForm>
    </Edit>
);
export const WikisPostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <HTMLField source="body" />
        </SimpleShowLayout>
    </Show>
);