const MyMealsAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if (!selectedDay) return <p className="plan">Plan your week ahead of time!</p>

    return(
       <div className="whole-plan">
        <div className="meal-editing">
            <input
                type="text"
                className="myInput"
                placeholder="Today is..."
                id="title"
                value={selectedDay.title}
                onChange={(e) => editMyMeal("title", e.target.value)}
            />

            <textarea className="textAreaMeal"
                placeholder="write your meal plan here"
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange={(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea className="textAreaMeal"
                placeholder="list of ingredients"
                id="ingredients"
                value={selectedDay.ingredients}
                onChange={(e) => editMyMeal("ingredients", e.target.value)}
            />
            
        </div>
    </div>
    )
}
export default MyMealsAndIngredients;