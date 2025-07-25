/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SubscribeRouteImport } from './routes/subscribe'
import { Route as LangRouteImport } from './routes/lang'
import { Route as HelpRouteImport } from './routes/help'
import { Route as AccountRouteImport } from './routes/account'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'

const SubscribeRoute = SubscribeRouteImport.update({
  id: '/subscribe',
  path: '/subscribe',
  getParentRoute: () => rootRouteImport,
} as any)
const LangRoute = LangRouteImport.update({
  id: '/lang',
  path: '/lang',
  getParentRoute: () => rootRouteImport,
} as any)
const HelpRoute = HelpRouteImport.update({
  id: '/help',
  path: '/help',
  getParentRoute: () => rootRouteImport,
} as any)
const AccountRoute = AccountRouteImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/account': typeof AccountRoute
  '/help': typeof HelpRoute
  '/lang': typeof LangRoute
  '/subscribe': typeof SubscribeRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/account': typeof AccountRoute
  '/help': typeof HelpRoute
  '/lang': typeof LangRoute
  '/subscribe': typeof SubscribeRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/account': typeof AccountRoute
  '/help': typeof HelpRoute
  '/lang': typeof LangRoute
  '/subscribe': typeof SubscribeRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/account' | '/help' | '/lang' | '/subscribe'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/account' | '/help' | '/lang' | '/subscribe'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/account'
    | '/help'
    | '/lang'
    | '/subscribe'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AccountRoute: typeof AccountRoute
  HelpRoute: typeof HelpRoute
  LangRoute: typeof LangRoute
  SubscribeRoute: typeof SubscribeRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/subscribe': {
      id: '/subscribe'
      path: '/subscribe'
      fullPath: '/subscribe'
      preLoaderRoute: typeof SubscribeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/lang': {
      id: '/lang'
      path: '/lang'
      fullPath: '/lang'
      preLoaderRoute: typeof LangRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/help': {
      id: '/help'
      path: '/help'
      fullPath: '/help'
      preLoaderRoute: typeof HelpRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/account': {
      id: '/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AccountRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AccountRoute: AccountRoute,
  HelpRoute: HelpRoute,
  LangRoute: LangRoute,
  SubscribeRoute: SubscribeRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
