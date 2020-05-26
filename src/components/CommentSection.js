import React from 'react';
import '../styles/commentSection.scss';

export default (children) => (
    <div className="container comment-section">
        <div className="columns">
            <div className="column">
                <hr />
                <h1 className="title"> Comments </h1>
                <div className="field">
                    <div className="label">Name</div>
                    <input className="input" type="text" placeholder="HandsomeReader2" />
                </div>
                <div class="field">
                    <label className="label">Lovely message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="comment"></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);