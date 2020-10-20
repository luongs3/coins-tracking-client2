import React, {Component} from 'react';
import './App.css';
import { Table } from 'antd';
import 'antd/dist/antd.dark.css'; // Introduce the official dark less style entry file


import axios from 'axios'

const dataSource = [
  {
    "id": 130,
    "key": 130,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xd5b8db1e794e1494d10a11ec593fceb1b2fc8cb595a7ee969b27acd388185629",
    "block": 11070648,
    "timestamp": "2020-10-17T02:08:58.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "",
    "direction": "OUT",
    "to": "0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
    "to_name": " 0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
    "value_eth": 0,
    "transaction_fee": 0.0070378,
    "transaction_fee_usd": 0,
    "status": "Fail with error 'UnAuthorized'",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": []
  },
  {
    "id": 131,
    "key": 131,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xe48954a5329b509ce552b9d00c6b338229a590832eb7d2de32c22939c3bd3e6e",
    "block": 11070647,
    "timestamp": "2020-10-17T02:08:41.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
    "to_name": " 0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
    "value_eth": 0,
    "transaction_fee": 0.0067296,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 111,
        "transaction_id": 131,
        "txn_hash": "0xe48954a5329b509ce552b9d00c6b338229a590832eb7d2de32c22939c3bd3e6e",
        "from": "0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 0,
        "input_coin": "",
        "to": "",
        "to_name": "To",
        "output": 142593.75,
        "output_coin": "Rare Pepe (rPepe)",
        "output_coin_address_hash": "0x0e9b56d2233ea2b5883861754435f9c51dbca141",
        "exchange": "",
        "action": "From",
        "action_full": "From 0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071 TO undefined For 142593.75 142,593.75 ($4,306.18)"
      },
      {
        "id": 112,
        "transaction_id": 131,
        "txn_hash": "0xe48954a5329b509ce552b9d00c6b338229a590832eb7d2de32c22939c3bd3e6e",
        "from": "0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 0,
        "input_coin": "",
        "to": "",
        "to_name": "To",
        "output": 3656.25,
        "output_coin": "Rare Pepe (rPepe)",
        "output_coin_address_hash": "0x0e9b56d2233ea2b5883861754435f9c51dbca141",
        "exchange": "",
        "action": "From",
        "action_full": "From 0x5b2dcc96a0d5fb593e523b8eb79cfc0509021071 TO undefined For 3656.25 3,656.25 ($110.41)"
      }
    ]
  },
  {
    "id": 132,
    "key": 132,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xc311349f2ea143ee3b2d5c90d8301fd4f134ba862228772a38f9792cd39d7613",
    "block": 11070174,
    "timestamp": "2020-10-17T00:27:11.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
    "to_name": " Balancer: Exchange Proxy 2",
    "value_eth": 1,
    "transaction_fee": 0.01265724,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 113,
        "transaction_id": 132,
        "txn_hash": "0xc311349f2ea143ee3b2d5c90d8301fd4f134ba862228772a38f9792cd39d7613",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 1,
        "input_coin": "Ether",
        "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
        "to_name": " Balancer: Exchange Proxy 2",
        "output": 2.3585985157769884,
        "output_coin": "UNI-V2",
        "output_coin_address_hash": "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
        "exchange": "Balancer",
        "action": "Swap",
        "action_full": "Swap 1 Ether for 2.3585985157769884 UNI-V2 on Balancer"
      }
    ]
  },
  {
    "id": 133,
    "key": 133,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xd58a91c7c7351def6d0983ce0c80d8a602a12a9a6ae7db41db95015c5be4cb4d",
    "block": 11070171,
    "timestamp": "2020-10-17T00:26:12.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
    "to_name": " Balancer: Exchange Proxy 2",
    "value_eth": 1,
    "transaction_fee": 0.01265724,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 114,
        "transaction_id": 133,
        "txn_hash": "0xd58a91c7c7351def6d0983ce0c80d8a602a12a9a6ae7db41db95015c5be4cb4d",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 1,
        "input_coin": "Ether",
        "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
        "to_name": " Balancer: Exchange Proxy 2",
        "output": 3.121235978699228,
        "output_coin": "UNI-V2",
        "output_coin_address_hash": "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
        "exchange": "Balancer",
        "action": "Swap",
        "action_full": "Swap 1 Ether for 3.121235978699228 UNI-V2 on Balancer"
      }
    ]
  },
  {
    "id": 134,
    "key": 134,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xa4c179b08a92a9ba508e0e2398b945aae9950132a1ec70d65d19dcdf405dec4e",
    "block": 11070167,
    "timestamp": "2020-10-17T00:25:34.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
    "to_name": " Balancer: Exchange Proxy 2",
    "value_eth": 1,
    "transaction_fee": 0.01215702,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 115,
        "transaction_id": 134,
        "txn_hash": "0xa4c179b08a92a9ba508e0e2398b945aae9950132a1ec70d65d19dcdf405dec4e",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 1,
        "input_coin": "Ether",
        "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
        "to_name": " Balancer: Exchange Proxy 2",
        "output": 4.336137753662198,
        "output_coin": "UNI-V2",
        "output_coin_address_hash": "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
        "exchange": "Balancer",
        "action": "Swap",
        "action_full": "Swap 1 Ether for 4.336137753662198 UNI-V2 on Balancer"
      }
    ]
  },
  {
    "id": 135,
    "key": 135,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0x2366e5f9a89bb8ac83266edc2896f1190cbe50adc0420fb899183c8344e19b90",
    "block": 11070162,
    "timestamp": "2020-10-17T00:23:39.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
    "to_name": " Balancer: Exchange Proxy 2",
    "value_eth": 0.362229957017281,
    "transaction_fee": 0.01517436,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 116,
        "transaction_id": 135,
        "txn_hash": "0x2366e5f9a89bb8ac83266edc2896f1190cbe50adc0420fb899183c8344e19b90",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 0.3605003346107332,
        "input_coin": "Ether",
        "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
        "to_name": " Balancer: Exchange Proxy 2",
        "output": 2,
        "output_coin": "UNI-V2",
        "output_coin_address_hash": "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
        "exchange": "Balancer",
        "action": "Swap",
        "action_full": "Swap 0.36050033461073316 Ether for 2 UNI-V2 on Balancer"
      }
    ]
  },
  {
    "id": 136,
    "key": 136,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0x84765fdbae6f87d7b263da93cbf916056b948c46b1210b18c7e5c20fc125fe76",
    "block": 11070160,
    "timestamp": "2020-10-17T00:23:30.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
    "to_name": " Balancer: Exchange Proxy 2",
    "value_eth": 0.585828058629257,
    "transaction_fee": 0.01444302,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 117,
        "transaction_id": 136,
        "txn_hash": "0x84765fdbae6f87d7b263da93cbf916056b948c46b1210b18c7e5c20fc125fe76",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 0.5858280586292576,
        "input_coin": "Ether",
        "to": "0x3e66b66fd1d0b02fda6c811da9e0547970db2f21",
        "to_name": " Balancer: Exchange Proxy 2",
        "output": 4,
        "output_coin": "UNI-V2",
        "output_coin_address_hash": "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
        "exchange": "Balancer",
        "action": "Swap",
        "action_full": "Swap 0.5858280586292576 Ether for 4 UNI-V2 on Balancer"
      }
    ]
  },
  {
    "id": 137,
    "key": 137,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0x43ffd572993247cae4e8fe823594de9915b6060730aebb0cca3fceeb056c629c",
    "block": 11069910,
    "timestamp": "2020-10-16T23:24:09.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    "to_name": " Uniswap V2: Router 2",
    "value_eth": 50,
    "transaction_fee": 0.0109175,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 118,
        "transaction_id": 137,
        "txn_hash": "0x43ffd572993247cae4e8fe823594de9915b6060730aebb0cca3fceeb056c629c",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 50,
        "input_coin": "Ether",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "to_name": " Uniswap V2: Router 2",
        "output": 7511.091902621561,
        "output_coin": "HEZ",
        "output_coin_address_hash": "0xeef9f339514298c6a857efcfc1a762af84438dee",
        "exchange": "Uniswap",
        "action": "Swap",
        "action_full": "Swap 50 Ether for 7511.091902621561 HEZ on Uniswap"
      }
    ]
  },
  {
    "id": 138,
    "key": 138,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0xba2849fa84eaa9fbe828cdef5afea4e5bc315f41dde17ba0427935f177d808f3",
    "block": 11069887,
    "timestamp": "2020-10-16T23:19:23.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    "to_name": " Uniswap V2: Router 2",
    "value_eth": 50,
    "transaction_fee": 0.0109175,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 119,
        "transaction_id": 138,
        "txn_hash": "0xba2849fa84eaa9fbe828cdef5afea4e5bc315f41dde17ba0427935f177d808f3",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 50,
        "input_coin": "Ether",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "to_name": " Uniswap V2: Router 2",
        "output": 7571.293489494582,
        "output_coin": "HEZ",
        "output_coin_address_hash": "0xeef9f339514298c6a857efcfc1a762af84438dee",
        "exchange": "Uniswap",
        "action": "Swap",
        "action_full": "Swap 50 Ether for 7571.293489494582 HEZ on Uniswap"
      }
    ]
  },
  {
    "id": 139,
    "key": 139,
    "address": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "txn_hash": "0x304a45f6c8addbe38262c46941e272a95a8ce39064ab0e92ef3b727273790b38",
    "block": 11069870,
    "timestamp": "2020-10-16T23:15:03.000Z",
    "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
    "direction": "OUT",
    "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    "to_name": " Uniswap V2: Router 2",
    "value_eth": 50,
    "transaction_fee": 0.013101,
    "transaction_fee_usd": 0,
    "status": "Success",
    "nounce": 0,
    "gas_price": 0,
    "gas_price_gwei": 0,
    "actions": [
      {
        "id": 120,
        "transaction_id": 139,
        "txn_hash": "0x304a45f6c8addbe38262c46941e272a95a8ce39064ab0e92ef3b727273790b38",
        "from": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "from_name": "0xf1e8a3999e6c3bb9a518c3ef7f9bf621586a76ff",
        "input": 50,
        "input_coin": "Ether",
        "to": "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "to_name": " Uniswap V2: Router 2",
        "output": 7705.622844963006,
        "output_coin": "HEZ",
        "output_coin_address_hash": "0xeef9f339514298c6a857efcfc1a762af84438dee",
        "exchange": "Uniswap",
        "action": "Swap",
        "action_full": "Swap 50 Ether for 7705.622844963006 HEZ on Uniswap"
      }
    ]
  }
];

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
    return axios.get(`http://localhost:3000/transactions`)
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
