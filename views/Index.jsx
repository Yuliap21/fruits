const React = require('react');
const h1Style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};
class Index extends React.Component {
  render(){
    const fruits = this.props.fruits;
    return (
      <div>
        <h1 style={h1Style}>Fruits Index Page</h1>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {
            fruits.map((fruit)=>{
              return (
                <li key={fruit._id}>
                  The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                  {' '}is {fruit.color} <br/>
                  {
                    fruit.readyToEat?
                    '  It is ready to eat':
                    '  It is NASTY!!!!!!'
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
module.exports = Index;
