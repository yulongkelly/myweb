import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import { ReactAgenda, ReactAgendaCtrl, Modal } from "react-agenda";
import "./agenda.css";

var now = new Date();

require("moment/locale/en-ca.js");
var colors = {
  "color-1": "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
  "color-4": "rgba(70, 159, 213, 1)",
  "color-5": "rgba(170, 59, 123, 1)",
};

export default class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected: [],
      cellHeight: 60 / 4,
      showModal: false,
      locale: "en-ca",
      rowsPerHour: 4,
      numberOfDays: 4,
      startDate: new Date(),
      isLoading: false,
      err: null,
    };
    this.handleRangeSelection = this.handleRangeSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleCellSelection = this.handleCellSelection.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleItemSize = this.handleItemSize.bind(this);
    this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    let api_url = "https://agendaapi.azurewebsites.net/api/agenda";

    axios
      .get(api_url)
      // axios automatically changes the response to JSON
      .then((res) => {
        this.setState({
          items: res.data.map((item) => {
            const event = {
              _id: item.id,
              name: item.eventName,
              startDateTime: new Date(item.startDateTime),
              endDateTime: new Date(item.endDateTime),
              classes: item.classes,
            };
            return event;
          }),
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          err,
          isLoading: false,
        });
      });
  }

  componentWillReceiveProps(next, last) {
    console.log(next);
    if (next.items) {
      this.setState({ items: next.items });
    }
  }
  handleItemEdit(item, openModal) {
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      return this._openModal();
    }
  }
  handleCellSelection(item, openModal) {
    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] });
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }
  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }

  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true });
    this._openModal();
  }

  _openModal() {
    this.setState({ showModal: true });
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false });
  }

  handleItemChange(items, item) {
    axios
      .put(`https://agendaapi.azurewebsites.net/api/agenda/${item._id}`, item)
      .then((res) => console.log(res.data));
    this.setState({ items: items });
  }

  handleItemSize(items, item) {
    axios
      .put(`https://agendaapi.azurewebsites.net/api/agenda/${item._id}`, item)
      .then((res) => console.log(res.data));
    this.setState({ items: items });
  }

  removeEvent(items, item) {
    console.log(item);
    axios
      .delete(`https://agendaapi.azurewebsites.net/api/agenda/${item._id}`)
      .then((res) => console.log(res.data));
    this.setState({ items: items });
  }

  addNewEvent(items, newItems) {
    this.setState({ showModal: false, selected: [], items: items });
    console.log(newItems);
    const item = this.state.items[items.length - 1];
    const event = {
      _id: item._id,
      eventName: item.name,
      startDateTime: new Date(item.startDateTime),
      endDateTime: new Date(item.endDateTime),
      classes: item.classes,
    };
    axios
      .post(`https://agendaapi.azurewebsites.net/api/agenda`, event)
      .then((res) => console.log(res.data));
    this._closeModal();
  }
  editEvent(items, item) {
    axios
      .put(`https://agendaapi.azurewebsites.net/api/agenda/${item._id}`, item)
      .then((res) => console.log(res.data));
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  render() {
    if (this.state.err) {
      // Here you can either render error message or Error component
      // In this example, I have used message
      return <div> {this.state.err.message} </div>;
    }
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="agenda-container ">
        <div className="control-buttons">
          <button className="button-control" onClick={this.zoomIn}>
            {" "}
            <i className="fas fa-search-plus"></i>{" "}
          </button>
          <button className="button-control" onClick={this.zoomOut}>
            {" "}
            <i className="fas fa-search-minus" aria-hidden="true"></i>{" "}
          </button>
          <button className="button-control" onClick={this._openModal}>
            {" "}
            <i className="schedule-icon"></i>{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 7)}
          >
            {" "}
            {moment.duration(7, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 4)}
          >
            {" "}
            {moment.duration(4, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 3)}
          >
            {" "}
            {moment.duration(3, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 1)}
          >
            {" "}
            {moment.duration(1, "day").humanize()}{" "}
          </button>
        </div>

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          locale="en-ca"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection}
          onChangeEvent={this.handleItemChange}
          onChangeDuration={this.handleItemSize}
          onItemEdit={this.handleItemEdit}
          onCellSelect={this.handleCellSelection}
          onItemRemove={this.removeEvent}
          onDateRangeChange={this.handleDateRangeChange}
        />
        {this.state.showModal ? (
          <Modal clickOutside={this._closeModal}>
            <div className="modal-content">
              <ReactAgendaCtrl
                items={this.state.items}
                itemColors={colors}
                selectedCells={this.state.selected}
                Addnew={this.addNewEvent}
                edit={this.editEvent}
              />
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}
