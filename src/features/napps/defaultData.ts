import type { NappsData } from '../../types/napp'

const defaultData: NappsData = {
  installedNapps: [
    {
      id: '1',
      name: 'Code Formatter',
      description:
        'Automatically formats code according to repository standards',
      version: '1.2.0',
      isEnabled: true,
      installDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Security Scanner',
      description: 'Scans code for security vulnerabilities and suggests fixes',
      version: '2.0.1',
      isEnabled: true,
      installDate: '2023-05-20'
    },
    {
      id: '3',
      name: 'Documentation Generator',
      description:
        'Generates documentation from code comments and project structure',
      version: '1.0.5',
      isEnabled: false,
      installDate: '2023-04-10'
    },
    {
      id: '4',
      name: 'Wallet Manager',
      description:
        'Manage cryptocurrency wallets, bank accounts, and payment methods',
      version: '2.1.0',
      isEnabled: true,
      installDate: '2023-05-15'
    }
  ],
  availableNapps: [
    {
      id: '5',
      name: 'Database Manager',
      description:
        'Manage database schemas, migrations, and queries directly from the repository',
      version: '3.1.0',
      isEnabled: false,
      installDate: ''
    },
    {
      id: '6',
      name: 'CI/CD Pipeline',
      description:
        'Configure and manage continuous integration and deployment workflows',
      version: '2.2.1',
      isEnabled: false,
      installDate: ''
    },
    {
      id: '7',
      name: 'Test Generator',
      description: 'Generate unit and integration tests based on your codebase',
      version: '1.1.2',
      isEnabled: false,
      installDate: ''
    }
  ]
}

export default defaultData
