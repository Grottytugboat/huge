import { Link } from 'react-router-dom'

const TeamCollaboration = () => {
  const platforms = [
    { 
      name: "Slack", 
      logo: "https://cdn.simpleicons.org/slack/4A154B",
      color: "bg-purple-50"
    },
    { 
      name: "Notion", 
      logo: "https://cdn.simpleicons.org/notion/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Discord", 
      logo: "https://cdn.simpleicons.org/discord/5865F2",
      color: "bg-indigo-50"
    },
    { 
      name: "Microsoft Teams", 
      logo: "/microsoft-teams-icon.png",
      color: "bg-blue-50"
    },
    { 
      name: "Google Workspace", 
      logo: "https://cdn.simpleicons.org/google/4285F4",
      color: "bg-blue-50"
    },
    { 
      name: "Asana", 
      logo: "https://cdn.simpleicons.org/asana/F06A6A",
      color: "bg-pink-50"
    },
    { 
      name: "WhatsApp", 
      logo: "https://cdn.simpleicons.org/whatsapp/25D366",
      color: "bg-green-50"
    },
    { 
      name: "Telegram", 
      logo: "https://cdn.simpleicons.org/telegram/26A5E4",
      color: "bg-blue-50"
    },
    { 
      name: "Email", 
      logo: "https://cdn.simpleicons.org/gmail/EA4335",
      color: "bg-red-50"
    },
    { 
      name: "Twitter", 
      logo: "https://cdn.simpleicons.org/x/000000",
      color: "bg-gray-50"
    },
    { 
      name: "LinkedIn", 
      logo: "/linkedin-icon.png",
      color: "bg-blue-50"
    },
    { 
      name: "Messages", 
      logo: "https://cdn.simpleicons.org/apple/007AFF",
      color: "bg-blue-50"
    },
    { 
      name: "AirDrop", 
      logo: "https://cdn.simpleicons.org/apple/000000",
      color: "bg-gray-50"
    },
    { 
      name: "Trello", 
      logo: "https://cdn.simpleicons.org/trello/0052CC",
      color: "bg-blue-50"
    },
    { 
      name: "Jira", 
      logo: "https://cdn.simpleicons.org/jira/0052CC",
      color: "bg-blue-50"
    },
    { 
      name: "Linear", 
      logo: "https://cdn.simpleicons.org/linear/5E6AD2",
      color: "bg-indigo-50"
    },
    { 
      name: "Dropbox", 
      logo: "https://cdn.simpleicons.org/dropbox/0061FF",
      color: "bg-blue-50"
    },
    { 
      name: "Google Drive", 
      logo: "https://cdn.simpleicons.org/googledrive/4285F4",
      color: "bg-blue-50"
    },
    { 
      name: "Basecamp", 
      logo: "https://cdn.simpleicons.org/basecamp/1D2D35",
      color: "bg-gray-50"
    },
    { 
      name: "Facebook Messenger", 
      logo: "https://cdn.simpleicons.org/messenger/0084FF",
      color: "bg-blue-50"
    },
    { 
      name: "Instagram", 
      logo: "https://cdn.simpleicons.org/instagram/E4405F",
      color: "bg-pink-50"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Collaboration
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Share with your team <span className="gradient-text">in one tap</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Works seamlessly with your existing workflow tools
          </p>
        </div>
        
        {/* Platform logos marquee - single row */}
        <div className="w-full overflow-hidden mb-16">
          <div className="marquee">
            <div className="marquee-content-smooth">
              {[...platforms, ...platforms, ...platforms].map((platform, index) => {
                // Map platform names to slugs
                const slugMap = {
                  'Slack': 'slack',
                  'Notion': 'notion',
                  'Discord': 'discord',
                  'Microsoft Teams': 'microsoft-teams',
                  'Google Workspace': 'google-workspace',
                  'Asana': 'asana',
                  'WhatsApp': 'whatsapp',
                  'Telegram': 'telegram',
                  'Email': 'email',
                  'Twitter': 'twitter',
                  'LinkedIn': 'linkedin',
                  'Messages': 'messages',
                  'AirDrop': 'airdrop',
                  'Trello': 'trello',
                  'Jira': 'jira',
                  'Linear': 'linear',
                  'Dropbox': 'dropbox',
                  'Google Drive': 'google-drive',
                  'Basecamp': 'basecamp',
                  'Facebook Messenger': 'facebook-messenger',
                  'Instagram': 'instagram'
                }
                
                const collaborationSlug = slugMap[platform.name] || platform.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
                const hasPage = slugMap[platform.name] !== undefined
                
                const LogoContent = (
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="text-xl md:text-2xl text-gray-400">${platform.name.charAt(0)}</div>`
                      }}
                    />
                  </div>
                )
                
                return hasPage ? (
                  <Link key={index} to={`/collaboration/${collaborationSlug}`} className="block mx-4">
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

export default TeamCollaboration
