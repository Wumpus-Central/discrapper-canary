a.d(t, { Z: () => n });
var i = {
    lastWeek: function (e) {
        return 6 === e.getUTCDay() ? "'το προηγούμενο' eeee 'στις' p" : "'την προηγούμενη' eeee 'στις' p";
    },
    yesterday: "'χθες στις' p",
    today: "'σήμερα στις' p",
    tomorrow: "'αύριο στις' p",
    nextWeek: "eeee 'στις' p",
    other: 'P'
};
let n = function (e, t) {
    var a = i[e];
    return 'function' == typeof a ? a(t) : a;
};
