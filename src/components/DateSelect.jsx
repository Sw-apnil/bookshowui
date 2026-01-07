import React, { useState } from "react";
import BlurCircle from "./BlurCircle"; // background decoration component
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // arrow icons
import toast from "react-hot-toast"; // popup message ke liye
import { useNavigate } from "react-router-dom"; // page navigation ke liye

const DateSelect = ({ dateTime, id }) => {
  // next page pe le jaane ke liye
  const navigate = useNavigate();

  // user ne kaunsi date select ki hai, usko store karta hai
  const [selected, setSelected] = useState(null);

  // Book Now button ka handler
  const onBookHandler = () => {
    // agar user ne date select nahi ki
    if (!selected) {
      return toast("Please select a date"); // warning message
    }

    // agar date select ho chuki hai to next route pe jao
    navigate(`/movies/${id}/${selected}`);

    // next page ke top par scroll
    scrollTo(0, 0);
  };

  return (
    // id isliye diya taaki "Buy Tickets" pe click karne par yahin scroll ho
    <div id="dateSelect" className="pt-30">
      
      {/* main container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        
        {/* background blur effects (sirf design ke liye) */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        {/* left side: date selection */}
        <div>
          <p className="text-lg font-semibold">Choose Date</p>

          <div className="flex items-center gap-6 text-sm mt-5">
            
            {/* left arrow icon (currently sirf UI ke liye) */}
            <ChevronLeftIcon width={28} />

            {/* dates ka grid */}
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              
              {/* dateTime object ki saari dates pe loop */}
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date} // unique key
                  
                  // click karne par selected date set hoti hai
                  onClick={() => setSelected(date)}
                  
                  // selected date ke hisaab se style change hoti hai
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                    selected === date
                      ? "bg-primary text-white" // selected date
                      : "border border-primary/70" // normal date
                  }`}
                >
                  {/* date number (jaise 12) */}
                  <span>{new Date(date).getDate()}</span>

                  {/* month short name (jaise Sep) */}
                  <span>
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </span>
                </button>
              ))}
            </span>

            {/* right arrow icon (currently sirf UI ke liye) */}
            <ChevronRightIcon width={28} />
          </div>
        </div>

        {/* right side: Book Now button */}
        <button
          onClick={onBookHandler} // booking flow start hota hai
          className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
