const projects = [
  {
    title: 'React Portfolio',
    image: process.env.PUBLIC_URL + '/public/images/portfolio-proj.png',
    description: "This portfolio project features a backend solution built with Drupal, offering a " +
      "flexible content management system, while the frontend is developed using React JS for a dynamic and interactive " +
      "user experience. The project integrates Drupal's CMS capabilities with React to create a modern, " +
      "responsive interface, resulting in a seamless and user-friendly application.",
    tools: ['ReactJs', 'Drupal 11', 'PHP', 'HTML', 'Tailwind css', 'Javascript', 'Twig'],
    github: 'https://github.com/kda23Hub/PortfolioCanvas',
    link: 'https://github.com/kda23Hub/PortfolioCanvas',
  },
  {
    title: 'Drupal Features',
    image: process.env.PUBLIC_URL + '/public/images/features-proj.jpg',
    description: "This Drupal module provides an integrated solution that combines custom entities, user access control, " +
      "and dynamic data display. It contains a custom block that lists nodes grouped by type, accessible to authorized " +
      "users. To enhance functionality, a service is extended to fetch user and node data based on the current route. " +
      "A custom user field is added to control access to user pages, and the module culminates in a custom entity with " +
      "an entity reference field, linking to basic_page nodes and displaying them in a view. This seamless flow of " +
      "features enables efficient data management and user interaction.",
    tools: ['PHP', 'Drupal 11', 'HTML', 'CSS', 'Javascript', 'Twig'],
    github: 'https://github.com/kda23Hub/drupal-feature',
    link: 'https://github.com/kda23Hub/drupal-feature',
  },
  {
    title: 'CodeCraftHub',
    image: process.env.PUBLIC_URL + '/public/images/ai-chatbot-proj.png',
    description: "\n" +
      "This project is an AI-powered chatbot integrated with popular Large Language Models (LLMs) via API keys. " +
      "It features a user-friendly interface connected to a backend server that securely handles API requests. " +
      "Users can input their own API keys to connect with different LLM providers.",
    tools: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/kda23Hub/CodeCraftHub',
    link: 'https://github.com/kda23Hub/CodeCraftHub',
  },

];

export default projects;
