// This for analytics
import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, PieController, BarElement, RadialLinearScale,} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import { groupDataByMonth } from '../../utils/dateFormat';
import IncomeCategoryCharts from './IncomeCatChart';
import ExpenseCategoryPieChart from './ExpenseCatPie';

ChartJs.register(   
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PieController,
    BarElement,
    RadialLinearScale
);

function Chart2() {
    const { incomes, expenses } = useGlobalContext();

    
const lineChartData = {
    labels: incomes.map((inc) => dateFormat(inc.date)),
    datasets: [
        {
            label: 'Income',
            data: incomes.map((income) => income.amount),
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
            borderColor: 'rgba(75, 192, 192, 1)', // Dark green
            tension: 0.2,
        },
        {
            label: 'Expenses',
            data: expenses.map((expense) => expense.amount),
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
            borderColor: 'rgba(255, 99, 132, 1)', // Dark red
            tension: 0.2,
        },
    ],
};
const lineChartOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Income and Expenses Over Time', // Set the title for the line chart
        },
        legend: {
            position: 'bottom',
        },
    },
};

const barChartData = {
    labels: Object.keys(groupDataByMonth(incomes)),
    datasets: [
        {
            label: 'Income',
            data: Object.values(groupDataByMonth(incomes)),
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
            borderColor: 'rgba(75, 192, 192, 1)', // Dark green
            borderWidth: 1,
        },
        {
            label: 'Expenses',
            data: Object.values(groupDataByMonth(expenses)),
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
            borderColor: 'rgba(255, 99, 132, 1)', // Dark red
            borderWidth: 1,
        },
    ],
};
const barChartOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Monthly Income and Expenses', // Set the title for the bar chart
        },
    },
};

const pieChartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
        {
            data: [
                incomes.reduce((total, income) => total + income.amount, 0),
                expenses.reduce((total, expense) => total + expense.amount, 0),
            ],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        },
    ],
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Income and Expenses', // Set the title for the pie chart
            },
            legend: {
                position: 'bottom',
            },
        },
    },
};

    return (
        <ChartContainer>
            <ChartStyled>
                <Line data={lineChartData} options={lineChartOptions}/>
            </ChartStyled>
            <ChartStyled>
                <Pie data={pieChartData} options={pieChartData.options} />
            </ChartStyled>  
            <ChartStyled>
                <Bar data={barChartData} options={barChartOptions}/>
            </ChartStyled>
            
            <IncomeCategoryCharts />
            <ExpenseCategoryPieChart />
        </ChartContainer>
    );
}

const ChartContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1rem;
    
`;


const ChartStyled = styled.div`
    background: rgb(54, 59, 64);
    border: 2px solid #333333;
    box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.06);
    border-radius: 20px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Chart2;