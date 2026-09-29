r.d(t, { Bf: () => h, J$: () => _ });
var n = r(636537),
    a = r(228366),
    i = r(913122),
    l = r(626584),
    s = r(977445),
    c = r(67480),
    o = r(38405),
    u = r(652215);
let d = new l.A("VirtualCurrencyActionCreators");
async function h() {
    a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    try {
        let e = await n.Bo.get({ url: u.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return (a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
        let e = t instanceof i.Ey ? t : new i.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
async function _(e) {
    let {
        skuId: t,
        loadId: r,
        onRedeemStart: l,
        onRedeemSucceed: _,
        onRedeemFail: E,
        shouldRefetchBalance: C = !0,
    } = e;
    (a.h.wait(() => {
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t });
    }),
        l?.());
    try {
        let e = c.A.get(t),
            i = e?.applicationId,
            l = null != i && (0, s.Fs)(i),
            E = { checkout_session_id: r };
        l && (E.test_mode = !0);
        let R = (await n.Bo.post({ url: u.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: E, rejectWithError: !1 })).body;
        if (null == R || !Array.isArray(R)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, R);
            throw (d.error(e, R), o.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
        }
        return (
            a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: R }), C && h(), _?.(R), R
        );
    } catch (r) {
        let e = r instanceof i.Ey ? r : new i.Ey(r);
        (a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), C && h(), E?.(e));
    }
}
