import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {
    App,
    Home,
    BatchOverview,
} from 'containers'

export default(store) => {
    return (
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='batches/:id' component={BatchOverview}/>
        </Route>
    )
}