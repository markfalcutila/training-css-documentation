async function doLoad() {
    var el = document.getElementById("report_data")
    var reportJsonDataStr = el.innerText
    var reportData = JSON.parse(reportJsonDataStr)

    removeReportDataElement()

    document.getElementById("collectedDate").innerHTML = formatDateTime(reportData.collectedDate)
    document.getElementById("receivedDate").innerHTML = formatDateTime(reportData.receivedDate)
    document.getElementById("validatedDate").innerHTML = formatDateTime(reportData.validatedDate)
    document.getElementById("birthdate").innerHTML = formatDate(reportData.birthdate)
    //  function adjustHeight(el){
    //     el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
    // }


        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";
        }
}



function removeReportDataElement() {
    document.getElementById("report_data").remove()
}

function getDateString(dateStr) {
    var formatedDateStr = ""
    try {
        var dt = new Date(dateStr)
        var month = dt.getMonth() + 1
        var day = dt.getDay();
        var year = dt.getFullYear();

        formatedDateStr = month + "/" + day + "/" + year
    } catch (e) { }

    return formatedDateStr
}

function getDateTimeString(dateStr) {
    var formatedDateStr = ""
    try {
        var dt = new Date(dateStr)
        var month = dt.getMonth() + 1
        var day = dt.getDay();
        var year = dt.getFullYear();
        var hour = dt.getHours()
        var minute = dt.getMinutes()

        formatedDateStr = month + "/" + day + "/" + year + " " + hour + ":" + minute
    } catch (e) { }

    return formatedDateStr
}

function formatDate(date) {
    try {
        var d = new Date(date),
        month = d.toLocaleString('en-US', {
    month: 'long',
  }),
        day = '' + d.getDate(),
        year = d.getFullYear();
        hour = d.getHours()
        minute = d.getMinutes()
        seconds = d.getSeconds()
        endDate = hour >= 12 ? 'pm' : 'am'


        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [month, day, year].join('-');
    } catch (e) {

    }
}

function formatDateTime(date) {
    try {
        var d = new Date(date),
        month = d.toLocaleString('en-US', {
    month: 'long',
  }),
        day = '' + d.getDate(),
        year = d.getFullYear();
        hour = d.getHours()
        minute = d.getMinutes()
        seconds = d.getSeconds()
        hours = (hour % 12) || 12;
        endDate = hour >= 12 ? 'pm' : 'am'


        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [month, day, year].join(' ')+ " " + [hours, minute].join(':') + " " + endDate;
    } catch (e) {

    }
}

