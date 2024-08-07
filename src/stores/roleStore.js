import { defineStore } from 'pinia';
import axios from 'axios';

export const useRoleStore = defineStore({
    id: 'role',
    state: () => ({
        roles: [],
        usersRoles: [],
        message: null,
    }),

    actions: {
        async getRoles() {
            const response = await axios.get(`/roles`);
            if(response.data.status === 'error') {
                this.message = response.data
            } else {
                this.message = null;
                this.roles = response.data;
            }
        },


        async getUsersRoles() {
            const response = await axios.get(`/users/roles/`);
            if(response.data.status === 'error') {
                this.message = response.data
            } else {
                this.message = null;
                this.usersRoles = response.data;
            }
        },        

        async deleteRole(data) {
            try {                
            const response =  await axios.delete(`/roles/${data.id}`);
            this.message = response.data
            await axios.get(`/roles`)
            
            } catch (error) {
                let errorMessage = error.response.data.message
                this.message = { status:'error', message: errorMessage.replaceAll('"', '')}
                console.log(error.response)
            }
        },        

        async updateRole(data) {
            try {
            const response =  await axios.patch(`/roles/${data.id}`, data);
            this.message = response.data
            await axios.get(`/roles`)
            
            } catch (error) {
                let errorMessage = error.response.data.message
                this.message = { status:'error', message: errorMessage.replaceAll('"', '')}
                console.log(error.response)
            }   
        },


        async createRole(data) {
            try {
            const response =  await axios.post('/roles/',
                { 
                    name: data.name, 
                }
            );
            this.message = response.data
            await axios.get(`/roles`)
            
            } catch (error) {
                let errorMessage = error.response.data.message
                this.message = { status:'error', message: errorMessage.replaceAll('"', '')}
                console.log(error.response)
            }
        },
        
        async doneSuccessfully(response) {
            if(response.data.status === 'success'){                
                const response = await axios.get(`/roles`)
                if(response.data.status !== 'error') {
                    this.roles = response.data;                 }
            }
        },

        clearSuccessMessage() {
            this.message = null
        }
    }
})