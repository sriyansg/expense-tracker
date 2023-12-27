import React from 'react';
import { Pie, Doughnut, Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function IncomeCategoryCharts() {
    const { incomes } = useGlobalContext();

    // Aggregate total income by category
    const categories = {};
    incomes.forEach((income) => {
        const category = income.category || 'Uncategorized';
        if (!categories[category]) {
            categories[category] = 0;
        }
        categories[category] += income.amount;
    });

    // Create data for the pie chart (Income Categories)
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

    // Create data for the doughnut chart (Income Categories)
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

    // Create data for the radar chart (Income Categories)
    const radarCategories = {};
    incomes.forEach((income) => {
        const category = income.category || 'Uncategorized';
        if (!radarCategories[category]) {
            radarCategories[category] = [];
        }
        radarCategories[category].push(income.amount);
    });

    // Create data for the radar chart (Income Categories)
    const radarChartData = {
        labels: Object.keys(radarCategories),
        datasets: Object.keys(radarCategories).map((category, index) => ({
            label: category,
            data: radarCategories[category],
            backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.4)`,
            borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 1)`,
            borderWidth: 1,
        })),
    };

    // Generate random colors for the pie, doughnut, and radar chart segments
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

    // Options for the pie, doughnut, and radar charts, including the title
    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Income Distribution by Category',
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
                <Radar data={radarChartData} options={chartOptions} />
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

export default IncomeCategoryCharts;
