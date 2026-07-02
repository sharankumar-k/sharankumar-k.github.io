import ecommerceImage from "../assets/ecommerce-project.png";
import blockchainImage from "../assets/blockchain-project.png";

// Featured projects content.
const projects = [
  {
    id: "ecommerce-app",
    image: ecommerceImage,
    imageAlt: "Ecommerce",
    type: "Full Stack Project",
    title: "E-Commerce Web Application",
    description:
      "Built a secure e-commerce platform with role-based authentication, product management, shopping cart, wishlist and order management.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    liveDemo: "#",
    github: "https://github.com/sharankumar-k/ecommerce-app",
  },
  {
   id: "ai-blockchain-face-authentication",
    image: blockchainImage,
    imageAlt: "Blockchain",
    type: "AI + Blockchain",
    title: "AI Facial Verification",
    description:
      "Authentication system integrating FaceNet, Ethereum blockchain, Solidity smart contracts and PostgreSQL.",
    techStack: ["Python", "Blockchain", "Solidity", "Ethereum"],
    liveDemo: "#",
    github: "https://github.com/sharankumar-k/ai-blockchain-face-authentication",
  },
];

export default projects;
