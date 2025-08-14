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
  },
  {
    id: 22,
    title: "ACID Properties",
    description: "The four key properties that guarantee reliable processing of database transactions.",
    category: "Databases",
    difficulty: "Intermediate",
    details: "ACID is an acronym for Atomicity, Consistency, Isolation, and Durability. These properties ensure that database transactions are processed reliably and maintain data integrity even in the event of system failures. ACID properties are fundamental to relational database systems and are crucial for maintaining data consistency.",
    examples: [
      "PostgreSQL's ACID compliance with MVCC",
      "MySQL InnoDB engine transactions",
      "Oracle Database transaction management",
      "SQL Server transaction logs",
      "Distributed ACID systems like Spanner"
    ],
    tradeoffs: [
      "Performance vs Consistency: ACID compliance often comes with performance overhead",
      "Scalability vs Guarantees: Strong consistency limits horizontal scaling",
      "Complexity vs Reliability: ACID systems are more complex but more reliable",
      "Latency vs Durability: Synchronous writes ensure durability but increase latency"
    ],
    bestPractices: [
      "Use appropriate isolation levels for your use case",
      "Keep transactions as short as possible",
      "Implement proper error handling and rollback mechanisms",
      "Monitor transaction performance and deadlocks",
      "Consider eventual consistency for high-scale systems"
    ]
  },
  {
    id: 23,
    title: "Saga Pattern",
    description: "A pattern for managing distributed transactions across multiple services using local transactions and compensation actions.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "The Saga pattern is used to manage distributed transactions in microservices architectures. Instead of using distributed transactions, it breaks down a large transaction into a series of local transactions, each with a corresponding compensation action that can undo the transaction if needed. This pattern maintains data consistency across services without requiring distributed transactions.",
    examples: [
      "E-commerce order processing across inventory, payment, and shipping services",
      "Banking money transfers between accounts",
      "Travel booking systems coordinating flights, hotels, and car rentals",
      "Insurance claim processing across multiple departments",
      "Supply chain management systems"
    ],
    tradeoffs: [
      "Complexity vs Scalability: Sagas are more complex but scale better than distributed transactions",
      "Consistency vs Performance: Eventual consistency vs immediate consistency",
      "Debugging vs Reliability: Saga failures can be harder to debug",
      "Data Integrity vs Flexibility: Sagas provide flexibility but require careful design"
    ],
    bestPractices: [
      "Design compensation actions for every transaction step",
      "Use event sourcing to track saga state",
      "Implement proper error handling and retry mechanisms",
      "Monitor saga execution and failure rates",
      "Keep saga steps idempotent"
    ]
  },
  {
    id: 24,
    title: "Database Indexing",
    description: "Data structures that improve the speed of data retrieval operations on database tables.",
    category: "Performance",
    difficulty: "Intermediate",
    details: "Database indexes are data structures that improve the speed of data retrieval operations by providing quick access to rows in database tables. They work by creating a separate data structure that contains a subset of the table's data, organized in a way that allows for efficient searching. Proper indexing is crucial for database performance optimization.",
    examples: [
      "B-tree indexes for range queries",
      "Hash indexes for equality lookups",
      "Composite indexes for multi-column queries",
      "Covering indexes to avoid table lookups",
      "Full-text indexes for text search"
    ],
    tradeoffs: [
      "Query Performance vs Storage: Indexes improve query speed but require additional storage",
      "Read vs Write Performance: Indexes speed up reads but slow down writes",
      "Index Maintenance vs Query Optimization: More indexes require more maintenance",
      "Memory Usage vs Performance: In-memory indexes are faster but use more memory"
    ],
    bestPractices: [
      "Index columns used in WHERE, JOIN, and ORDER BY clauses",
      "Avoid over-indexing tables",
      "Monitor index usage and remove unused indexes",
      "Use composite indexes for multi-column queries",
      "Consider index selectivity and cardinality"
    ]
  },
  {
    id: 25,
    title: "RESTful API Design",
    description: "Designing APIs that follow REST principles for scalability, maintainability, and interoperability.",
    category: "Architecture",
    difficulty: "Intermediate",
    details: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods to perform CRUD operations on resources, are stateless, cacheable, and follow a client-server architecture. Good RESTful design promotes scalability, maintainability, and interoperability.",
    examples: [
      "GitHub REST API for repository management",
      "Twitter API for social media operations",
      "Stripe API for payment processing",
      "AWS API Gateway for service integration",
      "Shopify API for e-commerce operations"
    ],
    tradeoffs: [
      "Simplicity vs Flexibility: REST is simple but may not fit all use cases",
      "Performance vs Standards: REST may not be optimal for all scenarios",
      "Caching vs Freshness: REST enables caching but may serve stale data",
      "Statelessness vs Context: Stateless design simplifies scaling but may require more requests"
    ],
    bestPractices: [
      "Use appropriate HTTP methods and status codes",
      "Design resource-oriented URLs",
      "Implement proper versioning strategies",
      "Use HATEOAS for discoverability",
      "Provide comprehensive documentation"
    ]
  },
  {
    id: 26,
    title: "GraphQL",
    description: "A query language and runtime for APIs that provides a complete description of the data and gives clients the power to ask for exactly what they need.",
    category: "Architecture",
    difficulty: "Intermediate",
    details: "GraphQL is a query language for APIs and a runtime for executing those queries against your data. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
    examples: [
      "GitHub GraphQL API for flexible data fetching",
      "Shopify GraphQL for e-commerce operations",
      "Apollo Server for GraphQL implementation",
      "GraphQL Federation for microservices",
      "Relay framework for React applications"
    ],
    tradeoffs: [
      "Flexibility vs Complexity: GraphQL provides flexibility but adds complexity",
      "Performance vs Over-fetching: GraphQL prevents over-fetching but may cause under-fetching",
      "Caching vs Real-time: GraphQL caching is more complex than REST",
      "Learning Curve vs Benefits: GraphQL has a steeper learning curve"
    ],
    bestPractices: [
      "Design a clear and intuitive schema",
      "Implement proper resolver functions",
      "Use DataLoader to prevent N+1 queries",
      "Implement proper error handling",
      "Consider schema federation for large systems"
    ]
  },
  {
    id: 27,
    title: "Service Mesh",
    description: "A dedicated infrastructure layer for handling service-to-service communication in microservices architectures.",
    category: "Infrastructure",
    difficulty: "Advanced",
    details: "A service mesh is a dedicated infrastructure layer that handles service-to-service communication in microservices architectures. It provides features like service discovery, load balancing, failure recovery, metrics, and monitoring. Service meshes typically use a sidecar proxy pattern to intercept and manage traffic between services.",
    examples: [
      "Istio service mesh for Kubernetes",
      "Linkerd for service mesh implementation",
      "Consul Connect for service networking",
      "AWS App Mesh for cloud-native applications",
      "Envoy proxy as the data plane"
    ],
    tradeoffs: [
      "Functionality vs Complexity: Service meshes provide powerful features but add complexity",
      "Performance vs Features: Additional proxy layer may impact performance",
      "Operational Overhead vs Benefits: Service meshes require operational expertise",
      "Vendor Lock-in vs Standardization: Some service meshes may create vendor lock-in"
    ],
    bestPractices: [
      "Start with basic traffic management features",
      "Implement proper security policies",
      "Monitor service mesh performance",
      "Use service mesh for observability",
      "Plan for service mesh upgrades and maintenance"
    ]
  },
  {
    id: 28,
    title: "Event Sourcing",
    description: "A pattern that stores all changes to application state as a sequence of events.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Event sourcing is a pattern that stores all changes to application state as a sequence of events. Instead of storing just the current state, the system stores every event that led to the current state. This allows for complete audit trails, temporal queries, and the ability to replay events to reconstruct any point in time.",
    examples: [
      "EventStore database for event sourcing",
      "Axon Framework for event-driven applications",
      "Apache Kafka for event streaming",
      "CQRS with event sourcing",
      "Domain-driven design with events"
    ],
    tradeoffs: [
      "Audit Trail vs Storage: Event sourcing provides complete audit trails but requires more storage",
      "Complexity vs Benefits: Event sourcing adds complexity but provides powerful features",
      "Performance vs History: Reconstructing state from events may be slower",
      "Learning Curve vs Flexibility: Event sourcing has a steep learning curve"
    ],
    bestPractices: [
      "Design events to be immutable and versioned",
      "Implement proper event schema evolution",
      "Use snapshots to improve performance",
      "Plan for event storage and retention",
      "Consider event sourcing for domains with complex business logic"
    ]
  },
  {
    id: 29,
    title: "Distributed Tracing",
    description: "A method of monitoring and profiling applications, especially those built using microservices architecture.",
    category: "Observability",
    difficulty: "Intermediate",
    details: "Distributed tracing is a method of monitoring and profiling applications, especially those built using microservices architecture. It helps developers understand how requests flow through their systems, identify performance bottlenecks, and debug issues across multiple services. Distributed tracing provides visibility into the entire request lifecycle.",
    examples: [
      "Jaeger for distributed tracing",
      "Zipkin for trace collection and analysis",
      "AWS X-Ray for cloud-native tracing",
      "OpenTelemetry for vendor-neutral tracing",
      "Jaeger with Kubernetes integration"
    ],
    tradeoffs: [
      "Visibility vs Overhead: Distributed tracing provides visibility but adds overhead",
      "Sampling vs Detail: Full tracing provides detail but impacts performance",
      "Storage vs Retention: More detailed traces require more storage",
      "Complexity vs Benefits: Distributed tracing adds complexity but provides valuable insights"
    ],
    bestPractices: [
      "Implement proper sampling strategies",
      "Use correlation IDs across services",
      "Monitor tracing overhead and performance impact",
      "Implement proper error handling in tracing",
      "Use tracing for performance optimization"
    ]
  },
  {
    id: 30,
    title: "Redis Data Structures",
    description: "Understanding and leveraging Redis's rich set of data structures for various use cases.",
    category: "Performance",
    difficulty: "Intermediate",
    details: "Redis provides a rich set of data structures including strings, lists, sets, sorted sets, hashes, and streams. Each data structure is optimized for specific use cases and provides different operations. Understanding these data structures is crucial for designing efficient caching and data storage solutions with Redis.",
    examples: [
      "Redis Strings for simple key-value storage",
      "Redis Lists for queues and stacks",
      "Redis Sets for unique collections",
      "Redis Sorted Sets for ranked data",
      "Redis Hashes for object storage",
      "Redis Streams for event streaming"
    ],
    tradeoffs: [
      "Memory Usage vs Performance: Different data structures have different memory overhead",
      "Complexity vs Functionality: More complex data structures provide more functionality",
      "Persistence vs Performance: Persistence options impact performance",
      "Network Overhead vs Operations: Some operations require multiple network round trips"
    ],
    bestPractices: [
      "Choose appropriate data structures for your use case",
      "Use Redis Cluster for high availability",
      "Implement proper key expiration strategies",
      "Monitor Redis memory usage and performance",
      "Use Redis for caching and session storage"
    ]
  },
  {
    id: 31,
    title: "Raft Consensus Algorithm",
    description: "A consensus algorithm designed to be easy to understand and implement for distributed systems.",
    category: "Theory",
    difficulty: "Advanced",
    details: "Raft is a consensus algorithm designed to be easy to understand and implement. It achieves consensus through leader election, log replication, and safety mechanisms. Raft is used in many distributed systems including etcd, Consul, and some distributed databases. It provides strong consistency guarantees while being more understandable than Paxos.",
    examples: [
      "Kubernetes etcd cluster",
      "Consul service mesh",
      "Distributed databases",
      "Configuration management systems",
      "Service discovery systems"
    ],
    tradeoffs: [
      "Simplicity vs Performance: Raft is simpler than Paxos but may have different performance characteristics",
      "Leader Dependency vs Availability: Raft requires a leader which can become a bottleneck",
      "Network Partitions vs Consistency: Raft handles network partitions but may have availability issues",
      "Complexity vs Features: Simpler than Paxos but may have fewer advanced features"
    ],
    bestPractices: [
      "Use odd number of nodes for leader election",
      "Configure appropriate timeouts for leader election",
      "Monitor leader election and log replication",
      "Handle network partitions gracefully",
      "Use Raft for systems requiring strong consistency"
    ]
  },
  {
    id: 32,
    title: "Time Series Databases",
    description: "Specialized databases designed for storing and querying time-series data efficiently.",
    category: "Databases",
    difficulty: "Advanced",
    details: "Time series databases are specialized for storing and querying time-series data. They optimize for time-based queries, provide efficient compression, and support aggregation operations. Time series databases are essential for monitoring, IoT, financial data, and any application requiring temporal data analysis.",
    examples: [
      "InfluxDB for monitoring data",
      "TimescaleDB for IoT data",
      "Prometheus for metrics",
      "OpenTSDB for time series",
      "IoT sensor data storage"
    ],
    tradeoffs: [
      "Specialization vs General Purpose: Optimized for time series but less flexible for other data",
      "Compression vs Query Performance: Better compression may impact query performance",
      "Storage vs Retention: Time series data can grow large requiring retention policies",
      "Real-time vs Batch: Balancing real-time ingestion with batch processing"
    ],
    bestPractices: [
      "Design appropriate retention policies",
      "Use efficient compression algorithms",
      "Implement proper indexing for time-based queries",
      "Consider downsampling for long-term storage",
      "Monitor storage growth and performance"
    ]
  },
  {
    id: 33,
    title: "Machine Learning Infrastructure",
    description: "Infrastructure and tools for building, deploying, and managing machine learning models at scale.",
    category: "Infrastructure",
    difficulty: "Advanced",
    details: "Machine learning infrastructure encompasses the tools, platforms, and processes needed to build, deploy, and manage ML models at scale. This includes data pipelines, model training infrastructure, model serving, monitoring, and the entire ML lifecycle from development to production.",
    examples: [
      "Kubeflow for ML workflows",
      "MLflow for experiment tracking",
      "TensorFlow Serving for model serving",
      "Feature stores for feature management",
      "Model monitoring and A/B testing"
    ],
    tradeoffs: [
      "Complexity vs Functionality: ML infrastructure is complex but provides powerful capabilities",
      "Cost vs Performance: ML infrastructure can be expensive but enables advanced analytics",
      "Flexibility vs Standardization: More flexible systems may be harder to standardize",
      "Development vs Production: Different requirements for development and production environments"
    ],
    bestPractices: [
      "Implement proper model versioning",
      "Use feature stores for feature management",
      "Monitor model performance and drift",
      "Implement A/B testing for model deployment",
      "Design for reproducibility and experimentation"
    ]
  },
  {
    id: 34,
    title: "Stream Processing",
    description: "Processing data streams in real-time for analytics, monitoring, and event-driven applications.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Stream processing involves analyzing and processing data streams in real-time. It enables real-time analytics, event-driven architectures, and continuous data processing. Stream processing systems handle high-throughput, low-latency data processing with fault tolerance and exactly-once semantics.",
    examples: [
      "Apache Kafka Streams for real-time processing",
      "Apache Flink for stream analytics",
      "Apache Storm for real-time computation",
      "Spark Streaming for batch and stream processing",
      "Real-time analytics and monitoring"
    ],
    tradeoffs: [
      "Latency vs Throughput: Lower latency may reduce throughput",
      "Complexity vs Performance: More complex processing may impact performance",
      "State Management vs Scalability: Stateful processing adds complexity but enables advanced features",
      "Exactly Once vs Performance: Exactly-once semantics may impact performance"
    ],
    bestPractices: [
      "Design for fault tolerance and recovery",
      "Implement proper state management",
      "Use appropriate windowing strategies",
      "Monitor processing latency and throughput",
      "Design for backpressure handling"
    ]
  },
  {
    id: 35,
    title: "Blockchain Technology",
    description: "Distributed ledger technology that enables secure, transparent, and tamper-proof record keeping.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof record keeping. It uses cryptographic techniques and consensus mechanisms to ensure data integrity and trust without requiring a central authority. Blockchain has applications in finance, supply chain, identity management, and more.",
    examples: [
      "Bitcoin cryptocurrency network",
      "Ethereum smart contract platform",
      "Hyperledger Fabric for enterprise",
      "Supply chain tracking systems",
      "Decentralized identity management"
    ],
    tradeoffs: [
      "Decentralization vs Performance: Decentralization may impact performance",
      "Security vs Scalability: Higher security may reduce scalability",
      "Transparency vs Privacy: Public blockchains are transparent but may lack privacy",
      "Consensus vs Speed: Consensus mechanisms may slow down transactions"
    ],
    bestPractices: [
      "Choose appropriate consensus mechanisms",
      "Implement proper security measures",
      "Design for scalability and performance",
      "Consider privacy requirements",
      "Plan for governance and upgrades"
    ]
  },
  {
    id: 36,
    title: "Edge Computing",
    description: "Computing infrastructure that processes data closer to the source, reducing latency and bandwidth usage.",
    category: "Infrastructure",
    difficulty: "Advanced",
    details: "Edge computing brings computation and data storage closer to the source of data generation. This reduces latency, bandwidth usage, and improves real-time processing capabilities. Edge computing is essential for IoT, mobile applications, and scenarios requiring low-latency processing.",
    examples: [
      "AWS Greengrass for IoT edge computing",
      "Azure IoT Edge for edge processing",
      "Mobile edge computing",
      "Industrial IoT systems",
      "Smart city infrastructure"
    ],
    tradeoffs: [
      "Latency vs Complexity: Lower latency but more complex infrastructure",
      "Local vs Centralized: Local processing vs centralized management",
      "Security vs Performance: Edge security may impact performance",
      "Cost vs Capability: Edge devices may have limited capabilities"
    ],
    bestPractices: [
      "Design for edge device constraints",
      "Implement proper security measures",
      "Use efficient data synchronization",
      "Plan for offline operation",
      "Monitor edge device health and performance"
    ]
  },
  {
    id: 37,
    title: "Multi-Cloud Strategy",
    description: "Using multiple cloud providers to avoid vendor lock-in and optimize costs and capabilities.",
    category: "Infrastructure",
    difficulty: "Advanced",
    details: "Multi-cloud strategy involves using multiple cloud providers to avoid vendor lock-in, optimize costs, and leverage the best capabilities from each provider. This approach provides flexibility, redundancy, and cost optimization but adds complexity to infrastructure management.",
    examples: [
      "Kubernetes multi-cloud deployments",
      "Terraform multi-cloud infrastructure",
      "Cloud-native applications",
      "Hybrid cloud solutions",
      "Multi-region deployments"
    ],
    tradeoffs: [
      "Flexibility vs Complexity: More flexibility but increased complexity",
      "Cost vs Management: Potential cost savings vs management overhead",
      "Vendor Lock-in vs Standardization: Avoiding lock-in vs standardization challenges",
      "Performance vs Portability: Optimized performance vs portability"
    ],
    bestPractices: [
      "Use cloud-native tools and standards",
      "Implement proper cost monitoring",
      "Design for portability",
      "Plan for data sovereignty requirements",
      "Use infrastructure as code for consistency"
    ]
  },
  {
    id: 38,
    title: "Data Mesh",
    description: "A decentralized approach to data architecture that treats data as a product.",
    category: "Architecture",
    difficulty: "Advanced",
    details: "Data mesh is a decentralized approach to data architecture that treats data as a product. It emphasizes domain-oriented data ownership, self-serve data platforms, and federated governance. Data mesh enables organizations to scale data capabilities while maintaining data quality and governance.",
    examples: [
      "Netflix data mesh implementation",
      "Uber data platform",
      "Spotify data mesh",
      "Enterprise data platforms",
      "Self-serve analytics platforms"
    ],
    tradeoffs: [
      "Decentralization vs Consistency: Decentralized ownership vs data consistency",
      "Autonomy vs Governance: Team autonomy vs centralized governance",
      "Complexity vs Scalability: More complex but better scalability",
      "Learning Curve vs Benefits: Steep learning curve but significant benefits"
    ],
    bestPractices: [
      "Start with domain-oriented data ownership",
      "Build self-serve data platforms",
      "Implement federated governance",
      "Focus on data product design",
      "Enable data observability"
    ]
  },
  {
    id: 39,
    title: "Chaos Engineering",
    description: "Proactively testing system resilience by intentionally injecting failures in production environments.",
    category: "Reliability",
    difficulty: "Advanced",
    details: "Chaos engineering is the practice of proactively testing system resilience by intentionally injecting failures in production environments. This helps identify weaknesses, improve system reliability, and build confidence in system behavior under failure conditions.",
    examples: [
      "Netflix Chaos Monkey for random instance termination",
      "Gremlin for controlled chaos experiments",
      "Chaos Mesh for Kubernetes",
      "Production failure testing",
      "Resilience validation"
    ],
    tradeoffs: [
      "Risk vs Learning: Controlled risk vs valuable learning",
      "Disruption vs Confidence: Potential disruption vs increased confidence",
      "Complexity vs Benefits: Complex setup vs significant reliability improvements",
      "Cost vs Value: Implementation cost vs reliability value"
    ],
    bestPractices: [
      "Start with non-critical systems",
      "Use controlled, small-scale experiments",
      "Monitor and measure impact",
      "Have rollback plans ready",
      "Document and learn from experiments"
    ]
  },
  {
    id: 40,
    title: "Zero Trust Security",
    description: "Security model that assumes no trust and requires verification for every access request.",
    category: "Security",
    difficulty: "Advanced",
    details: "Zero trust security is a security model that assumes no trust and requires verification for every access request. It emphasizes identity verification, least privilege access, and continuous monitoring. Zero trust is essential for modern distributed systems and cloud-native applications.",
    examples: [
      "Google BeyondCorp zero trust implementation",
      "AWS zero trust architecture",
      "Azure zero trust framework",
      "Identity and access management",
      "Network segmentation"
    ],
    tradeoffs: [
      "Security vs Usability: Higher security may impact user experience",
      "Complexity vs Protection: More complex but better protection",
      "Cost vs Risk: Higher implementation cost vs reduced risk",
      "Performance vs Security: Security checks may impact performance"
    ],
    bestPractices: [
      "Implement strong identity verification",
      "Use least privilege access principles",
      "Enable continuous monitoring",
      "Segment networks and resources",
      "Implement proper access controls"
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
