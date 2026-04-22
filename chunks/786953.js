n.d(t, { Bf: () => C, J$: () => p });
var l = n(562465),
    r = n(73153),
    i = n(198982),
    s = n(626584),
    a = n(977445),
    o = n(67480),
    u = n(728458),
    d = n(652215);
let c = new s.A("VirtualCurrencyActionCreators");
async function C() {
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await l.Bo.get({ url: d.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof i.Ey ? t : new i.Ey(t);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function p(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: s,
        onRedeemSucceed: p,
        onRedeemFail: m,
        shouldRefetchBalance: E = !0,
    } = e;
    r.h.wait(() => {
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        s?.();
    try {
        let e = o.A.get(t),
            i = e?.applicationId,
            s = null != i && (0, a.F)(i),
            m = { checkout_session_id: n };
        s && (m.test_mode = !0);
        let A = (await l.Bo.post({ url: d.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: m, rejectWithError: !1 })).body;
        if (null == A || !Array.isArray(A)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, A);
            throw (c.error(e, A), u.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: A }), E && C(), p?.(A), A
        );
    } catch (n) {
        let e = n instanceof i.Ey ? n : new i.Ey(n);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), E && C(), m?.(e);
    }
}
