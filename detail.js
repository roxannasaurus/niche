/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
    var major_title = "IECE",
        major_subtitle = "interdisciplinary early childhood education",
        major_description = "The Interdisciplinary Early Childhood Education (IECE) Program prepares students for a variety of careers working with families and young children, birth through five years, including those with disabilities. Graduates of the IECE program are prepared for a variety of teaching, research, and administration careers in settings such as preschool, kindergarten, early intervention (First Steps), childcare, research programs, state and local government agencies, hospitals as child and family life specialists, and other private or publicly-funded programs, such as Head Start, Early Start, and Kentucky’s HANDS ProgramThe Interdisciplinary Early Childhood Education (IECE) Program prepares students for a variety of careers working with families and young children, birth through five years, including those with disabilities. Graduates of the IECE program are prepared for a variety of teaching, research, and administration careers in settings such as preschool, kindergarten, early intervention (First Steps), childcare, research programs, state and local government agencies, hospitals as child and family life specialists, and other private or publicly-funded programs, such as Head Start, Early Start, and Kentucky’s HANDS Program",
        major_pdf = "http://www.neopets.com",
        major_bg_codes = ['#9b59b4', '#e74b3c', '#3597d9', '#16bb9b', '#e57d24'],
        major_ages = "birth-primary",
        major_certified = true,

        llp_title = "EDLIFE",
        llp_bg_code = "#2a7fb8",
        llp_tab1 = "Champions Court 1- 4th floor",
        llp_tab2 = "Connected Courses: UK101 and EDU300: Specialized Course",
        llp_tab3 = "Weekly Tutoring and Quiet “Study Group” Hours",
        llp_pdf = " http://www.uky.edu/housing/undergraduate/llp/edlife-community",
        
        scholarship_title = "College Wide Scholarships",
        scholarship_open_date = "September 1st",
        scholarship_deadline = "January 15th",
        scholarship_app_link = "https://2b.education.uky.edu/adeanugadvss/scholarships-and-financial-aid/",
        scholarship_more_link = "https://2b.education.uky.edu/adeanugadvss/list-of-scholarships-fellowships-and-assistantships/",
        
        publication_title = "Viewbook",
        publication_description = "",
        publication_pdf_link = "",
        publication_joo_link = "",
        publication_bg_code = "#bf382b",
        
        type = 'l';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function hideDiv(id) {
        var obj = document.getElementById(id);
        if (obj) {
            obj.style.display = 'none';
        }
    }

    function showDiv(id) {
        var obj = document.getElementById(id);
        if (obj) {
            obj.style.display = 'block';
        }
    }

    function major_style(title, subtitle, description, ages, certified, pdf, bg_codes) {
        hideDiv("description-tabs");
        hideDiv("scholarship-block");
        var index = getRandomInt(0, bg_codes.length - 1);
        document.getElementById("bg").style.backgroundColor = bg_codes[index];
        document.getElementById("title").innerHTML = title;
        document.getElementById("subtitle").innerHTML = subtitle;
        document.getElementById("description-box").style.backgroundColor = "rgba(255, 255, 255, .5)";
        document.getElementById("description").innerHTML = description;
        document.getElementById("ages").innerHTML = ages;
        if (certified === true) {
            showDiv("certified");
        } else {
            hideDiv("certified");
        }
        document.getElementById("pdf-link").setAttribute('href', pdf);
     
    }

    function llp_style(title, tab1, tab2, tab3, pdf, bg_code) {
        hideDiv("description-box");
        hideDiv("scholarship-block");
        document.getElementById("bg").style.backgroundColor = bg_code;
        document.getElementById("title").innerHTML = title;
        document.getElementById("tab-content1").innerHTML = tab1;
        document.getElementById("tab-content2").innerHTML = tab2;
        document.getElementById("tab-content3").innerHTML = tab3;
        document.getElementById("pdf-link").setAttribute('href', pdf);
    }

    function scholarship_style(title, open_date, close_date, app_link, more_link) {
        hideDiv("description-box");
        hideDiv("description-tabs");
        hideDiv("pdf");
        
        document.getElementById("bg").style.backgroundColor = '#2c3d4f';
        document.getElementById("title").innerHTML = title;
        document.getElementById("open-text").innerHTML = open_date;
        document.getElementById("close-text").innerHTML = close_date;
        document.getElementById("apply-link").setAttribute('href', app_link);
        document.getElementById("more-link").setAttribute('href', more_link);
    }
    
    function publication_style(title, description, pdf_link, joo_link, bg_code) {
        hideDiv("description-tabs");
        hideDiv("scholarship-block");
        document.getElementById("bg").style.backgroundColor = bg_code;
        document.getElementById("title").innerHTML = title;
        document.getElementById("description").innerHTML = description;
        document.getElementById("pdf-link").setAttribute('href', pdf_link);
        document.getElementById("joo-link").setAttribute('href', joo_link);
    }

    window.onload = function () {
        if (type === 'm') {
            major_style(major_title, major_subtitle, major_description, major_ages, major_certified, major_pdf, major_bg_codes);
        } else if (type === 'l') {
            llp_style(llp_title, llp_tab1, llp_tab2, llp_tab3, llp_pdf, llp_bg_code);
        } else if (type === 's') {
            scholarship_style(scholarship_title, scholarship_open_date, scholarship_deadline, scholarship_app_link, scholarship_more_link);
        } else if (type === 'p') {
            publication_style(publication_title, publication_description, publication_pdf_link, publication_joo_link, publication_bg_code);

        } else {
            window.alert('Someone jacked up the type controls. Lolsies');
        }
    };
    
});