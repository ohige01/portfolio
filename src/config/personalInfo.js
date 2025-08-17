export const personalInfo = {
  name: "최선규",
  title: "Backend Developer",
  email: "ohige01@skuniv.ac.kr",
  phone: "(+82) 010-5034-8988",
  location: "서울, 대한민국",
  github: "https://github.com/ohige01",
  linkedin: "https://linkedin.com/in/yourusername",
  bio: "범용성 높은 개발자가 되기 위해 노력하는 백엔드 개발자입니다. 새로운 환경이나 문화에 유연하게 적응하며, 낯선 도전을 극복하고 숙력될 때 보람을 느낍니다.",
  
  skills: {
    frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 }
    ],
    backend: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Kafka", level: 75 },
      { name: "Nginx", level: 70 }
    ],
    tools: [
      { name: "AWS", level: 80 },
      { name: "KTCloud", level: 75 },
      { name: "GCP", level: 70 },
      { name: "Docker", level: 78 },
      { name: "Figma", level: 82 },
      { name: "Notion", level: 95 },
      { name: "Slack", level: 90 }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "PopFri - 나만의 팝콘 친구",
      description: "AI 기반 사용자 맞춤 영화 추천 서비스",
      technologies: ["Spring", "React", "MySQL", "Kafka", "Fluentd", "Figma"],
      github: "https://github.com/ohige01/popfri",
      demo: "https://popfri-demo.com",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
      description: "AI 기반 사용자 맞춤 식단 제공 서비스",
      technologies: ["Node.js", "MySQL", "Dall-e 3", "Naver API", "AWS"],
      github: "https://github.com/ohige01/eat-this",
      demo: "https://eat-this-demo.com",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      technologies: ["Spring", "MySQL", "Java"],
      github: "https://github.com/ohige01/cardify",
      demo: "https://cardify-demo.com",
      image: "/images/project3.jpg"
    }
  ]
};