export interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  topics: string[];
  concepts: string[];
  examples: string[];
  resources: string[];
}

export const studyMaterials: StudyMaterial[] = [
  {
    id: 1,
    title: "Load Balancing Fundamentals",
    description: "Learn the core principles and techniques of load balancing in distributed systems.",
    category: "Scalability",
    difficulty: "Beginner",
    duration: "30 min",
    topics: [
      "Load Balancer Types (Application, Network, Global)",
      "Load Balancing Algorithms",
      "Health Checks and Failover",
      "Session Persistence",
      "SSL Termination",
      "Geographic Distribution"
    ],
    concepts: [
      "Round Robin",
      "Least Connections",
      "IP Hash",
      "Weighted Round Robin",
      "Consistent Hashing",
      "Health Monitoring"
    ],
    examples: [
      "AWS Application Load Balancer",
      "NGINX Load Balancer",
      "HAProxy Configuration",
      "CDN Load Balancing",
      "Database Read Replicas"
    ],
    resources: [
      "AWS Load Balancing Documentation",
      "NGINX Load Balancing Guide",
      "HAProxy Configuration Manual",
      "System Design Interview Book"
    ]
  },
  {
    id: 2,
    title: "Database Replication Strategies",
    description: "Master different database replication techniques for high availability and performance.",
    category: "Databases",
    difficulty: "Intermediate",
    duration: "45 min",
    topics: [
      "Master-Slave Replication",
      "Master-Master Replication",
      "Multi-Region Replication",
      "Read Replicas",
      "Replication Lag",
      "Conflict Resolution"
    ],
    concepts: [
      "Synchronous vs Asynchronous Replication",
      "Eventual Consistency",
      "Write-Ahead Logging",
      "Binlog Replication",
      "Conflict Detection",
      "Failover Strategies"
    ],
    examples: [
      "MySQL Master-Slave Setup",
      "PostgreSQL Streaming Replication",
      "MongoDB Replica Sets",
      "Redis Sentinel",
      "Amazon RDS Multi-AZ"
    ],
    resources: [
      "MySQL Replication Guide",
      "PostgreSQL Documentation",
      "MongoDB Replication Tutorial",
      "Redis Sentinel Documentation"
    ]
  },
  {
    id: 3,
    title: "Caching Strategies and Patterns",
    description: "Explore various caching strategies to improve system performance and reduce latency.",
    category: "Performance",
    difficulty: "Intermediate",
    duration: "40 min",
    topics: [
      "Cache-Aside Pattern",
      "Write-Through Caching",
      "Write-Behind Caching",
      "Cache-Through Pattern",
      "Cache Invalidation",
      "Distributed Caching"
    ],
    concepts: [
      "Cache Hit Ratio",
      "TTL (Time To Live)",
      "Cache Warming",
      "Cache Penetration",
      "Cache Avalanche",
      "Cache Coherence"
    ],
    examples: [
      "Redis Cache Implementation",
      "Memcached Setup",
      "CDN Caching",
      "Browser Caching",
      "Application-Level Caching"
    ],
    resources: [
      "Redis Documentation",
      "Memcached Wiki",
      "CDN Best Practices",
      "Caching Patterns Book"
    ]
  },
  {
    id: 4,
    title: "Content Delivery Networks (CDN)",
    description: "Understand how CDNs work to deliver content globally with low latency.",
    category: "Performance",
    difficulty: "Beginner",
    duration: "35 min",
    topics: [
      "CDN Architecture",
      "Edge Servers",
      "Origin Servers",
      "Cache Policies",
      "Geographic Distribution",
      "DDoS Protection"
    ],
    concepts: [
      "Edge Computing",
      "Cache Hit/Miss",
      "Origin Pull",
      "Push vs Pull CDN",
      "Geographic Routing",
      "SSL/TLS Termination"
    ],
    examples: [
      "Cloudflare CDN",
      "AWS CloudFront",
      "Akamai CDN",
      "Google Cloud CDN",
      "Azure CDN"
    ],
    resources: [
      "Cloudflare Documentation",
      "AWS CloudFront Guide",
      "CDN Architecture Patterns",
      "Web Performance Book"
    ]
  },
  {
    id: 5,
    title: "Stateless vs Stateful Services",
    description: "Learn the differences between stateless and stateful services and when to use each.",
    category: "Architecture",
    difficulty: "Beginner",
    duration: "25 min",
    topics: [
      "Stateless Service Design",
      "Stateful Service Patterns",
      "Session Management",
      "State Storage",
      "Horizontal Scaling",
      "Fault Tolerance"
    ],
    concepts: [
      "RESTful APIs",
      "JWT Tokens",
      "Session Stores",
      "Stateful Containers",
      "Stateless Containers",
      "Service Discovery"
    ],
    examples: [
      "Microservices Architecture",
      "Kubernetes StatefulSets",
      "Docker Stateless Containers",
      "JWT Authentication",
      "Redis Session Store"
    ],
    resources: [
      "Microservices Patterns Book",
      "Kubernetes Documentation",
      "Docker Best Practices",
      "JWT.io Documentation"
    ]
  },
  {
    id: 6,
    title: "Data Center Design and Redundancy",
    description: "Explore data center architecture and redundancy strategies for high availability.",
    category: "Infrastructure",
    difficulty: "Advanced",
    duration: "50 min",
    topics: [
      "Data Center Architecture",
      "Power Redundancy",
      "Network Redundancy",
      "Storage Redundancy",
      "Disaster Recovery",
      "Multi-DC Deployment"
    ],
    concepts: [
      "N+1 Redundancy",
      "2N Redundancy",
      "Active-Active",
      "Active-Passive",
      "Geographic Distribution",
      "RTO/RPO"
    ],
    examples: [
      "AWS Multi-AZ Deployment",
      "Google Cloud Regions",
      "Azure Availability Zones",
      "On-Premise Data Centers",
      "Hybrid Cloud Setup"
    ],
    resources: [
      "AWS Well-Architected Framework",
      "Data Center Design Guide",
      "Disaster Recovery Planning",
      "High Availability Patterns"
    ]
  },
  {
    id: 7,
    title: "Message Queues and Event-Driven Architecture",
    description: "Master message queuing systems and event-driven architecture patterns.",
    category: "Messaging",
    difficulty: "Intermediate",
    duration: "45 min",
    topics: [
      "Message Queue Types",
      "Producer-Consumer Pattern",
      "Event Sourcing",
      "CQRS Pattern",
      "Event Streaming",
      "Dead Letter Queues"
    ],
    concepts: [
      "Asynchronous Processing",
      "Event Ordering",
      "Message Persistence",
      "Queue Monitoring",
      "Backpressure Handling",
      "Event Schema Evolution"
    ],
    examples: [
      "Apache Kafka",
      "RabbitMQ",
      "Amazon SQS",
      "Apache Pulsar",
      "Redis Streams"
    ],
    resources: [
      "Kafka Documentation",
      "RabbitMQ Tutorial",
      "Event Sourcing Book",
      "CQRS Patterns Guide"
    ]
  },
  {
    id: 8,
    title: "Database Sharding Strategies",
    description: "Learn horizontal partitioning techniques to scale databases across multiple servers.",
    category: "Databases",
    difficulty: "Advanced",
    duration: "55 min",
    topics: [
      "Horizontal vs Vertical Sharding",
      "Sharding Strategies",
      "Shard Key Selection",
      "Cross-Shard Queries",
      "Shard Rebalancing",
      "Shard Failure Handling"
    ],
    concepts: [
      "Hash-Based Sharding",
      "Range-Based Sharding",
      "Directory-Based Sharding",
      "Consistent Hashing",
      "Shard Mapping",
      "Distributed Transactions"
    ],
    examples: [
      "MongoDB Sharding",
      "MySQL Sharding",
      "PostgreSQL Partitioning",
      "Cassandra Partitioning",
      "DynamoDB Partitioning"
    ],
    resources: [
      "MongoDB Sharding Guide",
      "Database Sharding Book",
      "Distributed Systems Book",
      "Sharding Best Practices"
    ]
  },
  {
    id: 9,
    title: "Back-of-the-Envelope Estimation",
    description: "Master the art of quick system capacity and performance estimation.",
    category: "Estimation",
    difficulty: "Beginner",
    duration: "30 min",
    topics: [
      "Capacity Planning",
      "Performance Estimation",
      "Resource Calculation",
      "Latency Estimation",
      "Throughput Calculation",
      "Storage Estimation"
    ],
    concepts: [
      "Orders of Magnitude",
      "Latency Numbers",
      "Storage Calculations",
      "Network Bandwidth",
      "CPU Utilization",
      "Memory Usage"
    ],
    examples: [
      "Social Media Platform",
      "E-commerce Website",
      "Video Streaming Service",
      "Chat Application",
      "Search Engine"
    ],
    resources: [
      "System Design Interview Book",
      "Capacity Planning Guide",
      "Performance Engineering",
      "Estimation Techniques"
    ]
  },
  {
    id: 10,
    title: "CAP Theorem and Consistency Models",
    description: "Understand the fundamental trade-offs in distributed systems design.",
    category: "Theory",
    difficulty: "Intermediate",
    duration: "40 min",
    topics: [
      "CAP Theorem Explained",
      "Consistency Models",
      "Availability vs Consistency",
      "Partition Tolerance",
      "Eventual Consistency",
      "Strong Consistency"
    ],
    concepts: [
      "ACID Properties",
      "BASE Properties",
      "Linearizability",
      "Sequential Consistency",
      "Causal Consistency",
      "Read-Your-Writes"
    ],
    examples: [
      "DynamoDB Consistency",
      "Cassandra Consistency Levels",
      "MongoDB Consistency",
      "Redis Consistency",
      "PostgreSQL ACID"
    ],
    resources: [
      "CAP Theorem Paper",
      "Distributed Systems Book",
      "Consistency Models Guide",
      "Database Consistency"
    ]
  },
  {
    id: 11,
    title: "Consistent Hashing",
    description: "Learn how consistent hashing enables scalable distributed systems.",
    category: "Algorithms",
    difficulty: "Intermediate",
    duration: "35 min",
    topics: [
      "Hash Ring Concept",
      "Virtual Nodes",
      "Load Balancing",
      "Node Addition/Removal",
      "Data Distribution",
      "Replication Strategy"
    ],
    concepts: [
      "Hash Function Properties",
      "Ring Distribution",
      "Virtual Node Mapping",
      "Data Migration",
      "Load Skew",
      "Replication Factor"
    ],
    examples: [
      "DynamoDB Partitioning",
      "Cassandra Token Ring",
      "Redis Cluster",
      "Memcached Distribution",
      "Load Balancer Hashing"
    ],
    resources: [
      "Consistent Hashing Paper",
      "Dynamo Paper",
      "Distributed Hashing Guide",
      "System Design Patterns"
    ]
  },
  {
    id: 12,
    title: "Rate Limiting and Throttling",
    description: "Implement effective rate limiting strategies to protect your systems.",
    category: "Security",
    difficulty: "Intermediate",
    duration: "40 min",
    topics: [
      "Rate Limiting Algorithms",
      "Token Bucket Algorithm",
      "Leaky Bucket Algorithm",
      "Fixed Window Counter",
      "Sliding Window Counter",
      "Distributed Rate Limiting"
    ],
    concepts: [
      "Rate Limiting Headers",
      "Throttling vs Blocking",
      "Rate Limit Bypass",
      "Rate Limit Monitoring",
      "Rate Limit Configuration",
      "Rate Limit Testing"
    ],
    examples: [
      "API Rate Limiting",
      "User Authentication",
      "DDoS Protection",
      "Payment Processing",
      "Email Sending"
    ],
    resources: [
      "Rate Limiting Best Practices",
      "API Design Book",
      "Security Patterns",
      "Rate Limiting Algorithms"
    ]
  },
  {
    id: 13,
    title: "Key-Value Stores and NoSQL",
    description: "Explore NoSQL databases and key-value store architectures.",
    category: "Databases",
    difficulty: "Intermediate",
    duration: "45 min",
    topics: [
      "NoSQL Database Types",
      "Key-Value Stores",
      "Document Stores",
      "Column-Family Stores",
      "Graph Databases",
      "NoSQL vs SQL"
    ],
    concepts: [
      "Schema Flexibility",
      "Horizontal Scaling",
      "Eventual Consistency",
      "ACID vs BASE",
      "Query Patterns",
      "Data Modeling"
    ],
    examples: [
      "Redis Key-Value Store",
      "MongoDB Document Store",
      "Cassandra Column Store",
      "Neo4j Graph Database",
      "DynamoDB"
    ],
    resources: [
      "NoSQL Distilled Book",
      "Redis Documentation",
      "MongoDB Guide",
      "Cassandra Documentation"
    ]
  },
  {
    id: 14,
    title: "Unique ID Generation",
    description: "Learn various strategies for generating unique identifiers in distributed systems.",
    category: "Algorithms",
    difficulty: "Intermediate",
    duration: "35 min",
    topics: [
      "UUID Generation",
      "Snowflake Algorithm",
      "ULID Generation",
      "Database Sequences",
      "Distributed ID Generation",
      "ID Collision Prevention"
    ],
    concepts: [
      "Monotonic IDs",
      "Sortable IDs",
      "Time-Based IDs",
      "Machine ID",
      "Sequence Numbers",
      "Clock Drift"
    ],
    examples: [
      "Twitter Snowflake",
      "MongoDB ObjectId",
      "UUID v4",
      "ULID Implementation",
      "Database Auto-Increment"
    ],
    resources: [
      "Snowflake Paper",
      "UUID RFC",
      "ULID Specification",
      "Distributed ID Generation"
    ]
  },
  {
    id: 15,
    title: "Distributed Caching Strategies",
    description: "Implement distributed caching to improve system performance and scalability.",
    category: "Performance",
    difficulty: "Advanced",
    duration: "50 min",
    topics: [
      "Distributed Cache Architecture",
      "Cache Coherence",
      "Cache Invalidation",
      "Cache Warming",
      "Cache Partitioning",
      "Cache Monitoring"
    ],
    concepts: [
      "Cache-Aside Pattern",
      "Write-Through Caching",
      "Write-Behind Caching",
      "Cache-Through Pattern",
      "Cache Penetration",
      "Cache Avalanche"
    ],
    examples: [
      "Redis Cluster",
      "Memcached Cluster",
      "Hazelcast",
      "Apache Ignite",
      "Infinispan"
    ],
    resources: [
      "Redis Cluster Guide",
      "Distributed Caching Book",
      "Cache Patterns",
      "Performance Tuning"
    ]
  },
  {
    id: 16,
    title: "Microservices Architecture",
    description: "Design and implement scalable microservices architectures.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "60 min",
    topics: [
      "Service Decomposition",
      "API Gateway Pattern",
      "Service Discovery",
      "Circuit Breaker Pattern",
      "Distributed Tracing",
      "Service Mesh"
    ],
    concepts: [
      "Bounded Context",
      "Domain-Driven Design",
      "Event-Driven Architecture",
      "CQRS Pattern",
      "Saga Pattern",
      "API Versioning"
    ],
    examples: [
      "Netflix Microservices",
      "Uber Microservices",
      "Amazon Microservices",
      "Kubernetes Services",
      "Docker Compose"
    ],
    resources: [
      "Microservices Patterns Book",
      "Domain-Driven Design Book",
      "Kubernetes Documentation",
      "Service Mesh Guide"
    ]
  },
  {
    id: 17,
    title: "Event-Driven Architecture",
    description: "Build loosely coupled systems using event-driven architecture patterns.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "55 min",
    topics: [
      "Event Sourcing",
      "Event Streaming",
      "Event Store",
      "Event Replay",
      "Event Versioning",
      "Event Schema Evolution"
    ],
    concepts: [
      "Event Ordering",
      "Event Persistence",
      "Event Routing",
      "Event Filtering",
      "Event Transformation",
      "Event Monitoring"
    ],
    examples: [
      "Apache Kafka",
      "EventStore",
      "Amazon Kinesis",
      "Apache Pulsar",
      "Confluent Platform"
    ],
    resources: [
      "Event Sourcing Book",
      "Kafka Documentation",
      "Event-Driven Architecture Guide",
      "Stream Processing"
    ]
  },
  {
    id: 18,
    title: "Circuit Breaker Pattern",
    description: "Implement fault tolerance using the circuit breaker pattern.",
    category: "Reliability",
    difficulty: "Intermediate",
    duration: "35 min",
    topics: [
      "Circuit Breaker States",
      "Failure Detection",
      "Recovery Strategies",
      "Fallback Mechanisms",
      "Monitoring and Alerting",
      "Circuit Breaker Configuration"
    ],
    concepts: [
      "Open State",
      "Closed State",
      "Half-Open State",
      "Failure Threshold",
      "Recovery Timeout",
      "Success Threshold"
    ],
    examples: [
      "Netflix Hystrix",
      "Resilience4j",
      "Polly Circuit Breaker",
      "Go Circuit Breaker",
      "Custom Implementation"
    ],
    resources: [
      "Circuit Breaker Pattern",
      "Hystrix Documentation",
      "Fault Tolerance Patterns",
      "Resilience Engineering"
    ]
  },
  {
    id: 19,
    title: "Search Engine Architecture",
    description: "Design scalable search engines with advanced indexing and ranking algorithms.",
    category: "Search",
    difficulty: "Advanced",
    duration: "65 min",
    topics: [
      "Inverted Index",
      "Document Processing",
      "Query Processing",
      "Ranking Algorithms",
      "Faceted Search",
      "Autocomplete"
    ],
    concepts: [
      "TF-IDF Scoring",
      "BM25 Algorithm",
      "Vector Search",
      "Semantic Search",
      "Fuzzy Matching",
      "Search Relevance"
    ],
    examples: [
      "Elasticsearch",
      "Apache Solr",
      "Algolia",
      "Google Search",
      "Amazon Product Search"
    ],
    resources: [
      "Elasticsearch Guide",
      "Information Retrieval Book",
      "Search Engine Architecture",
      "Lucene Documentation"
    ]
  },
  {
    id: 20,
    title: "Social Media Feed Design",
    description: "Build scalable social media feeds with real-time updates and personalization.",
    category: "Social",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "Feed Generation",
      "Real-Time Updates",
      "Personalization",
      "Content Ranking",
      "Feed Aggregation",
      "Push Notifications"
    ],
    concepts: [
      "Fan-Out Pattern",
      "Pull vs Push Model",
      "Content Filtering",
      "Engagement Metrics",
      "Feed Optimization",
      "Content Moderation"
    ],
    examples: [
      "Facebook News Feed",
      "Twitter Timeline",
      "Instagram Feed",
      "LinkedIn Feed",
      "TikTok For You Page"
    ],
    resources: [
      "Social Media Architecture",
      "Feed Design Patterns",
      "Real-Time Systems",
      "Personalization Algorithms"
    ]
  },
  {
    id: 21,
    title: "Video Streaming Architecture",
    description: "Design scalable video streaming platforms with adaptive bitrate streaming.",
    category: "Media",
    difficulty: "Advanced",
    duration: "75 min",
    topics: [
      "Video Encoding",
      "Adaptive Bitrate Streaming",
      "CDN Integration",
      "Live Streaming",
      "Video Processing",
      "Content Delivery"
    ],
    concepts: [
      "HLS Protocol",
      "DASH Protocol",
      "Video Compression",
      "Bandwidth Adaptation",
      "Latency Optimization",
      "Quality of Service"
    ],
    examples: [
      "Netflix Streaming",
      "YouTube",
      "Twitch Live Streaming",
      "Vimeo",
      "Disney+"
    ],
    resources: [
      "Video Streaming Guide",
      "HLS Specification",
      "DASH Standard",
      "CDN Best Practices"
    ]
  },
  {
    id: 22,
    title: "E-commerce Platform Design",
    description: "Build scalable e-commerce platforms with inventory management and payment processing.",
    category: "E-commerce",
    difficulty: "Advanced",
    duration: "80 min",
    topics: [
      "Product Catalog",
      "Inventory Management",
      "Shopping Cart",
      "Payment Processing",
      "Order Management",
      "Recommendation Engine"
    ],
    concepts: [
      "Inventory Reservation",
      "Payment Gateway Integration",
      "Order Fulfillment",
      "Product Search",
      "Price Optimization",
      "Fraud Detection"
    ],
    examples: [
      "Amazon E-commerce",
      "Shopify Platform",
      "WooCommerce",
      "Magento",
      "Stripe Payment"
    ],
    resources: [
      "E-commerce Architecture",
      "Payment Processing Guide",
      "Inventory Management",
      "Recommendation Systems"
    ]
  },
  {
    id: 23,
    title: "Real-Time Chat System",
    description: "Design real-time chat applications with message delivery and presence indicators.",
    category: "Communication",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "WebSocket Implementation",
      "Message Delivery",
      "Presence Management",
      "Message Persistence",
      "Group Chat",
      "File Sharing"
    ],
    concepts: [
      "Real-Time Communication",
      "Message Ordering",
      "Offline Message Handling",
      "Read Receipts",
      "Typing Indicators",
      "Message Encryption"
    ],
    examples: [
      "Slack",
      "Discord",
      "WhatsApp Web",
      "Telegram",
      "Microsoft Teams"
    ],
    resources: [
      "WebSocket Guide",
      "Real-Time Communication",
      "Chat System Design",
      "Message Queue Patterns"
    ]
  },
  {
    id: 24,
    title: "URL Shortener Service",
    description: "Build a scalable URL shortening service with analytics and redirect handling.",
    category: "Web Services",
    difficulty: "Intermediate",
    duration: "45 min",
    topics: [
      "URL Generation",
      "Redirect Handling",
      "Analytics Tracking",
      "Rate Limiting",
      "Custom Domains",
      "Link Expiration"
    ],
    concepts: [
      "Hash Functions",
      "Base62 Encoding",
      "Redirect Chains",
      "Click Tracking",
      "Geographic Analytics",
      "Link Validation"
    ],
    examples: [
      "Bitly",
      "TinyURL",
      "Google URL Shortener",
      "Custom Implementation",
      "Analytics Dashboard"
    ],
    resources: [
      "URL Shortener Design",
      "Hash Functions Guide",
      "Analytics Implementation",
      "Web Service Architecture"
    ]
  },
  {
    id: 25,
    title: "Distributed File Storage",
    description: "Design scalable distributed file storage systems with replication and fault tolerance.",
    category: "Storage",
    difficulty: "Advanced",
    duration: "60 min",
    topics: [
      "File Storage Architecture",
      "Data Replication",
      "Fault Tolerance",
      "Load Balancing",
      "Metadata Management",
      "Access Control"
    ],
    concepts: [
      "Distributed File Systems",
      "Block Storage",
      "Object Storage",
      "File Deduplication",
      "Compression Algorithms",
      "Encryption at Rest"
    ],
    examples: [
      "Google File System",
      "Hadoop HDFS",
      "Amazon S3",
      "Google Cloud Storage",
      "Azure Blob Storage"
    ],
    resources: [
      "GFS Paper",
      "HDFS Documentation",
      "Object Storage Guide",
      "Distributed Systems Book"
    ]
  },
  {
    id: 26,
    title: "ACID Properties and Database Transactions",
    description: "Master the fundamental ACID properties that ensure data integrity and consistency in database systems.",
    category: "Databases",
    difficulty: "Intermediate",
    duration: "50 min",
    topics: [
      "Atomicity - All or Nothing Operations",
      "Consistency - Data Integrity Rules",
      "Isolation - Concurrent Transaction Handling",
      "Durability - Permanent Data Storage",
      "Transaction Management",
      "Concurrency Control"
    ],
    concepts: [
      "ACID Compliance",
      "Two-Phase Commit Protocol",
      "Serializable Isolation",
      "Read Committed",
      "Read Uncommitted",
      "Repeatable Read"
    ],
    examples: [
      "PostgreSQL ACID Implementation",
      "MySQL InnoDB Engine",
      "Oracle Database Transactions",
      "SQL Server Transaction Logs",
      "Distributed ACID Systems"
    ],
    resources: [
      "Database System Concepts Book",
      "ACID Properties Guide",
      "Transaction Management Tutorial",
      "Concurrency Control Patterns"
    ]
  },
  {
    id: 27,
    title: "Distributed Transactions and Saga Pattern",
    description: "Learn how to handle transactions across multiple services and databases in distributed systems.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "65 min",
    topics: [
      "Distributed Transaction Challenges",
      "Saga Pattern Implementation",
      "Choreography vs Orchestration",
      "Compensation Actions",
      "Event Sourcing Integration",
      "CQRS with Sagas"
    ],
    concepts: [
      "Saga Pattern",
      "Compensation Logic",
      "Event-Driven Sagas",
      "Orchestration Pattern",
      "Choreography Pattern",
      "Distributed Consistency"
    ],
    examples: [
      "E-commerce Order Processing",
      "Banking Money Transfers",
      "Travel Booking Systems",
      "Inventory Management",
      "Payment Processing Flows"
    ],
    resources: [
      "Saga Pattern Paper",
      "Distributed Transactions Guide",
      "Event Sourcing Book",
      "Microservices Patterns"
    ]
  },
  {
    id: 28,
    title: "Database Indexing and Query Optimization",
    description: "Optimize database performance through effective indexing strategies and query optimization techniques.",
    category: "Performance",
    difficulty: "Intermediate",
    duration: "55 min",
    topics: [
      "B-Tree Indexes",
      "Hash Indexes",
      "Composite Indexes",
      "Covering Indexes",
      "Query Execution Plans",
      "Index Maintenance"
    ],
    concepts: [
      "Index Selectivity",
      "Index Cardinality",
      "Query Optimization",
      "Execution Plan Analysis",
      "Index Fragmentation",
      "Statistics Management"
    ],
    examples: [
      "MySQL Index Optimization",
      "PostgreSQL Query Planner",
      "MongoDB Index Strategies",
      "Oracle Database Tuning",
      "SQL Server Index Design"
    ],
    resources: [
      "Database Performance Tuning",
      "Index Design Patterns",
      "Query Optimization Guide",
      "Database Internals Book"
    ]
  },
  {
    id: 29,
    title: "API Design and RESTful Architecture",
    description: "Design scalable and maintainable APIs following REST principles and best practices.",
    category: "Architecture",
    difficulty: "Intermediate",
    duration: "45 min",
    topics: [
      "REST Principles",
      "HTTP Methods and Status Codes",
      "API Versioning Strategies",
      "Authentication and Authorization",
      "Rate Limiting",
      "API Documentation"
    ],
    concepts: [
      "RESTful Design",
      "HATEOAS",
      "API Gateway Pattern",
      "OAuth 2.0",
      "JWT Tokens",
      "OpenAPI Specification"
    ],
    examples: [
      "GitHub REST API",
      "Twitter API",
      "Stripe Payment API",
      "AWS API Gateway",
      "Swagger Documentation"
    ],
    resources: [
      "REST API Design Guide",
      "API Design Patterns",
      "OAuth 2.0 Specification",
      "OpenAPI Documentation"
    ]
  },
  {
    id: 30,
    title: "GraphQL and Modern API Design",
    description: "Explore GraphQL as an alternative to REST APIs for flexible and efficient data fetching.",
    category: "Architecture",
    difficulty: "Intermediate",
    duration: "50 min",
    topics: [
      "GraphQL Schema Design",
      "Resolvers and Data Fetching",
      "Query and Mutation Types",
      "Subscriptions",
      "Schema Stitching",
      "Performance Optimization"
    ],
    concepts: [
      "GraphQL Schema",
      "Resolver Functions",
      "N+1 Query Problem",
      "DataLoader Pattern",
      "Schema Federation",
      "GraphQL Caching"
    ],
    examples: [
      "GitHub GraphQL API",
      "Shopify GraphQL",
      "Apollo Server",
      "GraphQL Federation",
      "Relay Framework"
    ],
    resources: [
      "GraphQL Official Documentation",
      "Apollo GraphQL Platform",
      "GraphQL Best Practices",
      "Schema Design Guide"
    ]
  },
  {
    id: 31,
    title: "Service Mesh and Istio",
    description: "Implement service-to-service communication, security, and observability using service mesh architecture.",
    category: "Infrastructure",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "Service Mesh Architecture",
      "Istio Components",
      "Traffic Management",
      "Security Policies",
      "Observability",
      "Performance Optimization"
    ],
    concepts: [
      "Sidecar Pattern",
      "Envoy Proxy",
      "Traffic Splitting",
      "Circuit Breaking",
      "Distributed Tracing",
      "mTLS Encryption"
    ],
    examples: [
      "Istio Service Mesh",
      "Linkerd",
      "Consul Connect",
      "Kubernetes Integration",
      "Multi-cluster Mesh"
    ],
    resources: [
      "Istio Documentation",
      "Service Mesh Patterns",
      "Envoy Proxy Guide",
      "Kubernetes Service Mesh"
    ]
  },
  {
    id: 32,
    title: "Database Partitioning and Sharding",
    description: "Scale databases horizontally through partitioning and sharding strategies for massive data growth.",
    category: "Databases",
    difficulty: "Advanced",
    duration: "75 min",
    topics: [
      "Horizontal vs Vertical Partitioning",
      "Sharding Strategies",
      "Shard Key Selection",
      "Cross-Shard Queries",
      "Shard Rebalancing",
      "Global Secondary Indexes"
    ],
    concepts: [
      "Hash-Based Sharding",
      "Range-Based Sharding",
      "Directory-Based Sharding",
      "Consistent Hashing",
      "Shard Mapping",
      "Distributed Joins"
    ],
    examples: [
      "MongoDB Sharding",
      "MySQL Partitioning",
      "PostgreSQL Partitioning",
      "Cassandra Partitioning",
      "DynamoDB Partitioning"
    ],
    resources: [
      "Database Sharding Guide",
      "Partitioning Strategies",
      "Distributed Databases",
      "Sharding Best Practices"
    ]
  },
  {
    id: 33,
    title: "Event Sourcing and CQRS",
    description: "Build event-driven systems using Event Sourcing and Command Query Responsibility Segregation patterns.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "80 min",
    topics: [
      "Event Sourcing Fundamentals",
      "Event Store Design",
      "CQRS Pattern",
      "Event Replay",
      "Snapshot Strategies",
      "Event Versioning"
    ],
    concepts: [
      "Event Store",
      "Command Handlers",
      "Query Handlers",
      "Event Replay",
      "Snapshot Aggregates",
      "Event Schema Evolution"
    ],
    examples: [
      "EventStore Database",
      "Axon Framework",
      "Apache Kafka",
      "Event Sourcing with Redis",
      "CQRS with EventStore"
    ],
    resources: [
      "Event Sourcing Book",
      "CQRS Pattern Guide",
      "EventStore Documentation",
      "Domain-Driven Design"
    ]
  },
  {
    id: 34,
    title: "Distributed Caching with Redis",
    description: "Implement high-performance distributed caching solutions using Redis and advanced caching patterns.",
    category: "Performance",
    difficulty: "Intermediate",
    duration: "60 min",
    topics: [
      "Redis Data Structures",
      "Distributed Caching",
      "Cache Patterns",
      "Redis Cluster",
      "Persistence Strategies",
      "Performance Tuning"
    ],
    concepts: [
      "Redis Strings",
      "Redis Lists",
      "Redis Sets",
      "Redis Sorted Sets",
      "Redis Hashes",
      "Redis Streams"
    ],
    examples: [
      "Redis Cluster Setup",
      "Redis Sentinel",
      "Redis with Spring Boot",
      "Redis Caching Patterns",
      "Redis Performance Optimization"
    ],
    resources: [
      "Redis Documentation",
      "Redis Cluster Guide",
      "Caching Patterns",
      "Redis Performance Tuning"
    ]
  },
  {
    id: 35,
    title: "Monitoring and Observability",
    description: "Implement comprehensive monitoring, logging, and observability solutions for distributed systems.",
    category: "Observability",
    difficulty: "Intermediate",
    duration: "55 min",
    topics: [
      "Application Monitoring",
      "Distributed Tracing",
      "Centralized Logging",
      "Metrics Collection",
      "Alerting Systems",
      "Performance Dashboards"
    ],
    concepts: [
      "Three Pillars of Observability",
      "Distributed Tracing",
      "Structured Logging",
      "Metrics and KPIs",
      "Alert Management",
      "SLA Monitoring"
    ],
    examples: [
      "Prometheus and Grafana",
      "Jaeger Distributed Tracing",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Datadog Monitoring",
      "New Relic APM"
    ],
    resources: [
      "Observability Engineering",
      "Distributed Tracing Guide",
      "Monitoring Best Practices",
      "ELK Stack Documentation"
    ]
  },
  {
    id: 36,
    title: "Distributed Consensus Algorithms",
    description: "Master consensus algorithms like Raft and Paxos for building reliable distributed systems.",
    category: "Theory",
    difficulty: "Advanced",
    duration: "75 min",
    topics: [
      "Raft Consensus Algorithm",
      "Paxos Protocol",
      "Byzantine Fault Tolerance",
      "Leader Election",
      "Log Replication",
      "Safety and Liveness Properties"
    ],
    concepts: [
      "Leader Election",
      "Log Replication",
      "Safety Properties",
      "Liveness Properties",
      "Network Partitions",
      "Fault Tolerance"
    ],
    examples: [
      "Kubernetes etcd using Raft",
      "Consul using Raft",
      "Apache ZooKeeper",
      "Distributed databases",
      "Blockchain consensus"
    ],
    resources: [
      "Raft Paper",
      "Paxos Made Simple",
      "Distributed Systems Book",
      "Consensus Algorithms Guide"
    ]
  },
  {
    id: 37,
    title: "Time Series Databases and Analytics",
    description: "Design systems for storing and analyzing time-series data at scale.",
    category: "Databases",
    difficulty: "Advanced",
    duration: "65 min",
    topics: [
      "Time Series Data Characteristics",
      "Compression Techniques",
      "Retention Policies",
      "Aggregation Strategies",
      "Query Optimization",
      "Real-time Analytics"
    ],
    concepts: [
      "Time Series Compression",
      "Downsampling",
      "Rollup Aggregations",
      "Time Bucketing",
      "Data Retention",
      "Analytics Queries"
    ],
    examples: [
      "InfluxDB",
      "TimescaleDB",
      "Prometheus",
      "OpenTSDB",
      "IoT Data Analytics"
    ],
    resources: [
      "Time Series Database Design",
      "InfluxDB Documentation",
      "Prometheus Best Practices",
      "IoT Analytics Guide"
    ]
  },
  {
    id: 38,
    title: "Machine Learning Infrastructure",
    description: "Build scalable infrastructure for machine learning model training and serving.",
    category: "Infrastructure",
    difficulty: "Advanced",
    duration: "80 min",
    topics: [
      "ML Pipeline Architecture",
      "Model Training Infrastructure",
      "Model Serving Patterns",
      "Feature Stores",
      "A/B Testing for ML",
      "Model Monitoring"
    ],
    concepts: [
      "ML Pipeline",
      "Feature Engineering",
      "Model Versioning",
      "Model Serving",
      "A/B Testing",
      "Model Drift"
    ],
    examples: [
      "Kubeflow",
      "MLflow",
      "TensorFlow Serving",
      "Feature Store (Feast)",
      "Model Monitoring"
    ],
    resources: [
      "ML Infrastructure Design",
      "Kubeflow Documentation",
      "MLOps Best Practices",
      "Feature Store Architecture"
    ]
  },
  {
    id: 39,
    title: "Real-time Streaming Systems",
    description: "Design systems for processing real-time data streams at scale.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "Stream Processing Architecture",
      "Event Time vs Processing Time",
      "Watermarking",
      "State Management",
      "Fault Tolerance",
      "Scalability Patterns"
    ],
    concepts: [
      "Stream Processing",
      "Event Time Processing",
      "Watermarks",
      "Stateful Processing",
      "Exactly Once Semantics",
      "Backpressure Handling"
    ],
    examples: [
      "Apache Kafka Streams",
      "Apache Flink",
      "Apache Storm",
      "Spark Streaming",
      "Real-time Analytics"
    ],
    resources: [
      "Stream Processing Design",
      "Kafka Streams Guide",
      "Flink Documentation",
      "Real-time Systems Book"
    ]
  },
  {
    id: 40,
    title: "Blockchain and Distributed Ledgers",
    description: "Understand blockchain technology and design decentralized systems.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "85 min",
    topics: [
      "Blockchain Fundamentals",
      "Consensus Mechanisms",
      "Smart Contracts",
      "Cryptographic Primitives",
      "Scalability Solutions",
      "Interoperability"
    ],
    concepts: [
      "Proof of Work",
      "Proof of Stake",
      "Smart Contracts",
      "Cryptographic Hashing",
      "Merkle Trees",
      "Layer 2 Solutions"
    ],
    examples: [
      "Bitcoin Network",
      "Ethereum Platform",
      "Hyperledger Fabric",
      "Polkadot",
      "DeFi Applications"
    ],
    resources: [
      "Bitcoin Whitepaper",
      "Ethereum Documentation",
      "Blockchain Architecture",
      "Smart Contract Security"
    ]
  },
  {
    id: 41,
    title: "Edge Computing and IoT Systems",
    description: "Design systems that process data at the edge for IoT and mobile applications.",
    category: "Infrastructure",
    difficulty: "Advanced",
    duration: "75 min",
    topics: [
      "Edge Computing Architecture",
      "IoT Device Management",
      "Edge Analytics",
      "Data Synchronization",
      "Security at Edge",
      "Latency Optimization"
    ],
    concepts: [
      "Edge Computing",
      "Fog Computing",
      "Edge Analytics",
      "Device Management",
      "Data Synchronization",
      "Edge Security"
    ],
    examples: [
      "AWS Greengrass",
      "Azure IoT Edge",
      "Google Cloud IoT",
      "Industrial IoT",
      "Smart Cities"
    ],
    resources: [
      "Edge Computing Guide",
      "IoT Architecture",
      "Edge Security Best Practices",
      "IoT Device Management"
    ]
  },
  {
    id: 42,
    title: "Multi-Cloud and Hybrid Cloud Strategies",
    description: "Design systems that span multiple cloud providers and on-premises infrastructure.",
    category: "Infrastructure",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "Multi-Cloud Architecture",
      "Cloud Portability",
      "Data Sovereignty",
      "Cost Optimization",
      "Vendor Lock-in Avoidance",
      "Unified Management"
    ],
    concepts: [
      "Multi-Cloud",
      "Hybrid Cloud",
      "Cloud Portability",
      "Data Sovereignty",
      "Cost Optimization",
      "Vendor Lock-in"
    ],
    examples: [
      "Kubernetes Multi-Cloud",
      "Terraform Multi-Cloud",
      "Cloud Native Tools",
      "Multi-Region Deployments",
      "Hybrid Cloud Solutions"
    ],
    resources: [
      "Multi-Cloud Strategy",
      "Kubernetes Multi-Cloud",
      "Terraform Best Practices",
      "Cloud Portability Guide"
    ]
  },
  {
    id: 43,
    title: "Data Mesh Architecture",
    description: "Implement data mesh principles for decentralized data ownership and governance.",
    category: "Architecture",
    difficulty: "Advanced",
    duration: "80 min",
    topics: [
      "Data Mesh Principles",
      "Domain-Oriented Data",
      "Data Product Design",
      "Self-Serve Data Platform",
      "Federated Governance",
      "Data Observability"
    ],
    concepts: [
      "Data Mesh",
      "Domain-Driven Design",
      "Data Products",
      "Self-Serve Platform",
      "Federated Governance",
      "Data Observability"
    ],
    examples: [
      "Netflix Data Mesh",
      "Uber Data Platform",
      "Spotify Data Mesh",
      "Data Product Catalogs",
      "Self-Serve Analytics"
    ],
    resources: [
      "Data Mesh Book",
      "Domain-Driven Design",
      "Data Product Design",
      "Data Governance Guide"
    ]
  },
  {
    id: 44,
    title: "Chaos Engineering and Resilience Testing",
    description: "Build resilient systems through proactive failure testing and chaos engineering.",
    category: "Reliability",
    difficulty: "Advanced",
    duration: "65 min",
    topics: [
      "Chaos Engineering Principles",
      "Failure Injection",
      "Resilience Testing",
      "Circuit Breaker Patterns",
      "Bulkhead Pattern",
      "Graceful Degradation"
    ],
    concepts: [
      "Chaos Engineering",
      "Failure Injection",
      "Resilience Testing",
      "Circuit Breaker",
      "Bulkhead Pattern",
      "Graceful Degradation"
    ],
    examples: [
      "Netflix Chaos Monkey",
      "Gremlin Chaos Engineering",
      "Chaos Mesh",
      "Resilience Testing",
      "Production Testing"
    ],
    resources: [
      "Chaos Engineering Book",
      "Netflix Chaos Engineering",
      "Resilience Patterns",
      "Production Testing Guide"
    ]
  },
  {
    id: 45,
    title: "Zero Trust Security Architecture",
    description: "Implement zero trust security principles for modern distributed systems.",
    category: "Security",
    difficulty: "Advanced",
    duration: "70 min",
    topics: [
      "Zero Trust Principles",
      "Identity and Access Management",
      "Network Segmentation",
      "Continuous Verification",
      "Least Privilege Access",
      "Security Monitoring"
    ],
    concepts: [
      "Zero Trust",
      "Identity Management",
      "Access Control",
      "Network Segmentation",
      "Continuous Verification",
      "Security Monitoring"
    ],
    examples: [
      "Google BeyondCorp",
      "AWS Zero Trust",
      "Azure Zero Trust",
      "Identity Providers",
      "Security Monitoring"
    ],
    resources: [
      "Zero Trust Architecture",
      "Identity Management",
      "Security Best Practices",
      "Zero Trust Implementation"
    ]
  },
  {
    id: 46,
    title: "Serverless Architecture Patterns",
    description: "Design scalable applications using serverless computing and event-driven architecture.",
    category: "Architecture",
    difficulty: "Intermediate",
    duration: "60 min",
    topics: [
      "Serverless Computing",
      "Function as a Service",
      "Event-Driven Architecture",
      "Cold Start Optimization",
      "State Management",
      "Cost Optimization"
    ],
    concepts: [
      "Serverless",
      "FaaS",
      "Event-Driven",
      "Cold Starts",
      "State Management",
      "Cost Optimization"
    ],
    examples: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "Serverless Applications",
      "Event-Driven Systems"
    ],
    resources: [
      "Serverless Architecture",
      "AWS Lambda Guide",
      "Event-Driven Design",
      "Serverless Best Practices"
    ]
  },
  {
    id: 47,
    title: "Data Pipeline and ETL Systems",
    description: "Build robust data pipelines for extracting, transforming, and loading data at scale.",
    category: "Architecture",
    difficulty: "Intermediate",
    duration: "65 min",
    topics: [
      "ETL Pipeline Design",
      "Data Ingestion Patterns",
      "Data Transformation",
      "Data Quality Management",
      "Pipeline Orchestration",
      "Monitoring and Alerting"
    ],
    concepts: [
      "ETL Pipeline",
      "Data Ingestion",
      "Data Transformation",
      "Data Quality",
      "Pipeline Orchestration",
      "Data Monitoring"
    ],
    examples: [
      "Apache Airflow",
      "Apache NiFi",
      "AWS Glue",
      "Data Pipeline Tools",
      "ETL Best Practices"
    ],
    resources: [
      "Data Pipeline Design",
      "Apache Airflow Guide",
      "ETL Best Practices",
      "Data Quality Management"
    ]
  },
  {
    id: 48,
    title: "Content Delivery and CDN Optimization",
    description: "Optimize content delivery networks for global performance and user experience.",
    category: "Performance",
    difficulty: "Intermediate",
    duration: "55 min",
    topics: [
      "CDN Architecture",
      "Edge Caching",
      "Content Optimization",
      "Geographic Distribution",
      "Cache Invalidation",
      "Performance Monitoring"
    ],
    concepts: [
      "CDN",
      "Edge Caching",
      "Content Optimization",
      "Geographic Distribution",
      "Cache Invalidation",
      "Performance Monitoring"
    ],
    examples: [
      "Cloudflare",
      "AWS CloudFront",
      "Akamai",
      "CDN Optimization",
      "Global Content Delivery"
    ],
    resources: [
      "CDN Architecture",
      "Cloudflare Documentation",
      "Content Optimization",
      "CDN Best Practices"
    ]
  },
  {
    id: 49,
    title: "Database Migration and Schema Evolution",
    description: "Manage database schema changes and migrations in production systems.",
    category: "Databases",
    difficulty: "Intermediate",
    duration: "60 min",
    topics: [
      "Schema Migration Strategies",
      "Zero-Downtime Migrations",
      "Data Migration",
      "Backward Compatibility",
      "Rollback Strategies",
      "Migration Testing"
    ],
    concepts: [
      "Schema Migration",
      "Zero-Downtime",
      "Data Migration",
      "Backward Compatibility",
      "Rollback Strategies",
      "Migration Testing"
    ],
    examples: [
      "Flyway",
      "Liquibase",
      "Alembic",
      "Database Migrations",
      "Schema Evolution"
    ],
    resources: [
      "Database Migration Guide",
      "Flyway Documentation",
      "Schema Evolution",
      "Migration Best Practices"
    ]
  },
  {
    id: 50,
    title: "API Gateway and BFF Patterns",
    description: "Design API gateways and backend-for-frontend patterns for microservices.",
    category: "Architecture",
    difficulty: "Intermediate",
    duration: "55 min",
    topics: [
      "API Gateway Architecture",
      "Backend for Frontend (BFF)",
      "Authentication and Authorization",
      "Rate Limiting",
      "Request Routing",
      "API Composition"
    ],
    concepts: [
      "API Gateway",
      "BFF Pattern",
      "Authentication",
      "Rate Limiting",
      "Request Routing",
      "API Composition"
    ],
    examples: [
      "Kong API Gateway",
      "AWS API Gateway",
      "Azure API Management",
      "BFF Implementation",
      "API Gateway Patterns"
    ],
    resources: [
      "API Gateway Design",
      "BFF Pattern Guide",
      "Kong Documentation",
      "API Gateway Best Practices"
    ]
  }
];

export const categories = [
  "All",
  "Scalability",
  "Databases",
  "Performance",
  "Architecture",
  "Infrastructure",
  "Messaging",
  "Estimation",
  "Theory",
  "Algorithms",
  "Security",
  "Search",
  "Social",
  "Media",
  "E-commerce",
  "Communication",
  "Web Services",
  "Storage",
  "Observability"
];

export const difficultyLevels = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced"
];
