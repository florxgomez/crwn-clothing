import React from "react";
import "./directory.scss";

import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from "../menuItem/menuItem";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
