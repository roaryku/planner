import { useEffect, useState } from 'react';
import MyList from './MyList';
import uuid from 'react-uuid';
import MyWeeklyPlanner from './MyWeeklyPlanner';

function List() {

  const [myPlans, setMyPlans] = useState(
    localStorage.myPlans ? JSON.parse(localStorage.myPlans) : [])

  const [selectedDay, setSelectedDay] = useState(false)

  useEffect(() => {
    localStorage.setItem("myPlans", JSON.stringify(myPlans))
  }, [myPlans])

 

  const addList = () => {
    const newList = {
      title: 'Today is...',
      id: uuid(),
      listForADay: "",
      details: ""
    }
    setMyPlans([newList, ...myPlans])
  }

  const deleteDay = (listId) => {
    setMyPlans(myPlans.filter(({id}) => id !== listId))
  }

  const updateDay = (myUpdateList) => {
    const updateTask = myPlans.map((myPlan) => {
        if(myPlan.id === myUpdateList.id) {
          return myUpdateList;
        }
        return myPlan;
    })
    setMyPlans(updateTask)
  }

  const getActiveList = () => {
    return myPlans.find(({id}) => id === selectedDay)
  }


  return (
    <div className='bodyList'>
      <div className="List">
       <MyList
        myPlans={myPlans} 
        addList={addList} 
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}

        />
       <MyWeeklyPlanner
        selectedDay={getActiveList()}
        updateDay={updateDay}
       />
     </div>
    </div>
  );
}

export default List;