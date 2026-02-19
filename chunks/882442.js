"use strict";
n.d(t, { c: () => o });
var i = n(562465),
    s = n(73153),
    l = n(384904),
    r = n(295405),
    a = n(652215);
async function o() {
    try {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await i.Bo.get({ url: a.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
            t = e?.is_eligible === !0;
        t && !r.A.hasFetchedPaymentSources && (await (0, l.$o)()),
            s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t });
    } catch (e) {
        s.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
