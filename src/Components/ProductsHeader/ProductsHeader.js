import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import PriceDialog from "../PriceDialog/PriceDialog";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withRouter } from "react-router-dom";

class ProductsHeader extends Component {
  state = {
    openPriceDialog: false,
  };

  render() {
    let { parsedQueryStr, totalItemsCount, updateQueryStr } = this.props;

    let usePriceFilter = parsedQueryStr.usePriceFilter === "true";
    let minPrice = parsedQueryStr.minPrice || 0;
    let maxPrice = parsedQueryStr.maxPrice || 1000;
    let sortValue = parsedQueryStr.sortValue || "lh";
    let keyword = parsedQueryStr.term;
    let category = parsedQueryStr.category;

    let pageSubtitle = (
      <div>
        <span style={{ fontSize: 12, color: "gray" }}>
          {totalItemsCount +
            " result" +
            (totalItemsCount === 1 ? " " : "s ") +
            (keyword ? "for " : "")}
        </span>
        {keyword && (
          <span
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "gray",
            }}
          >
            {keyword}
          </span>
        )}
      </div>
    );

    return (
      <div>
        <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, fontSize: 24 }}>
            <div>{category ? category : "کالاهای پرطرفدار"}</div>
            {pageSubtitle}
          </div>

          <FormControlLabel

            control={
              <Checkbox
                  checked={usePriceFilter}
                onChange={(e) => {
                  updateQueryStr({
                    usePriceFilter: e.target.checked,
                    page: 1,
                  });
                }}
              />
            }
            style={{color: "gray"}}
            label="فیلتر قیمت"
          />
          {usePriceFilter && (
            <Tooltip title="برای انتخاب بازه کلیک کنید" disableFocusListener>
              <Button
                variant="outlined"
                style={{ marginRight: 20 }}
                onClick={() => {
                  this.setState({
                    openPriceDialog: true,
                  });
                }}
              >
                {`${minPrice}$-${maxPrice}$`}
              </Button>
            </Tooltip>
          )}
          <Select
              style={{color:"gray"}}
            value={sortValue}
            onChange={(e) => {
              updateQueryStr({ sortValue: e.target.value });
            }}
          >
            <MenuItem value={"lh"}>مرتب کردن از ارزان به گران</MenuItem>
            <MenuItem value={"hl"}>مرتب کردن از گران به ارزان</MenuItem>
          </Select>
        </div>

        {/* This is dialog which opens up for setting price filter */}
        <PriceDialog
          open={this.state.openPriceDialog}
          min={minPrice}
          max={maxPrice}
          onSave={(min, max) => {
            this.setState({ openPriceDialog: false });
            updateQueryStr({ minPrice: min, maxPrice: max, page: 1 });
          }}
          onClose={() =>
            this.setState({
              openPriceDialog: false,
            })
          }
        />
      </div>
    );
  }
}

export default withRouter(ProductsHeader);
