import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

const API_URL = 'api/v1';

export const dataProvider: DataProvider = {
    
    getList: async (resource, params) => {
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`);
        const data = response.json;
        const total = data.length;
        return {data, total};
    },
  
    getOne: async (resource, params) => {
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`);
        const data = response.json;
        return {data};
    },

    create: async (resource, params) => {
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        const data = response.json;
        return { data };
    },

    update: async (resource, params) => {
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        const data = response.json;
        return { data };
    },

    delete: async (resource, params) => {
        const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`, {
            method: 'DELETE',
        });
        const data = response.json;
        return { data };
    },

};