"use strict";
n.d(t, { Bf: () => _, J$: () => h });
var i = n(636537),
    r = n(228366),
    s = n(913122),
    a = n(626584),
    o = n(977445),
    l = n(67480),
    u = n(38405),
    c = n(652215);
let d = new a.A("VirtualCurrencyActionCreators");
async function _() {
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await i.Bo.get({ url: c.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof s.Ey ? t : new s.Ey(t);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function h(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: a,
        onRedeemSucceed: h,
        onRedeemFail: f,
        shouldRefetchBalance: p = !0,
    } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        a?.();
    try {
        let e = l.A.get(t),
            s = e?.applicationId,
            a = null != s && (0, o.Fs)(s),
            f = { checkout_session_id: n };
        a && (f.test_mode = !0);
        let E = (await i.Bo.post({ url: c.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: f, rejectWithError: !1 })).body;
        if (null == E || !Array.isArray(E)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, E);
            throw (d.error(e, E), u.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: E }), p && _(), h?.(E), E
        );
    } catch (n) {
        let e = n instanceof s.Ey ? n : new s.Ey(n);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), p && _(), f?.(e);
    }
}
