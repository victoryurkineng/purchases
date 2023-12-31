import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ad1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4c5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '99c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '772'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '98a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ebc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '129'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '9dd'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/deployment',
        component: ComponentCreator('/deployment', 'e78'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/design-patterns',
        component: ComponentCreator('/design-patterns', '96c'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/design-system',
        component: ComponentCreator('/design-system', '336'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/stack',
        component: ComponentCreator('/stack', '947'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/test-coverage',
        component: ComponentCreator('/test-coverage', '727'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
