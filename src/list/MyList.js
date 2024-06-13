function MyList  ({myPlans, addList, deleteDay, selectedDay, setSelectedDay})  {
    return(
        <div>
            <div>
                <h1 className="headerList">My Weekly Planner</h1>
                <button className="button-addList" onClick={addList}>Add</button>
            </div>

        
        <div>
            {myPlans.map(({ id, title, listForADay, details }) => (
                <div className={`list ${ id === selectedDay ? "selected-list" : "default-list"}`}
                   onClick={() => setSelectedDay(id)}
                   key={id}
                >
                    <p className="titleList">{title}</p>
                    <p className="listForADay">Task: {listForADay}</p>
                    <p className="details">{details}</p>
                    <button className="button-deleteList" onClick={() => deleteDay(id)}>Delete</button>
                </div>
            ))}
        </div>
      </div>
    )
}
export default MyList;