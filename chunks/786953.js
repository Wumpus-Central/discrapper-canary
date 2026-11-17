var i = n(620632),
    r = n(73153),
    a = n(627784),
    s = n(626584),
    l = n(977445),
    o = n(67480),
    d = n(856383),
    c = n(652215);
let u = new s.A("VirtualCurrencyActionCreators");
async function _() {
    r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    try {
        let e = await i.Bo.get({ url: c.Rsh.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: !1 }),
            t = e.body.balance;
        return (r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: t }), e.body);
    } catch (t) {
        let e = t instanceof a.Ey ? t : new a.Ey(t);
        r.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: e });
    }
}
function E(e) {
    let { skuId: t, entitlements: n } = e;
    r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: t, entitlements: n });
}
n.d(
    t,
    {},
    {
        Bf: _,
        Ce: async function () {
            r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
            try {
                let e = await i.Bo.get({ url: c.Rsh.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED, rejectWithError: !1 }),
                    t = e.body.total_redeemed;
                return (
                    r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: t }), e.body
                );
            } catch (t) {
                let e = t instanceof a.Ey ? t : new a.Ey(t);
                r.h.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: e });
            }
        },
        G7: function (e) {
            return r.h.dispatch({ type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay: e });
        },
        J$: async function (e) {
            let {
                skuId: t,
                loadId: n,
                onRedeemStart: s,
                onRedeemSucceed: A,
                onRedeemFail: f,
                shouldRefetchBalance: h = !0,
            } = e;
            (r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: t }), s?.());
            try {
                let e = o.A.get(t),
                    r = e?.applicationId,
                    a = null != r && (0, l.Fs)(r),
                    s = { checkout_session_id: n };
                a && (s.test_mode = !0);
                let f = (await i.Bo.post({ url: c.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t), body: s, rejectWithError: !1 }))
                    .body;
                if (null == f || !Array.isArray(f)) {
                    let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                        t = Error(e, f);
                    throw (u.error(e, f), d.A.captureException(t, { tags: { app_context: "virtual_currency" } }), t);
                }
                return (E({ skuId: t, entitlements: f }), h && _(), A?.(f), f);
            } catch (n) {
                let e = n instanceof a.Ey ? n : new a.Ey(n);
                (r.h.dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: t, error: e }), h && _(), f?.(e));
            }
        },
        sn: E,
    },
);
