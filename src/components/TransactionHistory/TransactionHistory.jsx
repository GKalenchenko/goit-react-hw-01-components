import PropTypes from 'prop-types';
import { Table, Params, Transaction } from './TransactionHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <Params>Type</Params>
          <Params>Amount</Params>
          <Params>Currency</Params>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Transaction type={item.type}>{item.type}</Transaction>
              <Transaction>{item.amount}</Transaction>
              <Transaction>{item.currency}</Transaction>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
