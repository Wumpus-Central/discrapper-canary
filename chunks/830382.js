"use strict";
n.d(t, { Aj: () => S, EX: () => p, NY: () => m, O1: () => T, T3: () => R, XU: () => N, lo: () => C });
var i = n(635358),
    r = n(636537),
    a = n(228366),
    s = n(913122),
    l = n(136857),
    o = n(178253),
    d = n(277984),
    c = n(977445),
    u = n(937427),
    _ = n(67480),
    E = n(739508),
    A = n(403362),
    h = n(107351),
    I = n(371794),
    f = n(652215);
async function p(e, t, n, s) {
    if (null == _.A.get(t)) {
        a.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let l = (0, c.Fs)(e),
                o = {
                    url: l ? f.Rsh.STORE_SKU(t) : f.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t),
                    rejectWithError: (0, r.fT)(),
                },
                d = {};
            n === i.g.VARIANTS_GROUP && (d.variants_return_style = n),
                s && (d.include_unpublished = !0),
                Object.keys(d).length > 0 && (o.query = d);
            let u = await (0, I.aP)(o);
            a.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: l ? u.body : u.body.sku }),
                l || a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: u.body });
        } catch (e) {
            throw (a.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new o.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, c.Fs)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, I.aP)({ url: f.Rsh.APPLICATION_SKUS(e), rejectWithError: (0, r.fT)() })).body;
    return a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function m(e) {
    let { applicationId: t, skuId: n, paymentSourceId: i, isGift: a, currency: o } = e,
        d = { payment_source_id: i, gift: a, currency: o };
    (0, c.Fs)(t) && (d.test_mode = !0);
    let _ = u.A.getPromotionIdOverride();
    null != _ && (d.promotion_id_override = _);
    try {
        return (
            await (0, I.aP)({
                url: f.Rsh.STORE_SKU_PURCHASE(n),
                query: d,
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            })
        ).body;
    } catch (t) {
        let e = t instanceof s.Ey ? t : new s.Ey(t);
        if (
            e.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === l.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
        return null;
    }
}
let g = { isGift: !1 };
async function S(e, t, n, i, l) {
    a.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let s = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        i &&
            (s.gifting_facet = {
                is_gift: !0,
                gift_customization: {
                    recipient_id: l.recipient_id,
                    gift_style: l.gift_style,
                    emoji_id: l.emoji_id,
                    emoji_name: l.emoji_name,
                    sound_id: l.sound_id,
                    reward_sku_ids: l.reward_sku_ids,
                    custom_message_contents: l.custom_message,
                },
            });
        let o = (await r.Bo.post({ url: f.Rsh.ORDER_CREATE, body: s, rejectWithError: (0, r.fT)() })).body,
            d = o.id;
        return a.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: d, order: o }), d;
    } catch (e) {
        throw (a.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new s.Ey(`Failed to create order: ${e}`));
    }
}
async function N(e, t, n) {
    let {
        paymentSource: i,
        expectedAmount: o,
        expectedCurrency: _,
        analyticsLoadId: I,
        isGift: p,
        giftInfoOptions: T,
        subscriptionPlanId: m,
        loadId: S,
        countryCode: N,
        quantity: C,
    } = { ...g, ...n };
    a.h.wait(() => {
        a.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let R = (0, c.Fs)(e);
    try {
        let e = {
                gift: p,
                sku_subscription_plan_id: m,
                gateway_checkout_context: await (0, E.ob)(i),
                load_id: S,
                gift_info_options: T,
            },
            n = u.A.getPromotionIdOverride();
        if ((null != n && (e.promotion_id_override = n), R)) e.test_mode = !0;
        else {
            if (
                null != i &&
                ((e.payment_source_id = i.id), (e.payment_source_token = await (0, d.jV)(i)), f.KcG.has(i.type))
            ) {
                let t = await (0, d.jf)(i.type);
                e.return_url =
                    (0, r.TP)() + f.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, t ?? "", "success");
            }
            null != N && (e.country_code = N);
        }
        null != o && (e.expected_amount = o),
            null != _ && (e.expected_currency = _),
            (e.purchase_token = (0, h.r)()),
            null != C && (e.quantity = C);
        let s = await r.Bo.post({
            url: f.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: I },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        });
        return (
            a.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != s.body.library_applications ? s.body.library_applications.filter(A.Vq) : [],
                entitlements: s.body.entitlements,
                appliedUserDiscounts: s.body.applied_user_discounts,
                giftCode: s.body.gift_code,
            }),
            { ...s.body, appliedUserDiscounts: s.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (r) {
        let n = r instanceof s.Ey ? r : new s.Ey(r);
        if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED || n.code === l.tG.AUTHENTICATION_REQUIRED) &&
                a.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: p }),
            a.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, d.i0)("payment id cannot be null on redirected confirmations.");
        return (0, d.Oj)(r.body, i);
    }
}
async function C() {
    try {
        let e = { purchase_token: (0, h.r)() };
        return {
            ...(
                await r.Bo.post({
                    url: f.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                })
            ).body,
        };
    } catch (e) {
        throw e instanceof s.Ey ? e : new s.Ey(e);
    }
}
function R() {
    a.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
