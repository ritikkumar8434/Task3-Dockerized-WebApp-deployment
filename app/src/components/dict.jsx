import React from "react";

function Dictionary(props){
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                < span>{props.name}</span>
            </dt>
            <dd>
                {props.description}
            </dd>
        </div>
    );      
}

export default Dictionary;
