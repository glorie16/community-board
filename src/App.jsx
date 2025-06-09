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

const App = () => {

  return (
    <div className="App">
      <h1>First-Year Survival Guide!</h1>
      <h2>Check out everything you need to know for your first year on campus.</h2>
      
      <div className='cardList'>
        <Card 
          title="Campus Map" 
          description="Find your way around campus with our interactive map." 
          imageSrc={Map}
          buttonText="View Map" 
          onButtonClick={() => alert('Map clicked!')} 
        />
        
        <Card 
          title="Dining Options" 
          description="Explore the various dining options available on campus." 
          imageSrc={Food} 
          buttonText="See Dining Options" 
          onButtonClick={() => alert('Dining options clicked!')} 
        />
        
        <Card 
          title="Student Services" 
          description="Learn about the student services available to you." 
          imageSrc={events}
          buttonText="Discover Services" 
          onButtonClick={() => alert('Student services clicked!')} 
        />

        <Card
          title="Events Calendar" 
          description="Stay updated with the latest events happening on campus." 
          imageSrc={billy}
          buttonText="View Events" 
          onButtonClick={() => alert('Events calendar clicked!')}
        />

        <Card
          title="Housing Information" 
          description="Get all the details about housing options and policies." 
          imageSrc={Dorms}
          buttonText="Learn More" 
          onButtonClick={() => alert('Housing information clicked!')}
        />

        <Card
          title="Sports" 
          description="Access health and wellness resources available to students." 
          imageSrc={sports}
          buttonText="Explore Resources" 
          onButtonClick={() => alert('Health and wellness clicked!')}
        />

        <Card
          title="Academic Resources" 
          description="Find academic resources to help you succeed in your studies." 
          imageSrc={building}
          buttonText="View Resources" 
          onButtonClick={() => alert('Academic resources clicked!')}  
        />

        <Card
          title="Transportation Services" 
          description="Learn about transportation options available for students." 
          imageSrc={Bus}
          buttonText="See Options" 
          onButtonClick={() => alert('Transportation services clicked!')}
        />

        <Card
          title="Clubs and Organizations" 
          description="Get involved with various clubs and organizations on campus." 
          imageSrc={Clubs}
          buttonText="Join a Club" 
          onButtonClick={() => alert('Clubs and organizations clicked!')}
        />

        <Card
          title="Career Services" 
          description="Explore career services and job opportunities for students." 
          imageSrc={career}
          buttonText="Find Opportunities" 
          onButtonClick={() => alert('Career services clicked!')}
        />
        
        </div>
    </div>
  )
}

export default App