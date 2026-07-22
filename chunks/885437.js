"use strict";
n.d(t, { p: () => s });
var i = n(976860),
    r = n(734057),
    a = n(332456);
function s(e) {
    let t = (0, a.C)(r.A.getChannel(e), !0),
        n = t?.location ?? (0, i.PR)();
    return { ...(t ?? {}), ...(null != n ? { location: n } : {}) };
}
