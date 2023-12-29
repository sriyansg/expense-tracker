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
    const radarChartData = {
        labels: Object.keys(categories),
        datasets: [
            {
                label: 'Income Distribution',
                data: Object.values(categories),
                backgroundColor: 'rgba(255, 206, 86, 0.9)',
                borderColor: 'rgba(255, 206, 86, 1)',
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
            <Radar data={radarChartData} options={radarChartOptions} />
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
    padding: 1rem 0rem 1rem 0rem;
    border-radius: 20px;
`;


export default IncomeCategoryCharts;
