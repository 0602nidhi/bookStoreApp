import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
            We're delighted to have you {" "} 
            <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12">
            At our bookstore, every visit is an adventure. Explore a world where pages come alive, and every book is a gateway to a new journey. From thrilling mysteries and heartwarming romances to insightful non-fiction and imaginative fantasies, our shelves are brimming with stories waiting to be discovered. Join us for author signings, book club meetings, and literary events that celebrate the magic of reading. Welcome to your new favorite escape—let your next adventure begin here!
            </p>
           <Link to="/">
           <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
           </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {
                   list.map((item)=>(
                  <Cards key={item.id} item={item}/>
                   ))
                }
            </div>
            </div> 
        </>
  )
}

export default Course