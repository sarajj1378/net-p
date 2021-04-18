import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class PriceDialog extends Component {
  state = {
    lastOpenedStatus: false
  };

  // Only when this dialog is opened, copy the prices from props to local state.
  static getDerivedStateFromProps(props, state) {
    if (props.open === true && state.lastOpenedStatus === false) {
      return {
        min: props.min,
        max: props.max,
        lastOpenedStatus: true
      };
    }

    return { lastOpenedStatus: props.open };
  }

  render() {
    let { min, max } = this.state;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.onClose();
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <DialogTitle>بازه قیمت</DialogTitle>

            <div style={{ display: "flex", padding: 20 }}>
              <TextField
                value={min}
                type="number"
                style={{ width: 70 }}
                placeholder="کمترین"
                label="کمترین"
                onChange={e => {
                  let val = parseInt(e.target.value, 10);
                  if (Number.isNaN(val) || val < 0 || val > 100000) {
                    return;
                  }
                  this.setState({
                    min: val
                  });
                }}
              />
              <TextField
                value={max}
                type="number"
                style={{ width: 70, marginLeft: 20 }}
                placeholder="بیشترین"
                label="بیشترین"
                onChange={e => {
                  let val = parseInt(e.target.value, 10);

                  if (Number.isNaN(val) || val < 0 || val > 100000) {
                    return;
                  }
                  this.setState({
                    max: val
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", padding: 20 }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: 50 }}
                onClick={() => {
                  this.props.onSave(min, max);
                }}
              >
                قبول
              </Button>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: 50, marginLeft: 5 }}
                onClick={() => {
                  this.props.onClose();
                }}
              >
                لغو
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default PriceDialog;
