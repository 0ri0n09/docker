import { useApiFetch } from '../useApiFetch';

const API_URL = process.env.API_URL || 'http://localhost:3333/users';

export const useUser = {
    getUsers: async () => {
        return await useApiFetch(`${API_URL}`);
    },

    getUser: async (userId: number) => {
        return await useApiFetch(`${API_URL}/${userId}`);
    },

    createUser: async (userData: any) => {
        return await useApiFetch(`${API_URL}`, {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    },

    updateUser: async (userId: number, userData: any) => {
        return await useApiFetch(`${API_URL}/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(userData),
        });
    },

    deleteUser: async (userId: number) => {
        return await useApiFetch(`${API_URL}/${userId}`, {
            method: 'DELETE',
        });
    },
};
