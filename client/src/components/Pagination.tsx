import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ChangeEvent } from "react";

function PaginationControlled({ total }: { total: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: "#d0d7e0",
            fontSize: "1.2rem",
            margin: "0 7px",
            minWidth: "45px",
            height: "45px",
            "&.Mui-selected": {
              backgroundColor: "#4F46E5",
              color: "white",
              "&:hover": {
                backgroundColor: "#4338CA",
              },
            },
            "&:hover": {
              backgroundColor: "#34343b",
            },
          },
        },
      },
    },
  });

  const handleChange = (_event: ChangeEvent<unknown>, page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pageNumber", page.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={total}
          page={Number(searchParams.get("pageNumber") || 1)}
          onChange={handleChange}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default PaginationControlled;
