const headerStyles = {
  color: 'white',
  background: 'black'
}

export default function Header({ title }) {
  return <h1 className="title" style={headerStyles} >{title}</h1>
}
