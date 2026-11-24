
const projects = [
  {
    title: "E-Commerce Microservices",

    description:
      "A microservices-based e-commerce backend built with Spring Boot, enabling scalable shopping workflows through independent services for users, products, cart, orders, payments, and notifications.",

    features: [
      "Microservices Architecture",
      "API Gateway with JWT Authentication",
      "Request Rate Limiting",
      "Apache Kafka Event-Driven Communication",
      "Redis Caching",
      "Transactional Email Notifications using Brevo",
      "Docker & Docker Compose",
      "REST APIs"
    ],

    tech: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker"
    ],

    github: "https://github.com/prakhilkumar/spring-boot-microservices-ecommerce",

    image: "/projects/ecommerce.png"
  },

  {
    title: "AI Email Reply Generator",

    description:
      "A Chrome Extension integrated with a Spring Boot backend that generates professional email replies using Google's Gemini API.",

    features: [
      "Chrome Extension",
      "Gemini API Integration",
      "Spring Boot REST API",
      "Prompt Engineering",
      "WebClient",
      "Professional Email Generation"
    ],

    tech: [
      "Java",
      "Spring Boot",
      "Gemini API",
      "Chrome Extension"
    ],

    github: "https://github.com/prakhilkumar/email-replier",

    image: "/projects/email.png"
  }
];

export default projects;
