import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PieController,
} from 'chart.js';

import { Line} from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';



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
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const lineChartData = {
        labels: incomes.map((inc) => dateFormat(inc.date)),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'green',
                tension: 0.2,
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: 'red',
                tension: 0.2,
            },
        ],
    };

    

    return (
        <ChartContainer>
            <ChartStyled>
                <Line data={lineChartData} />
            </ChartStyled>
            
        </ChartContainer>
    );
}

const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ChartStyled = styled.div`
    background: rgb(54, 59, 64);
    border: 2px solid #333333;
    box-shadow: 0px 1px 15px rgba(255, 255, 255, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
