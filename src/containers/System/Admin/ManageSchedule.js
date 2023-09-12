import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { map, reject } from "lodash";
import * as actions from "../../../store/actions";
import "./ManageSchedule.scss";
import {
    getDetailDoctor,
    bulkCreateSchedules,
} from "../../../services/crudService";
import { crudRedux } from "../../../utils";
import { toast } from "react-toastify";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { languages } from "../../../utils";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";

class ManageSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorId: "",
            hasData: false,
            action: crudRedux.CREATE,
            doctors: [],

            selectedDoctor: [],
            currentDate: "",
            schedules: [],
        };
    }

    handleOnChangeDoctor = async(event) => {
        this.setState({
            doctorId: event.target.value,
            hasData: true,
        });
    };
    handleOnChangeDatePicker = (date) => {
        this.setState({
            // currentDate: moment(date[0]).format("DD/MM/YYYY"),
            currentDate: new Date(date[0].getTime()),
            // currentDate: date[0],
        });
        // let a = new Date(date[0].getTime());
        // Convert to timeStemp
        // console.log("Check Date 1", date[0]);
        // console.log("Check Date 2", a);
        // console.log("Check Date 3", this.state.currentDate);
    };
    handleOnClickSchedule = (schedule) => {
        let schedules = this.state.schedules;
        let newSchedule = [];
        let newSchedules = schedules.map((item) => {
            if (schedule.id === item.id) {
                item.isSelected = !item.isSelected;
            }
            return item;
        });
        this.setState({
            schedules: newSchedules,
        });
    };
    handleOnClickBtnSave = async() => {
        let output = {};
        let schedules = this.state.schedules;
        if (!this.state.doctorId) {
            toast.error("Missing doctor");
        } else {
            output.doctorId = this.state.doctorId;
        }
        if (!this.state.currentDate) {
            toast.error("Missing Date");
        } else {
            output.currentDate = this.state.currentDate;
        }
        if (schedules && schedules.length > 0) {
            let newSchedules = schedules.map((schedule, index) => {
                if (schedule.isSelected) {
                    return schedule;
                } else {
                    return;
                }
            });

            // console.log("Check new Schedules", newSchedules);

            let formatSchedules = schedules.filter((schedule, index) => {
                if (schedule.isSelected) {
                    return schedule;
                }
            });

            // console.log("Check formatSchedules,", formatSchedules);
            output.schedules = formatSchedules;
        }
        if (output.schedules.length === 0) {
            toast.error("Missing schedule");
        }
        let formatOutput = output.schedules.map((item, index) => {
            return {
                doctorId: +this.state.doctorId,
                date: this.state.currentDate,
                timeType: item.keyMap,
            };
        });
        // console.log("Check output", output);
        console.log("Check FormatOutput", formatOutput);
        // Goi API
        let res = await bulkCreateSchedules(formatOutput);
        console.log("Check res", res);
        if (res.data && res.data.errCode === 0) {
            toast.success("Create schudule success");
        }
    };
    handleOnClickBtnGet = async() => {};
    componentDidMount() {
        this.props.fetchAllDoctor();
        this.props.fetchAllSchedules();
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (prevProps.doctors !== this.props.doctors) {
            this.setState({
                doctors: this.props.doctors,
            });
        }
        if (prevProps.schedules !== this.props.schedules) {
            let schedules = this.props.schedules;
            // let newArr = schedules.map((i) => ({ ...i, isActive: true }));
            let newSchedules = schedules.map((schedule, index) => {
                schedule["isSelected"] = false;
                return schedule;
            });
            // console.log("Check new schedule", newSchedules);
            this.setState({
                schedules: newSchedules,
            });
        }
    }

    render() {
        // console.log("Check props", this.props);
        // console.log("Check state", this.state);
        let { doctors, schedules } = this.state;
        let { language } = this.props;
        // let yesterday = new Date(newDate().setState)
        return ( <
            Fragment >
            <
            div className = "title" > Tạo lịch hẹn < /div>{" "} <
            div className = "container" >
            <
            div className = "row schedule" >
            <
            div className = "col-3 form-group" >
            <
            label className = "" > Tên bác sĩ < /label>{" "} <
            select className = "form-control"
            onChange = {
                (event) => this.handleOnChangeDoctor(event) } >
            <
            option value = ""
            key = "" > { " " }
            Chọn bác sĩ { " " } <
            /option>{" "} {
                doctors &&
                    doctors.length > 0 &&
                    doctors.map((doctor, index) => {
                        let nameVi = `ID:${doctor.id}} - ${doctor.firstName} ${doctor.lastName}`;
                        let nameEn = `ID:${doctor.id} - ${doctor.lastName} ${doctor.firstName}`;
                        return ( <
                            option value = { doctor.id }
                            key = { index } > { " " } { language === languages.VI ? nameVi : nameEn } { " " } <
                            /option>
                        );
                    })
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            button type = ""
            className = "btn btn-primary col-1 form-group"
            onClick = {
                () => this.handleOnClickBtnGet() } >
            { " " }
            Lấy thông tin { " " } <
            /button>{" "} <
            br / >
            <
            div className = "col-12 form-group" >
            <
            label
            for = ""
            class = "" > { " " }
            Chọn ngày { " " } <
            /label>{" "} <
            DatePicker onChange = { this.handleOnChangeDatePicker }
            className = "form-control"
            value = { this.state.currentDate }
            minDate = { new Date() }
            />{" "} <
            /div>{" "} <
            div className = "col-12 form-group range-time" >
            <
            label
            for = ""
            className = "" > { " " }
            Chọn thời gian khám { " " } <
            /label>{" "} <
            ul className = " " > { " " } {
                schedules &&
                    schedules.length > 0 &&
                    schedules.map((schedule, index) => {
                        return ( <
                            li onClick = {
                                () => this.handleOnClickSchedule(schedule) } >
                            <
                            button className = {
                                schedule.isSelected === true ?
                                "btn-custom btn-extra" :
                                    "btn-custom"
                            } >
                            { " " } {
                                language === "vi" ?
                                    schedule.valueVI :
                                    schedule.valueEN
                            } { " " } <
                            /button>{" "} <
                            /li>
                        );
                    })
            } { " " } <
            /ul>{" "} <
            /div>{" "} <
            /div>{" "} {
                this.state.hasData === true && ( <
                    button type = ""
                    className = "btn btn-primary"
                    onClick = {
                        () => this.handleOnClickBtnSave() } >
                    { " " }
                    Lưu Thông tin { " " } <
                    /button>
                )
            } { " " } <
            /div>{" "} <
            /Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        doctors: state.sern.doctors,
        schedules: state.sern.schedules,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctor: () => {
            dispatch(actions.fetchAllDoctor());
        },
        fetchAllSchedules: () => {
            dispatch(actions.fetchAllSchedules());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);