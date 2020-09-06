import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

import CustomFileUpload from "../components-overview/CustomFileUpload";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  Card,
  CardBody,
  Col,
  Button,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class NewTemperatureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  render() {
    return (
      <Card small className="mb-3">
        <CardBody>
          <strong className="text-muted d-block mb-2">
            What is your temperature today?
          </strong>
          <InputGroup className="mb-3">
            <FormInput
              id="temperature"
              type="number"
              onClick={() => {
                this.setState({
                  checked:
                    document.getElementById("checkbox").checked &&
                    document.getElementById("temperature").value !== "" &&
                    document.getElementById("customFile2").value !== ""
                });
              }}
            />
            <InputGroupAddon type="append">
              <InputGroupText>Fahrenheit</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <strong className="text-muted d-block mb-2">
            Upload Proof of Your Temperature (Picture of thermometer, Apple
            Watch etc.)
          </strong>
          <CustomFileUpload
            onClick={() => {
              this.setState({
                checked:
                  document.getElementById("checkbox").checked &&
                  document.getElementById("temperature").value !== "" &&
                  document.getElementById("customFile2").value !== ""
              });
            }}
          />
          <Divider />
          <strong className="text-muted d-block mb-2 mt-3">
            Today or in the last 24 hours have you experienced new or worsening
            symptoms of any of the following? Select all that apply.
          </strong>
          <FormGroup Col>
            <FormControlLabel
              control={<Checkbox name="fever" color="primary" />}
              label="Feel like you have had a fever?"
            />
            <FormControlLabel
              control={<Checkbox name="chill" color="primary" />}
              label="Chills?"
            />
            <FormControlLabel
              control={<Checkbox name="bodypain" color="primary" />}
              label="Unexplained muscle pain/body aches?"
            />
            <FormControlLabel
              control={<Checkbox name="cough" color="primary" />}
              label="New or worsening cough?"
            />

            <FormControlLabel
              control={<Checkbox name="lossofsenses" color="primary" />}
              label="New loss of sense of taste or sense of smell?"
            />
            <FormControlLabel
              control={<Checkbox name="sorethroat" color="primary" />}
              label="Sore throat, different from your seasonal allergies?
          "
            />
            <FormControlLabel
              control={<Checkbox name="diarrhea" color="primary" />}
              label="New or worsening diarrhea (not consistent with chronic medical conditions)?"
            />
            <FormControlLabel
              control={<Checkbox name="none" color="primary" />}
              label="None of the above"
            />
          </FormGroup>
          <Divider />
          <FormControlLabel
            control={
              <Checkbox
                id="checkbox"
                onClick={() => {
                  this.setState({
                    checked:
                      document.getElementById("checkbox").checked &&
                      document.getElementById("temperature").value !== "" &&
                      document.getElementById("customFile2").value !== ""
                  });
                }}
                name="checkAttest"
                color="primary"
              />
            }
            label="I attest to the following:"
          />
          <Col sm="12" className="mb-3 ">
            <div>
              I will not come to campus if I have any symptoms of COVID-19
              described in this screening tool.
            </div>
            <div>
              If I develop any symptoms of COVID-19 while I am on campus, I will
              immediately leave campus.
            </div>
            <div>
              If I develop any symptoms of COVID-19, I will not return to campus
              until I have been cleared to do so.
            </div>
          </Col>
          <Button theme="accent" disabled={!this.state.checked}>
            Submit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default NewTemperatureForm;
