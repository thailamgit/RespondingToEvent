type ButtonProps = {
  onClick: () => void
  children: string
}
function Button({onClick, children}: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
type PlayButtonProps = {
  movieName: string
}
function PlayButton({movieName}: PlayButtonProps) {
  function handlePlayClick() {
    alert('Now playing '+ movieName +' !')
  }
  return (
    <Button onClick={handlePlayClick}>
    {`Play ${movieName}`}
    </Button>
  )
}

function UpLoadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload image
    </Button>
  )
}

export default function Toolbar() {
  return(
    <div>
      <PlayButton movieName="Kiki's delivery service"/>
      <UpLoadButton/>
    </div>
  )
}