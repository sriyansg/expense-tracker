import {dashboard, expenses, transactions, trend,analy,glancc} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Analytics",
        icon: analy,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "At a Glance",
        icon: glancc,
        link: "/dashboard",
    },

]