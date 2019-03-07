import React from 'react';

const Posts =({posts,status})=>{
    //posts是数组 显示所有新闻列表
    console.log(posts);

    if(status ==="Fetching..."|| posts===null || posts ===undefined)
        return <span>NO Data <img src={require("../../../images/spinner.gif" )} /> </span>;
    else {
        const postsA= posts.items;
        return(
            <div>
                <ul>
                    {postsA.map((post,i)=>(
                        <li key={i}>{post.title}</li>
                    ))}
                </ul>
            </div>
        )}

};

export {Posts};