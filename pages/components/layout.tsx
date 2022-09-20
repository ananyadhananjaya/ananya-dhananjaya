import DockWrapper from './dockWrapper'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <DockWrapper />
    </>
  )
}
