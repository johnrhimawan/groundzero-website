/* 
This file contains list of static texts that will be displayed in the web page.
In the future, please use this file as the only way to interact with editing texts.
*/

import {
  accelerating,
  airbnb,
  aws,
  binance,
  changeMakers,
  coinbase,
  eatLaunchpad,
  dropbox,
  facebook,
  groundzero,
  instagram,
  linkedin,
  nes,
  nusEnterprise,
  nyc,
  pastEvent1,
  pastEvent2,
  pastEvent3,
  pastEvent4,
  sampleIcon,
  sginnovate,
  startupBuddy,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "problems",
    title: "Problems",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const timeline = [
  {
    id: "timeline-1",
    icon: groundzero,
    title: "Registration",
    content: "January - March 2023",
  },
  {
    id: "timeline-2",
    icon: groundzero,
    title: "Problem Statements Released",
    content: "March 2023",
  },
  {
    id: "timeline-3",
    icon: groundzero,
    title: "Pitch Day",
    content: "April 2023",
  },
];

export const reasons = [
  {
    id: 1,
    img: sampleIcon,
    title: "Reason #1",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: sampleIcon,
    title: "Reason #2",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    img: sampleIcon,
    title: "Reason #3",
    description: "Lorem ipsum dolor sit amet",
  }
]

export const problems = [
  {
    id: 1,
    content: "How can we reduce carbonization through tax?",
    category: "Environment",
    title: "Green Money",
    description: "Pursuing a net-zero carbon emission through innovative currency methods",
    img: sampleIcon,
    subheader1: "The Pursuit of Green Money",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: 2,
    content: "Something cool that tech cannot do.",
    category: "Education",
    title: "New Education",
    description: "Designing better education in the digital era powered by Industrial Revolution 4.0",
    img: sampleIcon,
    subheader1: "The Pursuit of Better Education",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: 3,
    content: "Elevate the poor using tech. Any idea?",
    category: "Technology",
    title: "Disruptive Income Equality",
    description: "Minimising the economic inequality margin",
    img: sampleIcon,
    subheader1: "The Challenge of Reducing Income Gap",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Participants",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Supported by Companies",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Prizes to be Won",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/groundzero/",
      },
      {
        name: "Telegram",
        link: "https://www.telegram.com/groundzero/",
      },
      {
        name: "TikTok",
        link: "https://www.tiktok.com/groundzero/",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/groundzero/",
      },
      {
        name: "Website",
        link: "https://www.groundzero.com/about/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.groundzero.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.groundzero.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.groundzero.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.groundzero.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.groundzero.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.groundzero.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.groundzero.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const contacts = [
  {
    id: "contacts-1",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-2",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-3",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
];

export const companies = [
  {
    id: "companies-1",
    logo: airbnb,
  },
  {
    id: "companies-2",
    logo: binance,
  },
  {
    id: "companies-3",
    logo: coinbase,
  },
  {
    id: "companies-4",
    logo: dropbox,
  },
];

export const questions = [
  {
    Question: "How much does it cost to join Ground Zero?",
    Answer:
      "Ground Zero is completely free for all participants! All you have to bring to the table is your innovative ideas.",
  },
  {
    Question: "How do I sign up for Ground Zero?",
    Answer:
    "You can signup for Ground Zero here. (link will be provided later)"
  },
  {
    Question: "I have a startup idea that I want to pitch at Ground Zero, but not enough peers to do it with. How can I find other like-minded individuals to form a team?",
    Answer:
      "Fret not! You can use this platform to post team vacancies or search for teams with available vacancies.",
  },
  {
    Question: "Does my startup idea have to be in line with a certain theme, or can it be anything I want?",
    Answer: "All ideas presented must be related to one of the industry focus areas here.",
  },
  {
    Question: "How many winners will there be?",
    Answer: "There will be 12 teams that make it to the final pitching rounds, and 3 winning teams. Find out more about the prizes for the top 3 teams here.",
  },
  {
    Question: "Do I need to have experience in entrepreneurship or startups to join Ground Zero?",
    Answer: "No experience is needed! We encourage all aspiring entrepreneurs from all tertiary institutions and faculties to join us at this event.",
  },
  {
    Question: "Will Ground Zero happen in person or virtually?",
    Answer: "Ground Zero 2023 will be held as a hybrid event; preliminary pitching rounds will be happening online/remotely, while the final rounds will be conducted in person at Mapletree Business City. For the mentor-mentee sessions, it is up to the agreement between mentors and their mentees whether they want to meet online or in-person, and if the latter, the location is also to be agreed on between both parties.",
  },
  {
    Question: "Who can participate in Ground Zero?",
    Answer: "Any student currently enrolled at a tertiary institution, be it part-time or full-time. Tertiary institutions include, but are not limited to ITEs, Polytechnics, Universities (both undergraduate and postgraduate). We also allow recent alumni of 5 years or less, but please limit the number of alumni to two at maximum.",
  },
  {
    Question: "How many people can be on a team?",
    Answer: "Each team must have at most 4 members.",
  },
  {
    Question: "I am a student at an international tertiary institution, but currently residing in Singapore. Can I still join Ground Zero?",
    Answer: "Definitely! We are happy to accept students from any tertiary institute across the world.",
  },
  {
    Question: "What if I need to travel internationally to attend Ground Zero?",
    Answer: "As Ground Zero has shifted to being a hybrid event, most of the event can be attended online. For the final pitching rounds carried out in-person, we highly encourage all finalists to attend physically. However, if this is not possible, the event will also be streamed online.",
  },
];

export const organizer = [
  {
    id: "nes",
    icon: nes,
  },
];

export const platinumSponsor = [
  {
    id: "platinumSponsor-1",
    icon: aws,
  },
  {
    id: "platinumSponsor-2",
    icon: eatLaunchpad,
  },
];

export const ecosystemPartner = [
  {
    id: "ecosystemPartner-1",
    icon: nusEnterprise,
  },
  {
    id: "ecosystemPartner-2",
    icon: nyc,
  },
  {
    id: "ecosystemPartner-3",
    icon: changeMakers,
  },
];

export const deepTechPartner = [
  {
    id: "deepTechPartner-1",
    icon: sginnovate,
  },
];

export const workshopPartner = [
  {
    id: "workshopPartner-1",
    icon: accelerating,
  },
  {
    id: "workshopPartner-2",
    icon: startupBuddy,
  },
];

export const partners = [
  {
    id: "organizers",
    title: "Organized By",
    content: organizer,
  },
  {
    id: "platinumSponsors",
    title: "Platinum Sponsors",
    content: platinumSponsor,
  },
  {
    id: "ecosystemPartners",
    title: "Ecosystem Partners",
    content: ecosystemPartner,
  },
  {
    id: "deepTechPartners",
    title: "DeepTech Partners",
    content: deepTechPartner,
  },
  {
    id: "workshopPartners",
    title: "Workshop Partners",
    content: workshopPartner,
  },
];

export const pastEvents = [
  {
    id: "pastEvent1",
    title: "Ground Zero 2021",
    content: pastEvent1,
  },
  {
    id: "pastEvent2",
    title: "Ground Zero 2020",
    content: pastEvent2,
  },
  {
    id: "pastEvent3",
    title: "Ground Zero 2022",
    content: pastEvent3,
  },
  {
    id: "pastEvent4",
    title: "Ground Zero 2019",
    content: pastEvent4,
  },
];

export const workshops = [
  {
    name: "Workshop 1",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 2",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 3",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 4",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "What it means to incubate a Startup with AI technology",
    by: "XXX",
    company: "Company 3",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Digital Marketing for Tech Startups",
    by: "XXX",
    company: "Company 4",
    date: "2023-01-01T12:00:00",
    link: "",
  },
];

export const mentors = [
  {
    title:"Rachel Lim",
    subtitle:"Co-Founder",
    info: "Love, Bonito",
    personalLink:"https://www.linkedin.com/in/rachel-lim-25b3b262/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/ignite/LB Rachel Lim Profile Image.jpg",
    description: [
        "Rachel Lim co-founded what was to be Love, Bonito at a tender age of 19. She started her own online fashion business when e-commerce was at its infancy and grew the blogshop into a multi-million dollar global brand in just over a decade.",
        "Her desire to empower women through thoughtful creations and memorable experiences has propelled her to set up international brick-and-mortar stores, expanded the brand into international waters, making it the largest omnichannel women’s fashion label in Southeast Asia."
    ]
  },
  {
    title:"Dr Fanglin Wang",
    subtitle:"Head of R&D Department",
    info: "ADVANCE.AI",
    personalLink:"https://www.linkedin.com/in/fanglinwang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/Fanglin Wang.jpg",
    description: ["Dr. WANG Fanglin is currently the Head of Research and Development at ADVANCE.AI.\
        He has over 15 years of experience developing AI techniques to tackle academic and industrial problems. \
        Prior to ADVANCE.AI, he used to be the associate director of Video Analytics and Machine Learning at NCS Group, \
        CTO at KAI Square, Research Fellow at NUS, and research scientist at Autodesk and another 2 international companies. \
        He received his Ph.D. from Shanghai Jiao Tong University and master and bachelor degrees both from Harbin Institute of Technology."]
  },
  {
    title:"Dr James Ong",
    subtitle:"Founder & CEO",
    info: "Origami",
    personalLink:"https://www.linkedin.com/in/jamesongkayliang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/James Ong.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/James Ong.jpg",
    description: ["Dr. James Ong is an entrepreneur and community builder who has incubated, \
    invested and mentored various technology start-ups and he is actively involved in the AI and tech ecosystem in China and ASEAN. \
    He is the founder and CEO of Origami that provides strategy, technology and investment advisory services for venturing towards \
    Autonomous Enterprise where he has more than 35 years of experience on digital transformation in Asia, US and Europe across \
    multiple industry verticals. James founded Artificial Intelligence International Institute (AIII), a think tank advocating \
    Sustainable AI for Humanity. He is also adjunct professor at SUTD and serves as mentor at NUS, SUTD and NTU. He started his career \
    as an AI scientist at leading US MCC research lab on advanced AI Fifth Generation Computer research and received his PhD in Management \
    Information System specializing on AI for Business Process Automation and MA & BA in Computer Science from the University of Texas at Austin."]
  },
  {
    title:"Rachel Lim",
    subtitle:"Co-Founder",
    info: "Love, Bonito",
    personalLink:"https://www.linkedin.com/in/rachel-lim-25b3b262/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/ignite/LB Rachel Lim Profile Image.jpg",
    description: [
        "Rachel Lim co-founded what was to be Love, Bonito at a tender age of 19. She started her own online fashion business when e-commerce was at its infancy and grew the blogshop into a multi-million dollar global brand in just over a decade.",
        "Her desire to empower women through thoughtful creations and memorable experiences has propelled her to set up international brick-and-mortar stores, expanded the brand into international waters, making it the largest omnichannel women’s fashion label in Southeast Asia."
    ]
  },
  {
    title:"Dr Fanglin Wang",
    subtitle:"Head of R&D Department",
    info: "ADVANCE.AI",
    personalLink:"https://www.linkedin.com/in/fanglinwang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/Fanglin Wang.jpg",
    description: ["Dr. WANG Fanglin is currently the Head of Research and Development at ADVANCE.AI.\
        He has over 15 years of experience developing AI techniques to tackle academic and industrial problems. \
        Prior to ADVANCE.AI, he used to be the associate director of Video Analytics and Machine Learning at NCS Group, \
        CTO at KAI Square, Research Fellow at NUS, and research scientist at Autodesk and another 2 international companies. \
        He received his Ph.D. from Shanghai Jiao Tong University and master and bachelor degrees both from Harbin Institute of Technology."]
  },

];

// Date for Releasing Problem Statements. Edit here to change
export const statementReleaseDate = "May 8, 2023 00:09:00 GMT+0800"

// Edit this to change the content of paras in About Page
export const aboutUs = [
  {
    id: "para1",
    content: "Ground Zero is the largest student-led startathon in Singapore which invites aspiring entrepreneurs from all tertiary institutions and faculties to ideate and develop a startup from ground up. Within a week, participants will be challenged to select an area of focus, and come up with a startup idea from the ground up and pitch it. The winners of Ground Zero will go home with a cash prize to kick start their start up ideas.",
  },
  {
    id: "para2",
    content: "This year, participants will be supported by a network of over 50 mentors, speakers, and judges - all experts in their respective fields to provide the best guidance possible. We are also excited to announce that we will be inviting angel investors and incubators to come down to our event to scout for talent amongst our highly valued participants.",
  },
  {
    id: "para3",
    content: "So what are you waiting for? Reach the top, start from Ground Zero.",
  },
];

export const timelineSchedule = [
  {
    title: ["Opening Ceremony", "Diamond Sponsor Talk", "Mentor Introduction", "Panel Discussion", "Workshops"],
    date: "2023-05-08T12:00:00",
  },
  {
    title: ["Mentorship Sessions", "Pitch Idea Validation"],
    date: "2023-05-09T12:00:00",
  },
  {
    title: ["Pitch Preparation"],
    date: "2023-05-10T12:00:00",
  },
  {
    title: ["Video Pitch Submission"],
    date: "2023-05-11T12:00:00",
  },
  {
    title: ["Announcement of Top 12 Finalists"],
    date: "2023-05-12T12:00:00",
  },
  {
    title: ["Finals Judging", "Award Ceremony", "Closing Address", "Networking Dinner"],
    date: "2023-05-13T12:00:00",
  },
];
