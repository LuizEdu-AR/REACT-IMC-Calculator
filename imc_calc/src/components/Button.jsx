import "./Button.css"

const Button = ({ id, text, action }) => {

  const handleAction = (e) => {
    action(e)
  }

  return (
    <div>
      <button id={id} onClick={handleAction}>{text}</button>
    </div>
  )
}

export default Button