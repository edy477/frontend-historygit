import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Commit, GithubService} from "../Service/GitHubService.tsx";
interface Commit {
    sha: string;
    author: string;
    message: string;
}

interface GridProps {
    owner: string,
    repo: string,


}


const githubService = new GithubService();



const GitHubCommitGrid: React.FC<GridProps> = ({owner, repo}) => {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        // Fetch GitHub commits data here and update the 'commits' state.
        // Replace this with your actual API call to fetch GitHub commits.
        fetchGitHubCommits();
    }, []);

    const fetchGitHubCommits = async () => {
        try {
            const response = await    githubService.getCommits(owner, repo); //fetch('https://api.github.com/repos/your-username/your-repo/commits');
            if (response.ok) {
                const data = await response.json();
                setCommits(data.map((commit: any) => ({
                    sha: commit.sha,
                    author: commit.commit.author.name,
                    message: commit.commit.message,
                })));
            }
        } catch (error) {
            console.error('Error fetching GitHub commits:', error);
        }
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {commits.map((commit, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Commit SHA: {commit.sha}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Author: {commit.author}
                                </Typography>
                                <Typography variant="body2">
                                    Message: {commit.message}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default GitHubCommitGrid;