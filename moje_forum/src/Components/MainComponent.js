import React from "react";
import PostComponent from "./PostComponent";
import moment from "moment";

function MainComponent({}) {
    const posts = [
        {
            author: "Tosia",
            text: "Czy w sc są infestory?",
            data: moment().add(-3, 'days').format('YYYY MMM Do h:mm:ss a')
        }, {
            author: "Jaedong",
            text: "W prawdziwym starcrafcie nie.",
            data: moment().add(-2, 'days').format('YYYY MMM Do h:mm:ss a')
        }, {
            author: "KTF_Flash",
            text: "Kto nie skacze ten gra zergiem, hop hop hop.",
            data: moment().add(-1, 'days').format('YYYY MMM Do h:mm:ss a')
        }
    ]
    console.log("componentRodzica");
    console.log(posts);
    
    return (
        <div>
            <h1>Netwars</h1>
            <PostComponent username={posts[0].author} text={posts[0].text} data={posts[0].data} />
            <PostComponent username={posts[1].author} text={posts[1].text} data={posts[1].data}/>
            <PostComponent username={posts[2].author} text={posts[2].text} data={posts[2].data}/>
            
            {/* <PostComponent post={posts}/> */}
        </div>
    )
}

export default MainComponent;