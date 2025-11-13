import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Features from '../sections/Features'
import HowItWorks from '../sections/HowItWorks'
import AIAnalysis from '../sections/AIAnalysis'
import ShareFrom from '../sections/ShareFrom'
import TeamCollaboration from '../sections/TeamCollaboration'
import TargetUsers from '../sections/TargetUsers'
import FinalCTA from '../sections/FinalCTA'
import AnimatedArrow from '../components/AnimatedArrow'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <AIAnalysis />
      <ShareFrom />
      <AnimatedArrow />
      <TeamCollaboration />
      <TargetUsers />
      <FinalCTA />
    </div>
  )
}

export default Index

