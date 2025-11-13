import { Link } from 'react-router-dom'

const ShareFrom = () => {
  // All supported platforms based on actual support
  const platformsTop = [
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
      name: "Instagram", 
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50"
    },
    { 
      name: "Twitter/X", 
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Reddit", 
      logo: "https://cdn.simpleicons.org/reddit/FF4500",
      color: "bg-orange-50"
    },
    { 
      name: "Facebook", 
      logo: "https://cdn.simpleicons.org/facebook/1877F2",
      color: "bg-blue-50"
    },
    { 
      name: "Twitch", 
      logo: "https://cdn.simpleicons.org/twitch/9146FF",
      color: "bg-purple-50"
    },
    { 
      name: "Bilibili", 
      logo: "https://cdn.simpleicons.org/bilibili/00A1D6",
      color: "bg-blue-50"
    },
    { 
      name: "SoundCloud", 
      logo: "https://cdn.simpleicons.org/soundcloud/FF3300",
      color: "bg-orange-50"
    },
    { 
      name: "Vimeo", 
      logo: "https://cdn.simpleicons.org/vimeo/1AB7EA",
      color: "bg-blue-50"
    },
    { 
      name: "Dailymotion", 
      logo: "https://cdn.simpleicons.org/dailymotion/0066DC",
      color: "bg-blue-50"
    },
    { 
      name: "Rumble", 
      logo: "https://cdn.simpleicons.org/rumble/85C742",
      color: "bg-green-50"
    },
    { 
      name: "Odysee", 
      logo: "https://cdn.simpleicons.org/odysee/EF1970",
      color: "bg-pink-50"
    },
    { 
      name: "PeerTube", 
      logo: "https://cdn.simpleicons.org/peertube/F1680D",
      color: "bg-orange-50"
    },
    { 
      name: "Kick", 
      logo: "https://cdn.simpleicons.org/kick/53FC18",
      color: "bg-green-50"
    },
    { 
      name: "Patreon", 
      logo: "https://cdn.simpleicons.org/patreon/FF424D",
      color: "bg-red-50"
    },
    { 
      name: "OnlyFans", 
      logo: "https://cdn.simpleicons.org/onlyfans/00AFF0",
      color: "bg-blue-50"
    },
    { 
      name: "Fansly", 
      logo: "/fansly-icon.png",
      color: "bg-blue-50"
    }
  ]

  // Bottom row platforms (duplicate for smooth scrolling)
  const platformsBottom = [
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
      name: "Instagram", 
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50"
    },
    { 
      name: "Twitter/X", 
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Reddit", 
      logo: "https://cdn.simpleicons.org/reddit/FF4500",
      color: "bg-orange-50"
    },
    { 
      name: "Facebook", 
      logo: "https://cdn.simpleicons.org/facebook/1877F2",
      color: "bg-blue-50"
    },
    { 
      name: "Twitch", 
      logo: "https://cdn.simpleicons.org/twitch/9146FF",
      color: "bg-purple-50"
    },
    { 
      name: "Bilibili", 
      logo: "https://cdn.simpleicons.org/bilibili/00A1D6",
      color: "bg-blue-50"
    },
    { 
      name: "SoundCloud", 
      logo: "https://cdn.simpleicons.org/soundcloud/FF3300",
      color: "bg-orange-50"
    },
    { 
      name: "Vimeo", 
      logo: "https://cdn.simpleicons.org/vimeo/1AB7EA",
      color: "bg-blue-50"
    },
    { 
      name: "Dailymotion", 
      logo: "https://cdn.simpleicons.org/dailymotion/0066DC",
      color: "bg-blue-50"
    },
    { 
      name: "Rumble", 
      logo: "https://cdn.simpleicons.org/rumble/85C742",
      color: "bg-green-50"
    },
    { 
      name: "Odysee", 
      logo: "https://cdn.simpleicons.org/odysee/EF1970",
      color: "bg-pink-50"
    },
    { 
      name: "PeerTube", 
      logo: "https://cdn.simpleicons.org/peertube/F1680D",
      color: "bg-orange-50"
    },
    { 
      name: "Kick", 
      logo: "https://cdn.simpleicons.org/kick/53FC18",
      color: "bg-green-50"
    },
    { 
      name: "Patreon", 
      logo: "https://cdn.simpleicons.org/patreon/FF424D",
      color: "bg-red-50"
    },
    { 
      name: "OnlyFans", 
      logo: "https://cdn.simpleicons.org/onlyfans/00AFF0",
      color: "bg-blue-50"
    },
    { 
      name: "Fansly", 
      logo: "/fansly-icon.png",
      color: "bg-blue-50"
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
                  'YouTube': 'youtube',
                  'TikTok': 'tiktok',
                  'Instagram': 'instagram',
                  'Twitter/X': 'twitter',
                  'Twitter': 'twitter',
                  'Reddit': 'reddit',
                  'Facebook': 'facebook',
                  'Twitch': 'twitch',
                  'Bilibili': 'bilibili',
                  'SoundCloud': 'soundcloud',
                  'Vimeo': 'vimeo',
                  'Dailymotion': 'dailymotion',
                  'Rumble': 'rumble',
                  'Odysee': 'odysee',
                  'PeerTube': 'peertube',
                  'Kick': 'kick',
                  'Patreon': 'patreon',
                  'OnlyFans': 'onlyfans',
                  'Fansly': 'fansly',
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

