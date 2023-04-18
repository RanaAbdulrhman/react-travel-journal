import mountImg from "../assets/mount-fuji.webp"
import locationIcon from "../assets/location.svg"


function Card(data) {
  return (
    <div className="card flex flex-col w-11/12">   
      <div className="flex flex-row justify-center items-center gap-8 m-14">
        <img className="object-cover h-72 w-48 rounded-lg" src={data.imageUrl} alt="" />
        <div>
          <div className="flex flex-row items-baseline gap-1 mb-2">
            <img src={locationIcon} alt="" className="w-3.5"/>
            <p className="tracking-widest uppercase text-sm">{data.location}</p>
            <a className=" ml-3 underline text-neutral-400 text-sm" href={data.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
          <p className="font-semibold text-sm mb-2">{data.startDate} - {data.endDate}</p>
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
      <hr className="w-full"/>
    </div> 
    
  )
}

export default Card
