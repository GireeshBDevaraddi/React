import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

import { tokens } from "../../theme";

const Contacts = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef[] = [
      {
        field: "id",
        headerName: "ID",
        flex: 0.5,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "email",
        headerName: "Email-Id",
        flex: 1,
      },
      {
        field: "age",
        headerName: "Age",
      },
      {
        field: "phone",
        headerName: "Phone Number",
      },
      {
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
      },
      {
        field: "registrarId",
        headerName: "Registrar-Id",
      },
    ];
    return (
      <Box>
        <Header title="CONTACTS" subTitle="Welcome to your Contacts"></Header>
        <Box
          m="40px 0 0 20px"
          height="70vh"
          maxWidth="100%"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
              textAlign: "center"
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[600],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`
            }
          }}
        >
          <DataGrid columns={columns} rows={mockDataContacts} components={{ Toolbar: GridToolbar}}></DataGrid>
        </Box>
      </Box>
    );
}

export default Contacts;