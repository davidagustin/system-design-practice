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
  },
  {
    id: 42,
    question: "What does ACID stand for in database transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Consistency, Integrity, Durability",
      "Atomicity, Consistency, Integrity, Data",
      "Availability, Consistency, Isolation, Data"
    ],
    correctAnswer: 0,
    explanation: "ACID stands for Atomicity (all operations succeed or fail together), Consistency (data remains in a valid state), Isolation (concurrent transactions don't interfere), and Durability (committed transactions persist).",
    category: "Databases",
    difficulty: "Intermediate"
  },
  {
    id: 43,
    question: "What is the main advantage of the Saga pattern over distributed transactions?",
    options: [
      "Better performance",
      "Better scalability and fault tolerance",
      "Simpler implementation",
      "Lower cost"
    ],
    correctAnswer: 1,
    explanation: "The Saga pattern provides better scalability and fault tolerance compared to distributed transactions. It breaks down large transactions into local transactions with compensation actions, avoiding the complexity and performance issues of distributed transactions.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 44,
    question: "Which type of database index is best for range queries?",
    options: [
      "Hash Index",
      "B-Tree Index",
      "Bitmap Index",
      "Full-Text Index"
    ],
    correctAnswer: 1,
    explanation: "B-Tree indexes are best for range queries because they maintain sorted order, allowing efficient traversal of values within a range. Hash indexes are only efficient for equality lookups.",
    category: "Performance",
    difficulty: "Intermediate"
  },
  {
    id: 45,
    question: "What is the main principle of RESTful API design?",
    options: [
      "Stateless communication",
      "Stateful sessions",
      "Complex routing",
      "Binary protocols"
    ],
    correctAnswer: 0,
    explanation: "Stateless communication is a core principle of RESTful API design. Each request contains all the information needed to process it, making the API scalable and easier to cache.",
    category: "Architecture",
    difficulty: "Intermediate"
  },
  {
    id: 46,
    question: "What is the main advantage of GraphQL over REST APIs?",
    options: [
      "Better performance",
      "Flexible data fetching - clients can request exactly what they need",
      "Simpler implementation",
      "Better caching"
    ],
    correctAnswer: 1,
    explanation: "GraphQL's main advantage is flexible data fetching - clients can request exactly what they need and nothing more. This prevents over-fetching and under-fetching of data, making APIs more efficient.",
    category: "Architecture",
    difficulty: "Intermediate"
  },
  {
    id: 47,
    question: "What is the primary purpose of a service mesh?",
    options: [
      "To provide load balancing",
      "To handle service-to-service communication, security, and observability",
      "To improve database performance",
      "To provide caching"
    ],
    correctAnswer: 1,
    explanation: "A service mesh is a dedicated infrastructure layer that handles service-to-service communication, security, and observability in microservices architectures. It provides features like traffic management, security policies, and distributed tracing.",
    category: "Infrastructure",
    difficulty: "Advanced"
  },
  {
    id: 48,
    question: "What is the main benefit of Event Sourcing?",
    options: [
      "Better performance",
      "Complete audit trail and ability to replay events",
      "Simpler data model",
      "Lower storage requirements"
    ],
    correctAnswer: 1,
    explanation: "Event Sourcing provides a complete audit trail and the ability to replay events to reconstruct any point in time. This enables powerful features like temporal queries and debugging historical issues.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 49,
    question: "What is the main challenge with distributed tracing?",
    options: [
      "Network latency",
      "Managing trace context across service boundaries",
      "Data encryption",
      "Load balancing"
    ],
    correctAnswer: 1,
    explanation: "The main challenge with distributed tracing is managing trace context across service boundaries. This requires proper propagation of trace IDs and span information through all services in the request path.",
    category: "Observability",
    difficulty: "Intermediate"
  },
  {
    id: 50,
    question: "Which Redis data structure is best for implementing a leaderboard?",
    options: [
      "Redis Strings",
      "Redis Lists",
      "Redis Sorted Sets",
      "Redis Hashes"
    ],
    correctAnswer: 2,
    explanation: "Redis Sorted Sets are perfect for implementing leaderboards because they maintain elements in sorted order by score. This allows efficient ranking operations and range queries.",
    category: "Performance",
    difficulty: "Intermediate"
  },
  {
    id: 51,
    question: "What is the main advantage of the Raft consensus algorithm over Paxos?",
    options: [
      "Better performance",
      "Easier to understand and implement",
      "Higher availability",
      "Lower network overhead"
    ],
    correctAnswer: 1,
    explanation: "Raft is designed to be easier to understand and implement compared to Paxos, while providing the same safety guarantees. This makes it more accessible for developers and reduces the chance of implementation errors.",
    category: "Theory",
    difficulty: "Advanced"
  },
  {
    id: 52,
    question: "What is the primary purpose of time series databases?",
    options: [
      "To store relational data",
      "To efficiently store and query time-based data",
      "To provide ACID transactions",
      "To support complex joins"
    ],
    correctAnswer: 1,
    explanation: "Time series databases are specifically designed to efficiently store and query time-based data. They optimize for time-based queries, provide efficient compression, and support aggregation operations over time periods.",
    category: "Databases",
    difficulty: "Advanced"
  },
  {
    id: 53,
    question: "What is the main challenge with machine learning infrastructure?",
    options: [
      "Data storage",
      "Managing the entire ML lifecycle from development to production",
      "Network latency",
      "User authentication"
    ],
    correctAnswer: 1,
    explanation: "The main challenge with ML infrastructure is managing the entire ML lifecycle from development to production, including data pipelines, model training, deployment, monitoring, and continuous improvement.",
    category: "Infrastructure",
    difficulty: "Advanced"
  },
  {
    id: 54,
    question: "What is the key characteristic of stream processing systems?",
    options: [
      "Batch processing",
      "Real-time processing of continuous data streams",
      "Static data analysis",
      "Offline computation"
    ],
    correctAnswer: 1,
    explanation: "Stream processing systems are characterized by real-time processing of continuous data streams. They handle high-throughput, low-latency data processing with fault tolerance and exactly-once semantics.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 55,
    question: "What is the main benefit of blockchain technology?",
    options: [
      "High performance",
      "Secure, transparent, and tamper-proof record keeping without central authority",
      "Low cost",
      "Simple implementation"
    ],
    correctAnswer: 1,
    explanation: "Blockchain technology provides secure, transparent, and tamper-proof record keeping without requiring a central authority. It uses cryptographic techniques and consensus mechanisms to ensure data integrity and trust.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 56,
    question: "What is the primary advantage of edge computing?",
    options: [
      "Lower cost",
      "Reduced latency by processing data closer to the source",
      "Better security",
      "Simpler architecture"
    ],
    correctAnswer: 1,
    explanation: "Edge computing reduces latency by processing data closer to the source of data generation. This improves real-time processing capabilities and reduces bandwidth usage by processing data locally.",
    category: "Infrastructure",
    difficulty: "Advanced"
  },
  {
    id: 57,
    question: "What is the main benefit of a multi-cloud strategy?",
    options: [
      "Lower cost",
      "Avoiding vendor lock-in and optimizing costs and capabilities",
      "Better performance",
      "Simpler management"
    ],
    correctAnswer: 1,
    explanation: "Multi-cloud strategy helps avoid vendor lock-in and allows organizations to optimize costs and leverage the best capabilities from each cloud provider. It provides flexibility, redundancy, and cost optimization.",
    category: "Infrastructure",
    difficulty: "Advanced"
  },
  {
    id: 58,
    question: "What is the core principle of data mesh architecture?",
    options: [
      "Centralized data management",
      "Treating data as a product with domain-oriented ownership",
      "Single data warehouse",
      "Batch processing only"
    ],
    correctAnswer: 1,
    explanation: "Data mesh treats data as a product with domain-oriented ownership. It emphasizes decentralized data ownership, self-serve data platforms, and federated governance for scalable data architecture.",
    category: "Architecture",
    difficulty: "Advanced"
  },
  {
    id: 59,
    question: "What is the purpose of chaos engineering?",
    options: [
      "To improve performance",
      "To proactively test system resilience by intentionally injecting failures",
      "To reduce costs",
      "To simplify architecture"
    ],
    correctAnswer: 1,
    explanation: "Chaos engineering proactively tests system resilience by intentionally injecting failures in production environments. This helps identify weaknesses, improve system reliability, and build confidence in system behavior under failure conditions.",
    category: "Reliability",
    difficulty: "Advanced"
  },
  {
    id: 60,
    question: "What is the fundamental principle of zero trust security?",
    options: [
      "Trust but verify",
      "Never trust, always verify",
      "Trust internal networks",
      "Trust authenticated users"
    ],
    correctAnswer: 1,
    explanation: "Zero trust security follows the principle of 'never trust, always verify.' It assumes no trust and requires verification for every access request, emphasizing identity verification, least privilege access, and continuous monitoring.",
    category: "Security",
    difficulty: "Advanced"
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
