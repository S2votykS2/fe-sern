import React, { Component } from 'react';
import { connect } from "react-redux";
import './HomeFooter.scss';

class HomeFooter extends Component {
    render() {
        return ( <
            >
            <
            div className = "social-media" >

            <
            div className = "grid-social" >
            <
            div className = "title" >
            Truyền thông nói về BookingCare <
            /div> <
            div className = "row-social" >
            <
            div className = "col-social" >
            <
            iframe width = "570"
            height = "321"
            src = "https://www.youtube.com/embed/FyDQljKtWnI"
            title = "CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen > < /iframe> < /
            div > <
            div className = "col-social" >
            <
            a href = "" >
            <
            div className = "social1" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social2" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social3" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social4" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social5" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social6" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social7" >
            <
            /div> < /
            a > <
            a href = "" >
            <
            div className = "social8" >
            <
            /div> < /
            a > <
            /div> < /
            div > <
            /div> < /
            div > <
            div className = "download" >
            <
            div className = "grid" >
            <
            div className = "row" >
            <
            div className = "col-6" >
            <
            div className = "img" >
            <
            /div> < /
            div > <
            div className = "col-6" >
            <
            div className = "information" >
            <
            div className = "header" >
            Tải ứng dụng BookingCare <
            /div> <
            ol className = "list" >
            <
            li >
            Đặt lịch khám nhanh hơn <
            /li> <
            li >
            Nhận thông báo từ hệ thống <
            /li> <
            li >
            Nhận hướng dẫn đi khám chi tiết <
            /li> < /
            ol > <
            div className = "link-app" >
            <
            span class = "googleplay" >
            <
            /span> <
            span class = "appstore" >
            <
            /span> < /
            div > <
            div className = "link-auto" >
            <
            a href = "" > Hoặc mở liên kết < strong > bookingcare.vn / app < /strong></a >
            <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div > <
            div className = "copyright" >
            <
            div className = "grid" >
            <
            div className = "left" >
            BookingCare & copy; <
            /div> <
            div className = "right" >
            <
            i class = "fab fa-facebook" > < /i> <
            i class = "fab fa-youtube" > < /i> < /
            div > <
            /div> < /
            div > <
            />
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);