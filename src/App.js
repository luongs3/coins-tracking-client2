import React, {Component} from 'react';
import './App.css';
import { Table } from 'antd';
import 'antd/dist/antd.dark.css'; // Introduce the official dark less style entry file

import axios from 'axios'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'txn_hash',
    dataIndex: 'txn_hash',
    key: 'txn_hash',
    width: '20%',
    render: txn_hash => <a href={`https://etherscan.io/tx/${txn_hash}`}>{txn_hash}</a>
  },
  {
    title: 'actions',
    dataIndex: 'actions',
    key: 'actions',
    render: actions => (
      <ul>
        {actions.map(action => <li key={action.id}>{action.action_full}</li>)}
      </ul>
    )
  },
  {
    title: 'from_name',
    dataIndex: 'from_name',
    key: 'from_name',
    width: 100,
  },
  {
    title: 'direction',
    dataIndex: 'direction',
    key: 'direction',
  },
  {
    title: 'to_name',
    dataIndex: 'to_name',
    key: 'to_name',
  },
  {
    title: 'value_eth',
    dataIndex: 'value_eth',
    key: 'value_eth',
  },
  {
    title: 'timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
  {
    title: 'transaction_fee',
    dataIndex: 'transaction_fee',
    key: 'transaction_fee',
  },
];

class App extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    this.fetchTransactions().then(r => this.setState({
      transactions: r
    }));
  }

  fetchTransactions = () => {
    return axios.get(`http://localhost:3000/transactions?limit=50&page=0&order_by=timestamp&action=Swap`)
      .then(res => res.data)
  }

  render() {
    const { transactions } = this.state

    return (
      <div className="App">
        <Table
          dataSource={transactions} columns={columns}
          pagination={{ defaultPageSize: 30, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}/>;
        {/*<table>*/}
        {/*  <tbody>*/}
        {/*    {transactions.map((transaction, i) => (*/}
        {/*      <tr key={transaction.txn_hash}>*/}
        {/*        <td>{transaction.id}</td>*/}
        {/*        <td>{transaction.txn_hash}</td>*/}
        {/*      </tr>*/}
        {/*    ))}*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </div>
    )
  }
}

export default App;


// <table>
//   <tr>
//     <th>Id</th>
//     <th>Txn Hash</th>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>0x324832948</td>
//   </tr>
// </table>
