n.d(t, { c: () => o });
var r = n(562465),
    l = n(73153),
    i = n(384904),
    a = n(295405),
    s = n(652215);
async function o() {
    try {
        l.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await r.Bo.get({
                url: s.Rsh.CHECKOUT_RECOVERY,
                rejectWithError: !0,
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !a.A.hasFetchedPaymentSources && (await (0, i.$o)()),
            l.h.dispatch({
                type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
                isTargeted: t,
            });
    } catch (e) {
        l.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
