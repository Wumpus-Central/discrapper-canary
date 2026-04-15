"use strict";
n.d(t, { Bf: () => c, J$: () => d });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(626584),
    o = n(728458),
    l = n(652215);
let u = new a.A("VirtualCurrencyActionCreators");
async function c() {
    i.h.wait(() => {
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await r.Bo.get({ url: l.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof s.Ey ? t : new s.Ey(t);
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function d(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: a,
        onRedeemSucceed: d,
        onRedeemFail: _,
        shouldRefetchBalance: f = !0,
    } = e;
    i.h.wait(() => {
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        a?.();
    try {
        let e = { checkout_session_id: n },
            s = (await r.Bo.post({ url: l.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: e, rejectWithError: !1 })).body;
        if (null == s || !Array.isArray(s)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, s);
            throw (u.error(e, s), o.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: s }), f && c(), d?.(s), s
        );
    } catch (n) {
        let e = n instanceof s.Ey ? n : new s.Ey(n);
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), f && c(), _?.(e);
    }
}
