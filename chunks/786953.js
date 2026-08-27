r.d(t, { Bf: () => h, J$: () => _ });
var n = r(636537),
    a = r(228366),
    l = r(913122),
    i = r(626584),
    s = r(977445),
    c = r(67480),
    d = r(38405),
    o = r(652215);
let u = new i.A("VirtualCurrencyActionCreators");
async function h() {
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body;
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function _(e) {
    let {
        skuId: t,
        loadId: r,
        onRedeemStart: i,
        onRedeemSucceed: _,
        onRedeemFail: C,
        shouldRefetchBalance: E = !0,
    } = e;
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        i?.();
    try {
        let e = c.A.get(t),
            l = e?.applicationId,
            i = null != l && (0, s.Fs)(l),
            C = { checkout_session_id: r };
        i && (C.test_mode = !0);
        let R = (await n.Bo.post({ url: o.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: C, rejectWithError: !1 })).body;
        if (null == R || !Array.isArray(R)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, R);
            throw (u.error(e, R), d.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: R }), E && h(), _?.(R), R
        );
    } catch (r) {
        let e = r instanceof l.Ey ? r : new l.Ey(r);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), E && h(), C?.(e);
    }
}
