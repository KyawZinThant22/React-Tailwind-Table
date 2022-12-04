import Divider from "./components/Divider";
import TableContainer from "./components/TableContainer";
import TableHead from "./components/TableHead";

function App() {
  return (
    <TableContainer className="w-[80rem]">
      <TableHead />
      <Divider className="mt-12" />
    </TableContainer>
  );
}

export default App;
