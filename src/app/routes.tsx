import * as React from 'react'
import { RouteProps } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import NotFound from './containers/NotFound'
import Decisions from './containers/Decisions'

export const routes: RouteProps[] = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/about',
    component: About
},{
    path: '/decisions',
    component: Decisions
}, {
    path: '*',
    component: NotFound
}]
