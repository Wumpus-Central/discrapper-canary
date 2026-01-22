t.d(e, { A: () => n });
var i = {
    lastWeek: "'geçen hafta' eeee 'saat' p",
    yesterday: "'dün saat' p",
    today: "'bugün saat' p",
    tomorrow: "'yarın saat' p",
    nextWeek: "eeee 'saat' p",
    other: "P",
};
let n = function (a, e, t, n) {
    return i[a];
};
