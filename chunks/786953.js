"use strict";
n.d(t, { Bf: () => c, J$: () => E });
var i = n(636537),
    r = n(228366),
    s = n(845584),
    a = n(626584),
    o = n(977445),
    l = n(67480),
    d = n(38405),
    _ = n(652215);
let u = new a.A("VirtualCurrencyActionCreators");
async function c() {
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await i.Bo.get({ url: _.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof s.Ey ? t : new s.Ey(t);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function E(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: a,
        onRedeemSucceed: E,
        onRedeemFail: h,
        shouldRefetchBalance: m = !0,
    } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        a?.();
    try {
        let e = l.A.get(t),
            s = e?.applicationId,
            a = null != s && (0, o.F)(s),
            h = { checkout_session_id: n };
        a && (h.test_mode = !0);
        let f = (await i.Bo.post({ url: _.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: h, rejectWithError: !1 })).body;
        if (null == f || !Array.isArray(f)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, f);
            throw (u.error(e, f), d.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: f }), m && c(), E?.(f), f
        );
    } catch (n) {
        let e = n instanceof s.Ey ? n : new s.Ey(n);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), m && c(), h?.(e);
    }
}
