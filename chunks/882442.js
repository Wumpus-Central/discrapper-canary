n.d(t, { c: () => o });
var i = n(562465),
    l = n(73153),
    s = n(384904),
    a = n(295405),
    r = n(652215);
async function o() {
    try {
        l.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await i.Bo.get({ url: r.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !a.A.hasFetchedPaymentSources && (await (0, s.$o)()),
            l.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        l.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
