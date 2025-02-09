import {FaChalkboardTeacher,FaLightbulb,FaSmile, FaLaptopCode ,FaTrophy,FaMedal,FaChartLine,FaStar,FaBrain,FaHandshake, FaUsers } from "react-icons/fa"
import TopicCard from "./TopicCard"

export default function TechBuddySpaceFeatures() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          TechBuddySpace: Revolutionizing Education with Real-World Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <TopicCard
      title="Live Online Class Structure"
      description="Interactive and beginner-friendly classes that feel like learning from a friend."
      icon={<FaChalkboardTeacher className="w-6 h-6 text-blue-500" />}
      features={[
        "Friendly Environment: Classes feel like learning from a friend",
        "Beginner-Friendly: No prior experience required",
        "Real-Time Examples & Memory Techniques",
        "Live Coding & Debugging: Code from scratch during sessions",
      ]}
    />
    <TopicCard
      title="Domain Clarity"
      description="Clear guidance on learning goals, career opportunities, and industry insights."
      icon={<FaLightbulb className="w-6 h-6 text-yellow-500" />}
      features={[
        "Why Learn This?: Help students identify their learning goals",
        "Who Should Learn?: Clear target audience for each course",
        "Career Opportunities: Guidance on career paths and salaries",
        "Industry Insights: Predictions of future trends",
      ]}
    />
     <TopicCard
      title="Fun Learning Environment"
      description="Engaging sessions focused on making learning enjoyable."
      icon={<FaSmile className="w-6 h-6 text-green-500" />}
      features={[
        "Interactive & Engaging Sessions",
        "Live Q&A: Students can ask questions and get instant clarification",
      ]}
    />
    <TopicCard
      title="Peer Support"
      description="Collaborative learning with peers and always-on community support."
      icon={<FaUsers className="w-6 h-6 text-purple-500" />}
      features={[
        "Fellow Buddies: Collaborative learning with peers",
        "24/7 WhatsApp Community: Always-on support for resolving doubts",
      ]}
    />
    <TopicCard
      title="Projects & Competitions"
      description="Apply learning through exciting projects, competitions, and internship opportunities."
      icon={<FaTrophy className="w-6 h-6 text-orange-500" />}
      features={[
        "Group Projects & Networking",
        "Assignments & Hackathons",
        "Badge Rewards System",
        "Campus Ambassadorship",
        "Internship Opportunities",
      ]}
    />
    <TopicCard
      title="Certification & Rewards"
      description="Earn certifications and rewards based on your performance and participation."
      icon={<FaMedal className="w-6 h-6 text-yellow-600" />}
      features={["Certification on Merit", "Assignment Rewards & Coins", "Refer and Earn"]}
    />
    <TopicCard
      title="Student Tracking"
      description="Personalized monitoring for every student's growth and development."
      icon={<FaChartLine className="w-6 h-6 text-indigo-500" />}
      features={["Progress Monitoring: Personalized tracking for every student's growth"]}
    />
    <TopicCard
      title="Exclusive TechBuddySpace Features"
      description="Unique tools and resources to enhance your learning experience."
      icon={<FaStar className="w-6 h-6 text-yellow-400" />}
      features={["Leaderboards & Recognition", "Collaboration Tools", "Daily Updates", "Library & Cheat Sheets"]}
    />
    <TopicCard
      title="Skill Building & Soft Skills"
      description="Enhance your technical and soft skills for a well-rounded professional profile."
      icon={<FaBrain className="w-6 h-6 text-pink-500" />}
      features={["Soft Skills Development", "Aptitude Practice", "LinkedIn & Resume Building", "Interview Prep"]}
    />
    <TopicCard
      title="Offline & Networking Opportunities"
      description="Connect with peers and industry professionals through in-person events."
      icon={<FaHandshake className="w-6 h-6 text-teal-500" />}
      features={["Meetups & Competitions: In-person events to connect, learn, and compete"]}
    />
    <TopicCard
      title="Hackathons & Group Formation"
      description="Form teams and participate in exciting hackathons to apply your skills."
      icon={<FaLaptopCode className="w-6 h-6 text-red-500" />}
      features={["Hackathon Teams: Form groups based on shared interests and complementary skills"]}
    />
        <TopicCard
      title="Real-Time Product Development"
      description="Form teams and participate in exciting hackathons to apply your skills."
      icon={<FaLaptopCode className="w-6 h-6 text-red-500" />}
      features={["Build **real products** rather than small projects. Bring ideas to life with guidance from mentors.",  
        "Learn hosting and deployment, overcoming challenges in production environments—turning “enemies” into allies for developers.",  
        "Code on the spot during live sessions, identify errors, and debug with guidance."]}
    />
        <TopicCard
      title="Feedback-Driven Learning"
      description="Form teams and participate in exciting hackathons to apply your skills."
      icon={<FaLaptopCode className="w-6 h-6 text-red-500" />}
      features={["Dynamic Teaching: Teaching methods adapt continuously based on student feedback to improve understanding and match individual learning styles."  ,
        "Personal Mentors: Every student is assigned a mentor for tracking progress, solving doubts, and providing one-on-one guidance."]}
    />
        <TopicCard
      title="Weekend Specials"
      description="Form teams and participate in exciting hackathons to apply your skills."
      icon={<FaLaptopCode className="w-6 h-6 text-red-500" />}
      features={["Personal Branding: Sessions on LinkedIn optimization and professional growth.",  
        "GitHub Mastery: Learn to showcase projects effectively on GitHub."  ,
        "Resume Building: Craft industry-standard resumes tailored to job roles. " ,
        "Guest Speakers: Insights from industry professionals, freelancers, and senior peers.",  
        "Hackathon Insights: Guidance on tricks, pitching, and collaboration strategies."
        
        ]}
    />
        </div>
      </div>
    </section>
  )
}

