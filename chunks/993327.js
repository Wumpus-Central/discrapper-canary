"use strict";
n.d(t, { A: () => o });
var r = n(927813),
    i = n(86070),
    s = n(517164);
let a = r.A.Millis.MINUTE;
function o(e, t) {
    if (s.A.isFetchingUserOutbox(e)) return;
    let n = s.A.getUserOutbox(e)?.lastFetched ?? 0;
    if (!(Date.now() - n < a)) return (0, i.r7)(e, t);
}
