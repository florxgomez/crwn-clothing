import React from "react";

import CollectionPreview from "../../components/collectionPreview/collectionPreview";

import { createStructuredSelector } from 'reselect';

import { connect } from "react-redux";
import { selectCollections } from '../../redux/shop/shopSelectors';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
  <h1>Collections</h1>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
