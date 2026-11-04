var n = r(620632),
    l = r(73153),
    a = r(627784),
    i = r(626584),
    d = r(977445),
    s = r(67480),
    c = r(856383),
    o = r(652215);
let u = new i.A("VirtualCurrencyActionCreators");
async function h() {
    l.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    try {
        let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return (l.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
        let e = t instanceof a.Ey ? t : new a.Ey(t);
        l.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
function _(e) {
    let { skuId: t, entitlements: r } = e;
    l.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: r });
}
r.d(
    t,
    {},
    {
        Bf: h,
        Ce: async function () {
            l.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
            try {
                let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED, rejectWithError: !1 }),
                    t = e.body.total_redeemed;
                return (
                    l.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: t }), e.body
                );
            } catch (t) {
                let e = t instanceof a.Ey ? t : new a.Ey(t);
                l.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: e });
            }
        },
        J$: async function (e) {
            let {
                skuId: t,
                loadId: r,
                onRedeemStart: i,
                onRedeemSucceed: E,
                onRedeemFail: R,
                shouldRefetchBalance: C = !0,
            } = e;
            (l.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t }), i?.());
            try {
                let e = s.A.get(t),
                    l = e?.applicationId,
                    a = null != l && (0, d.Fs)(l),
                    i = { checkout_session_id: r };
                a && (i.test_mode = !0);
                let R = (await n.Bo.post({ url: o.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: i, rejectWithError: !1 }))
                    .body;
                if (null == R || !Array.isArray(R)) {
                    let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                        t = Error(e, R);
                    throw (u.error(e, R), c.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
                }
                return (_({ skuId: t, entitlements: R }), C && h(), E?.(R), R);
            } catch (r) {
                let e = r instanceof a.Ey ? r : new a.Ey(r);
                (l.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), C && h(), R?.(e));
            }
        },
        sn: _,
    },
);
