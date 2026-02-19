"use strict";
n.d(t, { A: () => r });
var l = n(679740);
let s = { LATIN12: l.Xh, LATIN24: l.ID, ASIAN: l.KC },
    i = /(AM|PM)$/;
function r(e) {
    return null != e.match(i) ? s.LATIN24 : e.length <= 5 ? s.LATIN12 : s.ASIAN;
}
