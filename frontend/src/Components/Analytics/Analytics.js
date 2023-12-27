import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
// import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart2 from './Chart2';

function Analytics() {
    const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <AnalyticsStyled>
            <InnerLayout>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart2 />
                    </div>
                    <div className="history-con">
                        <div className="income">
                            <h3>Income</h3>
                            <p>
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h3>Expense</h3>
                            <p>
                                {dollar} {totalExpenses()}
                            </p>
                        </div>
                        <div className="balance">
                            <h3>Net Balance</h3>
                            <p>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                        <h2>
                            
                        </h2>
                    </div>
                </div>
            </InnerLayout>
        </AnalyticsStyled>
    )
}
const AnalyticsStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-rows: auto 1fr; 
        gap: 2rem;
        background: #2a2e32;
        
        .history-con {
            display: flex; 
            justify-content: space-between; 
            background: #4a4e52; 
            padding: 1rem; 
            margin-bottom: 2rem; 

            .income,
            .expense,
            .balance {
                flex: 1; 
                text-align: center; 
                color: #fff; 
            }
        }

        .chart-con {
            grid-row: 2 / 3; 
            height: 400px;
        }
    }
`;

export default Analytics;