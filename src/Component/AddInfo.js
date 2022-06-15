import { BiTrash } from 'react-icons/bi'

function AddInfo({appointment}){
  return (
    <li>
      <dl>
        <dt>
        {appointment.petName}
        </dt>
        <dd className="owner">
        {appointment.ownerName}
        </dd>
        <dd className="desc">
        {appointment.aptNotes}
        </dd>
        <dd className="date">
        {appointment.aptDate}
        </dd>
      </dl>
      <p>
        <button>
          <BiTrash />
        </button>
      </p>
    </li>
  )
}

export default AddInfo;