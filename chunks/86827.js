"use strict";
n.d(t, { V: () => s });
var r = n(183580),
    i = n(839006);
function s(e, t, n) {
    let s = { locale: "" };
    for (let n of t) {
        let t = n.replace(i.KB, ""),
            a = (0, r.q)(e, t);
        if (a) return (s.locale = a), n !== t && (s.extension = n.slice(t.length, n.length)), s;
    }
    return (s.locale = n()), s;
}
