import { Link } from 'react-router-dom'

const ShareFrom = () => {
  // Top row platforms
  const platformsTop = [
    { 
      name: "Instagram", 
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50"
    },
    { 
      name: "YouTube", 
      logo: "https://cdn.simpleicons.org/youtube/FF0000",
      color: "bg-red-50"
    },
    { 
      name: "TikTok", 
      logo: "https://cdn.simpleicons.org/tiktok/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Facebook", 
      logo: "https://cdn.simpleicons.org/facebook/1877F2",
      color: "bg-blue-50"
    },
    { 
      name: "LinkedIn", 
      logo: "/linkedin-icon.png",
      color: "bg-blue-50"
    },
    { 
      name: "Twitch", 
      logo: "https://cdn.simpleicons.org/twitch/9146FF",
      color: "bg-purple-50"
    },
    { 
      name: "Snapchat", 
      logo: "https://cdn.simpleicons.org/snapchat/FFFC00",
      color: "bg-yellow-50"
    },
    { 
      name: "Pinterest", 
      logo: "https://cdn.simpleicons.org/pinterest/BD081C",
      color: "bg-red-50"
    },
    { 
      name: "Reddit", 
      logo: "https://cdn.simpleicons.org/reddit/FF4500",
      color: "bg-orange-50"
    },
    { 
      name: "Vimeo", 
      logo: "https://cdn.simpleicons.org/vimeo/1AB7EA",
      color: "bg-blue-50"
    },
    { 
      name: "YouTube Shorts", 
      logo: "https://cdn.simpleicons.org/youtube/FF0000",
      color: "bg-red-50"
    },
    { 
      name: "Tumblr", 
      logo: "https://cdn.simpleicons.org/tumblr/36465D",
      color: "bg-gray-50"
    },
    { 
      name: "VK", 
      logo: "https://cdn.simpleicons.org/vk/0077FF",
      color: "bg-blue-50"
    }
  ]

  // Bottom row platforms (different set)
  const platformsBottom = [
    { 
      name: "X (Twitter)", 
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Threads", 
      logo: "https://cdn.simpleicons.org/threads/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Dailymotion", 
      logo: "https://cdn.simpleicons.org/dailymotion/0066DC",
      color: "bg-blue-50"
    },
    { 
      name: "WeChat", 
      logo: "https://cdn.simpleicons.org/wechat/07C160",
      color: "bg-green-50"
    },
    { 
      name: "Weibo", 
      logo: "https://cdn.simpleicons.org/sinaweibo/E6162D",
      color: "bg-red-50"
    },
    { 
      name: "Twitter", 
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Instagram", 
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50"
    },
    { 
      name: "YouTube", 
      logo: "https://cdn.simpleicons.org/youtube/FF0000",
      color: "bg-red-50"
    },
    { 
      name: "TikTok", 
      logo: "https://cdn.simpleicons.org/tiktok/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Facebook", 
      logo: "https://cdn.simpleicons.org/facebook/1877F2",
      color: "bg-blue-50"
    },
    { 
      name: "LinkedIn", 
      logo: "/linkedin-icon.png",
      color: "bg-blue-50"
    },
    { 
      name: "Twitch", 
      logo: "https://cdn.simpleicons.org/twitch/9146FF",
      color: "bg-purple-50"
    },
    { 
      name: "Snapchat", 
      logo: "https://cdn.simpleicons.org/snapchat/FFFC00",
      color: "bg-yellow-50"
    },
    { 
      name: "Pinterest", 
      logo: "https://cdn.simpleicons.org/pinterest/BD081C",
      color: "bg-red-50"
    },
    { 
      name: "Reddit", 
      logo: "https://cdn.simpleicons.org/reddit/FF4500",
      color: "bg-orange-50"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Save From Anywhere
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Save ads from <span className="gradient-text">any platform</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Use the iOS share sheet to save ads and videos from any app or website
          </p>
        </div>
        
        {/* Platform logos marquee - single row */}
        <div className="w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee-content-smooth">
              {[...platformsTop, ...platformsBottom, ...platformsTop, ...platformsBottom, ...platformsTop, ...platformsBottom].map((platform, index) => {
                const slugMap = {
                  'Instagram': 'instagram',
                  'YouTube': 'youtube',
                  'TikTok': 'tiktok',
                  'Facebook': 'facebook',
                  'Twitter': 'twitter',
                  'LinkedIn': 'linkedin',
                  'Twitch': 'twitch',
                  'X (Twitter)': 'twitter',
                  'Snapchat': 'snapchat',
                  'Pinterest': 'pinterest',
                  'Reddit': 'reddit',
                  'Vimeo': 'vimeo',
                  'Dailymotion': 'dailymotion',
                  'Threads': 'threads',
                  'YouTube Shorts': 'youtube-shorts',
                  'Tumblr': 'tumblr',
                  'VK': 'vk',
                  'WeChat': 'wechat',
                  'Weibo': 'weibo',
                  'Any Platform': 'any-platform'
                }
                
                const platformSlug = slugMap[platform.name] || platform.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
                const hasPage = slugMap[platform.name] !== undefined
                
                const LogoContent = (
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="text-sm md:text-base text-gray-400">${platform.name.charAt(0)}</div>`
                      }}
                    />
                  </div>
                )
                
                return hasPage ? (
                  <Link key={index} to={`/platform/${platformSlug}`} className="block mx-4">
                    {LogoContent}
                  </Link>
                ) : (
                  <div key={index} className="mx-4">
                    {LogoContent}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShareFrom

