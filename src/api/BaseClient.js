import axios from 'axios';

class BaseClient {
  constructor() {
    const baseURL = 'https://colossus.wo.tc/';
    const apiKey = 'base64:RAG9+qN/a4vSj2JE8I4XVvR6p3I3xGre/8qgiVjkk3I=';

    this.instance = axios.create({
      baseURL,
      headers: {
        authorization: apiKey,
      },
    });
  }
}

export default BaseClient;
