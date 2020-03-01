const state = {
    
    people : {
    PeopleData: [
        {id:1, name: 'Vasya'},
        {id:2, name: 'Kolya'},
        {id:3, name: 'Stasik'},
        {id:4, name: 'Bogdan'},
        {id:5, name: 'Ilya'},
        {id:6, name: 'Dima'},
        ],
    MessageData: [
        {id:1, message: 'Hello!'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'I am fine'},
        ]
    },
    post : {
        PostData: [
            {id:1, text: "Hello, it's my first post", likeAmount:3},
            {id:2, text: "Hello, it's my second post", likeAmount:12},
            {id:3, text: "Hello, it's my third post", likeAmount:17},
            {id:4, text: "Hello, it's my fourth post", likeAmount:25},
            ],
        newPostText: 'qweewq'
        },
};

let reRenderTree = () => {
    console.log('changed');
};

export let addPost = () => {

    let p = {
        id : state.post.PostData.length + 1,
        text : state.post.newPostText,
        likeAmount: 33
    };

    state.post.PostData.push(p);
    state.post.newPostText = '';
    reRenderTree(state);
};

export let updateNewPostText = (newText) => {

    state.post.newPostText = newText;
    reRenderTree(state);
};

export const subscribe = (observer) => {
    reRenderTree = observer;
};



export default state;