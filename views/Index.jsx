const React = require('react');
const DefaultLayout = require('./layouts/Default');
const h1Style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};
class Index extends React.Component {
  render(){
    const fruits = this.props.fruits;
    return (
      <DefaultLayout title={"Fruits Index Page"}>
        <h1 style={h1Style}>Fruits Index Page</h1>
        <nav className="superman">
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
                  <form method="POST" action={`/fruits/${fruit._id}?_method=DELETE`}>
                          <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
