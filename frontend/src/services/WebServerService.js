import api from '../utils/api';

const WebServerService = {
  getAllServers: async () => {
    const response = await api.get('/web-servers');
    return response.data;
  },
  getServerById: async (id) => {
    const response = await api.get(`/web-servers/${id}`);
    return response.data;
  },
  createServer: async (serverData) => {
    const response = await api.post('/web-servers', serverData);
    return response.data;
  },
  updateServer: async (id, serverData) => {
    const response = await api.put(`/web-servers/${id}`, serverData);
    return response.data;
  },
  deleteServer: async (id) => {
    const response = await api.delete(`/web-servers/${id}`);
    return response.data;
  },
};

export default WebServerService;
