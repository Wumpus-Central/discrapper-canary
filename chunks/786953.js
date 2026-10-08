r.d(t, { Bf: () => u, Ce: () => E, J$: () => h });
var n = r(636537),
    a = r(73153),
    l = r(913122),
    i = r(626584),
    d = r(977445),
    c = r(67480),
    s = r(38405),
    o = r(652215);
let _ = new i.A("VirtualCurrencyActionCreators");
async function u() {
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return (a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function E() {
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
    });
    try {
        let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED, rejectWithError: !1 }),
            t = e.body.total_redeemed;
        return (a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: t }), e.body);
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: e });
    }
}
async function h(e) {
    let {
        skuId: t,
        loadId: r,
        onRedeemStart: i,
        onRedeemSucceed: E,
        onRedeemFail: h,
        shouldRefetchBalance: R = !0,
    } = e;
    (a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        i?.());
    try {
        let e = c.A.get(t),
            l = e?.applicationId,
            i = null != l && (0, d.Fs)(l),
            h = { checkout_session_id: r };
        i && (h.test_mode = !0);
        let C = (await n.Bo.post({ url: o.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: h, rejectWithError: !1 })).body;
        if (null == C || !Array.isArray(C)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, C);
            throw (_.error(e, C), s.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: C }), R && u(), E?.(C), C
        );
    } catch (r) {
        let e = r instanceof l.Ey ? r : new l.Ey(r);
        (a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), R && u(), h?.(e));
    }
}
