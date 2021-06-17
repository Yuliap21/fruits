const React = require('react');
class DefaultLayout extends React.Component {
  render(){
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <h3>THIS IS WHERE CHILDREN Starts</h3>
          {this.props.children}
          <h3>THIS IS WHERE CHILDREN ENDS</h3>
        </body>
      </html>
    )
  }
}
module.exports = DefaultLayout;
