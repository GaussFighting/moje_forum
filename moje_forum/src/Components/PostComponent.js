import React from "react";
import { Media, Alert, Button } from 'reactstrap';


function PostComponent(props) {
console.log(props);
    return (
        <div>
            <Alert color="warning">{props.data}</Alert>
            <Media>
                <Media body>
                    <Media heading>
                        {props.username} 
                    </Media>
                        {props.text}
                </Media>
            </Media>
            
        </div>
    )
}


export default PostComponent;