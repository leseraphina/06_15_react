// function Search(){

// }
import {BiSearch,BiCaretDown,BiCheck } from 'react-icons/bi'
import {useState} from 'react';
function DropDown({toggleSort,orderBy,onOrderByChange,sortBy,onSortByChange}){
  if(!toggleSort){
    return null;
  }
  return (
    <ul>
    <li
    onClick ={() => {onSortByChange('petName')}}
    >
        애기이름
        {(sortBy === 'petName') && <BiCheck />}
        </li>
    <li
    onClick ={() => {onSortByChange('ownerName')}}
    >
      예약자명
      {(sortBy === 'ownerName') && <BiCheck />}
      </li>
    <li
    onClick ={() => {onSortByChange('aptDate')}}
    >
      날짜
     {(sortBy === 'aptDate') && <BiCheck />}
      </li>
    <li
    onClick ={() => {onOrderByChange('asc')}}
    >올림차순
     {(orderBy === 'asc') && <BiCheck />}
     </li>
    <li
    onClick ={() => {onOrderByChange('desc')}}
    >내림차순
     {(orderBy  === 'desc') && <BiCheck />}
     </li>
  </ul>
  )
}
const Search = ({query,onQueryChange,orderBy,onOrderByChange,sortBy,onSortByChange}) => {
  let [toggleSort,setToggleSort] = useState(false);
  return (
<div id="search">
      <p>
      <BiSearch />
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={
            (event) => {onQueryChange(event.target.value)}
          }
           />
        <button type="button"              
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
      orderBy = {orderBy}
      sortBy = {sortBy}
      onOrderByChange={myOrder => onOrderByChange(myOrder)}
      onSortByChange={mySort => onSortByChange(mySort)}
      />
    </div>

  )
}
export default Search
