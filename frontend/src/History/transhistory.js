// transhistory.js

import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function TransHistory() {
    const { allHistory } = useGlobalContext();

    const history = allHistory();
    
    return (
        <TransHistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                );
            })}
        </TransHistoryStyled>
    );
}


const TransHistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
    padding:1rem;
    text-align: center;
}
.history-item {
    background: #363b40;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    margin: 0.5rem; /* Adjust the margin as needed */
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;

export default TransHistory;
