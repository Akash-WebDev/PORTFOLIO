import im from "../assets/hero.png"

export default function Profile(){
return(
    <div className='flex justify-center items-center flex-col  m-9 rounded-2xl   bg-white/15 '>
      <div className='flex flex-col items-center justify-center gap-3 p-10 mt-10 text-white'>
        <img src= {im} alt="" className='bg-no-repeat bg-contain w-32 h-32 bg-center'  />
        <h1 className="text-4xl">Welcome <span>Name</span></h1>
        <p className="text-2xl font-light mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quaerat fugit! Nemo rerum</p>
      </div>
      <div className="mt-6 text-center mx-9 h-60 ">
        <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est, deleniti quisquam natus quia ex dolore obcaecati, maxime aliquid suscipit totam? Ut aliquam suscipit minima maiores mollitia </p>
        <div className='flex gap-8 justify-center mt-4'>
          <button className='px-8 py-3 rounded-full bg-cyan-300'>Done</button>
          <button className='px-8 py-3 rounded-full border border-cyan-500/50 text-white'>Cancel</button>
        </div>
      </div>

    </div>
)
}