import React from "react";
import AuthorCard from "./AuthorCard";

//Components

function AuthorList(props) {
  const authorsList = props.authors.map(author => {
    return <AuthorCard author={author} key={author.first_name} />;
  });
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorsList}</div>
      </div>
    </div>
  );
}

export default AuthorList;
