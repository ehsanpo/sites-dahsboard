import React from "react";
import { connect } from "react-redux";
import { MenuItemLink, getResources } from "react-admin";
import { withRouter } from "react-router-dom";

const capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const Menu = ({ resources, onMenuClick, logout }) => (
	<div>
		{resources.map(resource => (
			<MenuItemLink
				to={`/${resource.name}`}
				key= {resource.name}
				primaryText={capitalize(resource.name)}
				onClick={onMenuClick}
			/>
		))}
		<MenuItemLink
			to="/monitor"
			primaryText="Monitors"
			onClick={onMenuClick}
		/>
	</div>
);

const mapStateToProps = state => ({
	resources: getResources(state)
});

export default withRouter(connect(mapStateToProps)(Menu));