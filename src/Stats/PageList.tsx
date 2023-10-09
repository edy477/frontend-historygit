import * as React from 'react';
import Table from '@mui/material/Table';
import {styled, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {Commit, GithubService} from "../Service/GitHubService.tsx";
import Paper from '@mui/material/Paper';
import {Stack} from "@mui/material";

import {Typography} from  '@mui/material';
import Selector from "./Selector.tsx";
import GitHubCommitGrid from "./GitHubCommitGrid.tsx";

// @ts-ignore
const font = "'Inter', sans-serif";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      //  backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
        fontWeight: "Bold",

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: font,

    },
}));

const githubService = new GithubService();

function PageList ()  {

    const [commits, setCommits] = useState<any[]>([]);
    const option = ["master","main"]

    const owner = 'edy477';
    const repo       = 'backend-githistory'
    useEffect(() => {
        // Axios request to fetch the initial array of objects
        async function fetchDataFromApi() {
            try {
                const response = await githubService.getCommits(owner, repo);
                return response;
            } catch (error) {
                throw error;
            }
        }

        // Axios request to fetch data for an individual item based on 'id'
        async function fetchItemData(id: string) {
            try {
                const response =await githubService.getCommit(owner, repo, id);
                return response;
            } catch (error) {
                throw error;
            }
        }

        // Merge the data from individual requests into a larger array
        async function mergeData() {
            try {
                const initialData = await fetchDataFromApi();
                const mergedData = [];

                for (const item of initialData) {
                    const itemData = await fetchItemData(item.sha);
                    mergedData.push(itemData);
                }

                // Update the state with the merged data
                setCommits(mergedData);
            } catch (error) {
                console.error('Error fetching or merging data:', error);
            }
        }

        // Call the mergeData function in the useEffect
        mergeData();
    }, []); // The empty dependency array means this effect runs once, similar to componentDidMount





    // @ts-ignore
    return (
        <Box>


<GitHubCommitGrid owner={owner} repo={repo}/>

<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <StyledTableCell>SHA/ TAG </StyledTableCell>
              <StyledTableCell>Author</StyledTableCell>
              <StyledTableCell>Commit</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>URL</StyledTableCell>
              <StyledTableCell>Stats</StyledTableCell>

          </TableRow>
        </TableHead>
   <TableBody>
       {commits?.map(commit => (
           <TableRow key={commit.sha.toString()}>
               <TableCell align="right">{commit.sha.toString()}</TableCell>
               <TableCell align="right">{commit.author.login.toString()}</TableCell>
               <TableCell align="right">{commit.commit.message.toString()}</TableCell>
               <TableCell align="right">{commit.commit.committer.date.toString()}</TableCell>
               <TableCell align="right">{commit.commit.url.toString()}</TableCell>
               <TableCell align="right"><Stack direction="row" spacing={1}>
                   <Typography variant="button" display="block" gutterBottom>
                      Total:  {commit.stats.total.toString()}
                   </Typography>
                   <Typography variant="button" display="block" gutterBottom>
                       Total:  {commit.stats.additions.toString()}
                   </Typography>
                   <Typography variant="button" display="block" gutterBottom>
                       Total:  {commit.stats.deletions.toString()}
                   </Typography>
               </Stack></TableCell>


           </TableRow>
       ))}

   </TableBody>
    </Table>
</TableContainer>


</Box>

    )




}
export default  PageList;