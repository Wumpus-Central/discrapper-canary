n.d(t, { Bf: () => _, J$: () => h });
var r = n(636537),
    a = n(228366),
    l = n(845584),
    s = n(626584),
    i = n(977445),
    c = n(67480),
    o = n(38405),
    d = n(652215);
let u = new s.A("VirtualCurrencyActionCreators");
async function _() {
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await r.Bo.get({ url: d.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function h(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: s,
        onRedeemSucceed: h,
        onRedeemFail: C,
        shouldRefetchBalance: R = !0,
    } = e;
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        s?.();
    try {
        let e = c.A.get(t),
            l = e?.applicationId,
            s = null != l && (0, i.F)(l),
            C = { checkout_session_id: n };
        s && (C.test_mode = !0);
        let E = (await r.Bo.post({ url: d.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: C, rejectWithError: !1 })).body;
        if (null == E || !Array.isArray(E)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, E);
            throw (u.error(e, E), o.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: E }), R && _(), h?.(E), E
        );
    } catch (n) {
        let e = n instanceof l.Ey ? n : new l.Ey(n);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), R && _(), C?.(e);
    }
}
