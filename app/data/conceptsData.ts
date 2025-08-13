export interface Concept {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  details: string;
  examples: string[];
  tradeoffs: string[];
  bestPractices: string[];
}

export const concepts: Concept[] = [
  {
    id: 1,
    title: "CAP Theorem",
    description: "The fundamental trade-off between Consistency, Availability, and Partition tolerance in distributed systems.",
    category: "Theory",
    difficulty: "Intermediate",
    details: "The CAP theorem states that it's impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition tolerance (the system continues to operate despite network failures). This theorem is fundamental to understanding distributed system design decisions.",
    examples: [
      "CP Systems: Traditional relational databases like PostgreSQL in a distributed setup",
      "AP Systems: NoSQL databases like Cassandra and DynamoDB",
      "CA Systems: Single-node databases (not distributed)",
      "Eventual Consistency: Systems that provide consistency over time"
    ],
    tradeoffs: [
      "Consistency vs Performance: Strong consistency often requires coordination, reducing performance",
      "Availability vs Data Freshness: High availability may mean serving stale data",
      "Complexity vs Guarantees: Simpler systems may provide fewer guarantees",
      "Latency vs Consistency: Global consistency increases latency"
    ],
    bestPractices: [
      "Choose consistency model based on application requirements",
      "Use eventual consistency for high availability scenarios",
      "Implement conflict resolution strategies",
      "Design for partition tolerance by default",
      "Monitor consistency violations and conflicts"
    ]
  },
  {
    id: 2,
    title: "Consistent Hashing",
    description: "A distributed hashing scheme that minimizes reorganization when nodes are added or removed.",
    category: "Algorithms",
    difficulty: "Intermediate",
    details: "Consistent hashing is a special kind of hashing that minimizes the number of keys that need to be remapped when the hash table is resized. It's particularly useful in distributed systems where data is partitioned across multiple nodes. The algorithm uses a hash ring where both data and nodes are mapped to positions on the ring.",
    examples: [
      "DynamoDB's partitioning strategy",
      "Cassandra's token ring distribution",
      "Redis Cluster's key distribution",
      "Load balancer request routing",
      "CDN content distribution"
    ],
    tradeoffs: [
      "Load Distribution vs Complexity: Virtual nodes improve distribution but add complexity",
      "Memory Usage vs Distribution: More virtual nodes use more memory",
      "Replication vs Performance: More replicas improve availability but reduce performance",
      "Hash Function Quality vs Distribution: Poor hash functions can cause hotspots"
    ],
    bestPractices: [
      "Use virtual nodes to improve load distribution",
      "Choose a good hash function (SHA-1, MD5)",
      "Implement proper replication strategies",
      "Monitor for hotspots and rebalance if needed",
      "Consider the impact of node failures on data distribution"
    ]
  },
  {
    id: 3,
    title: "Load Balancing",
    description: "Distributing incoming network traffic across multiple servers to ensure no single server bears too much load.",
    category: "Scalability",
    difficulty: "Beginner",
    details: "Load balancing is a technique used to distribute incoming network traffic across multiple servers or resources to ensure optimal resource utilization, maximize throughput, minimize response time, and avoid overload. Load balancers can operate at different layers of the OSI model and use various algorithms to distribute traffic.",
    examples: [
      "Application Load Balancers (Layer 7)",
      "Network Load Balancers (Layer 4)",
      "Global Server Load Balancing (GSLB)",
      "Database load balancing with read replicas",
      "CDN load balancing for content delivery"
    ],
    tradeoffs: [
      "Algorithm Complexity vs Performance: Simple algorithms are fast but may not distribute load evenly",
      "Session Affinity vs Scalability: Sticky sessions improve performance but reduce flexibility",
      "Health Check Frequency vs Responsiveness: More frequent checks are responsive but create overhead",
      "Centralized vs Distributed: Centralized is simpler but creates a single point of failure"
    ],
    bestPractices: [
      "Use health checks to detect and remove unhealthy servers",
      "Implement session affinity when needed",
      "Choose appropriate load balancing algorithms",
      "Monitor load distribution and adjust as needed",
      "Implement failover mechanisms"
    ]
  },
  {
    id: 4,
    title: "Database Replication",
    description: "Creating and maintaining multiple copies of data across different database servers for availability and performance.",
    category: "Databases",
    difficulty: "Intermediate",
    details: "Database replication involves creating and maintaining multiple copies of data across different database servers. This provides high availability, fault tolerance, and improved read performance. Replication can be synchronous or asynchronous, and can follow master-slave or master-master patterns.",
    examples: [
      "MySQL Master-Slave replication",
      "PostgreSQL streaming replication",
      "MongoDB replica sets",
      "Redis Sentinel for high availability",
      "Amazon RDS Multi-AZ deployment"
    ],
    tradeoffs: [
      "Consistency vs Performance: Synchronous replication provides consistency but reduces performance",
      "Complexity vs Availability: More complex setups provide better availability",
      "Storage Cost vs Redundancy: More replicas provide better redundancy but cost more",
      "Network Bandwidth vs Replication Lag: Faster replication uses more bandwidth"
    ],
    bestPractices: [
      "Use read replicas for scaling read operations",
      "Implement proper failover mechanisms",
      "Monitor replication lag",
      "Choose appropriate consistency levels",
      "Plan for disaster recovery scenarios"
    ]
  },
  {
    id: 5,
    title: "Caching Strategies",
    description: "Various approaches to storing frequently accessed data in fast-access storage to improve performance.",
    category: "Performance",
    difficulty: "Intermediate",
    details: "Caching strategies involve storing frequently accessed data in fast-access storage to improve application performance. Different caching patterns include cache-aside, write-through, write-behind, and cache-through. Each strategy has different trade-offs in terms of consistency, performance, and complexity.",
    examples: [
      "Redis for application caching",
      "CDN for static content caching",
      "Browser caching for web resources",
      "Database query result caching",
      "Session storage caching"
    ],
    tradeoffs: [
      "Memory Usage vs Performance: More cache memory improves performance but costs more",
      "Consistency vs Performance: Stronger consistency reduces performance",
      "Complexity vs Flexibility: More complex strategies provide more flexibility",
      "Cache Hit Rate vs Storage: Larger caches have higher hit rates but use more storage"
    ],
    bestPractices: [
      "Choose appropriate cache eviction policies",
      "Implement cache invalidation strategies",
      "Monitor cache hit rates",
      "Use TTL (Time To Live) for data freshness",
      "Consider cache warming for critical data"
    ]
  },
  {
    id: 6,
    title: "Message Queues",
    description: "Asynchronous communication patterns for decoupling services and handling high load.",
    category: "Messaging",
    difficulty: "Intermediate",
    details: "Message queues provide asynchronous communication between services, allowing them to operate independently. They help decouple services, handle high load, and provide reliability through message persistence. Message queues can implement various delivery guarantees and ordering semantics.",
    examples: [
      "Apache Kafka for event streaming",
      "RabbitMQ for message queuing",
      "Amazon SQS for cloud messaging",
      "Redis Streams for real-time messaging",
      "Apache Pulsar for unified messaging"
    ],
    tradeoffs: [
      "Latency vs Throughput: Lower latency often means lower throughput",
      "Ordering vs Performance: Strict ordering reduces performance",
      "Persistence vs Performance: Persistent messages are slower but more reliable",
      "Complexity vs Features: More features often mean more complexity"
    ],
    bestPractices: [
      "Choose appropriate delivery guarantees",
      "Implement dead letter queues for failed messages",
      "Monitor queue depth and processing rates",
      "Use message batching for better performance",
      "Implement proper error handling and retry logic"
    ]
  },
  {
    id: 7,
    title: "Database Sharding",
    description: "Horizontal partitioning of data across multiple database servers to improve scalability.",
    category: "Databases",
    difficulty: "Advanced",
    details: "Database sharding involves horizontally partitioning data across multiple database servers. Each shard contains a subset of the data, allowing the system to scale beyond the capacity of a single database server. Sharding strategies include hash-based, range-based, and directory-based approaches.",
    examples: [
      "MongoDB sharding with config servers",
      "MySQL sharding with application-level routing",
      "PostgreSQL partitioning",
      "Cassandra partitioning with consistent hashing",
      "DynamoDB automatic partitioning"
    ],
    tradeoffs: [
      "Complexity vs Scalability: Sharding provides scalability but adds complexity",
      "Cross-Shard Queries vs Performance: Cross-shard queries are slower",
      "Data Distribution vs Flexibility: Hash-based sharding provides even distribution but limits flexibility",
      "Operational Overhead vs Benefits: Sharding requires more operational overhead"
    ],
    bestPractices: [
      "Choose appropriate sharding keys",
      "Plan for data growth and rebalancing",
      "Implement proper routing logic",
      "Handle cross-shard transactions carefully",
      "Monitor shard distribution and performance"
    ]
  },
  {
    id: 8,
    title: "Microservices Architecture",
    description: "An architectural style where applications are built as a collection of loosely coupled services.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Microservices architecture decomposes applications into small, loosely coupled services that can be developed, deployed, and scaled independently. Each service has its own database and communicates with other services through well-defined APIs. This approach provides flexibility, scalability, and fault isolation.",
    examples: [
      "Netflix's microservices architecture",
      "Uber's service-oriented architecture",
      "Amazon's two-pizza team structure",
      "Kubernetes-based microservices",
      "Docker containerized services"
    ],
    tradeoffs: [
      "Complexity vs Flexibility: Microservices provide flexibility but add complexity",
      "Network Overhead vs Scalability: More services mean more network calls",
      "Data Consistency vs Independence: Service independence can lead to consistency challenges",
      "Operational Overhead vs Benefits: More services require more operational overhead"
    ],
    bestPractices: [
      "Design services around business capabilities",
      "Implement proper service discovery",
      "Use API gateways for external communication",
      "Implement distributed tracing",
      "Design for failure and implement circuit breakers"
    ]
  },
  {
    id: 9,
    title: "Event-Driven Architecture",
    description: "An architectural pattern where system components communicate through events.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Event-driven architecture is a software architecture pattern promoting the production, detection, consumption of, and reaction to events. Components communicate asynchronously through events, leading to loosely coupled systems. This pattern is particularly useful for building scalable, responsive systems.",
    examples: [
      "Apache Kafka event streaming",
      "Event sourcing with EventStore",
      "Amazon Kinesis for real-time processing",
      "Apache Pulsar for unified messaging",
      "Confluent Platform for event streaming"
    ],
    tradeoffs: [
      "Complexity vs Decoupling: Events provide decoupling but add complexity",
      "Event Ordering vs Performance: Strict ordering can reduce performance",
      "Event Persistence vs Storage: Persistent events require more storage",
      "Debugging vs Flexibility: Event-driven systems can be harder to debug"
    ],
    bestPractices: [
      "Design event schemas carefully",
      "Implement event versioning strategies",
      "Use event sourcing for audit trails",
      "Implement proper error handling",
      "Monitor event processing and latency"
    ]
  },
  {
    id: 10,
    title: "Circuit Breaker Pattern",
    description: "A design pattern used to prevent cascading failures in distributed systems.",
    category: "Reliability",
    difficulty: "Intermediate",
    details: "The circuit breaker pattern is used to prevent cascading failures in distributed systems. It monitors for failures and stops the flow of requests when a certain threshold is reached, allowing the system to recover. The circuit breaker has three states: closed (normal operation), open (failing), and half-open (testing recovery).",
    examples: [
      "Netflix Hystrix for Java applications",
      "Resilience4j for Spring Boot applications",
      "Polly for .NET applications",
      "Go circuit breaker implementations",
      "Custom circuit breaker implementations"
    ],
    tradeoffs: [
      "Responsiveness vs Stability: Circuit breakers improve stability but may reduce responsiveness",
      "False Positives vs Protection: Aggressive settings may cause false positives",
      "Complexity vs Benefits: Circuit breakers add complexity but provide protection",
      "Configuration vs Effectiveness: Proper configuration is crucial for effectiveness"
    ],
    bestPractices: [
      "Set appropriate failure thresholds",
      "Implement fallback mechanisms",
      "Monitor circuit breaker states",
      "Use different timeouts for different operations",
      "Test circuit breaker behavior in failure scenarios"
    ]
  },
  {
    id: 11,
    title: "Rate Limiting",
    description: "Controlling the rate of requests to protect systems from overload and abuse.",
    category: "Security",
    difficulty: "Intermediate",
    details: "Rate limiting is a technique used to control the rate of requests a client can make to an API or service. It helps protect systems from overload, prevent abuse, and ensure fair usage. Various algorithms include token bucket, leaky bucket, fixed window counter, and sliding window counter.",
    examples: [
      "API rate limiting with Redis",
      "User authentication rate limiting",
      "DDoS protection with rate limiting",
      "Payment processing rate limiting",
      "Email sending rate limiting"
    ],
    tradeoffs: [
      "Protection vs User Experience: Strict rate limiting protects systems but may frustrate users",
      "Accuracy vs Performance: More accurate algorithms may be slower",
      "Complexity vs Effectiveness: More complex algorithms provide better control",
      "Storage vs Precision: More precise rate limiting requires more storage"
    ],
    bestPractices: [
      "Choose appropriate rate limiting algorithms",
      "Implement rate limiting headers",
      "Use different limits for different user types",
      "Monitor rate limiting effectiveness",
      "Provide clear error messages when limits are exceeded"
    ]
  },
  {
    id: 12,
    title: "Distributed Tracing",
    description: "Monitoring and troubleshooting distributed systems by tracking requests across services.",
    category: "Observability",
    difficulty: "Advanced",
    details: "Distributed tracing is a method of monitoring and troubleshooting distributed systems by tracking requests as they flow through different services. It helps identify performance bottlenecks, debug issues, and understand system behavior. Tracing involves generating unique trace IDs and collecting spans that represent units of work.",
    examples: [
      "Jaeger for distributed tracing",
      "Zipkin for request tracing",
      "AWS X-Ray for cloud tracing",
      "Google Cloud Trace",
      "OpenTelemetry for vendor-neutral tracing"
    ],
    tradeoffs: [
      "Overhead vs Visibility: Tracing provides visibility but adds overhead",
      "Storage vs Detail: More detailed traces require more storage",
      "Complexity vs Benefits: Tracing adds complexity but provides valuable insights",
      "Privacy vs Debugging: Detailed traces may contain sensitive information"
    ],
    bestPractices: [
      "Use consistent trace IDs across services",
      "Implement sampling to reduce overhead",
      "Include relevant metadata in spans",
      "Set appropriate trace retention policies",
      "Use tracing for performance optimization"
    ]
  },
  {
    id: 13,
    title: "Service Discovery",
    description: "Automatically detecting and registering services in a distributed system.",
    category: "Architecture",
    difficulty: "Intermediate",
    details: "Service discovery is the automatic detection of services in a distributed system. It allows services to find and communicate with each other without hardcoded addresses. Service discovery can be implemented using service registries, DNS-based discovery, or client-side discovery patterns.",
    examples: [
      "Consul for service discovery",
      "etcd for distributed key-value store",
      "ZooKeeper for coordination",
      "Kubernetes service discovery",
      "AWS ECS service discovery"
    ],
    tradeoffs: [
      "Centralization vs Decentralization: Centralized discovery is simpler but creates a single point of failure",
      "Latency vs Consistency: Strong consistency may increase latency",
      "Complexity vs Flexibility: More complex solutions provide more flexibility",
      "Operational Overhead vs Benefits: Service discovery requires operational overhead"
    ],
    bestPractices: [
      "Implement health checks for service discovery",
      "Use appropriate consistency levels",
      "Implement proper failure handling",
      "Monitor service discovery performance",
      "Plan for service discovery failures"
    ]
  },
  {
    id: 14,
    title: "API Gateway Pattern",
    description: "A single entry point for all client requests in a microservices architecture.",
    category: "Architecture",
    difficulty: "Intermediate",
    details: "An API gateway is a single entry point for all client requests in a microservices architecture. It handles cross-cutting concerns like authentication, rate limiting, routing, and monitoring. The gateway can also provide protocol translation, request/response transformation, and aggregation.",
    examples: [
      "Kong API gateway",
      "AWS API Gateway",
      "Azure API Management",
      "Google Cloud Endpoints",
      "Netflix Zuul"
    ],
    tradeoffs: [
      "Centralization vs Decentralization: Centralized gateway is simpler but creates a single point of failure",
      "Performance vs Features: More features may impact performance",
      "Complexity vs Benefits: API gateways add complexity but provide valuable features",
      "Operational Overhead vs Benefits: Gateways require operational overhead"
    ],
    bestPractices: [
      "Implement proper authentication and authorization",
      "Use rate limiting to protect backend services",
      "Implement request/response transformation",
      "Monitor gateway performance and errors",
      "Plan for gateway failures and implement fallbacks"
    ]
  },
  {
    id: 15,
    title: "Event Sourcing",
    description: "Storing all changes to application state as a sequence of events.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Event sourcing is a pattern where all changes to application state are stored as a sequence of events. Instead of storing the current state, the system stores the events that led to that state. This provides an audit trail, enables temporal queries, and supports event replay for debugging or rebuilding state.",
    examples: [
      "EventStore for event sourcing",
      "Apache Kafka for event streaming",
      "Axon Framework for event sourcing",
      "Custom event sourcing implementations",
      "Event sourcing with CQRS"
    ],
    tradeoffs: [
      "Storage vs Audit Trail: Event sourcing provides audit trails but requires more storage",
      "Complexity vs Benefits: Event sourcing adds complexity but provides valuable features",
      "Query Performance vs Flexibility: Event sourcing may impact query performance",
      "Learning Curve vs Benefits: Event sourcing has a steep learning curve"
    ],
    bestPractices: [
      "Design event schemas carefully",
      "Implement event versioning strategies",
      "Use snapshots for performance optimization",
      "Implement proper error handling",
      "Plan for event schema evolution"
    ]
  },
  {
    id: 16,
    title: "CQRS (Command Query Responsibility Segregation)",
    description: "Separating read and write operations for a data store.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "CQRS is a pattern that separates read and write operations for a data store. Commands modify the system state, while queries read the system state. This separation allows for different optimizations for read and write operations, and can improve performance, scalability, and maintainability.",
    examples: [
      "CQRS with event sourcing",
      "CQRS with separate read/write databases",
      "CQRS with different data models",
      "CQRS with materialized views",
      "CQRS with caching strategies"
    ],
    tradeoffs: [
      "Complexity vs Performance: CQRS improves performance but adds complexity",
      "Consistency vs Scalability: Eventual consistency improves scalability",
      "Storage vs Performance: Separate read models require more storage",
      "Operational Overhead vs Benefits: CQRS requires more operational overhead"
    ],
    bestPractices: [
      "Start simple and add CQRS when needed",
      "Use appropriate consistency levels",
      "Implement proper error handling",
      "Monitor read/write model synchronization",
      "Plan for data consistency challenges"
    ]
  },
  {
    id: 17,
    title: "Saga Pattern",
    description: "Managing distributed transactions across multiple microservices.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "The Saga pattern is used to manage distributed transactions across multiple microservices. Instead of using traditional ACID transactions, sagas use a sequence of local transactions with compensating actions for rollback. Each local transaction publishes events that trigger the next step in the saga.",
    examples: [
      "Order processing saga",
      "Payment processing saga",
      "Inventory management saga",
      "Shipping coordination saga",
      "User registration saga"
    ],
    tradeoffs: [
      "Complexity vs Scalability: Sagas provide scalability but add complexity",
      "Consistency vs Performance: Saga consistency is weaker than ACID",
      "Debugging vs Flexibility: Sagas can be harder to debug",
      "Operational Overhead vs Benefits: Sagas require more operational overhead"
    ],
    bestPractices: [
      "Design compensating actions carefully",
      "Implement proper error handling",
      "Use event sourcing for saga state",
      "Monitor saga execution and failures",
      "Plan for saga recovery scenarios"
    ]
  },
  {
    id: 18,
    title: "Bulkhead Pattern",
    description: "Isolating elements of an application into pools to prevent cascading failures.",
    category: "Reliability",
    difficulty: "Intermediate",
    details: "The bulkhead pattern isolates elements of an application into pools so that if one fails, the others continue to function. This pattern is inspired by ship bulkheads that prevent the entire ship from sinking if one compartment is breached. It's commonly used with thread pools, connection pools, and service instances.",
    examples: [
      "Thread pool isolation",
      "Database connection pool isolation",
      "Service instance isolation",
      "Resource pool isolation",
      "Circuit breaker with bulkheads"
    ],
    tradeoffs: [
      "Resource Utilization vs Isolation: Bulkheads provide isolation but may reduce resource utilization",
      "Complexity vs Reliability: Bulkheads add complexity but improve reliability",
      "Overhead vs Benefits: Bulkheads add overhead but prevent cascading failures",
      "Configuration vs Effectiveness: Proper configuration is crucial for effectiveness"
    ],
    bestPractices: [
      "Group related resources into bulkheads",
      "Set appropriate pool sizes",
      "Monitor bulkhead health and performance",
      "Implement proper error handling",
      "Plan for bulkhead failures"
    ]
  },
  {
    id: 19,
    title: "Retry Pattern",
    description: "Automatically retrying failed operations with exponential backoff.",
    category: "Reliability",
    difficulty: "Beginner",
    details: "The retry pattern automatically retries failed operations, typically with exponential backoff to avoid overwhelming the target system. This pattern is useful for handling transient failures in distributed systems. Retry policies can be configured with different strategies and limits.",
    examples: [
      "HTTP request retries",
      "Database operation retries",
      "Message processing retries",
      "API call retries",
      "File upload retries"
    ],
    tradeoffs: [
      "Reliability vs Performance: Retries improve reliability but may impact performance",
      "Complexity vs Benefits: Retries add complexity but handle transient failures",
      "Resource Usage vs Success Rate: More retries use more resources",
      "User Experience vs System Health: Retries may delay responses"
    ],
    bestPractices: [
      "Use exponential backoff",
      "Set appropriate retry limits",
      "Implement jitter to avoid thundering herd",
      "Distinguish between retryable and non-retryable errors",
      "Monitor retry patterns and success rates"
    ]
  },
  {
    id: 20,
    title: "Health Check Pattern",
    description: "Monitoring the health of services and dependencies in distributed systems.",
    category: "Observability",
    difficulty: "Beginner",
    details: "Health checks are mechanisms used to monitor the health of services and their dependencies. They help detect failures, trigger failover mechanisms, and provide operational visibility. Health checks can be implemented at different levels: application, service, and infrastructure.",
    examples: [
      "Kubernetes liveness and readiness probes",
      "Load balancer health checks",
      "Service mesh health checks",
      "Database connection health checks",
      "External service dependency checks"
    ],
    tradeoffs: [
      "Accuracy vs Overhead: More accurate health checks may have higher overhead",
      "Frequency vs Responsiveness: More frequent checks are more responsive",
      "Complexity vs Reliability: More complex health checks may be more reliable",
      "False Positives vs False Negatives: Balancing accuracy is important"
    ],
    bestPractices: [
      "Implement different types of health checks",
      "Set appropriate check intervals",
      "Use health checks for load balancer decisions",
      "Monitor health check results",
      "Plan for health check failures"
    ]
  },
  {
    id: 21,
    title: "Search and Filtering Systems",
    description: "Designing efficient search and filtering mechanisms for large datasets and content discovery.",
    category: "Search",
    difficulty: "Intermediate",
    details: "Search and filtering systems enable users to find relevant content quickly and efficiently. These systems combine various techniques including text search, faceted filtering, autocomplete, and relevance ranking to provide intuitive content discovery experiences. Effective search systems balance performance, accuracy, and user experience.",
    examples: [
      "E-commerce product search with filters",
      "Content management system search",
      "Document search and retrieval",
      "User interface filtering components",
      "Real-time search suggestions"
    ],
    tradeoffs: [
      "Performance vs Accuracy: More accurate search may be slower",
      "Index Size vs Search Speed: Larger indexes improve accuracy but increase storage and query time",
      "Real-time vs Batch Updates: Real-time indexing improves freshness but adds complexity",
      "Simplicity vs Features: More advanced features increase complexity"
    ],
    bestPractices: [
      "Implement proper indexing strategies",
      "Use faceted search for structured data",
      "Provide autocomplete and suggestions",
      "Implement relevance ranking algorithms",
      "Optimize for common search patterns"
    ]
  }
];

export const conceptCategories = [
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
  "Search"
];

export const getConceptsByCategory = (category: string) => {
  if (category === 'All') return concepts;
  return concepts.filter(concept => concept.category === category);
};

export const getConceptsByDifficulty = (difficulty: string) => {
  if (difficulty === 'All') return concepts;
  return concepts.filter(concept => concept.difficulty === difficulty);
};
