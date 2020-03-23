import {rootRouteComponents, rootRoutes} from './root-routes'
import {personalRouteComponents,personalRoutes} from './personal-routes'
import {projectRouteComponents,projectRoutes} from './project-routes'

// NOTE: Ensure the order of the routes array and components array match
// Failure to do so will result in mismatched components to routes
const routes = [...rootRoutes, ...personalRoutes, ...projectRoutes];

// Avoid using spread operator with components to avoid copies
const routeComponents = [];
[rootRouteComponents, personalRouteComponents, projectRouteComponents].forEach(componentList => {
    componentList.forEach(component => {
        routeComponents.push(component)
    })
});

export { routes, routeComponents }



