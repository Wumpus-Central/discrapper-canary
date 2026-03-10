"use strict";
n.d(t, { A: () => a });
var l = n(679740);
let i = { LATIN12: l.Xh, LATIN24: l.ID, ASIAN: l.KC },
    s = /(AM|PM)$/;
function a(e) {
    return null != e.match(s) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
