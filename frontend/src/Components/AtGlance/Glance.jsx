import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import styled from 'styled-components';

function Glance() {
    const { totalExpenses, totalIncome, getCategoryWithMostIncome, mostSpentCategory, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    const percentageSpent = ((totalExpenses() / totalIncome()) * 100).toFixed(2);


    return (
        <GlanceStyled>
            <h2>Spending Overview</h2>
            <div className="history">
                <div>
                    <p>
                        You earned a total of <b>₹{totalIncome()}</b> out of which you spent <b>₹{totalExpenses()}</b> leaving you with <b>₹{totalBalance()}</b>.
                    </p>
                </div>
                <div>
                    <p>
                        You spent most of your money in <b>{mostSpentCategory()}</b>
                    </p>
                </div>

                <div>
                    <p>
                        You earned the most from your <b>{getCategoryWithMostIncome()}</b>
                    </p>

                </div>
                <div>
                    <p>
                        You spent about <b>{percentageSpent}</b>   % of the money that you earned.
                    </p>

                </div>
                <div>
                    <p>
                        You managed to save <b>₹{totalBalance()}</b>, Keep saving!
                    </p>
                </div>

                
            </div>
        </GlanceStyled>
    );
}

const GlanceStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    padding: 1rem;
    text-align: center;
  }
  .history {
    gap: 1rem;  // Add gap for spacing between history containers
  }
  .history > div {
    background: #363b40;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 3rem;
    font-size:1.2em;
    margin: 0.5rem;  // Adjust the margin as needed
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:orange;
  }
`;


export default Glance;
