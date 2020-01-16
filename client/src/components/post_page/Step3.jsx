import React from "react";
import { Card, Dropdown, DropdownButton, Button } from "react-bootstrap";
import "./PostForm.css";

const Step3 = ({
  size,
  duration,
  easeOfAccess,
  recordFilterInfo,
  recordStateInfo,
  indoors,
  nextButton,
  backButton
}) => {
  let sizeText;
  let durationText;
  let frequencyText;

  let climateControlBoolean = indoors ? {} : { visibility: "hidden" };

  // climateControlDisplay = indoors ? (
  //   <div style={{}}>
  //     <ul id="indoorsList" className="p-1">
  //       <div className="custom-control custom-radio">
  //         <input
  //           type="radio"
  //           name="climateCustomRadio"
  //           className="custom-control-input"
  //           value={true}
  //           id="climateControl"
  //           onChange={e => recordStateInfo(e, "filters", "climateControl")}
  //         />
  //         <label className="custom-control-label" htmlFor="climateControl">
  //           Climate Control
  //         </label>
  //       </div>
  //       <div className="custom-control custom-radio">
  //         <input
  //           type="radio"
  //           name="climateCustomRadio"
  //           className="custom-control-input"
  //           value={false}
  //           id="climateControl2"
  //           onChange={e => recordStateInfo(e, "filters", "climateControl")}
  //         />
  //         <label className="custom-control-label" htmlFor="climateControl2">
  //           No Preference
  //         </label>
  //       </div>
  //     </ul>
  //   </div>
  // ) : (
  //   <div style={{ visibility: "hidden" }}>
  //     <ul id="indoorsList" className="p-1">
  //       <div className="custom-control custom-radio">
  //         <input
  //           type="radio"
  //           name="climateCustomRadio"
  //           className="custom-control-input"
  //           value={true}
  //           id="climateControl"
  //           onChange={e => recordStateInfo(e, "filters", "climateControl")}
  //         />
  //         <label className="custom-control-label" htmlFor="climateControl">
  //           Climate Control
  //         </label>
  //       </div>
  //       <div className="custom-control custom-radio">
  //         <input
  //           type="radio"
  //           name="climateCustomRadio"
  //           className="custom-control-input"
  //           value={false}
  //           id="climateControl2"
  //           onChange={e => recordStateInfo(e, "filters", "climateControl")}
  //         />
  //         <label className="custom-control-label" htmlFor="climateControl2">
  //           No Preference
  //         </label>
  //       </div>
  //     </ul>
  //   </div>
  // );

  if (size === 0) {
    sizeText = "";
  } else if (size === 1) {
    sizeText = "Extra Small";
  } else if (size === 2) {
    sizeText = "Small";
  } else if (size === 3) {
    sizeText = "Medium";
  } else if (size === 4) {
    sizeText = "Large";
  } else if (size === 5) {
    sizeText = "Extra Large";
  }

  if (easeOfAccess === 0) {
    frequencyText = "";
  } else if (easeOfAccess === 1) {
    frequencyText = "Never";
  } else if (easeOfAccess === 2) {
    frequencyText = "Infrequent";
  } else if (easeOfAccess === 3) {
    frequencyText = "Frequent";
  }

  if (duration === 0) {
    durationText = "";
  } else if (duration === 1) {
    durationText = "Less than a week";
  } else if (duration === 2) {
    durationText = "1 to 4 weeks";
  } else if (duration === 3) {
    durationText = "1 to 3 months";
  } else if (duration === 4) {
    durationText = "3 to 6 months";
  } else if (duration === 5) {
    durationText = "More than 6 months";
  }

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Header>Options</Card.Header>
      <div className="tsDropdownContainer">
        <div className="tsDropdownWrapper">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">
              Choose the relative size of your item here. Small is an area about
              the size of a pantry, medium a garage, large a yard...
            </span>
          </div>
          <DropdownButton
            className="tsFiltersDropdowns"
            id="tsFiltersSizeDropdown"
            title="Size"
          >
            <Dropdown.Item
              data-value={1}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-1"
            >
              Extra Small
            </Dropdown.Item>
            <Dropdown.Item
              data-value={2}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-2"
            >
              Small
            </Dropdown.Item>
            <Dropdown.Item
              data-value={3}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-3"
            >
              Medium
            </Dropdown.Item>
            <Dropdown.Item
              data-value={4}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-4"
            >
              Large
            </Dropdown.Item>
            <Dropdown.Item
              data-value={5}
              onClick={e => {
                recordFilterInfo(e, "Size", e.target.dataset.value);
              }}
              href="#/action-5"
            >
              Extra Large
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="tsDropdownText">
          <a>{sizeText}</a>
        </div>
        <div className="tsDropdownContainer">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">
              Choose the relative size of your item here. Small is an area about
              the size of a pantry, medium a garage, large a yard...
            </span>
          </div>
          <DropdownButton
            className="tsFiltersDropdowns"
            id="tsFiltersFrequencyDropdown"
            title="Access Frequency"
          >
            <Dropdown.Item
              data-value={1}
              onClick={e => {
                recordFilterInfo(e, "Frequency", e.target.dataset.value);
              }}
              href="#/action-1"
            >
              Never
            </Dropdown.Item>
            <Dropdown.Item
              data-value={2}
              onClick={e => {
                recordFilterInfo(e, "Frequency", e.target.dataset.value);
              }}
              href="#/action-2"
            >
              Infrequent
            </Dropdown.Item>
            <Dropdown.Item
              data-value={3}
              onClick={e => {
                recordFilterInfo(e, "Frequency", e.target.dataset.value);
              }}
              href="#/action-3"
            >
              Frequent
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="tsDropdownText">
          <a>{frequencyText}</a>
        </div>
        <div className="tsDropdownContainer">
          <div className="tsTooltipContainer">
            <div className="tsTooltipIcon"></div>
            <span className="tsTooltip">
              Choose the relative size of your item here. Small is an area about
              the size of a pantry, medium a garage, large a yard...
            </span>
          </div>
          <DropdownButton
            className="tsFiltersDropdowns"
            id="tsFiltersDurationDropdown"
            title="Duration"
          >
            <Dropdown.Item
              data-value={1}
              onClick={e => {
                recordFilterInfo(e, "Duration", e.target.dataset.value);
              }}
              href="#/action-1"
            >
              Less than a week
            </Dropdown.Item>
            <Dropdown.Item
              data-value={2}
              onClick={e => {
                recordFilterInfo(e, "Duration", e.target.dataset.value);
              }}
              href="#/action-2"
            >
              1 to 4 weeks
            </Dropdown.Item>
            <Dropdown.Item
              data-value={3}
              onClick={e => {
                recordFilterInfo(e, "Duration", e.target.dataset.value);
              }}
              href="#/action-3"
            >
              1 to 3 months
            </Dropdown.Item>
            <Dropdown.Item
              data-value={4}
              onClick={e => {
                recordFilterInfo(e, "Duration", e.target.dataset.value);
              }}
              href="#/action-4"
            >
              3 to 6 months
            </Dropdown.Item>
            <Dropdown.Item
              data-value={5}
              onClick={e => {
                recordFilterInfo(e, "Duration", e.target.dataset.value);
              }}
              href="#/action-5"
            >
              More than 6 months
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="tsDropdownText">
          <a>{durationText}</a>
        </div>
      </div>
      <div className="tsFilterCheckboxContainer">
        <ul>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck6"
              onClick={e =>
                recordStateInfo(e, "filters", "locked", "defaultCheck6")
              }
            />
            <label className="form-check-label">Locked</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck7"
              onChange={e =>
                recordStateInfo(e, "filters", "standAlone", "defaultCheck7")
              }
            />
            <label className="form-check-label">Stand Alone Storage</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="indoors"
              value={indoors}
              onChange={e => recordFilterInfo(e, "Indoors", e.target.value)}
            />
            <label className="form-check-label">Indoors</label>
            <div style={climateControlBoolean}>
              <ul id="indoorsList" className="p-1">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={true}
                    id="climateControl"
                    onChange={e =>
                      recordStateInfo(e, "filters", "climateControl")
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl"
                  >
                    Climate Control
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="climateCustomRadio"
                    className="custom-control-input"
                    value={false}
                    id="climateControl2"
                    onChange={e =>
                      recordStateInfo(e, "filters", "climateControl")
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="climateControl2"
                  >
                    No Preference
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </ul>
        <div>
          <span className="step2Button">
            <Button onClick={backButton}>Back</Button>
          </span>
          <span className="step2Button">
            <Button onClick={nextButton}>Next</Button>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Step3;
