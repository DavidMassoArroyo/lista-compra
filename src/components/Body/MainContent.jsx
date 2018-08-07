import React, { Component } from "react";
import {
  Header,
  Image,
  Segment,
  Sidebar,
  Input,
  Icon,
  Divider,
  Form,
  Label,
  Button,
  List
} from "semantic-ui-react";

class MainContent extends Component {
  state = {
    articleToAdd: "",
    articles: []
  };

  addArticle = () => {
    var newarticles = this.state.articles.slice();
    newarticles.push(this.state.articleToAdd);
    this.setState({ articles: newarticles });
  };

  onChange = e =>
    this.setState({
      articleToAdd: e.target.value
    });

  render() {
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <Input
            icon={<Icon name="add" add link onClick={this.addArticle} />}
            placeholder="Añade un elemento"
            onChange={this.onChange}
          />
          <Divider />
          {this.state.articles.map((item, i) => <li key={i}>{item}</li>)}
          <Divider />
          <Image src="https:react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
