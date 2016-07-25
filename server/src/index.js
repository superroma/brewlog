import React from 'react';
import {render} from 'react-dom'
import getRoutes from './routes'

const routes = getRoutes()

render(routes, document.getElementById('root'));