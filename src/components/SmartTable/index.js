import React from "react";
import ThemeProvider from "@lugia/theme-hoc";
import { Table, Theme } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";

const Operation = styled.a`
  font-size: 14px;
`;
const Status = styled.span`
  color: ${props => (props.status === "error" ? "#F22735" : "#65C73F")};
  font-size: 14px;
`;
const Divider = styled.span`
  display: inline-block;
  height: 16px;
  border-left: 1px solid #e8e8e8;
  vertical-align: text-bottom;
  margin: 0px 5px;
`;

export default ThemeProvider(
  class SmartTable extends React.Component {
    render() {
      const {
        selectRowKeys = [],
        onChange,
        columns = [],
        data = [],
        onView,
        onEdit,
        onDelete,
        getPartOfThemeHocProps,
        renderCol = {}
      } = this.props;

      const theColumns = columns.map(item => {
        const data = renderCol[item.dataIndex];

        if (data && data.length > 0) {
          item.render = (text, record) => {
            const currentItem = data.find(
              dataItem => dataItem.value === record[item.dataIndex]
            );
            return (
              <Status status={currentItem.status}>
                {currentItem.text || text}
              </Status>
            );
          };
          item.align = "center";
        }
        return item;
      });

      theColumns.push({
        title: "操作",
        dataIndex: "custom_operations",
        key: "custom_operations",
        align: "center",
        render: (text, record, index) => (
          <div style={{ textAlign: "center" }}>
            <Operation
              href="javascript:;"
              onClick={() => onEdit(text, record, index)}
            >
              编辑
            </Operation>
            <Divider type="vertical" />
            <Operation
              href="javascript:;"
              onClick={() => onView(text, record, index, columns)}
            >
              查看
            </Operation>
            <Divider type="vertical" />
            <Operation
              href="javascript:;"
              last
              onClick={() => onDelete(text, record, index)}
            >
              删除
            </Operation>
          </div>
        )
      });
      const { viewClass, theme } = getPartOfThemeHocProps("Container");
      const config = {
        [Widget.Table]: {
          Container: theme[viewClass]
        }
      };

      return (
        <Theme config={config}>
          <Table
            {...this.props}
            data={data}
            columns={theColumns}
            useFixedHeader={true}
            selectOptions={{
              onChange,
              selectRowKeys
            }}
            theme={theme}
            viewClass={viewClass}
            size={"small"}
          />
        </Theme>
      );
    }
  },
  "SmartTable"
);
