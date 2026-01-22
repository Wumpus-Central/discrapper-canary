let r;
n.d(t, {
    A: () => m,
    G: () => h,
});
var i = n(562465),
    a = n(73153),
    s = n(627363),
    o = n(587895),
    l = n(197111),
    c = n(979286),
    u = n(45938),
    d = n(652215),
    f = n(788868);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.h.dispatch({
        type: "GIFT_CODE_RESOLVE",
        code: e,
    });
    try {
        let r = await (0, u.GM)(e, t, n);
        if (null != r.application_id && r.application_id !== f.tv) {
            let e = o.A.getApplication(r.application_id);
            if (null == e)
                try {
                    await s.Ay.fetchApplication(r.application_id);
                } catch (e) {}
        }
        return (
            r.application_id === d.FYj && (await (0, c.Jp)(r.sku_id)),
            a.h.dispatch({
                type: "GIFT_CODE_RESOLVE_SUCCESS",
                giftCode: r,
            }),
            { giftCode: r }
        );
    } catch (t) {
        throw (
            (a.h.dispatch({
                type: "GIFT_CODE_RESOLVE_FAILURE",
                code: e,
                error: t,
            }),
            t)
        );
    }
}
r = n(75255).A;
let m = _(
    {
        resolveGiftCode: h,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            a.h.dispatch({
                type: "GIFT_CODES_FETCH",
                skuId: e,
                subscriptionPlanId: t,
            });
            try {
                let n = await i.Bo.get({
                    url: d.Rsh.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                a.h.dispatch({
                    type: "GIFT_CODES_FETCH_SUCCESS",
                    giftCodes: n.body,
                    skuId: e,
                    subscriptionPlanId: t,
                });
            } catch (n) {
                a.h.dispatch({
                    type: "GIFT_CODES_FETCH_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t,
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            a.h.dispatch({
                type: "GIFT_CODE_CREATE_START",
                skuId: e,
                subscriptionPlanId: t,
            });
            try {
                let r = await i.Bo.post({
                    url: d.Rsh.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: n,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                return (
                    a.h.dispatch({
                        type: "GIFT_CODE_CREATE_SUCCESS",
                        giftCode: r.body,
                    }),
                    r.body
                );
            } catch (n) {
                a.h.dispatch({
                    type: "GIFT_CODE_CREATE_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t,
                });
            }
        },
        async revokeGiftCode(e) {
            a.h.dispatch({
                type: "GIFT_CODE_REVOKE",
                code: e,
            });
            try {
                await i.Bo.del({
                    url: d.Rsh.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                    a.h.dispatch({
                        type: "GIFT_CODE_REVOKE_SUCCESS",
                        code: e,
                    });
            } catch (t) {
                a.h.dispatch({
                    type: "GIFT_CODE_REVOKE_FAILURE",
                    code: e,
                });
            }
        },
        openNativeGiftCodeModal(e) {
            l.A.openNativeAppModal(e, d.e$_.GIFT_CODE_BROWSER);
        },
    },
    r,
);
