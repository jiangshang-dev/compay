export const categories = ['全部', '基础设施', '数据智能', '企业服务', '安全合规']

export const products = [
  {
    id: 1,
    title: '星辰云计算平台',
    category: '基础设施',
    description: '弹性可扩展的企业级云计算服务，提供高性能计算、存储和网络资源，支持混合云和多云架构部署。',
    icon: 'cloud',
    features: [
      '自动弹性伸缩，按需付费',
      '多地域多可用区部署',
      '99.99%服务可用性保障'
    ],
    link: '/products/cloud'
  },
  {
    id: 2,
    title: '数据智能分析平台',
    category: '数据智能',
    description: '基于人工智能的大数据分析平台，提供数据采集、清洗、建模、可视化全流程解决方案。',
    icon: 'chart',
    features: [
      '智能数据建模与预测',
      '实时流式数据处理',
      '丰富的可视化图表组件'
    ],
    link: '/products/analytics'
  },
  {
    id: 3,
    title: '企业安全防护系统',
    category: '安全合规',
    description: '全方位的企业网络安全解决方案，涵盖威胁检测、漏洞管理、合规审计和安全运营中心。',
    icon: 'shield',
    features: [
      'AI驱动的智能威胁检测',
      '自动化漏洞扫描与修复',
      '满足等保2.0合规要求'
    ],
    link: '/products/security'
  },
  {
    id: 4,
    title: '开发者工具套件',
    category: '企业服务',
    description: '一站式DevOps工具链，覆盖代码管理、CI/CD、容器编排、监控告警全生命周期。',
    icon: 'code',
    features: [
      'Git代码仓库与协作',
      '自动化构建与部署流水线',
      'Kubernetes容器编排管理'
    ],
    link: '/products/devtools'
  },
  {
    id: 5,
    title: '智能计算引擎',
    category: '基础设施',
    description: '面向AI和高性能计算场景的GPU云服务器，支持深度学习训练、推理和科学计算。',
    icon: 'cpu',
    features: [
      'NVIDIA A100/H100 GPU集群',
      '分布式训练框架支持',
      '弹性GPU资源调度'
    ],
    link: '/products/gpu'
  },
  {
    id: 6,
    title: '云数据库服务',
    category: '数据智能',
    description: '全托管的企业级数据库服务，支持MySQL、PostgreSQL、MongoDB、Redis等多种数据引擎。',
    icon: 'database',
    features: [
      '自动备份与故障恢复',
      '读写分离与分库分表',
      '跨地域数据同步'
    ],
    link: '/products/database'
  },
  {
    id: 7,
    title: '全球化CDN加速',
    category: '基础设施',
    description: '覆盖全球200+节点的CDN加速服务，提供静态资源加速、动态加速和流媒体加速。',
    icon: 'globe',
    features: [
      '智能DNS解析与调度',
      'HTTPS全链路加密',
      '实时流量监控与分析'
    ],
    link: '/products/cdn'
  },
  {
    id: 8,
    title: '企业协作平台',
    category: '企业服务',
    description: '集即时通讯、视频会议、文档协作、项目管理于一体的企业数字化办公平台。',
    icon: 'users',
    features: [
      '高清视频会议与直播',
      '在线文档实时协作',
      '敏捷项目管理工具'
    ],
    link: '/products/collaboration'
  }
]
