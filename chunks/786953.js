n.d(t, {
    Bf: () => u,
    J$: () => d,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(626584),
    o = n(728458),
    l = n(652215);
let c = new s.A("VirtualCurrencyActionCreators");
async function u() {
    i.h.wait(() => {
        i.h.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH",
        });
    });
    try {
        let e = await r.Bo.get({
                url: l.Rsh.VIRTUAL_CURRENCY_USER_BALANCE,
                rejectWithError: !1,
            }),
            t = e.body.balance;
        return (
            i.h.dispatch({
                type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
                balance: t,
            }),
            e.body
        );
    } catch (t) {
        let e = t instanceof a.Ey ? t : new a.Ey(t);
        i.h.dispatch({
            type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
            error: e,
        });
    }
}
async function d(e) {
    let {
        skuId: t,
        loadId: n,
        onRedeemStart: s,
        onRedeemSucceed: d,
        onRedeemFail: f,
        shouldRefetchBalance: p = !0,
        isRental: _ = !1,
    } = e;
    i.h.wait(() => {
        i.h.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_START",
            skuId: t,
        });
    }),
        null == s || s();
    try {
        let e = {
                checkout_session_id: n,
                is_rental: _,
            },
            a = (
                await r.Bo.post({
                    url: l.Rsh.VIRTUAL_CURRENCY_SKU_REDEEM(t),
                    body: e,
                    rejectWithError: !1,
                })
            ).body;
        if (null == a || !Array.isArray(a)) {
            let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
                t = Error(e, a);
            throw (
                (c.error(e, a),
                o.A.captureException(t, {
                    tags: {
                        app_context: "virtual_currency",
                    },
                }),
                t)
            );
        }
        return (
            i.h.dispatch({
                type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
                skuId: t,
                entitlements: a,
            }),
            p && u(),
            null == d || d(a),
            a
        );
    } catch (n) {
        let e = n instanceof a.Ey ? n : new a.Ey(n);
        i.h.dispatch({
            type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
            skuId: t,
            error: e,
        }),
            p && u(),
            null == f || f(e);
    }
}
