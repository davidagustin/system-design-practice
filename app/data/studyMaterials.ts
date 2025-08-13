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
  "Storage"
];

export const difficultyLevels = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced"
];
