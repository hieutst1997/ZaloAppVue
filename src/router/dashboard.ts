const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        children: [
            {
                path: 'chart',
                name: 'chart',
                component: () => import('@/views/dashboard/menuChartOne/index.vue'),
            },
        ]
    }
]
export default dashboardRoutes;
