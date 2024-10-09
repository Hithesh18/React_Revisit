function List()
{
const fruits=[{name:"Apple", calories:120}
    , {name:"Bannana", calories:67}, 
    {name:"Orange",calories:78},
    {name:"Cannberry",calories:56}]

fruits.sort()
const listitems=fruits.map(fruit=> <li key={fruit.name}>                                   {fruit.calories}</li>)
return (
<ol>{listitems}</ol>
);

}
export default List