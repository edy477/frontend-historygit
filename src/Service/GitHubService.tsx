// src/GithubService.ts

import axios, { AxiosResponse } from 'axios';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
export type Commit = {

    sha: string;
    author: {
        name: string;
        email: string;
    };
    commit: {
        message: string;
        author: {
            date: string;
        };
    };

}

/*
export interface Commit {
    sha: string;
    author: {
        name: string;
        email: string;
    };
    commit: {
        message: string;
        author: {
            date: string;
        };
    };
}
*/
export class GithubService {
    private apiUrl = 'http://localhost:3000'; // Replace with your local API endpoint

    async getCommits(owner: string, repo: string): Promise<Commit[]> {

        try
        {
            const response: AxiosResponse<Commit[]> = await axios.get(
                `${this.apiUrl}/commits/${owner}/${repo}`

            );
            return response.data;

        }catch (e) {
            throw  error;
        }

       /* try {
            const response: AxiosResponse<Commit[]> = await axios.get(
                `${this.apiUrl}/commits`,
                {
                    params: { owner, repo },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }*/
    }


    async getCommitsPulls(owner: string, repo: string, ref: string): Promise<Commit[]> {

        try
        {
            const response: AxiosResponse<Commit[]> = await axios.get(
                `${this.apiUrl}/${owner}/${repo}/${ref}/pulls`

            );
            return response.data;

        }catch (e) {
            throw  error;
        }

        /* try {
             const response: AxiosResponse<Commit[]> = await axios.get(
                 `${this.apiUrl}/commits`,
                 {
                     params: { owner, repo },
                 }
             );
             return response.data;
         } catch (error) {
             throw error;
         }*/
    }
    async getCommit(owner: string, repo: string, ref: string): Promise<Commit[]> {

        try
        {
            const response: AxiosResponse<Commit[]> = await axios.get(
                `${this.apiUrl}/commits/${owner}/${repo}/${ref}`

            );
            return response.data;

        }catch (e) {
            throw  error;
        }

        /* try {
             const response: AxiosResponse<Commit[]> = await axios.get(
                 `${this.apiUrl}/commits`,
                 {
                     params: { owner, repo },
                 }
             );
             return response.data;
         } catch (error) {
             throw error;
         }*/
    }
}
