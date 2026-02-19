"use strict";
n.d(t, { S: () => o, z: () => a });
var r = n(562465),
    i = n(73153),
    s = n(652215);
async function a() {
    try {
        let e = (await r.Bo.get({ url: s.Rsh.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: !0 })).body;
        i.h.dispatch({ type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: e.status });
    } catch {}
}
async function o() {
    await r.Bo.post({ url: s.Rsh.AGE_VERIFICATION_RESET, rejectWithError: !0 }),
        i.h.dispatch({ type: "AGE_VERIFICATION_RESET" });
}
