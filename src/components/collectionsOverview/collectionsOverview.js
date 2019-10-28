import React from "react";
import "./collectionsOverview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collectionPreview/collectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
