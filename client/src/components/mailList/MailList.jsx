import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">¡Los mejores hoteles en Homehub!</h1>
      <span className="mailDesc">Suscribete ahora</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email" />
        <button>Subscribirse</button>
      </div>
    </div>
  )
}

export default MailList