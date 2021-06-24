const React = require('react');
const DefaultLayout = require('./layouts/Default');
class Index extends React.Component {
  render(){
    const fruits = this.props.fruits;
    return (
      <DefaultLayout title={"Fruits Index Page"} styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/indexpage.css'}]}>
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
