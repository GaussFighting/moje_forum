import React from "react";
import { Media, Alert, Button } from 'reactstrap';


function PostComponent(props) {
console.log(props);


    return (
        <div>
            <Media>
                <Media body>
                    <Media heading>
                        {props.username} 
                    </Media>
                        {props.text}
                </Media>
            </Media>
            <Alert color="warning">{props.data}</Alert>
            <Button onClick={() => props.deletePost(props.id)}> Delete </Button>
        </div>
    )
}


export default PostComponent;