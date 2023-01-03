import React from 'react';
import UseInput from '../../hooks/useInput';

const Form = () => {

    const [title, bindTitlte, resetTitle] = UseInput();
    const [content, bindContent, resetContent] = UseInput();

    const formSubmitHandler = (e)=> {
        e.preventDefault();
        console.log({title, content});
        resetTitle();
        resetContent();
    }

    return (
        <div className="section form-container">
            <form className="white" onSubmit={formSubmitHandler}>
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="note_title"
                            type="text"
                            className="validate"
                            {...bindTitlte}
                        />
                        <label className="active">Title</label>
                    </div>
                </div>

                <div className="input-field col s12">
                    <textarea
                        id="note_content"
                        className="materialize-textarea"
                        {...bindContent}
                    ></textarea>
                    <label>Content</label>
                </div>

                <button className="btn green">Add Note</button>
            </form>
        </div>
    );
}

export default Form;
