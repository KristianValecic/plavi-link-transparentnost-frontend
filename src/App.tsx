import { Col, Row } from "antd";
import TransparentnostSearch from "./components/TransparentnostSearch";
import ResultTable from "./components/ResultTable";

function App() {
  return (
    <>
      <Col>
        <Row>
          <TransparentnostSearch />
        </Row>
        <Row>
          <ResultTable />
        </Row>
      </Col>
    </>
  );
}

export default App;
