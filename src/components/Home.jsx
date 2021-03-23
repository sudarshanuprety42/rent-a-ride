import React from "react";
import Navbar from "./Navbar";
import { DatePicker, Space } from "antd";
import Media from "react-media";
import { Row, Col } from "antd";
import { Select } from "antd";
import { Switch } from "antd";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const { RangePicker } = DatePicker;

export default function Home() {
  return (
    <div className="home-outer-container">
      <Navbar active="home" />
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <div class="home-container">
            <div className="reservation-form">
              <p class="home-title">Rent-A-Ride</p>
              <Row>
                <Col span={24}>
                  <div style={{ textAlign: "center" }}>
                    <span class="reservation-title">Date</span>
                    <br />
                    <RangePicker
                      style={{
                        height: "40px",
                        width: matches.large ? "40%" : "80%",
                      }}
                      className="home-form-field"
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col span={matches.large ? 12 : 24}>
                  <div style={{ textAlign: "center" }}>
                    <span class="reservation-title">Vehicle Type</span> <br />
                    <Select
                      style={{ width: "80%" }}
                      size="large"
                      showSearch
                      placeholder="Select ride type"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      className="home-form-field"
                    >
                      <Option value="taxi">Taxi</Option>
                      <Option value="jeeps">Jeeps</Option>
                      <Option value="pick-up-car">Pickup Cars</Option>
                      <Option value="sport-car">Sports Cars</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={matches.large ? 12 : 24}>
                  <div style={{ textAlign: "center" }}>
                    <span class="reservation-title">Condition</span> <br />
                    <Select
                      style={{ width: "80%" }}
                      size="large"
                      showSearch
                      placeholder="Select ride condition"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      className="home-form-field"
                    >
                      <Option value="taxi">Average</Option>
                      <Option value="jeeps">Good</Option>
                      <Option value="pick-up-car">Excellent</Option>
                    </Select>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={24}>
                  <div style={{ textAlign: "center" }}>
                    <Switch
                      checkedChildren="With Driver"
                      unCheckedChildren="With Driver"
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col span={24}>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      icon={<SearchOutlined />}
                      className="find-button"
                    >
                      Search
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Media>
    </div>
  );
}
