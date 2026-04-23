"use strict";
n.d(t, { Bf: () => _, J$: () => f });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(626584),
    o = n(977445),
    l = n(67480),
    u = n(728458),
    c = n(652215);
let d = new a.A("VirtualCurrencyActionCreators");
async function _() {
    i.h.wait(() => {
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await r.Bo.get({ url: c.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof s.Ey ? t : new s.Ey(t);
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function f(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: a,
        onRedeemSucceed: f,
        onRedeemFail: p,
        shouldRefetchBalance: h = !0,
    } = e;
    i.h.wait(() => {
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        a?.();
    try {
        let e = l.A.get(t),
            s = e?.applicationId,
            a = null != s && (0, o.F)(s),
            p = { checkout_session_id: n };
        a && (p.test_mode = !0);
        let E = (await r.Bo.post({ url: c.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: p, rejectWithError: !1 })).body;
        if (null == E || !Array.isArray(E)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, E);
            throw (d.error(e, E), u.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: E }), h && _(), f?.(E), E
        );
    } catch (n) {
        let e = n instanceof s.Ey ? n : new s.Ey(n);
        i.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), h && _(), p?.(e);
    }
}
