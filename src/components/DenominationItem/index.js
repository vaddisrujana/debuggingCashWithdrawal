import './index.css'

const DenominationItem = props => {
  const {denominationsList, remove} = props
  const {value} = denominationsList

  const onRemove = () => {
    remove(value)
  }

  return (
    <li>
      <button type="button" onClick={onRemove} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
