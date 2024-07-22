

const Ratings = ({rating}) => {
    const ratingArray= Array(5).fill(false)
    for (let i=0; i<rating; i++){
        ratingArray[i]=true
    }
  return (
    <div>
      {ratingArray.map((value,i)=>(
        value ? (<i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>):(
            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>

        )
      )

      )}
    </div>
  )
}

export default Ratings
