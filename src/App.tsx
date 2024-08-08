export default function LightSwitch() {
  function HandleClick() {
    let bodyStyle = document.body.style
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white'
    } else {
      bodyStyle.backgroundColor = 'black'
    }
  }

  return (
    <button onClick={HandleClick}>
      Toggle the lights
    </button>
  )
}