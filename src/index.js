import React,{useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom/client'
// component
import AddApointment from './Component/AddApointment'
import Seach from './Component/Search'
import AddInfo from './Component/AddInfo'
// source
import './index.css'
import {BiArchive} from 'react-icons/bi'
// import appointData from './data.json'

// App
function App(){
  //  state 설정하기
  let [appintList,setAppintList] = useState([])
  // search에서 받아올 값
  let [query,setQuery] = useState('')
  let [sortBy,setSortBy] =useState('petName')
  let [orderBy,setOrderBy] = useState('asc')

const filterAppointents = appintList.filter(
  item => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )
  }
)
.sort(
  (a,b) => {
    let order = (orderBy == 'asc' ? 1 : -1)
    return (
      a[sortBy].toLowerCase()<b[sortBy].toLowerCase()? -1 * order : 1 * order
    )
  }
)

  // 설정하기: callback
  const fetchData = useCallback(
    () => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data =>
          setAppintList(data))
    },[]
  )
  //  useEffect()
  useEffect(()=>{fetchData()},[fetchData])

  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}} />welcome</h3>
      <AddApointment
        onSendAppointment={
          myAppintment => setAppintList([...appintList,myAppintment])
        }
        lastId={
          appintList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max ,0)
        } 
      />
      <Seach 
        query={query}
        onQueryChange = {myQuery => setQuery(myQuery)}
        orderBy = {orderBy}
        onOrderByChange = {myOrder => setOrderBy(myOrder)}
        sortBy = { sortBy}
        onSortByChange = { mySort => setSortBy(mySort)}
        />
      <div id="list">
      <ul>
           {filterAppointents.map(appointment => (
            <AddInfo 
            key= {appointment.id}
            appointment ={appointment}
            onDeleteAppoint = {
              appointmentId => setAppintList(appintList.filter(appointment => appointment.id !==  appointmentId))
            }
            />
          ))
          } 
      </ul>
      </div>
    </article>
  )
}

// 출력
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)