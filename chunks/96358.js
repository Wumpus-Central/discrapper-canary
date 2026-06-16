"use strict";
n.d(t, { S: () => o, z: () => a });
var i = n(636537),
    r = n(228366),
    s = n(652215);
async function a() {
    try {
        let e = (await i.Bo.get({ url: s.Rsh.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: !0 })).body;
        return r.h.dispatch({ type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: e.status }), e.status;
    } catch (e) {}
    return null;
}
async function o() {
    await i.Bo.post({ url: s.Rsh.AGE_VERIFICATION_RESET, rejectWithError: !0 }),
        r.h.dispatch({ type: "AGE_VERIFICATION_RESET" });
}
