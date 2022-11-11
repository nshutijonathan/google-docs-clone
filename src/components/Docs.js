import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import Modals from "./Modal";
const Docs = ({ database }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const collectionRef = collection(database, "docsData");
  const addData = () => {
    handleOpen();
    addDoc(collectionRef, { title: title })
      .then(() => {
        alert("Data Added");
      })
      .catch(() => {
        alert("Cannot add data");
      });
  };
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button className="add-docs" onClick={addData}>
        Add a Document
      </button>
      <Modals open={open} setOpen={setOpen} title={title} setTitle={setTitle} />
    </div>
  );
};

export default Docs;
