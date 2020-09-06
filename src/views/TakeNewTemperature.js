import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NewTemperatureForm from "../components/take-new-temperature/NewTemperatureForm";
import SidebarActions from "../components/take-new-temperature/SidebarActions";


const TakeNewTemperature = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Submit Temperature For Today" subtitle={new Date().toDateString()} className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <NewTemperatureForm />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <SidebarActions />
      </Col>
    </Row>
  </Container>
);

export default TakeNewTemperature;
