import React from "react";
import LinkForm from './LinkForm';
import db from '../firebase';

function Links() {

  const addOrEditLink = (linkObject) => {
    db.collection('links').doc().set(linkObject)
  }

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
    </div>
  );
}

export default Links;
