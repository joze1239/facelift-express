const { default: faceliftsdk } = require('../faceliftsdk');

const PROJECT_ID = 'u8nZUPjPf09StQej';
const API_KEY =
  'cGKK72x7BONITHlerncxPYC7kPWbHeJ7XzWmPp3whbnxyHEhGtcntVVeg74gGdD8';

module.exports = {
  async getClient() {
    const client = await faceliftsdk.createFaceliftClient({
      api_key: API_KEY,
      project_id: PROJECT_ID
    });
    return client;
  },

  async list(contentIdentifier) {
    const client = await faceliftsdk.createFaceliftClient({
      api_key: API_KEY,
      project_id: PROJECT_ID
    });
    const tectContentProvider = client.createContentProvider(
        contentIdentifier
    );
    return await tectContentProvider.list();
  },
  async get(contentIdentifier, identifier) {
    const client = await faceliftsdk.createFaceliftClient({
      api_key: API_KEY,
      project_id: PROJECT_ID
    });
    const tectContentProvider = client.createContentProvider(
        contentIdentifier
    );
    const data = await tectContentProvider.get(
      identifier
    );
    return data;
  }
};
