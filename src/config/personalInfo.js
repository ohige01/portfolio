export const personalInfo = {
  name: "최선규",
  title: "Backend Developer",
  email: "ohige01@skuniv.ac.kr",
  phone: "(+82) 010-5034-8988",
  location: "서울, 대한민국",
  github: "https://github.com/ohige01",
  linkedin: "https://linkedin.com/in/yourusername",
  bio: "범용성 높은 개발자가 되기 위해 노력하는 백엔드 개발자입니다. 새로운 환경이나 문화에 유연하게 적응하며, 낯선 도전을 극복하고 숙력될 때 보람을 느낍니다.",
  
  about: {
    interests: "서버 아키텍처 설계, API 설계 및 제작",
    highlights: [
      "클린하고 유지보수 가능한 코드 작성",
      "최신 웹 기술 트렌드 적극 도입",
      "팀워크와 협업을 중시하는 개발 문화"
    ]
  },
  
  skills: {
    frontend: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ],
    backend: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ],
    tools: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/100px-Notion-logo.svg.png" },
      { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" }
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