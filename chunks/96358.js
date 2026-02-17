"use strict";
n.d(t, { z: () => s });
var r = n(562465),
    i = n(73153),
    a = n(652215);
async function s() {
    try {
        let e = (await r.Bo.get({ url: a.Rsh.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: !0 })).body;
        i.h.dispatch({ type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: e.status });
    } catch {}
}
