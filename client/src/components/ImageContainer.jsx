const ImageContainer = () => {
  return (
    <div className="h-screen bg-cover bg-center animate-slide-bg">
      <div className="flex flex-col justify-center items-start gap-8 h-screen w-[55%] custom-container  text-primary ">
        <div className=" flex flex-col gap-2 opacity-65 animate-slide-text">
          <p className="font-dm-sans font-semibold">
            WE ARE ALWAYS OPEN FOR WORLD
          </p>
          <h1 className="font-dm-serif text-9xl ">Al Bataeh Municipality</h1>
        </div>
        <button className="bg-quarternary px-10 py-4 font-dm-sans font-semibold ">DISCOVER MORE</button>
      </div>
    </div>
  )
}

export default ImageContainer
