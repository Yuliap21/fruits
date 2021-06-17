const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component {
  render(){
    return (
      <DefaultLayout title= {'Make a New Fruit'}>
      <h1>Make a New Fruit</h1>
      <form action="/fruits"
      method="POST">
                 Name: <input type="text"
                 name="name" /><br/>
                 Color: <input type="text"
                 name="color" /><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                 <input type="submit" name="" value="Create Fruit"/>
               </form>
      </DefaultLayout>
    )
  }
}
module.exports = New;
