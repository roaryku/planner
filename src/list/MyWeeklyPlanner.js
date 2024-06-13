function MyWeeklyPlanner ({selectedDay, updateDay}) {

    const editMyList = (myInputList, value) => {
        updateDay ({
            ...selectedDay,
            [myInputList]: value
        })
    }


    if(!selectedDay) return <p className="plan-list">Plan your week ahead of time!</p>

    return(
        <div className="whole-plan">
            <div className="list-editing">
                <input
                    type="text"
                    className="myInputList"
                    placeholder="today is..."
                    id="title"
                    value={selectedDay.title}
                    onChange={(e) => editMyList("title", e.target.value)}
                />



                <textarea className="textAreaList"
                    placeholder="write your plan here"
                    id="listForADay"
                    value={selectedDay.listForADay}
                    onChange={(e) => editMyList("listForADay", e.target.value)}
                />

                <textarea className="textAreaList"
                    placeholder="task details"
                    id="listForADay"
                    value={selectedDay.details}
                    onChange={(e) => editMyList("details", e.target.value)}
                />


            </div>
        </div>
    )
}
export default MyWeeklyPlanner;