import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import FeedbackForm from "./components/feedback";
import ReviewList from "./components/review";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>
        <div className="tab">
          <Link to="/feedback" className="tab-link">Give Feedback</Link>
          <Link to="/reviews" className="tab-link">View Reviews</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;