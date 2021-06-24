const React = require('react');
class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en" dir="ltr">
          <head>
            <meta charSet="utf-8" />
            {this.props.styles && this.props.styles.map((style) => {
              return (
                <link key={style.key} rel="stylesheet" href={style.href} />
              )
            })}
            <title>{this.props.title}</title>
          </head>
          <body>
            <h1>{this.props.title}</h1>
            {this.props.children}
          </body>
      </html>
    )
  }
}
module.exports = DefaultLayout;
