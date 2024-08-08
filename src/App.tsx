type ButtonProps = {
  content: string
  onPress: () => void
}

// function Button({content, onPress}: ButtonProps) {
//   <button onClick={onPress}>
//     {content}
//   </button>
// }

function GenerateColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i < 6; i++){
    color = color + letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default function BackgroundChange() {
  function handleClick() {
    let bodyStyle = document.body.style
    bodyStyle.backgroundColor = GenerateColor()
  }
  return (
    <button onClick={handleClick}>
      Change color
    </button>
  )
}