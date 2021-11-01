import React from 'react';

import axios from 'axios';

export default class Data extends React.Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const contacts = res.data;
        this.setState({contacts});
        console.log(contacts)
      })
  }}

