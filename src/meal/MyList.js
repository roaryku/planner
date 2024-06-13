const MyList = ({ mealPlans, addMeal, deleteDay,  selectedDay, setSelectedDay }) => {
    return(
       <div>
           <div>
               <h1 className="headerMeal">Weekly Meal Plan Ideas</h1>
               <button className="button-add" onClick={addMeal}>Add</button>
           </div>

          <div>
           {mealPlans.map(({ id, title, mealForADay, ingredients}) => (
               <div className={`meal ${id === selectedDay ? 'selected' : 'default'}`}
               onClick={() => setSelectedDay(id)}
               key={id}
               >
                   <p className="titleMeal">{title}</p>
                   <p className="mealForADay">Meal: {mealForADay.substring(0, 65)}</p>
                   <p className="ingredients">Ingredients: {ingredients.substring(0, 65)}</p>
                   <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
               </div>
           ))}
          </div>
       </div>
    )
}
export default MyList;