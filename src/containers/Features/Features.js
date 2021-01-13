import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import './Features.css';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../hoc/Aux/Aux';
import EmailSummary from '../../components/UI/EmailSummary/EmailSummary';
import post from '../../components/Post/Post';

let emails = [];

class Features extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        updateCounter: false,
        showPopup: false,
        emailIdGiven: false,
        emailsFetched: " ",
        idOfButtonClickedForEmail: 0,
        newFeatureTitle: '',
        newFeatureTitleForNewUser: ''
    }

    componentDidMount() {
        axios.get('https://dev.api.supertokens.io/0/website/features')
            .then(response => {
                console.log(response)
                const posts = response;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        //author: post.body,
                       // votes: 0,
                        state: false
                    }
                });

                this.setState({ posts: updatedPosts });
                //console.log(response);
            }) .catch(function(e) {
                console.error(e); // "oh, no!"
              });

            

    }

    postSelectHandler = (id) => {
        this.setState({ selectedPostId: id });

    }

    toggleButton = (id) => {
        if (!this.state.emailIdGiven) {
            this.setState({ showPopup: true }
                
                
    )
        } else {
            this.state.posts.forEach(post => {

                if (post.id === id && !post.state) {
                    this.upvoteButtonClickedHandler(id);



                } if (post.id === id && post.state) {
                    this.downvoteClickedHandler(id);


                }

            })

        }
        this.setState({idOfButtonClickedForEmail: id})



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

        axios.post('https://jsonplaceholder.typicode.com/posts', vote)
        .then(response => {
            console.log(response)
        })
    

    }


/*
    upvoteButtonClickedHandler = (id, existingEmailID) => {
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
        this.setState({idOfButtonClickedForEmail: ''});


        axios.post('https://jsonplaceholder.typicode.com/posts', vote)
        .then(response => {
            console.log(response)
        })
    


}

*/

upvoteButtonClickedHandler = (id /*existingEmailID*/) => {
    console.log('did i reach here?')


    axios.get('https://jsonplaceholder.typicode.com/posts/1' /* existingEmailID*/)
    .then(response => {
      if (response.data.id === id) {
          console.log('first i am in this loop')

        const features = response.data
       // const updatedFeatures = features.map(feature => {
            if(features.id !== id){
                return features
            } else {
                console.log('i am here')
                const vote = this.state.posts.map(post => {
                    if (post.id === id) {
                        this.setState({newFeatureTitle: post.title})
                        return {
                            ...post,  
                            votes: post.votes + 1,
                            state: !post.state,
            
                        }
            
                    } else {
                        return post
                    }
            
               })

               this.setState({ posts: vote });

    axios.post('https://jsonplaceholder.typicode.com/posts', vote)
    .then(response => {
        console.log(response)
    })


              //  const tryingPostMethod = this.posts.
                const newfeatureUpvoted = {
                   id: id,
                   title: this.state.newFeatureTitle,
                }

                console.log(this.state.newFeatureTitle)
               // const updateFeaturesList = features.push(newfeatureUpvoted)
                axios.post('https://jsonplaceholder.typicode.com/posts/1', newfeatureUpvoted)
                .then(response => {
                    console.log(response)
                })
                console.log('done this')
                
              //  this.upvoteButtonClickedHandler(this.state.idOfButtonClickedForEmail)

            }
            
            this.setState({idOfButtonClickedForEmail: ''});
            this.setState({newFeatureTitle:''})
            console.log('did this run?')
            console.log(this.state.idOfButtonClickedForEmail)
      
    }
  
    
}


    

    )


 
  



}

/* Undo this
upvoteButtonClickedHandler = (id, existingEmailID) => {

    axios.get('https://jsonplaceholder.typicode.com/posts'+ existingEmailID)
    .then(response => {
      if (response.id===this.state.idOfButtonClickedForEmail) {

        const features = response.featuresUpvoted
        const updatedFeatures = features.map(feature => {
            if(feature.id === this.state.idOfButtonClickedForEmail){
                return feature
            } else {
                const vote = this.state.posts.map(post => {
                    if (post.id === id) {
                        this.setState({newFeatureTitle: post.title})
                        return {
                            ...post,  
                            votes: post.votes + 1,
                            state: !post.state,
            
                        }
            
                    } else {
                        return post
                    }
            
               })

               this.setState({ posts: vote });

    axios.post('https://jsonplaceholder.typicode.com/posts', vote)
    .then(response => {
        console.log(response)
    })


              //  const tryingPostMethod = this.posts.
                const newfeatureUpvoted = {
                   id: this.state.idOfButtonClickedForEmail,
                   title: this.state.newFeatureTitle
                }
                const updateFeaturesList = updatedFeatures.push(newfeatureUpvoted)
                axios.post(''+ existingEmailID, updateFeaturesList)
              //  this.upvoteButtonClickedHandler(this.state.idOfButtonClickedForEmail)

            }
        })
    

      
    }
}

    )


 
   // this.setState({ posts: vote });
    this.setState({idOfButtonClickedForEmail: ''});
    this.setState({newFeatureTitle:''})





}

*/





    popupOpenHandler = () => {
        this.setState({ showPopup: true })
        console.log(this.state.showPopup)
    }

    popupCancelHandler = () => {
        this.setState({ showPopup: false })
    }


    featureUpvotedHandler = (existingEmailID) => {
        console.log(existingEmailID);

        axios.get('https://jsonplaceholder.typicode.com/posts/1' /* existingEmailID*/ )
        .then(response => {
          if (response.data.id === this.state.idOfButtonClickedForEmail) {
              console.log('response exists')
            //  console.log(existingEmailID)

            const features = response.data
            console.log(features)
           // const updatedFeatures = features.data.map(feature => {
                if(features.id !== this.state.idOfButtonClickedForEmail){
                    console.log('i got inside')
                    return features
                } else {


                  //  const tryingPostMethod = this.posts.
                  /*
                    const newfeatureUpvoted = {
                       id: this.state.idOfButtonClickedForEmail,
                       title: post.title
                    }
                    const updateFeaturesList = updatedFeatures.push(newfeatureUpvoted)
                    axios.post(''+ existingEmailID, updateFeaturesList)
                    */
                   console.log('this is good')
                    this.upvoteButtonClickedHandler(this.state.idOfButtonClickedForEmail/* existingEmailID*/)

                }
            

          
        } else {

            const vote = this.state.posts.map(post => {
                if (post.id === this.idOfButtonClickedForEmail) {
                    this.setState({newFeatureTitleForNew: post.title})
                    return {
                        ...post,  
                        votes: post.votes + 1,
                        state: !post.state,
        
                    }
        
                } else {
                    return post
                }
        
           })
            const newResponse = {
                exists: true,
                emailID: existingEmailID,
                featuresUpvoted:  [{
                    id: this.state.idOfButtonClickedForEmail,
                    title: this.state.newFeatureTitleForNewUser
                }]
            }
            axios.post('https://jsonplaceholder.typicode.com/posts'+ existingEmailID, newResponse)
        }
    }

        )



    }

    //Undo this

/*
    featureUpvotedHandler = (existingEmailID) => {
        console.log(existingEmailID);

        axios.get('https://jsonplaceholder.typicode.com/posts/' + existingEmailID )
        .then(response => {
          if (response.id === this.state.idOfButtonClickedForEmail) {
              console.log('response exists')
            //  console.log(existingEmailID)

            const features = response.featuresUpvoted
            const updatedFeatures = features.map(feature => {
                if(feature.id === this.state.idOfButtonClickedForEmail){
                    return feature
                } else {


                  //  const tryingPostMethod = this.posts.
                  
                   // const newfeatureUpvoted = {
                   //    id: this.state.idOfButtonClickedForEmail,
                   //    title: post.title
                  //  }
                   // const updateFeaturesList = updatedFeatures.push(newfeatureUpvoted)
                  //  axios.post(''+ existingEmailID, updateFeaturesList)
                  //  
                    this.upvoteButtonClickedHandler(this.state.idOfButtonClickedForEmail, existingEmailID)

                }
            })

          
        } else {

            const vote = this.state.posts.map(post => {
                if (post.id === this.idOfButtonClickedForEmail) {
                    this.setState({newFeatureTitleForNewUser: post.title})
                    return {
                        ...post,  
                        votes: post.votes + 1,
                        state: !post.state,
        
                    }
        
                } else {
                    return post
                }
        
           })
            const newResponse = {
                exists: true,
                emailID: existingEmailID,
                featuresUpvoted:  [{
                    id: this.state.idOfButtonClickedForEmail,
                    title: this.state.newFeatureTitleForNewUser
                }]
            }
            axios.post('https://jsonplaceholder.typicode.com/posts'+ existingEmailID, newResponse)
        }
    }

        )



    }

    */ ////

    submitEmailHandler = (emailIDPassed) => {
        this.setState({ showPopup: false })
        this.setState({ emailIdGiven: true })
        this.featureUpvotedHandler(emailIDPassed)
       // console.log(emailIDPassed)
        //console.log(emailIDPassed)


     //  this.featureUpvotedHandler(existingEmailID)
        //this.upvoteButtonClickedHandler(this.state.idOfButtonClickedForEmail)
        



        //alert('A name was submitted: ' + this.state.emailsFetched);

        //console.log(this.state.emailsFetched);


    }

    emailChangeHandler = (event) => {
        this.setState({ emailsFetched: event.target.value });
        console.log(event.target.value);
    }

    handleSubmitHandler = (event) => {
        console.log(this.state.emailsFetched);
        event.preventDefault();
    }



    render() {
    
        const posts = this.state.posts.map(post => {
            return <Post
                key={post.featureId}
                title={post.title}
                body={post.body}
                votes={post.votes}
                clicked={() => this.postSelectHandler(post.featureId)}
                // click = {() => this.upvoteButtonClickedHandler(post.id)}
                click={() => this.toggleButton(post.featureId)}
                //click={this.popupOpenHandler}
                value={post.upvotes} />

        });

        return (
            <Aux>
                <Modal show={this.state.showPopup} modalClosed={this.popupCancelHandler}>
                    <EmailSummary submit={this.submitEmailHandler} />
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