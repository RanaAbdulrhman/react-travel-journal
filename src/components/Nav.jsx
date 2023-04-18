import globeIcon from "../assets/globe.png"
function Nav() {
  return (
    <div className="navbar h-16 w-screen bg-indigo-700 flex justify-center items-center text-white gap-2">
      <img src={globeIcon} alt="" />
      <span>my travel journal.</span>
    </div>
  )
}

export default Nav
