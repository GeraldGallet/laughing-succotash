interface HelloProps {
  children: React.ReactNode
  name: string
}

export function Hello({ children, name }: HelloProps) {
  return <>
    <h1>Hello {name}!</h1>
    <h2>{children}</h2>
  </>
}