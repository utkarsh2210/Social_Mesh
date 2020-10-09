import React, { Component } from 'react';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  // componentWillUnmount() {
  //   this.setState({
  //     content: '',
  //   });
  // }
  handleOnClick = () => {
    // dispatch action
    if (document.getElementsByClassName('add-post')[0].value === '') {
      window.alert('Please write some text in your post!');
      return;
    }
    this.props.dispatch(createPost(this.state.content));
    document.getElementsByClassName('add-post')[0].value = '';
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);
