import BaseClient from '@/api/BaseClient';

export default class TalentListApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async getTalentListRecommend() {
    const result = await this.clientInstance.get('/api/home/recommend');
    return result;
  }

  async getTalentListBest() {
    const result = await this.clientInstance.get('/api/home/best');

    return result;
  }
}
