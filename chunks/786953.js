var n = r(620632),
    a = r(73153),
    l = r(627784),
    i = r(626584),
    d = r(977445),
    c = r(67480),
    s = r(856383),
    o = r(652215);
let u = new i.A("VirtualCurrencyActionCreators");
async function h() {
    a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    try {
        let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return (a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
        let e = t instanceof l.Ey ? t : new l.Ey(t);
        a.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
function _(e) {
    let { skuId: t, entitlements: r } = e;
    a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: r });
}
r.d(
    t,
    {},
    {
        Bf: h,
        Ce: async function () {
            a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
            try {
                let e = await n.Bo.get({ url: o.Rsh.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED, rejectWithError: !1 }),
                    t = e.body.total_redeemed;
                return (
                    a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: t }), e.body
                );
            } catch (t) {
                let e = t instanceof l.Ey ? t : new l.Ey(t);
                a.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: e });
            }
        },
        G7: function (e) {
            return a.h.dispatch({ type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay: e });
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
            (a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t }), i?.());
            try {
                let e = c.A.get(t),
                    a = e?.applicationId,
                    l = null != a && (0, d.Fs)(a),
                    i = { checkout_session_id: r };
                l && (i.test_mode = !0);
                let R = (await n.Bo.post({ url: o.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: i, rejectWithError: !1 }))
                    .body;
                if (null == R || !Array.isArray(R)) {
                    let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                        t = Error(e, R);
                    throw (u.error(e, R), s.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
                }
                return (_({ skuId: t, entitlements: R }), C && h(), E?.(R), R);
            } catch (r) {
                let e = r instanceof l.Ey ? r : new l.Ey(r);
                (a.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), C && h(), R?.(e));
            }
        },
        sn: _,
    },
);
