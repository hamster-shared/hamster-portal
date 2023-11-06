export const featuresDatas = [
  {name: 'smartContractDevelopment', 
  data:[
    {srcName: 'buildServices', title: 'Build Services',link:'', description:'Intelligent contract building simplified. Construct smart contracts with one click, and efficiently manage versions and track code',version:'0.14.0',isNew: true,},
    {srcName:'sandboxServices', title: 'Sandbox Services',link:'', description:'The sandbox environment can be started online for developers and the OP network that can fork different environments',version:'Coming Soon', isNew: true,},
    {srcName:'aLine',title:'ALine', link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew: false}
  ]},
  {
    name: 'smartContractSecureCode',
    data: [
      {srcName:'securityAnalysis',title: 'Security Analysis',link:'', description:'Ensure contract security with mainstream vulnerability detection methods including static analysis of vulnerability rules and formal verification',version:'0.7.0',isNew:false,},
      {srcName:'codeQualityAnalysi',title: 'Code Quality Analysis',link:'', description:'Identify coding issues, potential bugs and non-compliant code in smart contract through static analysis of the source code',version:'0.7.0',isNew:false,},
      {srcName:'openSourceAnalysis',title: 'Open Source Analysis',link:'', description:'Effectively identify, monitor and manage software components and dependencies to better manage risks and ensure application security',version:'0.7.0',isNew:false,},
      {srcName:'gasUsageAnalysis',title: 'Gas Usage Analysis',link:'', description:'Collect and analyze gas usage, method invocations and metrics for each unit test to provide data support for optimizing gas utilization efficiency',version:'0.7.0',isNew:false,},
      {srcName:'AIAnalysis',title: 'AI Analysis',link:'', description:'Leverage AI to identify potential issues and defects in smart contracts, improving their quality and security',version:'0.4.0',isNew:false,},
    ]
  },
  {
    name: 'smartContractSecureDeploy',
    data: [
      {srcName:'deployServices',title: 'Deploy Services',link:'', description:'One-click deploy a single smart contract, no need to set up a private key, safe and reliable',version:'0.7.0', isNew:false,},
      {srcName:'deployServicesPro',title: 'Deploy Services Pro',link:'', description:'One-click deployment of multiple smart contracts, supports deployment orchestration and configuration management',version:'Coming Soon', isNew:false,},
    ]
  },
  {
    name: 'frontEndDevelopment',
    data: [
      {srcName:'buildServices',title: 'Build Services',link:'', description:'Simplify front-end project building. One-click build of front-end code, efficiently manage versions, track code',version:'0.12.0', isNew:false,},
      {srcName:'aLine',title: 'ALine',link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew:false,},
    ]
  },
  {
    name: 'frontEndSecureCode',
    data: [
      {srcName:'codeQualityAnalysi',title: 'Code Quality Analysis',link:'', description:'Through static analysis of source code, identify coding issues, potential errors and non-compliant code in front-end code ',version:'0.2.0', isNew:false,},
    ]
  },
  {
    name: 'frontEndFastDeploy',
    data: [
      {srcName:'IPFSDeploy',title: 'IPFS Deploy',link:'', description:'Instantly deploy your front-end code to IPFS with one click',version:'0.2.0', isNew:false,},
      {srcName:'containerDeploy',title: 'Container Deploy',link:'', description:'Instantly deploy your front-end code to container with one click',version:'0.4.0', isNew:false,},
      {srcName:'ICDeploy',title: 'IC Deploy',link:'', description:'Deploy your front-end code to containers on the Internet Computer with one click',version:'0.12.0', isNew:false,},
    ]
  },
  {
    name: 'nodeDevelopment',
    data:[
      {srcName:'buildServices',title: 'Build Services',link:'', description:'Simplify front-end project building. One-click build of Node code, efficiently manage versions, track code',version:'0.12.0', isNew:false,},
      {srcName:'aLine',title: 'ALine',link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew:false,},
    ]
  },
  {
    name: 'nodeSecureDeploy',
    data: [
      {srcName:'deployServices',title: 'Deploy Services',link:'', description:'One-click deployment of chain nodes, no need to set up private keys, safe and reliable',version:'0.12.0', isNew:false,},
    ]
  },
  {
    name: 'marketTemplateMarket',
    data: [
      {srcName:'contractTemplate',title: 'Contract Template',link:'', description:'The contract template provides the basic framework of a smart contract, allowing developers to quickly build customized smart contracts based on it',version:'0.15.0', isNew:false,},
      {srcName:'frontEndTemplate',title: 'FrontEnd Template',link:'', description:'Frontend code templates provide common page structures, styles and interaction logic to help frontend developers quickly scaffold the framework of a website or application',version:'0.2.0', isNew:false,},
      {srcName:'nodeTemplate',title: 'Node Template ',link:'', description:'Node templates provide standard project structure, dependency configuration, etc. to help developers quickly initialize a node project',version:'0.12.0', isNew:false,},
      {srcName:'templateWizard',title: 'Template Wizard',link:'', description:'The contract template editor provides a graphical interface for rapidly creating and editing smart contract templates in a modular way, allowing users to select and assemble features like building blocks to customize templates',version:'0.8.0', isNew:false,},
    ]
  },
  {
    name: 'marketMiddleware',
    data: [
      {srcName:'RPCService',title: 'RPC Service',link:'', description:"To meet developers' needs for building various ecological projects, Hamster provides efficient and stable RPC services, empowering developers to obtain high-quality node services",version:'0.6.0', isNew:false,},
      {srcName:'nodeService',title: 'Node Services',link:'', description:"Deploy independent blockchain nodes to meet developers' needs for accessing and using nodes",version:'0.10.0', isNew:false,},
      {srcName:'oracleService',title: 'Oracle Service',link:'', description:"To enable developers to quickly integrate suitable oracle solutions with no or low code, Hamster platform aggregates middleware for various oracle solutions in the market",version:'0.6.1', isNew:false,},
    ]
  }
]


export const featuresCollapseDatas = [
  {
    title: 'Smart Contract',
    srcName:'smartContract',
    // img: '~/assets/images/smartContract.png',
    children: [
    {name: 'Development', data:[
      {srcName:'buildServices', title: 'Build Services',link:'', description:'Intelligent contract building simplified. Construct smart contracts with one click, and efficiently manage versions and track code',version:'0.14.0',isNew: true,},
      {srcName:'sandboxServices', title: 'Sandbox Services',link:'', description:'The sandbox environment can be started online for developers and the OP network that can fork different environments',version:'Coming Soon', isNew: true,},
      {srcName:'aLine',title:'ALine',link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew: false}
    ]},
    {
      name: 'Secure Code', data: [
        {srcName:'securityAnalysis',img:'~/assets/images/securityAnalysis.png',title: 'Security Analysis',link:'', description:'Ensure contract security with mainstream vulnerability detection methods including static analysis of vulnerability rules and formal verification',version:'0.7.0',isNew:false,},
        {srcName:'codeQualityAnalysi',img:'~/assets/images/codeQualityAnalysi.png',title: 'Code Quality Analysis',link:'', description:'Identify coding issues, potential bugs and non-compliant code in smart contract through static analysis of the source code',version:'0.7.0',isNew:false,},
        {srcName:'openSourceAnalysis',img:'~/assets/images/openSourceAnalysis.png',title: 'Open Source Analysis',link:'', description:'Effectively identify, monitor and manage software components and dependencies to better manage risks and ensure application security',version:'0.7.0',isNew:false,},
        {srcName:'gasUsageAnalysis',img:'~/assets/images/gasUsageAnalysis.png',title: 'Gas Usage Analysis',link:'', description:'Collect and analyze gas usage, method invocations and metrics for each unit test to provide data support for optimizing gas utilization efficiency',version:'0.7.0',isNew:false,},
        {srcName:'AIAnalysis',img:'~/assets/images/AIAnalysis.png',title: 'AI Analysis',link:'', description:'Leverage AI to identify potential issues and defects in smart contracts, improving their quality and security',version:'0.4.0',isNew:false,},
      ]
    },
    {
      name: 'Secure Deploy', data: [
        {srcName:'deployServices',img:'~/assets/images/deployServices.png',title: 'Deploy Services',link:'', description:'One-click deploy a single smart contract, no need to set up a private key, safe and reliable',version:'0.7.0', isNew:false,},
        {srcName:'deployServicesPro',img:'~/assets/images/deployServicesPro.png',title: 'Deploy Services Pro',link:'', description:'One-click deployment of multiple smart contracts, supports deployment orchestration and configuration management',version:'Coming Soon', isNew:false,},
      ]
    }
  ]},
  {
    title: 'Front End', 
    srcName:'frontEnd',
    // img: '~/assets/images/frontEnd.png',
    children: [
      {
        name: 'Development', data: [
          {srcName:'buildServices',img:'~/assets/images/buildServices.png',title: 'Build Services',link:'', description:'Simplify front-end project building. One-click build of front-end code, efficiently manage versions, track code',version:'0.12.0', isNew:false,},
          {srcName:'aLine',img:'~/assets/images/aline.png',title: 'ALine',link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew:false,},
        ]
      },
      {
        name: 'Secure Code', data:[
          {srcName:'codeQualityAnalysi',img:'~/assets/images/codeQualityAnalysi.png',title: 'Code Quality Analysis',link:'', description:'Through static analysis of source code, identify coding issues, potential errors and non-compliant code in front-end code ',version:'0.2.0', isNew:false,},
        ]
      },
      {
        name: 'Fast Deploy',data:[
          {srcName:'IPFSDeploy',img:'~/assets/images/IPFSDeploy.png',title: 'IPFS Deploy',link:'', description:'Instantly deploy your front-end code to IPFS with one click',version:'0.2.0', isNew:false,},
          {srcName:'containerDeploy',img:'~/assets/images/containerDeploy.png',title: 'Container Deploy',link:'', description:'Instantly deploy your front-end code to container with one click',version:'0.4.0', isNew:false,},
          {srcName:'ICDeploy',img:'~/assets/images/ICDeploy.png',title: 'IC Deploy',link:'', description:'Deploy your front-end code to containers on the Internet Computer with one click',version:'0.12.0', isNew:false,},
        ]
      },
    ]
  },
  {
    title: 'Node', 
    srcName:'node',
    img: '~/assets/images/node.png',
    children: [
      {
        name: 'Development', data: [
          {srcName:'buildServices',img:'~/assets/images/buildServices.png',title: 'Build Services',link:'', description:'Simplify front-end project building. One-click build of Node code, efficiently manage versions, track code',version:'0.12.0', isNew:false,},
          {srcName:'aLine',img:'~/assets/images/aline.png',title: 'ALine',link:'', description:'Hamster automates your Web3.0 project workflows seamlessly. Check, build, and deploy your code directly through code repository',version:'0.15.0', isNew:false,},
        ]
      },
      {
        name: 'Secure Deploy', data: [
          {srcName:'deployServices',img:'~/assets/images/deployServices.png',title: 'Deploy Services',link:'', description:'One-click deployment of chain nodes, no need to set up private keys, safe and reliable',version:'0.12.0', isNew:false,},
        ]
      },
    ]
  },
  {
    title: 'Market', 
    srcName:'market',
    // img: '~/assets/images/market.png',
    children: [
      {
        name: 'TemplateMarket', data: [
          {srcName:'contractTemplate',img:'~/assets/images/contractTemplate.png',title: 'Contract Template',link:'', description:'The contract template provides the basic framework of a smart contract, allowing developers to quickly build customized smart contracts based on it',version:'0.15.0', isNew:false,},
          {srcName:'frontEndTemplate',img:'~/assets/images/frontEndTemplate.png',title: 'FrontEnd Template',link:'', description:'Frontend code templates provide common page structures, styles and interaction logic to help frontend developers quickly scaffold the framework of a website or application',version:'0.2.0', isNew:false,},
          {srcName:'nodeTemplate',img:'~/assets/images/nodeTemplate.png',title: 'Node Template ',link:'', description:'Node templates provide standard project structure, dependency configuration, etc. to help developers quickly initialize a node project',version:'0.12.0', isNew:false,},
          {srcName:'templateWizard',img:'~/assets/images/templateWizard.png',title: 'Template Wizard',link:'', description:'The contract template editor provides a graphical interface for rapidly creating and editing smart contract templates in a modular way, allowing users to select and assemble features like building blocks to customize templates',version:'0.8.0', isNew:false,},
        ]
      },
      {
        name: 'Middleware', data: [
          {srcName:'RPCService',img:'~/assets/images/RPCService.png',title: 'RPC Service',link:'', description:"To meet developers' needs for building various ecological projects, Hamster provides efficient and stable RPC services, empowering developers to obtain high-quality node services",version:'0.6.0', isNew:false,},
          {srcName:'nodeService',img:'~/assets/images/nodeService.png',title: 'Node Services',link:'', description:"Deploy independent blockchain nodes to meet developers' needs for accessing and using nodes",version:'0.10.0', isNew:false,},
          {srcName:'oracleService',img:'~/assets/images/oracleService.png',title: 'Oracle Service',link:'', description:"To enable developers to quickly integrate suitable oracle solutions with no or low code, Hamster platform aggregates middleware for various oracle solutions in the market",version:'0.6.1', isNew:false,},
        ]
      }
    ]
  },
]

