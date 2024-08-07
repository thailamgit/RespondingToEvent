
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUpLoadImage={() => alert('Uploading!')}
    />
  )
}

type ButtonProps = {
  onClick: () => void
  children: string
}

function Button ({onClick, children}: ButtonProps){
  return(
    <button onClick={onClick}>
      {children}
    </button>
  )
}

type ToolbarProps = {
  onPlayMovie: () => void
  onUpLoadImage: () => void
}
function Toolbar ({onPlayMovie, onUpLoadImage}:ToolbarProps){
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play movie
      </Button>
      <Button onClick={onUpLoadImage}>
        Upload image
      </Button>
    </div>
  )
}