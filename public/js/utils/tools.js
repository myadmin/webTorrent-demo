module.exports = {
    formatDate: function (date) {
        let oDate = new Date(date),
            year = oDate.getFullYear(),
            month = oDate.getMonth() + 1,
            day = oDate.getDate(),
            hour = oDate.getHours(),
            min = oDate.getMinutes(),
            sec = oDate.getSeconds();

        return year + '-' + toDouble(month) + '-' + toDouble(day) + ' ' + toDouble(hour) + ':' + toDouble(min) + ':' + toDouble(sec);
    }
};

function toDouble (num) {
    return num < 10 ? '0' + num : num;
}
