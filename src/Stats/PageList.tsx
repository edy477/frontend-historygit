import * as React from 'react';
import Table from '@mui/material/Table';
import {TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {Commit, GithubService} from "../Service/GitHubService.tsx";
import Paper from '@mui/material/Paper';

const githubService = new GithubService();

function PageList ()  {

    const [commits, setCommits] = useState<any[]>([]);
    const owner = 'edy477';
    const repo       = 'backend-githistory'
    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const data = await githubService.getCommits(owner, repo);
                setCommits(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching commits:', error);
            }
        };

        fetchCommits();
    }, [owner, repo]);


    console.log(commits)

    commits.map(el => console.log(el.sha))

    // @ts-ignore
    return (
        <Box>

<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>SHA/ TAG </TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Commit</TableCell>
          </TableRow>
        </TableHead>
   <TableBody>
       {commits?.map(commit => (
           <TableRow key={commit.sha.toString()}>
               <TableCell align="right">{commit.sha.toString()}</TableCell>
               <TableCell align="right">{commit.author.toString()}</TableCell>
               <TableCell align="right">{commit.commit.message.toString()}</TableCell>
               <TableCell align="right">{commit.commit.committer.date.toString()}</TableCell>
           </TableRow>
       ))}

   </TableBody>
    </Table>
</TableContainer>


</Box>

    )




}
export default  PageList;