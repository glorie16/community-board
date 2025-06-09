import './App.css';
import Card from './components/Card.jsx';
import billy from './images/billy.jpg';
import Map from './images/Map.jpg';
import Food from './images/Food.jpg';
import events from './images/events.jpg';
import building from './images/building.jpg';
import Dorms from './images/dorms.jpg';
import sports from './images/sports.jpg';
import Bus from './images/Bus.jpg';
import Clubs from './images/Clubs.jpg';
import career from './images/career.jpg';
import logo from './images/new-logo.jpg';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Site Logo" className="new-logo" />
      </div>
      
      //<div className="sidebar left-bar"></div>
      //<div className="sidebar right-bar"></div>
      <div className="intro">
        <h1>First-Year Survival Guide!</h1>
        <h2>Check out everything you need to know for your first year on campus.</h2>
      </div>
        
      <div className='cardList'>
        <Card 
          title="Campus Map" 
          description="Find your way around campus with our interactive map." 
          imageSrc={Map}
          buttonText="View Map" 
          buttonLink={'https://www.cpp.edu/maps/'}
        />
        
        <Card 
          title="Dining Options" 
          description="Explore the various dining options available on campus." 
          imageSrc={Food} 
          buttonText="See Dining Options" 
          buttonLink={'https://www.cpp.edu/aboutcpp/visitor-information/dining.shtml'}
        />
        
        <Card 
          title="Student Services" 
          description="Learn about the student services available to you." 
          imageSrc={events}
          buttonText="Discover Services" 
          buttonLink={'https://www.cpp.edu/studentsuccess/directories/index.shtml'}
        />

        <Card
          title="Events Calendar" 
          description="Stay updated with the latest events happening on campus." 
          imageSrc={billy}
          buttonText="View Events" 
          buttonLink={'https://www.cpp.edu/events/index.shtml'}
        />

        <Card
          title="Housing Information" 
          description="Get all the details about housing options and policies." 
          imageSrc={Dorms}
          buttonText="Learn More" 
           buttonLink={'https://www.cpp.edu/housing/'}
        />

        <Card
          title="Sports" 
          description="Access health and wellness resources available to students." 
          imageSrc={sports}
          buttonText="Explore Resources" 
           buttonLink={'https://broncoathletics.com/'}
        />

        <Card
          title="Academic Resources" 
          description="Find academic resources to help you succeed in your studies." 
          imageSrc={building}
          buttonText="View Resources" 
          buttonLink={'https://www.cpp.edu/student-gateway/'}
        />

        <Card
          title="Transportation Services" 
          description="Learn about transportation options available for students." 
          imageSrc={Bus}
          buttonText="See Options" 
          buttonLink={'https://www.cpp.edu/transportation/index.shtml'}
        />

        <Card
          title="Clubs and Organizations" 
          description="Get involved with various clubs and organizations on campus." 
          imageSrc={Clubs}
          buttonText="Join a Club" 
          buttonLink={'https://www.cpp.edu/blc/'}
        />

        <Card
          title="Career Services" 
          description="Explore career services and job opportunities for students." 
          imageSrc={career}
          buttonText="Find Opportunities" 
          buttonLink={'https://careercenter.cpp.edu/'}
        />
        
        </div>
    </div>
  )
}

export default App