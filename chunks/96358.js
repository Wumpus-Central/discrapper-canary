n.d(t, { S: () => l, z: () => s });
var i = n(636537),
    r = n(228366),
    a = n(652215);
async function s() {
    try {
        let e = (await i.Bo.get({ url: a.Rsh.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: !0 })).body;
        return r.h.dispatch({ type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: e.status }), e.status;
    } catch (e) {}
    return null;
}
async function l() {
    await i.Bo.post({ url: a.Rsh.AGE_VERIFICATION_RESET, rejectWithError: !0 }),
        r.h.dispatch({ type: "AGE_VERIFICATION_RESET" });
}
