import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // generalSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // Updated quickStartSidebar to match the provided structure
  quickStartSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      collapsible: false,
      items: [
        'about-platform', // Overview
        {
          type: 'category',
          label: 'Quick Start',
          collapsible: false,
          items: [
            'quick-start/quick-start-overview', // Overview
            {
              type: 'category',
              label: 'CI Pipelines - Build',
              collapsible: false,
              items: [
                'quick-start/platform-installation', // Install EDP
                {
                  type: 'category',
                  label: 'Integrate Tools',
                  collapsible: false,
                  items: [
                    'quick-start/integrate-sonarcloud', // Integrate SonarQube
                    'quick-start/integrate-github', // Integrate GitHub
                    'quick-start/integrate-container-registry', // Integrate DockerHub
                  ],
                },
                'quick-start/create-application', // Create Application
              ],
            },
            {
              type: 'category',
              label: 'CD Pipelines - Deploy',
              collapsible: false,
              items: [
                'quick-start/integrate-argocd', // Integrate Argo CD
                'quick-start/deploy-application', // Deploy Application
              ],
            },
          ],
        },
        'basic-concepts', // Basic Concepts
        'glossary', // Glossary
        'supported-versions', // Supported Versions
        'compliance', // Compliance
      ],
    },
  ],

  // Updated operatorGuideSidebar to match the provided MkDocs structure
  operatorGuideSidebar: [
    {
      type: 'category',
      label: 'Operator Guide',
      collapsible: false,
      items: [
        'operator-guide/index',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'operator-guide/installation-overview',
            'operator-guide/add-ons-overview',
            {
              type: 'category',
              label: 'Install via Helm Chart',
              items: [
                {
                  type: 'category',
                  label: 'Prerequisites',
                  items: [
                    'operator-guide/prerequisites',
                    {
                      type: 'category',
                      label: 'Setup Cluster',
                      items: [
                        'operator-guide/kubernetes-cluster-settings',
                        'operator-guide/openshift-cluster-settings',
                        'operator-guide/install-ingress-nginx',
                      ],
                    },
                    'operator-guide/install-argocd',
                    'operator-guide/install-tekton',
                  ],
                },
                'operator-guide/install-kuberocketci',
              ],
            },
            'operator-guide/aws-marketplace-install',
            'operator-guide/install-via-civo',
            {
              type: 'category',
              label: 'Advanced Installation',
              items: [
                'operator-guide/advanced-installation/overview',
                'operator-guide/advanced-installation/keycloak',
                'operator-guide/advanced-installation/capsule',
                'operator-guide/advanced-installation/defectdojo',
                'operator-guide/advanced-installation/reportportal',
                'operator-guide/advanced-installation/custom-certificates',
              ],
            },
            'operator-guide/uninstall-kuberocketci',
          ],
        },
        {
          type: 'category',
          label: 'Authentication and Authorization',
          items: [
            'operator-guide/auth/platform-auth-model',
            'operator-guide/auth/ui-portal-oidc',
            'operator-guide/auth/namespace-management',
            'operator-guide/auth/eks-oidc-integration',
            'operator-guide/auth/oauth2-proxy',
          ],
        },
        {
          type: 'category',
          label: 'Artifacts Management',
          items: [
            'operator-guide/artifacts-management/nexus-sonatype',
            'operator-guide/artifacts-management/package-registry',
            {
              type: 'category',
              label: 'Container Registry',
              items: [
                {
                  type: 'category',
                  label: 'Harbor',
                  items: [
                    'operator-guide/artifacts-management/harbor-installation',
                    'operator-guide/artifacts-management/harbor-oidc',
                    'operator-guide/artifacts-management/harbor-integration',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Disaster Recovery',
          items: [
            'operator-guide/disaster-recovery/install-velero',
            'operator-guide/disaster-recovery/velero-irsa',
            'operator-guide/disaster-recovery/velero-restore-platform',
          ],
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            {
              type: 'category',
              label: 'GitOps',
              items: [
                'operator-guide/argocd-integration',
              ],
            },
            {
              type: 'category',
              label: 'Secrets Management',
              items: [
                'operator-guide/install-external-secrets-operator',
                'operator-guide/external-secrets-operator-integration',
              ],
            },
            {
              type: 'category',
              label: 'DevSecOps',
              items: [
                'operator-guide/overview-devsecops',
                'operator-guide/artifacts-verification',
              ],
            },
            {
              type: 'category',
              label: 'Logging',
              items: [
                'operator-guide/install-loki',
                'operator-guide/multitenant-logging',
                'operator-guide/schedule-pods-restart',
                'operator-guide/kibana-ilm-rollover',
              ],
            },
            'operator-guide/customize_deployment',
            'operator-guide/jira-integration',
            {
              type: 'category',
              label: 'Tekton',
              items: [
                'operator-guide/tekton-overview',
                'operator-guide/tekton-monitoring',
                'operator-guide/notification-msteams',
              ],
            },
            {
              type: 'category',
              label: 'AWS Integration',
              items: [
                'operator-guide/waf-tf-configuration',
                'operator-guide/ebs-csi-driver',
                'operator-guide/enable-irsa',
                'operator-guide/kaniko-irsa',
                'operator-guide/loki-irsa',
                'operator-guide/configure-keycloak-oidc-eks',
              ],
            },
            {
              type: 'category',
              label: 'ReportPortal',
              items: [
                'operator-guide/reportportal-keycloak',
                'operator-guide/report-portal-integration-tekton',
              ],
            },
            'operator-guide/dependency-track',
            {
              type: 'category',
              label: 'SonarQube',
              items: [
                'operator-guide/sonarqube',
                'operator-guide/sonarqube-visibility',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          items: [
            {
              type: 'category',
              label: 'EDP',
              items: [
                'operator-guide/upgrade-edp-3.8',
                'operator-guide/upgrade-edp-3.7',
                'operator-guide/upgrade-edp-3.6',
                'operator-guide/upgrade-edp-3.5',
                {
                  type: 'category',
                  label: 'Older Versions',
                  items: [
                    'operator-guide/upgrade-edp-3.4',
                    'operator-guide/upgrade-edp-3.3',
                    'operator-guide/upgrade-edp-3.2',
                    'operator-guide/upgrade-edp-3.1',
                  ],
                },
              ],
            },
            'operator-guide/upgrade-keycloak-19.0',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'user-guide/terraform-stages',
            'operator-guide/deploy-aws-eks',
            'operator-guide/deploy-okd',
            'operator-guide/deploy-okd-4.10',
            'operator-guide/ssl-automation-okd',
            'operator-guide/migrate-ci-pipelines-from-jenkins-to-tekton',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'operator-guide/troubleshooting/overview',
            'operator-guide/troubleshooting/troubleshoot-container-registries',
            'operator-guide/troubleshooting/troubleshoot-stages',
            'operator-guide/troubleshooting/troubleshoot-git-server',
            'operator-guide/troubleshooting/resource-observability',
            'operator-guide/troubleshooting/troubleshoot-applications',
            'operator-guide/troubleshooting/application-not-built',
            'operator-guide/troubleshooting/invalid-codebase-name',
          ],
        },
      ],
    },
  ],

  userGuideSidebar: [
    {
      type: 'category',
      label: 'User Guide',
      collapsible: false,
      items: [
        'user-guide/index',
        {
          type: 'category',
          label: 'Marketplace',
          collapsed: false,
          items: [
            'user-guide/marketplace', // Marketplace Overview
            'user-guide/add-marketplace',
          ],
        },
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: [
            'user-guide/components',
            {
              type: 'category',
              label: 'Application',
              items: [
                'user-guide/add-application',
                'user-guide/application', // Manage Applications
              ],
            },
            {
              type: 'category',
              label: 'Autotest',
              items: [
                'user-guide/add-autotest',
                'user-guide/autotest', // Manage Autotests
              ],
            },
            {
              type: 'category',
              label: 'Library',
              items: [
                'user-guide/add-library',
                'user-guide/library', // Manage Libraries
              ],
            },
            {
              type: 'category',
              label: 'Infrastructure',
              items: [
                'user-guide/add-infrastructure',
                'user-guide/infrastructure', // Manage Infrastructures
              ],
            },
            'user-guide/manage-branches', // Manage Branches
          ],
        },
        {
          type: 'category',
          label: 'Environments',
          collapsed: false,
          items: [
            'user-guide/add-cd-pipeline',
            'user-guide/manage-environments',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          collapsed: false,
          items: [
            'user-guide/configuration-overview', // Configuration Overview
            {
              type: 'category',
              label: 'Links',
              items: [
                'user-guide/quick-links', // Manage Quick Links
              ],
            },
            {
              type: 'category',
              label: 'Git Server',
              items: [
                'user-guide/add-git-server', // Add Git Servers
                'user-guide/git-server-overview', // Manage Git Servers
              ],
            },
            {
              type: 'category',
              label: 'Cluster',
              items: [
                'user-guide/add-cluster',
                'user-guide/cluster', // Manage Clusters
              ],
            },
            'user-guide/gitops',
            {
              type: 'category',
              label: 'Container Registry',
              items: [
                'user-guide/manage-container-registries',
                'user-guide/change-container-registry',
              ],
            },
          ],
        },
      ],
    },
  ],

  developerGuideSidebar: [
    {
      type: 'category',
      label: 'Developer Guide',
      collapsible: false,
      items: [
        'developer-guide/index', // Overview
        'developer-guide/reference-architecture', // Reference Architecture
        'developer-guide/kubernetes-deployment', // Kubernetes Deployment
        'developer-guide/reference-cicd-pipeline', // Reference CI/CD Pipeline
        {
          type: 'category',
          label: 'Cloud Providers',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'AWS',
              items: [
                'developer-guide/aws-reference-architecture', // EDP Reference Architecture on AWS
                'developer-guide/aws-deployment-diagram', // EDP Deployment on AWS
                'developer-guide/aws-infrastructure-cost-estimation', // AWS Infrastructure Cost Estimation
              ],
            },
            // Uncomment or add more cloud providers as needed
            // {
            //   type: 'category',
            //   label: 'Azure',
            //   items: [
            //     'developer-guide/azure_reference', // Azure Reference Architecture
            //     'developer-guide/azure_deployment', // Azure Deployment Diagram
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'GCP',
            //   items: [
            //     'developer-guide/gcp_reference', // GCP Reference Architecture
            //     'developer-guide/gcp_deployment', // GCP Deployment Diagram
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'Development',
          items: [
            'developer-guide/edp-workflow', // KubeRocketCI Project Rules. Working Process
            'developer-guide/local-development', // Operator Development
            'developer-guide/mk-docs-development', // Working With Documentation
          ],
        },
        'developer-guide/autotest-coverage', // Quality Control
        'developer-guide/telemetry', // Telemetry
        'developer-guide/annotations-and-labels', // Annotations and Labels
      ],
    },
  ],

  useCasesSidebar: [
    {
      type: 'category',
      label: 'Use Cases',
      collapsible: false,
      items: [
        'use-cases/index', // Overview
        'use-cases/application-scaffolding',
        'use-cases/external-secrets',
        'use-cases/autotest-as-quality-gate',
        'use-cases/tekton-custom-pipelines',
      ],
    },
  ],
};

export default sidebars;
