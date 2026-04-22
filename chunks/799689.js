"use strict";
e.exports = function () {
    var e,
        t = this.constructor;
    if (!t.REVERSE_MAP)
        for (var r in ((t.REVERSE_MAP = {}), (e = n(883134))))
            (r > 95 && r < 112) || (e.hasOwnProperty(r) && (t.REVERSE_MAP[e[r]] = r));
    return t.REVERSE_MAP;
};
