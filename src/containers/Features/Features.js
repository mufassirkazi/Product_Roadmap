import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import './Features.css';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../hoc/Aux/Aux';



class Features extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        updateCounter: false,
        giveEmail: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: post.body,
                        votes: 0,
                        state: false
                    }
                });

                this.setState({ posts: updatedPosts });
                //console.log(response);
            });

    }

    postSelectHandler = (id) => {
        this.setState({ selectedPostId: id });

    }

    toggleButton = (id) => {
        this.setState({ giveEmail: true })
        console.log(this.state.giveEmail)
        this.state.posts.forEach(post => {

            if (post.id === id && !post.state) {
                this.upvoteButtonClickedHandler(id);



            } if (post.id === id && post.state) {
                this.downvoteClickedHandler(id);


            }

        })


    }




    downvoteClickedHandler = (id) => {
        const vote = this.state.posts.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    votes: post.votes - 1,
                    state: !post.state


                }

            } else {
                return post
            }

        })
        this.setState({ posts: vote });

    }



    upvoteButtonClickedHandler = (id) => {
        const vote = this.state.posts.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    votes: post.votes + 1,
                    state: !post.state

                }

            } else {
                return post
            }

        })
        this.setState({ posts: vote });


    }





    popupOpenHandler = () => {
        this.setState({ giveEmail: true })
        console.log(this.state.giveEmail)
    }

    popupCancelHandler = () => {
        this.setState({ giveEmail: false })
    }


    render() {

        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                votes={post.votes}
                clicked={() => this.postSelectHandler(post.id)}
                // click = {() => this.upvoteButtonClickedHandler(post.id)}
                click={() => this.toggleButton(post.id)}
                //click={this.popupOpenHandler}


                value={post.votes} />

        });

        return (
            <Aux>
                <Modal show={true} modalClosed={this.popupCancelHandler}>
                    Some random text
                    </Modal>


                <section className="Posts">
                    {posts}
                </section>

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>


            </Aux>
        );
    }
}


export default Features;