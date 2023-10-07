// src/GithubService.ts

import axios, { AxiosResponse } from 'axios';

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

export class GithubService {
    private apiUrl = 'http://localhost:5000/api/github'; // Replace with your local API endpoint

    async getCommits(owner: string, repo: string): Promise<Commit[]> {
        try {
            const response: AxiosResponse<Commit[]> = await axios.get(
                `${this.apiUrl}/commits`,
                {
                    params: { owner, repo },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
