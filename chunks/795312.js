e.exports = function (e) {
    var t,
        n = this;
    e = e || {};
    var i = !1;
    for (t in n.sequenceLevels) {
        if (e[t]) {
            i = !0;
            continue;
        }
        n.sequenceLevels[t] = 0;
    }
    i || (n.nextExpectedAction = !1);
};
