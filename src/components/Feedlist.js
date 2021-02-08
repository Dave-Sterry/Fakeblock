import React from "react";
import Post from "./Post";




const masterPostList = [
  {
    name: "Shaw Swiftshore",
    message: "Poltics am I right!? Can you belive those fat cats in Congress are at it again?",
    link: 'http://garbagefire.net'
  },
  {
    name: "Rob Robertson the 3rd",
    message: "Look at my cat!",
    link:'http://catpics.com'
  },
  {
    name: "Peter Jibblins",
    message: "Hello world, I have important stuff to share today",
    link: "https://coolcontent.com"
  }
]


function FeedList(){
  return(
    <React.Fragment>
      <hr />
      {masterPostList.map((post, index) =>
      <Post name={post.name}
      message= {post.message}
      link= {post.link}
      key={index}/>
      )}
      </React.Fragment>
  );
}

export default FeedList;