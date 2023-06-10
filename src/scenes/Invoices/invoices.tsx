import { Box, Typography, useTheme } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";

const Invoices = () => {
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
      field: "cost",
      headerName: "Cost",
      renderCell: (params) => {
            return (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
            </Typography>  
          );
        }
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <Box>
      <Header title="INVOICES" subTitle="Welcome to your Invoicres"></Header>
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
            textAlign: "center",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[600],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          columns={columns}
          rows={mockDataInvoices}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Invoices;