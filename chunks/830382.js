n.d(t, {
    Aj: () => T,
    EX: () => A,
    O1: () => v,
    QX: () => S,
    T3: () => R,
    XU: () => C,
    lo: () => N,
}),
    n(65821);
var r = n(635358),
    i = n(562465),
    a = n(73153),
    s = n(198982),
    o = n(136857),
    l = n(178253),
    c = n(10716),
    u = n(67480),
    d = n(147964),
    f = n(739508),
    p = n(403362),
    _ = n(107351),
    h = n(371794),
    m = n(384904),
    g = n(652215);

function E(e, t, n) {
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

function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function A(e, t, n) {
    if (null == u.A.get(t)) {
        a.h.dispatch({
            type: "SKU_FETCH_START",
            skuId: t,
        });
        try {
            let i = d.A.inTestModeForApplication(e) || c.A.inDevModeForApplication(e),
                s = {
                    url: i ? g.Rsh.STORE_SKU(t) : g.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: !1,
                };
            n === r.g.VARIANTS_GROUP &&
                (s.query = {
                    variants_return_style: n,
                });
            let o = await (0, h.aP)(s);
            a.h.dispatch({
                type: "SKU_FETCH_SUCCESS",
                sku: i ? o.body : o.body.sku,
            }),
                i ||
                    a.h.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        storeListing: o.body,
                    });
        } catch (e) {
            throw (
                (a.h.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: t,
                }),
                new l.A("Failed to fetch SKU ".concat(t)))
            );
        }
    }
}
async function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(d.A.inTestModeForApplication(e) || c.A.inDevModeForApplication(e)) && t)
        throw Error("this should only be used in test mode");
    let n = (
        await (0, h.aP)({
            url: g.Rsh.APPLICATION_SKUS(e),
            rejectWithError: !1,
        })
    ).body;
    return (
        a.h.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: n,
        }),
        n
    );
}
async function S(e, t, n, r) {
    let i,
        l = {
            payment_source_id: n,
            gift: null == r ? void 0 : r.isGift,
        };
    (d.A.inTestModeForApplication(e) || c.A.inDevModeForApplication(e)) && (l.test_mode = !0),
        a.h.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH",
            skuId: t,
        });
    try {
        (i = await (0, h.aP)({
            url: g.Rsh.STORE_SKU_PURCHASE(t),
            query: l,
            oldFormErrors: !0,
            rejectWithError: !1,
        })),
            a.h.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: i.body,
            });
    } catch (n) {
        a.h.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
        });
        let e = n instanceof s.Ey ? n : new s.Ey(n);
        if (
            e.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === o.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
    }
    return i;
}
let I = {
    isGift: !1,
};
async function T(e, t, n, r, o) {
    a.h.dispatch({
        type: "ORDER_CREATE_START",
    });
    try {
        let s = {
            order_line_items: [
                {
                    sku_id: e,
                    quantity: 1,
                    purchase_type: 1,
                },
            ],
            billing_facet: {
                payment_source_id: t,
            },
            location_facet: {
                request_gateway_country_code: n,
            },
        };
        r &&
            (s.gifting_facet = {
                is_gift: !0,
                gift_customization: {
                    recipient_id: o.recipient_id,
                    gift_style: o.gift_style,
                    emoji_id: o.emoji_id,
                    emoji_name: o.emoji_name,
                    sound_id: o.sound_id,
                    reward_sku_ids: o.reward_sku_ids,
                    custom_message_contents: o.custom_message,
                },
            });
        let l = (
                await i.Bo.post({
                    url: g.Rsh.ORDER_CREATE,
                    body: s,
                    rejectWithError: !1,
                })
            ).body,
            c = l.id;
        return (
            a.h.dispatch({
                type: "ORDER_CREATE_SUCCESS",
                orderId: c,
                order: l,
            }),
            c
        );
    } catch (e) {
        throw (
            (a.h.dispatch({
                type: "ORDER_CREATE_FAIL",
            }),
            new s.Ey("Failed to create order: ".concat(e)))
        );
    }
}
async function C(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: l,
        expectedCurrency: u,
        analyticsLoadId: h,
        isGift: E,
        giftInfoOptions: y,
        subscriptionPlanId: A,
        loadId: v,
        countryCode: S,
        orderId: T,
    } = b({}, I, n);
    a.h.wait(() => {
        a.h.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
        });
    });
    let C = d.A.inTestModeForApplication(e) || c.A.inDevModeForApplication(e);
    try {
        let e = {
            gift: E,
            sku_subscription_plan_id: A,
            gateway_checkout_context: await (0, f.ob)(r),
            load_id: v,
            gift_info_options: y,
        };
        if (C) e.test_mode = !0;
        else {
            if (
                null != r &&
                ((e.payment_source_id = r.id), (e.payment_source_token = await (0, m.jV)(r)), g.KcG.has(r.type))
            ) {
                let t = await (0, m.jf)(r.type);
                e.return_url =
                    (0, i.TP)() +
                    g.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != t ? t : "", "success");
            }
            null != S && (e.country_code = S);
        }
        null != l && (e.expected_amount = l),
            null != u && (e.expected_currency = u),
            (e.purchase_token = (0, _.r)()),
            null != T && (e.order_id = T);
        let n = await i.Bo.post({
            url: g.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: {
                load_id: h,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != n.body.library_applications ? n.body.library_applications.filter(p.Vq) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            O(b({}, n.body), {
                appliedUserDiscounts: n.body.applied_user_discounts,
                redirectConfirmation: !1,
            })
        );
    } catch (i) {
        let n = i instanceof s.Ey ? i : new s.Ey(i);
        if (
            ((n.code === o.tG.CONFIRMATION_REQUIRED || n.code === o.tG.AUTHENTICATION_REQUIRED) &&
                a.h.dispatch({
                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                    skuId: t,
                    isGift: E,
                }),
            a.h.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: t,
                error: n,
            }),
            n.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, m.i0)("payment id cannot be null on redirected confirmations.");
        return (0, m.MM)(i.body, r);
    }
}
async function N() {
    try {
        let e = {
                purchase_token: (0, _.r)(),
            },
            t = await i.Bo.post({
                url: g.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return b({}, t.body);
    } catch (e) {
        throw e instanceof s.Ey ? e : new s.Ey(e);
    }
}

function R() {
    a.h.dispatch({
        type: "SKU_PURCHASE_CLEAR_ERROR",
    });
}
