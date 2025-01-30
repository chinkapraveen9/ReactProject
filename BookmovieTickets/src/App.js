
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import MovieDetailsPage from "./Components/Moviedetails/Moviedetails";
import MovieShowtimes from "./Components/TheatersDetails/TheatersDetails";
import BookingSummaryy from "./Components/BookingPage/Booking";
import Seats1 from "./Components/Seats/Seats1";
import Seats2 from "./Components/Seats/Seats2";
import TicketPage from "./Components/Ticketpage/Ticketpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:title" element={<MovieDetailsPage />} />
        <Route path="/theatre-details" element={<MovieShowtimes />} />
        <Route path="/Seats1" element={<Seats1 />} />
        <Route path="/Seats2" element={<Seats2 />} />
        <Route path="/booking-summary" element={<BookingSummaryy />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
