class VisToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVis = this.handleToggleVis.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVis() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.handleToggleVis}>{this.state.visibility ? 'Hide' : 'Show'} Details</button>
        {this.state.visibility && <p>These are the details you need</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisToggle />, document.getElementById('app'));
