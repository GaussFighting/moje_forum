import React, { useState } from "react";
import PostComponent from "./PostComponent";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



function MainComponent({ }) {

    const [posts, setPosts] = useState(
        [
            {
                author: "ProTosia",
                text: "Czy w sc są infestory?",
                data: moment().add(-3, 'days').format('YYYY MMM Do h:mm:ss a'),
                id: Math.random()
            }, {
                author: "Jaedong",
                text: "W prawdziwym starcrafcie nie.",
                data: moment().add(-2, 'days').format('YYYY MMM Do h:mm:ss a'),
                id: Math.random()
            }, {
                author: "KTF_Flash",
                text: "Kto nie skacze ten gra zergiem, hop hop hop.",
                data: moment().add(-1, 'days').format('YYYY MMM Do h:mm:ss a'),
                id: Math.random()
            }
        ]
    );
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const handleSubmit = () => {
        setPosts(prevPosts => {
            const newPost = {
                author: author,
                text: text,
                data: moment().add(-1, 'days').format('YYYY MMM Do h:mm:ss a'),
                id: Math.random()
            }
            return [...prevPosts, newPost]
        })
    }
    const handleDelete = (id) => {
        console.log(id, posts)
        setPosts(prevPosts => {
            return prevPosts.filter((element) => {
                return element.id !== id;
            }
            )
        })
    }

    return (
        <div>
            <h1>Netwars</h1>
            {posts.map((dane) => {
                return <PostComponent username={dane.author} text={dane.text} data={dane.data} key={dane.id} id={dane.id} deletePost={handleDelete} />
            })}
            <Form>
                <FormGroup>
                    <Label for="example">Author</Label>
                    <Input onChange={e => setAuthor(e.target.value)} type="text" name="author" id="example" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input onChange={e => setText(e.target.value)} type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </Form>
        </div>
    )
}

export default MainComponent;