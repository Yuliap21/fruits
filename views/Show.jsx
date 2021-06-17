const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component{
  render(){
    const fruit = this.props.fruit;
    return (
      <DefaultLayout title= {`${fruit.name.toUpperCase()} Show Page`}>
      <h1>Show Page</h1>
    The {fruit.name} is {fruit.color}
    {fruit.readyToEat?
      ' its ready to eat':
      ' Its not ready to eat'}
      </DefaultLayout>
    )
  }
}
module.exports = Show;
