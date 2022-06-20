import React,{useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom/client'
// component
import AddApointment from './Component/AddApointment'
import Seach from './Component/Search'
import AddInfo from './Component/AddInfo'
// source
import './index.css'
import {BiArchive} from 'react-icons/bi'
import appointData from './data.json'

// App
function App(){
  //  state 설정하기
  let [appointList,setAppoinList] = useState([])
  //  callback 설정하기
  const fetData = useCallback(
    ()=>{
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppoinList(data))
    }
  )
  // userEffect설정하기
  useEffect(() => {fetData()},[fetData])
  return (
    <article>
      <h3><BiArchive style={{color:'#d47776'}} />welcome</h3>
      <AddApointment />
      <Seach />
      <div id="list">
      <ul>
          {appointData.map( (item) => (
            <AddInfo 
            key= {item.id}
            appointment ={item}/>
          ))}
          {/* <AddInfo /> */}
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