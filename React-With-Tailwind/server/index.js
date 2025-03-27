const app = require('express')();
const cors = require('cors');
app.use(cors());

let dataArr = [
    {
      name: "Aarav Mehta",
      role: "Back-end Developer",
      description: "Passionate about building scalable APIs.",
      img: "/public/pic (1).jpg",
    },
    {
      name: "Sara Khan",
      role: "Front-end Developer",
      description: "Loves creating beautiful and responsive UIs.",
      img: "/public/pic (2).jpg",
    },
    {
      name: "Rohit Sharma",
      role: "HR Manager",
      description: "Expert in talent acquisition and employee relations.",
      img: "/public/pic (3).jpg",
    },
    {
      name: "Neha Patel",
      role: "Gamer",
      description: "Streaming FPS games and loves strategy games.",
      img: "/public/pic (4).jpg",
    },
    {
      name: "Vikram Singh",
      role: "Data Scientist",
      description: "Turns raw data into actionable insights.",
      img: "/public/pic (5).jpg",
    },
    {
      name: "Priya Verma",
      role: "Cybersecurity Analyst",
      description: "Protects systems from cyber threats.",
      img: "/public/pic (6).jpg",
    },
    {
      name: "Rajesh Iyer",
      role: "Full Stack Developer",
      description: "Writes clean and efficient code.",
      img: "/public/pic (7).jpg",
    },
    {
      name: "Alisha Gupta",
      role: "AI Engineer",
      description: "Develops smart AI-powered solutions.",
      img: "/public/pic (8).jpg",
    },
    {
      name: "Kunal Joshi",
      role: "DevOps Engineer",
      description: "Automates deployment and CI/CD pipelines.",
      img: "/public/pic (9).jpg",
    },
    {
      name: "Manish Das",
      role: "Mobile App Developer",
      description: "Creates high-performance mobile apps.",
      img: "/public/pic (10).jpg",
    },
    {
      name: "Sneha Kapoor",
      role: "UX Designer",
      description: "Crafts intuitive and engaging user experiences.",
      img: "/public/pic (11).jpg",
    },
    {
      name: "Ravi Chauhan",
      role: "Software Tester",
      description: "Finds bugs before they reach production.",
      img: "/public/pic (12).jpg",
    },
    {
      name: "Tina Bhatt",
      role: "Product Manager",
      description: "Bridges the gap between devs and users.",
      img: "/public/pic (13).jpg",
    },
    {
      name: "Arun Sharma",
      role: "Game Developer",
      description: "Passionate about game mechanics and design.",
      img: "/public/pic (14).jpg",
    },
    {
      name: "Meera Nair",
      role: "Marketing Expert",
      description: "Boosts brand awareness and engagement.",
      img: "/public/pic (15).jpg",
    },
    {
      name: "Jatin Malhotra",
      role: "System Administrator",
      description: "Keeps servers running smoothly.",
      img: "/public/pic (16).jpg",
    },
    {
      name: "Sana Sheikh",
      role: "Blockchain Developer",
      description: "Builds secure decentralized applications.",
      img: "/public/pic (17).jpg",
    },
    {
      name: "Kartik Sen",
      role: "AI Researcher",
      description: "Explores deep learning and neural networks.",
      img: "/public/pic (18).jpg",
    },
    {
      name: "Pooja Rao",
      role: "VR Developer",
      description: "Creates immersive virtual reality experiences.",
      img: "/public/pic (19).jpg",
    },
    {
      name: "Ramesh Pillai",
      role: "Database Administrator",
      description: "Manages large-scale databases efficiently.",
      img: "/public/pic (20).jpg",
    },
    {
      name: "Anjali Yadav",
      role: "Tech Recruiter",
      description: "Finds the best talent for tech roles.",
      img: "/public/pic (21).jpg",
    },
    {
      name: "Umesh Prasad",
      role: "Embedded Systems Engineer",
      description: "Develops firmware for smart devices.",
      img: "/public/pic (22).jpg",
    },
    {
      name: "Krishna Tiwari",
      role: "Cloud Architect",
      description: "Designs scalable cloud infrastructures.",
      img: "/public/pic (23).jpg",
    },
    {
      name: "Sonia Das",
      role: "SEO Specialist",
      description: "Optimizes websites for better search rankings.",
      img: "/public/pic (24).jpg",
    },
    {
      name: "Vivek Reddy",
      role: "Ethical Hacker",
      description: "Tests security systems to prevent breaches.",
      img: "/public/pic (25).jpg",
    },
    {
      name: "Asha Balan",
      role: "Content Creator",
      description: "Writes engaging blogs and social content.",
      img: "/public/pic (26).jpg",
    },
    {
      name: "Nikhil Saxena",
      role: "Photographer",
      description: "Captures stunning visuals and moments.",
      img: "/public/pic (27).jpg",
    },
    {
      name: "Reema Chopra",
      role: "Animator",
      description: "Brings characters to life with animations.",
      img: "/public/pic (28).jpg",
    },
    {
      name: "Mohit Trivedi",
      role: "Network Engineer",
      description: "Ensures seamless connectivity and uptime.",
      img: "/public/pic (29).jpg",
    },
    {
      name: "Farhan Qureshi",
      role: "E-commerce Manager",
      description: "Boosts online sales and marketing efforts.",
      img: "/public/pic (30).jpg",
    },
    {
      name: "Snehal Sharma",
      role: "Technical Writer",
      description: "Simplifies complex concepts in documentation.",
      img: "/public/pic (31).jpg",
    },
    {
      name: "Gaurav Jain",
      role: "Film Editor",
      description: "Creates engaging stories through video editing.",
      img: "/public/pic (32).jpg",
    },
    {
      name: "Aniket Bose",
      role: "Music Producer",
      description: "Composes and mixes beats for artists.",
      img: "/public/pic (33).jpg",
    },
    {
      name: "Lavanya Menon",
      role: "Fashion Designer",
      description: "Creates stylish and modern clothing.",
      img: "/public/pic (34).jpg",
    },
    {
      name: "Ashish Yadav",
      role: "Investment Banker",
      description: "Manages financial portfolios and deals.",
      img: "/public/pic (35).jpg",
    },
    {
      name: "Neelima Ghosh",
      role: "Legal Advisor",
      description: "Provides legal consultation for businesses.",
      img: "/public/pic (36).jpg",
    },
    {
      name: "Sumit Bhatia",
      role: "Mathematician",
      description: "Solves complex problems with logic.",
      img: "/public/pic (37).jpg",
    },
    {
      name: "Tushar Rao",
      role: "Radio Jockey",
      description: "Entertains audiences with engaging talk shows.",
      img: "/public/pic (38).jpg",
    },
    {
      name: "Divya Joshi",
      role: "Teacher",
      description: "Inspires students with knowledge and wisdom.",
      img: "/public/pic (39).jpg",
    },
    {
      name: "Harish Patel",
      role: "Fitness Trainer",
      description: "Guides clients toward healthier lifestyles.",
      img: "/public/pic (40).jpg",
    },
    {
      name: "Bhavna Kaur",
      role: "Chef",
      description: "Creates delicious dishes with creativity.",
      img: "/public/pic (41).jpg",
    },
  ];

  
app.get('/dataapi', (req, res) => {
    res.status(200).json(dataArr);
})
app.listen(3000, () => { console.log('Server is running on http://localhost:3000/dataapi');
 });
 