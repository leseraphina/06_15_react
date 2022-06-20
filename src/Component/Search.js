import {BiSearch , BiCaretDown,BiCheck} from 'react-icons/bi'
import {useState} from'react'
function DropDown(props){
  // console.log(props.toggleSort)
  if(!props.toggleSort){
    return null
  }
  return (
    <ul>
      <li>애기이름</li>
      <li>예약자명</li>
      <li>날짜</li>
      <li>올림차순</li>
      <li>내림차순</li>
    </ul>
  );
}

function Search({query,onQueryChange}){
  let [toggleSort,setToggleSort] = useState(false)
  return (
    <div id="search">
      <p>
        <BiSearch />
        <input  
          type="text" 
          placeholder="search"
          value={query} 
          onChange={
            (event)=>{onQueryChange(event.target.value)}
          }/>
        <button 
          type="button"
          onClick={
           () => {
            setToggleSort(!toggleSort)
           }
          }
          >
          정렬하기
          <BiCaretDown />
          </button>
      </p>
      <DropDown 
        toggleSort={toggleSort} 
        />
    </div>
  )
}

export default Search