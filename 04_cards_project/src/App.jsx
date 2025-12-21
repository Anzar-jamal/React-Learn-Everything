import React from 'react'
import{Bookmark} from 'lucide-react'


const App = () => {
  return (
    <div className='parent' >
      <div className="card">

         {/* top section of the card */}
        <div className="top">
          <img  src="https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="" />
          <button>save <Bookmark size={15} /> </button>
        </div>


        {/* center section of the card */}
        <div className="center">
          <h3>Amazon <span>5 days ago</span> </h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Seior Level</h4>
          </div>

        </div>



        {/* bottom section of the card */}

        <div className="bottom">
          <div>
            
              <h3>$120</h3>
              <p>Mumbai, India</p>
            

          </div>
            <button>Apply Now</button> 
        </div>


      </div>
      </div>
  )
}

export default App