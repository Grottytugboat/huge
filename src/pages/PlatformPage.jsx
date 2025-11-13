import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Card from '../components/Card'

const PlatformPage = () => {
  const { platformName } = useParams()
  
  // Scroll to top when component mounts or platform changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [platformName])
  
  const platformData = {
    instagram: {
      name: "Instagram",
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-purple-500",
      steps: [
        "Open Instagram and find an ad or video you want to save",
        "Tap the share button (paper plane icon) below the post",
        "Scroll through the share options and tap 'HUGE'",
        "HUGE instantly saves and analyzes the ad with AI"
      ],
      features: [
        "Save Instagram ads, Reels, and Stories",
        "AI analyzes the creative structure and hook",
        "Extract transcripts from video content",
        "Identify viral triggers and engagement patterns"
      ]
    },
    youtube: {
      name: "YouTube",
      logo: "https://cdn.simpleicons.org/youtube/FF0000",
      color: "bg-red-50",
      brandColor: "from-red-500 to-red-600",
      steps: [
        "Open YouTube and find an ad or video you want to analyze",
        "Tap the share button below the video",
        "Select 'HUGE' from the iOS share sheet",
        "Get instant AI analysis of the ad's structure and performance"
      ],
      features: [
        "Save YouTube ads and video content",
        "Automatic transcript extraction",
        "Analyze video pacing and editing patterns",
        "Identify audience targeting and messaging"
      ]
    },
    tiktok: {
      name: "TikTok",
      logo: "https://cdn.simpleicons.org/tiktok/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      steps: [
        "Open TikTok and find a viral ad or video",
        "Tap the share arrow on the right side",
        "Choose 'HUGE' from the share options",
        "Instantly get AI insights on what makes it viral"
      ],
      features: [
        "Save TikTok ads and viral videos",
        "AI detects viral triggers and trends",
        "Analyze hook structure and timing",
        "Understand editing patterns that drive engagement"
      ]
    },
    facebook: {
      name: "Facebook",
      logo: "https://cdn.simpleicons.org/facebook/1877F2",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      steps: [
        "Open Facebook and find an ad in your feed",
        "Tap the three dots menu on the post",
        "Select 'Share' and choose 'HUGE'",
        "Get comprehensive AI analysis instantly"
      ],
      features: [
        "Save Facebook ads and video content",
        "Analyze ad copy and creative elements",
        "Extract audience targeting insights",
        "Compare with competitor strategies"
      ]
    },
    twitter: {
      name: "Twitter / X",
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      steps: [
        "Open Twitter/X and find a promoted tweet or video ad",
        "Tap the share icon on the tweet",
        "Select 'HUGE' from the share sheet",
        "Receive instant AI breakdown of the ad strategy"
      ],
      features: [
        "Save Twitter/X ads and video content",
        "Analyze messaging and hook structure",
        "Extract key talking points and CTAs",
        "Understand engagement drivers"
      ]
    },
    linkedin: {
      name: "LinkedIn",
      logo: "https://cdn.simpleicons.org/linkedin/0A66C2",
      color: "bg-blue-50",
      brandColor: "from-blue-600 to-blue-700",
      steps: [
        "Open LinkedIn and find a sponsored post or video ad",
        "Tap the share button on the post",
        "Choose 'HUGE' from the iOS share options",
        "Get professional-grade ad analysis"
      ],
      features: [
        "Save LinkedIn ads and video content",
        "Analyze B2B messaging strategies",
        "Extract professional insights and positioning",
        "Understand targeting for business audiences"
      ]
    },
    twitch: {
      name: "Twitch",
      logo: "https://cdn.simpleicons.org/twitch/9146FF",
      color: "bg-purple-50",
      brandColor: "from-purple-500 to-purple-600",
      steps: [
        "Open Twitch and find an ad during a stream",
        "Use the share functionality in the Twitch app",
        "Select 'HUGE' from the share sheet",
        "Analyze gaming and streaming ad strategies"
      ],
      features: [
        "Save Twitch ads and video content",
        "Analyze gaming-focused creative strategies",
        "Understand streaming audience targeting",
        "Extract engagement patterns for gaming ads"
      ]
    },
    snapchat: {
      name: "Snapchat",
      logo: "https://cdn.simpleicons.org/snapchat/FFFC00",
      color: "bg-yellow-50",
      brandColor: "from-yellow-400 to-yellow-500",
      steps: [
        "Open Snapchat and find an ad or video",
        "Tap the share button on the content",
        "Select 'HUGE' from the iOS share sheet",
        "Get instant AI analysis of Snapchat ads"
      ],
      features: [
        "Save Snapchat ads and Stories",
        "Analyze short-form video creative",
        "Extract messaging and visual patterns",
        "Understand Gen Z engagement strategies"
      ]
    },
    pinterest: {
      name: "Pinterest",
      logo: "https://cdn.simpleicons.org/pinterest/BD081C",
      color: "bg-red-50",
      brandColor: "from-red-600 to-red-700",
      steps: [
        "Open Pinterest and find an ad or pin",
        "Tap the share button on the pin",
        "Choose 'HUGE' from the share options",
        "Analyze visual and product ad strategies"
      ],
      features: [
        "Save Pinterest ads and visual content",
        "Analyze product-focused creative",
        "Extract visual composition insights",
        "Understand shopping intent patterns"
      ]
    },
    reddit: {
      name: "Reddit",
      logo: "https://cdn.simpleicons.org/reddit/FF4500",
      color: "bg-orange-50",
      brandColor: "from-orange-500 to-orange-600",
      steps: [
        "Open Reddit and find a promoted post or ad",
        "Tap the share button on the post",
        "Select 'HUGE' from the share sheet",
        "Get insights on community-focused ads"
      ],
      features: [
        "Save Reddit ads and promoted content",
        "Analyze community engagement strategies",
        "Extract authentic messaging patterns",
        "Understand niche audience targeting"
      ]
    },
    vimeo: {
      name: "Vimeo",
      logo: "https://cdn.simpleicons.org/vimeo/1AB7EA",
      color: "bg-blue-50",
      brandColor: "from-blue-400 to-blue-500",
      steps: [
        "Open Vimeo and find an ad or video",
        "Tap the share button below the video",
        "Choose 'HUGE' from the share options",
        "Analyze professional video ad content"
      ],
      features: [
        "Save Vimeo ads and video content",
        "Analyze high-quality video production",
        "Extract professional creative insights",
        "Understand B2B video strategies"
      ]
    },
    dailymotion: {
      name: "Dailymotion",
      logo: "https://cdn.simpleicons.org/dailymotion/0066DC",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      steps: [
        "Open Dailymotion and find an ad or video",
        "Tap the share button on the content",
        "Select 'HUGE' from the iOS share sheet",
        "Get AI analysis of video ad strategies"
      ],
      features: [
        "Save Dailymotion ads and videos",
        "Analyze international ad content",
        "Extract global marketing insights",
        "Understand diverse audience messaging"
      ]
    },
    threads: {
      name: "Threads",
      logo: "https://cdn.simpleicons.org/threads/000000",
      color: "bg-gray-50",
      brandColor: "from-gray-800 to-gray-900",
      steps: [
        "Open Threads and find an ad or post",
        "Tap the share button on the post",
        "Choose 'HUGE' from the share options",
        "Analyze text-focused ad strategies"
      ],
      features: [
        "Save Threads ads and content",
        "Analyze conversational ad messaging",
        "Extract text-based creative insights",
        "Understand Twitter-style engagement"
      ]
    },
    'youtube-shorts': {
      name: "YouTube Shorts",
      logo: "https://cdn.simpleicons.org/youtube/FF0000",
      color: "bg-red-50",
      brandColor: "from-red-500 to-red-600",
      steps: [
        "Open YouTube Shorts and find an ad",
        "Tap the share button on the Short",
        "Select 'HUGE' from the share sheet",
        "Get insights on short-form video ads"
      ],
      features: [
        "Save YouTube Shorts ads",
        "Analyze vertical video creative",
        "Extract short-form engagement patterns",
        "Understand TikTok-style strategies on YouTube"
      ]
    },
    reels: {
      name: "Reels",
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-purple-500",
      steps: [
        "Open Instagram Reels and find an ad",
        "Tap the share button on the Reel",
        "Choose 'HUGE' from the share options",
        "Analyze Instagram Reels ad strategies"
      ],
      features: [
        "Save Instagram Reels ads",
        "Analyze vertical video creative",
        "Extract music and trend insights",
        "Understand Instagram's short-form format"
      ]
    },
    stories: {
      name: "Stories",
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50",
      brandColor: "from-pink-500 to-purple-500",
      steps: [
        "Open Instagram Stories and find an ad",
        "Tap the share button on the Story",
        "Select 'HUGE' from the share sheet",
        "Get insights on Stories ad format"
      ],
      features: [
        "Save Instagram Stories ads",
        "Analyze ephemeral content strategies",
        "Extract swipe-up and engagement patterns",
        "Understand Stories-specific creative"
      ]
    },
    tumblr: {
      name: "Tumblr",
      logo: "https://cdn.simpleicons.org/tumblr/36465D",
      color: "bg-gray-50",
      brandColor: "from-gray-600 to-gray-700",
      steps: [
        "Open Tumblr and find an ad or post",
        "Tap the share button on the content",
        "Choose 'HUGE' from the share options",
        "Analyze creative and artistic ad content"
      ],
      features: [
        "Save Tumblr ads and content",
        "Analyze artistic and creative strategies",
        "Extract niche community insights",
        "Understand creative-focused messaging"
      ]
    },
    vk: {
      name: "VK",
      logo: "https://cdn.simpleicons.org/vk/0077FF",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-blue-600",
      steps: [
        "Open VK and find an ad or video",
        "Tap the share button on the content",
        "Select 'HUGE' from the share sheet",
        "Analyze Russian market ad strategies"
      ],
      features: [
        "Save VK ads and video content",
        "Analyze Eastern European marketing",
        "Extract regional engagement patterns",
        "Understand VK-specific ad formats"
      ]
    },
    wechat: {
      name: "WeChat",
      logo: "https://cdn.simpleicons.org/wechat/07C160",
      color: "bg-green-50",
      brandColor: "from-green-500 to-green-600",
      steps: [
        "Open WeChat and find an ad or content",
        "Tap the share button on the post",
        "Choose 'HUGE' from the share options",
        "Analyze Chinese market ad strategies"
      ],
      features: [
        "Save WeChat ads and content",
        "Analyze Chinese marketing strategies",
        "Extract messaging app engagement",
        "Understand WeChat ecosystem ads"
      ]
    },
    weibo: {
      name: "Weibo",
      logo: "https://cdn.simpleicons.org/sinaweibo/E6162D",
      color: "bg-red-50",
      brandColor: "from-red-500 to-red-600",
      steps: [
        "Open Weibo and find an ad or post",
        "Tap the share button on the content",
        "Select 'HUGE' from the share sheet",
        "Get insights on Chinese social media ads"
      ],
      features: [
        "Save Weibo ads and content",
        "Analyze Chinese social media strategies",
        "Extract microblogging ad patterns",
        "Understand Weibo engagement tactics"
      ]
    },
    'any-platform': {
      name: "Any Platform",
      logo: "https://cdn.simpleicons.org/link/0A66C2",
      color: "bg-blue-50",
      brandColor: "from-blue-500 to-purple-500",
      steps: [
        "Find an ad or video on any platform",
        "Use the iOS share sheet from any app",
        "Select 'HUGE' from your share options",
        "Save and analyze content from anywhere"
      ],
      features: [
        "Save ads from any app or website",
        "Works with iOS native share sheet",
        "Universal compatibility across platforms",
        "One tool for all your ad analysis needs"
      ]
    }
  }
  
  const platform = platformData[platformName?.toLowerCase()] || platformData.instagram
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Save from {platform.name}
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4">
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-gray-400">→</div>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4">
                <img 
                  src="/logo.png" 
                  alt="HUGE"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Save {platform.name} ads to <span className="gradient-text">HUGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Instantly save and analyze ads from {platform.name} using the iOS share sheet. Get AI-powered insights in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.apple.com/us/app/huge/id6754827936" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="text-lg px-8 py-4" sparkle={true}>
                  Download HUGE
                </Button>
              </a>
              <Link to="/">
                <Button variant="outline" className="text-lg px-8 py-4">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Share Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to share from <span className="gradient-text">{platform.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to save any {platform.name} ad or video
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {platform.steps.map((step, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What you get with <span className="gradient-text">HUGE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every {platform.name} ad you save gets instant AI analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {platform.features.map((feature, index) => (
              <Card key={index} className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <p className="text-lg text-gray-700">{feature}</p>
              </Card>
            ))}
          </div>
          
          {/* All Features Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Complete AI Analysis</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automatic Transcript",
                "Hook Breakdown",
                "Creative Structure",
                "Editing Patterns",
                "Audience Intent",
                "Viral Triggers"
              ].map((feature, index) => (
                <Card key={index} className="text-center p-4">
                  <p className="font-semibold text-gray-900">{feature}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start saving {platform.name} ads?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download HUGE and instantly save and analyze ads from {platform.name} and all your favorite platforms.
          </p>
          <a 
            href="https://apps.apple.com/us/app/huge/id6754827936" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="text-lg px-12 py-5" sparkle={true}>
              Download HUGE
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default PlatformPage

