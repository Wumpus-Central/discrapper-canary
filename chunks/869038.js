let n;
r.d(t, {
    A: () => p,
    G: () => f,
});
var l = r(562465),
    i = r(73153),
    o = r(627363),
    s = r(587895),
    a = r(197111),
    c = r(979286),
    u = r(45938),
    d = r(652215),
    E = r(788868);
async function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.h.dispatch({
        type: "GIFT_CODE_RESOLVE",
        code: e,
    });
    try {
        let n = await (0, u.GM)(e, t, r);
        if (null != n.application_id && n.application_id !== E.tv) {
            let e = s.A.getApplication(n.application_id);
            if (null == e)
                try {
                    await o.Ay.fetchApplication(n.application_id);
                } catch (e) {}
        }
        return (
            n.application_id === d.FYj && (await (0, c.Jp)(n.sku_id)),
            i.h.dispatch({
                type: "GIFT_CODE_RESOLVE_SUCCESS",
                giftCode: n,
            }),
            {
                giftCode: n,
            }
        );
    } catch (t) {
        throw (
            (i.h.dispatch({
                type: "GIFT_CODE_RESOLVE_FAILURE",
                code: e,
                error: t,
            }),
            t)
        );
    }
}
n = r(75255).A;
let p = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
})(
    {
        resolveGiftCode: f,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            i.h.dispatch({
                type: "GIFT_CODES_FETCH",
                skuId: e,
                subscriptionPlanId: t,
            });
            try {
                let r = await l.Bo.get({
                    url: d.Rsh.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                i.h.dispatch({
                    type: "GIFT_CODES_FETCH_SUCCESS",
                    giftCodes: r.body,
                    skuId: e,
                    subscriptionPlanId: t,
                });
            } catch (r) {
                i.h.dispatch({
                    type: "GIFT_CODES_FETCH_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t,
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            i.h.dispatch({
                type: "GIFT_CODE_CREATE_START",
                skuId: e,
                subscriptionPlanId: t,
            });
            try {
                let n = await l.Bo.post({
                    url: d.Rsh.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                return (
                    i.h.dispatch({
                        type: "GIFT_CODE_CREATE_SUCCESS",
                        giftCode: n.body,
                    }),
                    n.body
                );
            } catch (r) {
                i.h.dispatch({
                    type: "GIFT_CODE_CREATE_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t,
                });
            }
        },
        async revokeGiftCode(e) {
            i.h.dispatch({
                type: "GIFT_CODE_REVOKE",
                code: e,
            });
            try {
                await l.Bo.del({
                    url: d.Rsh.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                    i.h.dispatch({
                        type: "GIFT_CODE_REVOKE_SUCCESS",
                        code: e,
                    });
            } catch (t) {
                i.h.dispatch({
                    type: "GIFT_CODE_REVOKE_FAILURE",
                    code: e,
                });
            }
        },
        openNativeGiftCodeModal(e) {
            a.A.openNativeAppModal(e, d.e$_.GIFT_CODE_BROWSER);
        },
    },
    n,
);
