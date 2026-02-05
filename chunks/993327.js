"use strict";
n.d(t, { A: () => o });
var r = n(927813),
    i = n(86070),
    a = n(517164);
let s = r.A.Millis.MINUTE;
function o(e, t) {
    if (a.A.isFetchingUserOutbox(e)) return;
    let n = a.A.getUserOutbox(e)?.lastFetched ?? 0;
    if (!(Date.now() - n < s)) return (0, i.r7)(e, t);
}
