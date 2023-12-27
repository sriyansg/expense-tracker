import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
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

    // Create data for the pie chart (Expense Categories)
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

    // Create data for the doughnut chart (Expense Categories)
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

    // Generate random colors for the pie and doughnut chart segments
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

    // Options for the pie and doughnut charts, including the title
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
        </ChartContainer>
    );
}

const ChartContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const ChartStyled = styled.div`
    background: rgb(54, 59, 64);
    border: 2px solid #333333;
    box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 50vh;
`;

export default ExpenseCategoryCharts;
