export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the CAP theorem state about distributed systems?",
    options: [
      "You can only guarantee two out of three properties: Consistency, Availability, and Partition tolerance",
      "You can guarantee all three properties: Consistency, Availability, and Partition tolerance",
      "You can only guarantee one out of three properties",
      "The theorem doesn't apply to modern distributed systems"
    ],
    correctAnswer: 0,
    explanation: "The CAP theorem states that it's impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition tolerance (the system continues to operate despite network failures).",
    category: "Theory",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    question: "Which load balancing algorithm distributes requests in a round-robin fashion?",
    options: [
      "Least Connections",
      "Round Robin",
      "IP Hash",
      "Weighted Round Robin"
    ],
    correctAnswer: 1,
    explanation: "Round Robin distributes requests sequentially to each server in the pool, cycling back to the first server after reaching the last one. It's simple and provides even distribution but doesn't consider server load or capacity.",
    category: "Scalability",
    difficulty: "Beginner"
  },
  {
    id: 3,
    question: "What is the main advantage of consistent hashing in distributed systems?",
    options: [
      "It provides better security",
      "It minimizes data redistribution when nodes are added or removed",
      "It improves encryption",
      "It reduces network latency"
    ],
    correctAnswer: 1,
    explanation: "Consistent hashing minimizes the number of keys that need to be remapped when the hash table is resized. This is crucial in distributed systems where adding or removing nodes should cause minimal disruption.",
    category: "Algorithms",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    question: "Which caching strategy writes data to both cache and database simultaneously?",
    options: [
      "Cache-Aside (Lazy Loading)",
      "Write-Through",
      "Write-Behind (Write-Back)",
      "Refresh-Ahead"
    ],
    correctAnswer: 1,
    explanation: "Write-Through caching writes data to both the cache and the database simultaneously. This ensures data consistency but may impact write performance since every write operation must go through both cache and database.",
    category: "Performance",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    question: "What is the primary purpose of a CDN (Content Delivery Network)?",
    options: [
      "To provide database replication",
      "To deliver content with low latency by serving it from edge locations",
      "To encrypt data in transit",
      "To provide load balancing for databases"
    ],
    correctAnswer: 1,
    explanation: "CDNs deliver content with low latency by serving it from edge locations closer to users. This reduces the distance data must travel and improves user experience, especially for static content like images, videos, and web pages.",
    category: "Performance",
    difficulty: "Beginner"
  },
  {
    id: 6,
    question: "In database replication, what is the difference between synchronous and asynchronous replication?",
    options: [
      "Synchronous replication is faster but less reliable",
      "Synchronous replication waits for all replicas to confirm before responding, while asynchronous doesn't",
      "Asynchronous replication is more expensive",
      "There is no difference in practice"
    ],
    correctAnswer: 1,
    explanation: "Synchronous replication waits for all replicas to confirm the write operation before responding to the client, ensuring strong consistency but potentially reducing performance. Asynchronous replication responds immediately and replicates in the background.",
    category: "Databases",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    question: "What is the main benefit of microservices architecture?",
    options: [
      "Reduced complexity",
      "Better performance",
      "Independent deployment and scaling of services",
      "Lower development cost"
    ],
    correctAnswer: 2,
    explanation: "Microservices architecture allows each service to be developed, deployed, and scaled independently. This provides flexibility, enables teams to work autonomously, and allows for technology diversity across services.",
    category: "Architecture",
    difficulty: "Intermediate"
  },
  {
    id: 8,
    question: "Which rate limiting algorithm uses tokens that are added at a fixed rate?",
    options: [
      "Fixed Window Counter",
      "Sliding Window Counter",
      "Token Bucket",
      "Leaky Bucket"
    ],
    correctAnswer: 2,
    explanation: "The Token Bucket algorithm adds tokens to a bucket at a fixed rate. Requests consume tokens, and requests are rejected when the bucket is empty. This allows for burst traffic while maintaining average rate limits.",
    category: "Security",
    difficulty: "Intermediate"
  },
  {
    id: 9,
    question: "What is the purpose of the Circuit Breaker pattern?",
    options: [
      "To improve database performance",
      "To prevent cascading failures in distributed systems",
      "To encrypt network traffic",
      "To balance server load"
    ],
    correctAnswer: 1,
    explanation: "The Circuit Breaker pattern prevents cascading failures by monitoring for failures and stopping the flow of requests when a certain threshold is reached. This allows the failing service to recover and prevents the failure from spreading to other services.",
    category: "Reliability",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    question: "In database sharding, what is a common challenge when performing cross-shard queries?",
    options: [
      "Data consistency",
      "Performance degradation due to multiple database calls",
      "Security vulnerabilities",
      "Backup complexity"
    ],
    correctAnswer: 1,
    explanation: "Cross-shard queries require multiple database calls and may need to aggregate results from different shards, leading to performance degradation compared to single-shard queries. This is why sharding strategies should minimize cross-shard operations.",
    category: "Databases",
    difficulty: "Advanced"
  },
  {
    id: 11,
    question: "What is the main advantage of event-driven architecture?",
    options: [
      "Better performance",
      "Loose coupling between components",
      "Simpler debugging",
      "Lower development cost"
    ],
    correctAnswer: 1,
    explanation: "Event-driven architecture promotes loose coupling between components since they communicate through events rather than direct method calls. This makes systems more modular, scalable, and easier to maintain.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 12,
    question: "Which message queue delivery guarantee ensures a message is delivered exactly once?",
    options: [
      "At-most-once",
      "At-least-once",
      "Exactly-once",
      "Best-effort"
    ],
    correctAnswer: 2,
    explanation: "Exactly-once delivery guarantees that a message is delivered exactly once, no more and no less. This is the strongest guarantee but also the most complex to implement, often requiring idempotent consumers and deduplication mechanisms.",
    category: "Messaging",
    difficulty: "Advanced"
  },
  {
    id: 13,
    question: "What is the primary purpose of distributed tracing?",
    options: [
      "To encrypt data in transit",
      "To monitor and troubleshoot distributed systems by tracking requests across services",
      "To improve database performance",
      "To provide load balancing"
    ],
    correctAnswer: 1,
    explanation: "Distributed tracing monitors and troubleshoots distributed systems by tracking requests as they flow through different services. It helps identify performance bottlenecks, debug issues, and understand system behavior across service boundaries.",
    category: "Observability",
    difficulty: "Advanced"
  },
  {
    id: 14,
    question: "In the context of system design, what does 'back-of-the-envelope estimation' refer to?",
    options: [
      "Detailed mathematical modeling",
      "Quick, rough calculations to estimate system capacity and performance",
      "Database optimization techniques",
      "Network protocol analysis"
    ],
    correctAnswer: 1,
    explanation: "Back-of-the-envelope estimation involves quick, rough calculations to estimate system capacity, performance, and resource requirements. It's used during system design interviews and initial planning to get a sense of scale and feasibility.",
    category: "Estimation",
    difficulty: "Beginner"
  },
  {
    id: 15,
    question: "What is the main difference between stateless and stateful services?",
    options: [
      "Stateless services are faster",
      "Stateless services don't store any data between requests, while stateful services do",
      "Stateful services are more secure",
      "There is no practical difference"
    ],
    correctAnswer: 1,
    explanation: "Stateless services don't store any data between requests, making them easier to scale horizontally since any instance can handle any request. Stateful services maintain state between requests, which can improve performance but makes scaling more complex.",
    category: "Architecture",
    difficulty: "Beginner"
  },
  {
    id: 16,
    question: "What is the purpose of the API Gateway pattern in microservices?",
    options: [
      "To provide database access",
      "To serve as a single entry point for all client requests",
      "To encrypt all traffic",
      "To provide load balancing only"
    ],
    correctAnswer: 1,
    explanation: "An API Gateway serves as a single entry point for all client requests in a microservices architecture. It handles cross-cutting concerns like authentication, rate limiting, routing, and monitoring, simplifying client interactions with the system.",
    category: "Architecture",
    difficulty: "Intermediate"
  },
  {
    id: 17,
    question: "What is the main advantage of using UUIDs for unique ID generation?",
    options: [
      "They are shorter than other IDs",
      "They can be generated without coordination between nodes",
      "They are always sequential",
      "They are more secure"
    ],
    correctAnswer: 1,
    explanation: "UUIDs can be generated without coordination between nodes, making them suitable for distributed systems. Each node can generate unique IDs independently, eliminating the need for centralized ID generation services.",
    category: "Algorithms",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    question: "What is the primary purpose of service discovery in distributed systems?",
    options: [
      "To encrypt service communication",
      "To automatically detect and register services",
      "To provide load balancing",
      "To monitor system health"
    ],
    correctAnswer: 1,
    explanation: "Service discovery automatically detects and registers services in a distributed system, allowing services to find and communicate with each other without hardcoded addresses. This is essential for dynamic, scalable systems.",
    category: "Architecture",
    difficulty: "Intermediate"
  },
  {
    id: 19,
    question: "What is the main benefit of the CQRS (Command Query Responsibility Segregation) pattern?",
    options: [
      "Improved security",
      "Better performance through separate optimization of read and write operations",
      "Simpler database design",
      "Reduced network traffic"
    ],
    correctAnswer: 1,
    explanation: "CQRS separates read and write operations, allowing for different optimizations for each. Read operations can be optimized for query performance, while write operations can be optimized for consistency and durability.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 20,
    question: "What is the purpose of the Saga pattern in distributed systems?",
    options: [
      "To improve database performance",
      "To manage distributed transactions across multiple microservices",
      "To provide load balancing",
      "To encrypt data in transit"
    ],
    correctAnswer: 1,
    explanation: "The Saga pattern manages distributed transactions across multiple microservices using a sequence of local transactions with compensating actions for rollback. This provides eventual consistency without requiring traditional ACID transactions.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 21,
    question: "What is the main advantage of using a message queue for asynchronous processing?",
    options: [
      "Better security",
      "Decoupling of producers and consumers",
      "Improved database performance",
      "Reduced network latency"
    ],
    correctAnswer: 1,
    explanation: "Message queues decouple producers and consumers, allowing them to operate independently and handle varying load. This improves system resilience and enables better scalability and fault tolerance.",
    category: "Messaging",
    difficulty: "Intermediate"
  },
  {
    id: 22,
    question: "What is the purpose of health checks in distributed systems?",
    options: [
      "To encrypt data",
      "To monitor the health of services and dependencies",
      "To provide load balancing",
      "To improve database performance"
    ],
    correctAnswer: 1,
    explanation: "Health checks monitor the health of services and their dependencies, helping detect failures, trigger failover mechanisms, and provide operational visibility. They are essential for maintaining system reliability.",
    category: "Observability",
    difficulty: "Beginner"
  },
  {
    id: 23,
    question: "What is the main challenge with implementing exactly-once message delivery?",
    options: [
      "Network latency",
      "Ensuring idempotency and handling duplicate messages",
      "Message encryption",
      "Load balancing"
    ],
    correctAnswer: 1,
    explanation: "Implementing exactly-once delivery requires ensuring idempotency and handling duplicate messages that may occur due to network issues, retries, or system failures. This is complex because it requires coordination between producers and consumers.",
    category: "Messaging",
    difficulty: "Advanced"
  },
  {
    id: 24,
    question: "What is the primary benefit of using read replicas in database design?",
    options: [
      "Improved write performance",
      "Improved read performance and scalability",
      "Better data consistency",
      "Reduced storage costs"
    ],
    correctAnswer: 1,
    explanation: "Read replicas improve read performance and scalability by distributing read operations across multiple database instances. This allows the primary database to focus on write operations while read operations are served from replicas.",
    category: "Databases",
    difficulty: "Intermediate"
  },
  {
    id: 25,
    question: "What is the main purpose of the Bulkhead pattern?",
    options: [
      "To improve performance",
      "To isolate elements of an application into pools to prevent cascading failures",
      "To provide load balancing",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "The Bulkhead pattern isolates elements of an application into pools so that if one fails, the others continue to function. This prevents cascading failures and improves system resilience, similar to ship bulkheads preventing the entire ship from sinking.",
    category: "Reliability",
    difficulty: "Intermediate"
  },
  {
    id: 26,
    question: "What is the main advantage of using event sourcing?",
    options: [
      "Better performance",
      "Complete audit trail and temporal querying capabilities",
      "Simpler database design",
      "Reduced storage requirements"
    ],
    correctAnswer: 1,
    explanation: "Event sourcing provides a complete audit trail and enables temporal querying capabilities. By storing all changes as events, you can reconstruct the state at any point in time and understand how the system evolved.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 27,
    question: "What is the purpose of the Retry pattern in distributed systems?",
    options: [
      "To improve security",
      "To automatically retry failed operations with exponential backoff",
      "To provide load balancing",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "The Retry pattern automatically retries failed operations, typically with exponential backoff to avoid overwhelming the target system. This is useful for handling transient failures in distributed systems.",
    category: "Reliability",
    difficulty: "Beginner"
  },
  {
    id: 28,
    question: "What is the main challenge with implementing distributed transactions?",
    options: [
      "Network latency",
      "Coordinating multiple services while maintaining ACID properties",
      "Data encryption",
      "Load balancing"
    ],
    correctAnswer: 1,
    explanation: "Implementing distributed transactions requires coordinating multiple services while maintaining ACID properties, which is complex due to network failures, service unavailability, and the need for consensus across multiple systems.",
    category: "Databases",
    difficulty: "Advanced"
  },
  {
    id: 29,
    question: "What is the primary purpose of using virtual nodes in consistent hashing?",
    options: [
      "To improve security",
      "To improve load distribution across physical nodes",
      "To reduce memory usage",
      "To simplify the implementation"
    ],
    correctAnswer: 1,
    explanation: "Virtual nodes improve load distribution across physical nodes by creating multiple hash ring positions for each physical node. This helps balance the load more evenly and reduces the impact of hotspots.",
    category: "Algorithms",
    difficulty: "Intermediate"
  },
  {
    id: 30,
    question: "What is the main benefit of using a CDN for static content delivery?",
    options: [
      "Better security",
      "Reduced latency and improved user experience",
      "Lower storage costs",
      "Simpler architecture"
    ],
    correctAnswer: 1,
    explanation: "CDNs reduce latency and improve user experience by serving static content from edge locations closer to users. This reduces the distance data must travel and improves page load times.",
    category: "Performance",
    difficulty: "Beginner"
  },
  {
    id: 31,
    question: "What is the purpose of the Circuit Breaker's 'half-open' state?",
    options: [
      "To improve performance",
      "To test if the failing service has recovered",
      "To provide load balancing",
      "To encrypt traffic"
    ],
    correctAnswer: 1,
    explanation: "The half-open state allows a limited number of test requests to pass through to determine if the failing service has recovered. If these requests succeed, the circuit breaker closes; if they fail, it opens again.",
    category: "Reliability",
    difficulty: "Intermediate"
  },
  {
    id: 32,
    question: "What is the main advantage of using NoSQL databases over relational databases?",
    options: [
      "Better ACID compliance",
      "Better horizontal scalability and schema flexibility",
      "Lower cost",
      "Simpler queries"
    ],
    correctAnswer: 1,
    explanation: "NoSQL databases provide better horizontal scalability and schema flexibility compared to relational databases. They can handle large amounts of data and traffic more easily, and their flexible schema allows for rapid development and iteration.",
    category: "Databases",
    difficulty: "Intermediate"
  },
  {
    id: 33,
    question: "What is the purpose of the API Gateway's rate limiting feature?",
    options: [
      "To improve performance",
      "To protect backend services from overload and abuse",
      "To provide load balancing",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "Rate limiting in API Gateways protects backend services from overload and abuse by controlling the rate of requests clients can make. This ensures fair usage and prevents system resources from being overwhelmed.",
    category: "Security",
    difficulty: "Intermediate"
  },
  {
    id: 34,
    question: "What is the main challenge with implementing eventual consistency?",
    options: [
      "Performance overhead",
      "Handling temporary inconsistencies and conflict resolution",
      "Data encryption",
      "Network latency"
    ],
    correctAnswer: 1,
    explanation: "Implementing eventual consistency requires handling temporary inconsistencies and conflict resolution. Applications must be designed to work with potentially stale data and resolve conflicts when they occur.",
    category: "Theory",
    difficulty: "Advanced"
  },
  {
    id: 35,
    question: "What is the primary purpose of using connection pooling in database applications?",
    options: [
      "To improve security",
      "To reuse database connections and improve performance",
      "To provide load balancing",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "Connection pooling reuses database connections instead of creating new ones for each request, significantly improving performance by reducing the overhead of establishing new connections.",
    category: "Performance",
    difficulty: "Intermediate"
  },
  {
    id: 36,
    question: "What is the main advantage of using message queues for handling high load?",
    options: [
      "Better security",
      "Buffering and smoothing out traffic spikes",
      "Improved database performance",
      "Reduced network latency"
    ],
    correctAnswer: 1,
    explanation: "Message queues buffer and smooth out traffic spikes by allowing producers to send messages at their own pace while consumers process them at their own rate. This prevents system overload during traffic spikes.",
    category: "Messaging",
    difficulty: "Intermediate"
  },
  {
    id: 37,
    question: "What is the purpose of the Health Check pattern in distributed systems?",
    options: [
      "To improve performance",
      "To monitor the health of services and dependencies",
      "To provide load balancing",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "The Health Check pattern monitors the health of services and their dependencies, helping detect failures, trigger failover mechanisms, and provide operational visibility for maintaining system reliability.",
    category: "Observability",
    difficulty: "Beginner"
  },
  {
    id: 38,
    question: "What is the main benefit of using caching in web applications?",
    options: [
      "Better security",
      "Reduced response time and improved user experience",
      "Lower storage costs",
      "Simpler architecture"
    ],
    correctAnswer: 1,
    explanation: "Caching reduces response time and improves user experience by serving frequently requested data from fast-access storage instead of computing or fetching it from slower sources like databases.",
    category: "Performance",
    difficulty: "Beginner"
  },
  {
    id: 39,
    question: "What is the primary challenge with implementing distributed tracing?",
    options: [
      "Network latency",
      "Managing trace context across service boundaries",
      "Data encryption",
      "Load balancing"
    ],
    correctAnswer: 1,
    explanation: "Implementing distributed tracing requires managing trace context across service boundaries, ensuring that trace IDs and span information are properly propagated through all services in the request path.",
    category: "Observability",
    difficulty: "Advanced"
  },
  {
    id: 40,
    question: "What is the main advantage of using stateless services in cloud environments?",
    options: [
      "Better security",
      "Easier horizontal scaling and deployment",
      "Improved performance",
      "Lower cost"
    ],
    correctAnswer: 1,
    explanation: "Stateless services are easier to scale horizontally and deploy in cloud environments because any instance can handle any request. This makes them ideal for containerized deployments and auto-scaling scenarios.",
    category: "Architecture",
    difficulty: "Beginner"
  },
  {
    id: 41,
    question: "What is the primary purpose of faceted search in content discovery systems?",
    options: [
      "To improve search performance",
      "To allow users to filter results by multiple attributes simultaneously",
      "To reduce storage requirements",
      "To simplify the user interface"
    ],
    correctAnswer: 1,
    explanation: "Faceted search allows users to filter results by multiple attributes simultaneously, enabling efficient content discovery. Users can combine different filters (e.g., category, difficulty, duration) to narrow down results and find exactly what they're looking for.",
    category: "Search",
    difficulty: "Intermediate"
  }
];

export const quizCategories = [
  "All",
  "Theory",
  "Algorithms",
  "Scalability",
  "Databases",
  "Performance",
  "Messaging",
  "Architecture",
  "Reliability",
  "Security",
  "Observability",
  "Estimation"
];

export const getQuestionsByCategory = (category: string) => {
  if (category === 'All') return quizQuestions;
  return quizQuestions.filter(question => question.category === category);
};

export const getQuestionsByDifficulty = (difficulty: string) => {
  if (difficulty === 'All') return quizQuestions;
  return quizQuestions.filter(question => question.difficulty === difficulty);
};
