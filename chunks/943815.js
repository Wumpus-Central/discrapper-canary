"use strict";
n.d(t, { A: () => i });
var l = n(334211);
let a = { LATIN12: l.Xh, LATIN24: l.ID, ASIAN: l.KC },
    s = /(AM|PM)$/;
function i(e) {
    return null != e.match(s) ? a.LATIN24 : e.length <= 5 ? a.LATIN12 : a.ASIAN;
}
