function Item(props) {
    return createElement("li", {
      className: "item",
      style: props.style,
      onClick: props.onClick
    }, props.children);
  }

class App extends Component {
    render() {
        var date = new Date();
        if(data%2==0){
        return createElement("ul", {
          className: "list"
        }, this.state.list.map((item, index) => {
          return createElement(Item, {
            style: {
              background: 'black',
              color: 'white'
            },
            onClick: () => alert(item.text)
          }, item.text);
        }));
      }else{
        return createElement("ul", {
            className: "list"
          }, this.state.list.map((item, index) => {
            return createElement(Item, {
              style: {
                background: 'black',
                color: 'white'
              },
              onClick: () => alert(item.text)
            }, item.text);
          }));
      }
    }
}

render(createElement(List, {
    textColor: 'white'
  }), document.getElementById('root'));