import React from 'react';
import { Pie, Doughnut, Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function ExpenseCategoryCharts() {
    const { expenses } = useGlobalContext();

    // Aggregate total expenses by category
    const categories = {};
    expenses.forEach((expense) => {
        const category = expense.category || 'Uncategorized';
        if (!categories[category]) {
            categories[category] = 0;
        }
        categories[category] += expense.amount;
    });

    // Create data  (Expense Categories)
    const pieChartData = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: getRandomColors(Object.keys(categories).length),
                borderWidth: 1,
            },
        ],
    };

    // Create data (Expense Categories)
    const doughnutChartData = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: getRandomColors(Object.keys(categories).length),
                borderWidth: 1,
            },
        ],
    };

    // Create data (Expense Categories)
    const radarChartData = {
        labels: Object.keys(categories),
        datasets: [
            {
                label: 'Expense Distribution',
                data: Object.values(categories),
                backgroundColor: 'rgba(75, 192, 192, 0.9)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true,

            },
        ],
    };
    const radarChartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Income Distribution by Category',
            },
        },
        scales: {
            r: {
                pointLabels: {
                    display: true, // Hide intensity values on the scale
                },
                ticks: {
                    display: false, // Hide numerical labels on the scale
                },
            },
        },
    };

    function getRandomColors(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.7)`;
            colors.push(randomColor);
        }
        return colors;
    }

    // Options for the charts, including the title
    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Expense Distribution by Category',
            },
        },
    };

    return (
        <ChartContainer>
            <ChartStyled>
                <Pie data={pieChartData} options={chartOptions} />
            </ChartStyled>
            <ChartStyled>
                <Doughnut data={doughnutChartData} options={chartOptions} />
            </ChartStyled>
            <ChartStyled>
                <Radar data={radarChartData} options={radarChartOptions}/>
            </ChartStyled>
        </ChartContainer>
    );
}

const ChartContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%; 
`;

const ChartStyled = styled.div`
    flex: 1; 
    background: rgb(54, 59, 64);
    border: 2px solid #333333;
    box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.06);
    padding: 1rem;
    border-radius: 20px;
`;


export default ExpenseCategoryCharts;
