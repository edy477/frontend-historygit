
import {Box, Tab} from "@mui/material";
import {Tabs} from "@mui/material";
import {TabContext} from "@mui/lab";
import {TabList} from "@mui/lab";
import {TabPanel} from "@mui/lab";
import * as React from 'react';
import PageList from "./PageList.tsx";
import Selector from "./Selector.tsx";
import PageListFront from "./PageListFront.tsx";
function IndexPage() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return(

        <Box sx={{ width: '100%', typography: 'body1' }}>


            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Backend" value="1" />
                        <Tab label="Frontend" value="2" />

                    </TabList>
                </Box>
                <TabPanel value="1"><PageList/></TabPanel>
                <TabPanel value="2"><PageListFront/></TabPanel>

            </TabContext>
        </Box>



    )

}
// @ts-ignore
export default  IndexPage;
