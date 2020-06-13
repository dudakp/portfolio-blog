import React, { useEffect, useState } from 'react';
import '../../styles/commentSection.scss';


export default () => {
  const [comments, setComments] = useState([]);

  // TODO: replace with comment API call
  useEffect(() => {
    fetch('https://api.github.com/repos/gatsbyjs/gatsby')
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => setComments(resultData.stargazers_count));
  }, [comments]);

  return (
    <div className="container comment-section">
      <div className="columns">
        <div className="column">
          <hr />
          <h1 className="title"> Comments </h1>
          <div className="field">
            <div className="label">Name</div>
            <input className="input" type="text" placeholder="HandsomeReader2" />
          </div>
          <div className="field">
            <label className="label">Lovely message</label>
            <div className="control">
              <textarea className="textarea" placeholder="comment" />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
