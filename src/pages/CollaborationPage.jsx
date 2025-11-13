import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Card from '../components/Card'
import AppStoreBadge from '../components/AppStoreBadge'

const CollaborationPage = () => {
  const { collaborationName } = useParams()
  
  // Scroll to top when component mounts or collaboration tool changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [collaborationName])
  
  const collaborationData = {
    slack: {
      name: "Slack",
      logo: "https://cdn.simpleicons.org/slack/4A154B",
      color: "bg-purple-50",
      brandColor: "from-purple-600 to-purple-700",
      benefits: [
        "Share ads and insights directly to Slack channels",
        "Keep your team informed with instant notifications",
        "Organize ad discussions in dedicated channels",
        "Search through shared ads and insights easily"
      ],
      description: "Share saved ads and AI insights directly to your Slack workspace. Keep your marketing team aligned with instant notifications and organized discussions."
    },
    notion: {
      name: "Notion",
      logo: "https://cdn.simpleicons.org/notion/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      benefits: [
        "Add ads and insights to Notion pages and databases",
        "Build a searchable library of ad inspiration",
        "Create ad analysis reports in Notion",
        "Collaborate on creative strategies with your team"
      ],
      description: "Integrate HUGE with Notion to build comprehensive ad libraries and analysis reports. Keep all your creative research in one organized workspace."
    },
    discord: {
      name: "Discord",
      logo: "https://cdn.simpleicons.org/discord/5865F2",
      color: "bg-indigo-50",
      brandColor: "from-indigo-500 to-indigo-600",
      benefits: [
        "Share ads to Discord channels and DMs",
        "Discuss ad strategies with your community",
        "Keep creative teams in sync",
        "Build a shared knowledge base"
      ],
      description: "Share ads and insights with your Discord community. Perfect for creative teams and marketing communities to collaborate on ad strategies."
    },
    'microsoft-teams': {
      name: "Microsoft Teams",
      logo: "https://cdn.simpleicons.org/microsoftteams/6264A7",
      color: "bg-blue-50",
      brandColor: "from-blue-600 to-blue-700",
      benefits: [
        "Share ads directly to Teams channels",
        "Collaborate with team members in real-time",
        "Keep marketing discussions organized",
        "Access shared ads from anywhere"
      ],
      description: "Seamlessly share ads and insights with your Microsoft Teams workspace. Keep your marketing team connected and informed."
    },
    'google-workspace': {
      name: "Google Workspace",
      logo: "https://cdn.simpleicons.org/google/4285F4",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Share ads to Google Drive and Docs",
        "Collaborate on ad analysis in real-time",
        "Build shared ad libraries in Sheets",
        "Present insights in Google Slides"
      ],
      description: "Integrate HUGE with Google Workspace to share ads, collaborate on analysis, and build comprehensive ad libraries with your team."
    },
    asana: {
      name: "Asana",
      logo: "https://cdn.simpleicons.org/asana/F06A6A",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-pink-600",
      benefits: [
        "Attach ads and insights to Asana tasks",
        "Track creative inspiration in projects",
        "Keep campaigns organized with ad references",
        "Share insights with project stakeholders"
      ],
      description: "Connect HUGE with Asana to attach ad insights to your marketing projects. Keep creative inspiration organized alongside your campaign tasks."
    },
    whatsapp: {
      name: "WhatsApp",
      logo: "https://cdn.simpleicons.org/whatsapp/25D366",
      color: "bg-green-50",
      brandColor: "from-green-500 to-green-600",
      benefits: [
        "Share ads instantly to WhatsApp groups",
        "Quick collaboration with team members",
        "Discuss ad strategies in real-time",
        "Keep remote teams connected"
      ],
      description: "Share ads and insights directly to WhatsApp. Perfect for quick team communication and instant ad sharing with your marketing team."
    },
    telegram: {
      name: "Telegram",
      logo: "https://cdn.simpleicons.org/telegram/26A5E4",
      color: "bg-blue-50",
      brandColor: "from-blue-400 to-blue-500",
      benefits: [
        "Share ads to Telegram channels and groups",
        "Build a community ad library",
        "Discuss strategies with your team",
        "Keep everyone updated on new insights"
      ],
      description: "Share ads and insights with your Telegram community. Great for building shared ad libraries and discussing creative strategies."
    },
    email: {
      name: "Email",
      logo: "https://cdn.simpleicons.org/gmail/EA4335",
      color: "bg-red-50",
      brandColor: "from-red-500 to-red-600",
      benefits: [
        "Email ads and insights to team members",
        "Share with stakeholders and clients",
        "Create ad reports via email",
        "Keep everyone in the loop"
      ],
      description: "Share ads and insights via email. Perfect for sending ad analysis to clients, stakeholders, or team members who prefer email communication."
    },
    twitter: {
      name: "Twitter",
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      benefits: [
        "Share ad insights on Twitter",
        "Build your thought leadership",
        "Engage with the marketing community",
        "Share creative inspiration publicly"
      ],
      description: "Share ad insights and creative inspiration on Twitter. Build your thought leadership and engage with the marketing community."
    },
    linkedin: {
      name: "LinkedIn",
      logo: "https://cdn.simpleicons.org/linkedin/0A66C2",
      color: "bg-blue-50",
      brandColor: "from-blue-600 to-blue-700",
      benefits: [
        "Share professional ad insights on LinkedIn",
        "Build your professional brand",
        "Engage with B2B marketing community",
        "Share industry expertise"
      ],
      description: "Share professional ad insights on LinkedIn. Perfect for B2B marketers to showcase expertise and engage with the professional marketing community."
    },
    messages: {
      name: "Messages",
      logo: "https://cdn.simpleicons.org/applemessages/007AFF",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Share ads via iMessage",
        "Quick team communication",
        "Instant ad sharing with colleagues",
        "Keep iOS users connected"
      ],
      description: "Share ads and insights directly via iMessage. Perfect for quick team communication and instant sharing with iOS users."
    },
    airdrop: {
      name: "AirDrop",
      logo: "https://cdn.simpleicons.org/apple/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      benefits: [
        "Share ads wirelessly to nearby devices",
        "Quick file sharing with team members",
        "No internet required for sharing",
        "Perfect for in-person collaboration"
      ],
      description: "Use AirDrop to share ads and insights wirelessly with nearby team members. Perfect for in-person meetings and quick collaboration."
    },
    'copy-link': {
      name: "Copy Link",
      logo: "https://cdn.simpleicons.org/link/0A66C2",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-purple-500",
      benefits: [
        "Copy shareable links to ads",
        "Share via any platform or method",
        "Universal sharing compatibility",
        "Flexible collaboration options"
      ],
      description: "Copy shareable links to share ads and insights anywhere. Universal compatibility for sharing via any platform or communication method."
    },
    trello: {
      name: "Trello",
      logo: "https://cdn.simpleicons.org/trello/0052CC",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Add ads as cards to Trello boards",
        "Organize creative inspiration by campaign",
        "Track ad analysis in your workflow",
        "Collaborate with team on boards"
      ],
      description: "Add ads and insights as cards to your Trello boards. Organize creative inspiration by campaign and keep ad analysis in your workflow."
    },
    'monday-com': {
      name: "Monday.com",
      logo: "https://cdn.simpleicons.org/monday/FF0080",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-pink-600",
      benefits: [
        "Share ads to Monday.com boards",
        "Track creative inspiration in workflows",
        "Keep campaigns organized",
        "Collaborate with your team"
      ],
      description: "Share ads and insights to Monday.com boards. Keep your creative inspiration organized alongside your marketing campaigns and workflows."
    },
    jira: {
      name: "Jira",
      logo: "https://cdn.simpleicons.org/jira/0052CC",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Attach ads to Jira issues and epics",
        "Reference creative inspiration in tickets",
        "Track ad analysis in development workflow",
        "Keep marketing and dev teams aligned"
      ],
      description: "Attach ads and insights to Jira issues. Perfect for product teams to reference creative inspiration and keep marketing aligned with development."
    },
    linear: {
      name: "Linear",
      logo: "https://cdn.simpleicons.org/linear/5E6AD2",
      color: "bg-indigo-50",
      brandColor: "from-indigo-500 to-indigo-600",
      benefits: [
        "Share ads to Linear issues",
        "Reference creative in product development",
        "Keep design and marketing aligned",
        "Track ad inspiration in your workflow"
      ],
      description: "Share ads and insights to Linear issues. Keep creative inspiration organized alongside your product development workflow."
    },
    dropbox: {
      name: "Dropbox",
      logo: "https://cdn.simpleicons.org/dropbox/0061FF",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Save ads to Dropbox folders",
        "Build organized ad libraries",
        "Share folders with team members",
        "Access ads from anywhere"
      ],
      description: "Save ads and insights to Dropbox. Build organized ad libraries that your entire team can access and collaborate on."
    },
    'google-drive': {
      name: "Google Drive",
      logo: "https://cdn.simpleicons.org/googledrive/4285F4",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Save ads to Google Drive folders",
        "Organize by campaign or category",
        "Share folders with your team",
        "Access from any device"
      ],
      description: "Save ads and insights to Google Drive. Organize your creative inspiration in shared folders that your team can access from anywhere."
    },
    onedrive: {
      name: "OneDrive",
      logo: "https://cdn.simpleicons.org/microsoftonedrive/0078D4",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Save ads to OneDrive folders",
        "Organize creative inspiration",
        "Share with Microsoft 365 users",
        "Access from any device"
      ],
      description: "Save ads and insights to OneDrive. Perfect for Microsoft 365 users to organize and share creative inspiration with their team."
    },
    basecamp: {
      name: "Basecamp",
      logo: "https://cdn.simpleicons.org/basecamp/1D2D35",
      color: "bg-gray-50",
      brandColor: "from-gray-700 to-gray-800",
      benefits: [
        "Share ads to Basecamp projects",
        "Organize creative inspiration by campaign",
        "Keep team discussions in one place",
        "Track ad analysis in projects"
      ],
      description: "Share ads and insights to Basecamp projects. Keep your creative inspiration organized alongside your marketing campaigns and team discussions."
    },
    'facebook-messenger': {
      name: "Facebook Messenger",
      logo: "https://cdn.simpleicons.org/messenger/0084FF",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      benefits: [
        "Share ads to Messenger conversations",
        "Quick team communication",
        "Discuss ad strategies in real-time",
        "Keep remote teams connected"
      ],
      description: "Share ads and insights via Facebook Messenger. Perfect for quick team communication and instant ad sharing with your marketing team."
    },
    instagram: {
      name: "Instagram",
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-purple-500",
      benefits: [
        "Share ad insights on Instagram",
        "Build your creative brand",
        "Engage with marketing community",
        "Showcase ad analysis publicly"
      ],
      description: "Share ad insights and creative inspiration on Instagram. Perfect for building your creative brand and engaging with the marketing community."
    }
  }
  
  const collaboration = collaborationData[collaborationName?.toLowerCase()] || collaborationData.slack
  
  // Function to get icon for each step based on keywords
  const getStepIcon = (step, index) => {
    const text = step.toLowerCase()
    
    if (index === 0 || text.includes('save') || text.includes('ad') || text.includes('video')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      )
    }
    if (index === 1 || text.includes('tap') || text.includes('share button') || text.includes('button')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    }
    if (index === 2 || text.includes('select') || text.includes('choose')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
    if (index === 3 || text.includes('team') || text.includes('access') || text.includes('insight') || text.includes('instant')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
    // Default icon
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    )
  }
  
  // Function to get icon for each benefit based on keywords
  const getBenefitIcon = (benefit) => {
    const text = benefit.toLowerCase()
    if (text.includes('share') || text.includes('send')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    }
    if (text.includes('notif') || text.includes('inform') || text.includes('update')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
    if (text.includes('organize') || text.includes('organise') || text.includes('channel')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    }
    if (text.includes('search') || text.includes('find') || text.includes('library')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
    if (text.includes('discuss') || text.includes('talk') || text.includes('communicat')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
    if (text.includes('sync') || text.includes('real-time') || text.includes('realtime')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
    if (text.includes('attach') || text.includes('add') || text.includes('link')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
    if (text.includes('track') || text.includes('monitor') || text.includes('follow')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
    if (text.includes('report') || text.includes('analysis') || text.includes('insight')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
    if (text.includes('collaborat') || text.includes('team') || text.includes('stakeholder')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
    if (text.includes('quick') || text.includes('fast') || text.includes('instant')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
    if (text.includes('build') || text.includes('create') || text.includes('make')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    }
    if (text.includes('access') || text.includes('anywhere') || text.includes('device')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
    if (text.includes('campaign') || text.includes('project') || text.includes('workflow')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
    // Default icon
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Team Collaboration
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4">
                <img 
                  src="/logo.png" 
                  alt="HUGE"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-gray-400">→</div>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4">
                <img 
                  src={collaboration.logo} 
                  alt={collaboration.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Share to <span className="gradient-text">{collaboration.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              {collaboration.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppStoreBadge className="h-14 md:h-16" />
              <Link to="/">
                <Button variant="outline" className="text-lg px-8 py-4">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of sharing to <span className="gradient-text">{collaboration.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why {collaboration.name} is perfect for your team collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {collaboration.benefits.map((benefit, index) => (
              <Card key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {getBenefitIcon(benefit)}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to share to <span className="gradient-text">{collaboration.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to share ads and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Save an ad or video in HUGE",
              "Tap the share button in HUGE",
              `Select "${collaboration.name}" from share options`,
              "Your team gets instant access to insights"
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {getStepIcon(step, index)}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start sharing to {collaboration.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download HUGE and instantly share ads and insights with your team via {collaboration.name}.
          </p>
          <AppStoreBadge className="h-16 md:h-20" />
        </div>
      </section>
    </div>
  )
}

export default CollaborationPage

