import React from "react";
import { Media, Alert, Button } from 'reactstrap';


function PostComponent(props) {
    console.log("post");
    console.log(props);
    return (
        <div>
            <Alert color="warning">{props.post.data}</Alert>
            <Media>
                <Media body>
                    <Media heading>
                        {props.post.author} 
                    </Media>
                        {props.post.text}
                </Media>
            </Media>
            
        </div>
    )
}


export default PostComponent;