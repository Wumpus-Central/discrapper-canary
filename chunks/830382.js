"use strict";
n.d(t, { Aj: () => S, EX: () => g, O1: () => A, QX: () => I, T3: () => N, XU: () => y, lo: () => v });
var r = n(635358),
    i = n(562465),
    s = n(73153),
    a = n(198982),
    o = n(136857),
    l = n(178253),
    u = n(10716),
    c = n(323082),
    d = n(67480),
    _ = n(147964),
    f = n(739508),
    p = n(403362),
    h = n(107351),
    m = n(371794),
    E = n(652215);
async function g(e, t, n, i) {
    if (null == d.A.get(t)) {
        s.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let a = _.A.inTestModeForApplication(e) || u.A.inDevModeForApplication(e),
                o = { url: a ? E.Rsh.STORE_SKU(t) : E.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
                l = {};
            n === r.g.VARIANTS_GROUP && (l.variants_return_style = n),
                i && (l.include_unpublished = !0),
                Object.keys(l).length > 0 && (o.query = l);
            let c = await (0, m.aP)(o);
            s.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: a ? c.body : c.body.sku }),
                a || s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: c.body });
        } catch (e) {
            throw (s.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new l.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(_.A.inTestModeForApplication(e) || u.A.inDevModeForApplication(e)) && t)
        throw Error("this should only be used in test mode");
    let n = (await (0, m.aP)({ url: E.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function I(e, t, n, r) {
    let i,
        l = { payment_source_id: n, gift: r?.isGift };
    (_.A.inTestModeForApplication(e) || u.A.inDevModeForApplication(e)) && (l.test_mode = !0),
        s.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
    try {
        (i = await (0, m.aP)({ url: E.Rsh.STORE_SKU_PURCHASE(t), query: l, oldFormErrors: !0, rejectWithError: !1 })),
            s.h.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: i.body,
                checkoutSessionId: r?.loadId,
            });
    } catch (n) {
        s.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE", skuId: t });
        let e = n instanceof a.Ey ? n : new a.Ey(n);
        if (
            e.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === o.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
    }
    return i;
}
let T = { isGift: !1 };
async function S(e, t, n, r, o) {
    s.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let a = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        r &&
            (a.gifting_facet = {
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
        let l = (await i.Bo.post({ url: E.Rsh.ORDER_CREATE, body: a, rejectWithError: !1 })).body,
            u = l.id;
        return s.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: u, order: l }), u;
    } catch (e) {
        throw (s.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new a.Ey(`Failed to create order: ${e}`));
    }
}
async function y(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: l,
        expectedCurrency: d,
        analyticsLoadId: m,
        isGift: g,
        giftInfoOptions: A,
        subscriptionPlanId: I,
        loadId: S,
        countryCode: y,
        orderId: v,
    } = { ...T, ...n };
    s.h.wait(() => {
        s.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let N = _.A.inTestModeForApplication(e) || u.A.inDevModeForApplication(e);
    try {
        let e = {
            gift: g,
            sku_subscription_plan_id: I,
            gateway_checkout_context: await (0, f.ob)(r),
            load_id: S,
            gift_info_options: A,
        };
        if (N) e.test_mode = !0;
        else {
            if (
                null != r &&
                ((e.payment_source_id = r.id), (e.payment_source_token = await (0, c.jV)(r)), E.KcG.has(r.type))
            ) {
                let t = await (0, c.jf)(r.type);
                e.return_url =
                    (0, i.TP)() + E.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, t ?? "", "success");
            }
            null != y && (e.country_code = y);
        }
        null != l && (e.expected_amount = l),
            null != d && (e.expected_currency = d),
            (e.purchase_token = (0, h.r)()),
            null != v && (e.order_id = v);
        let n = await i.Bo.post({
            url: E.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: m },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != n.body.library_applications ? n.body.library_applications.filter(p.Vq) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            { ...n.body, appliedUserDiscounts: n.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (i) {
        let n = i instanceof a.Ey ? i : new a.Ey(i);
        if (
            ((n.code === o.tG.CONFIRMATION_REQUIRED || n.code === o.tG.AUTHENTICATION_REQUIRED) &&
                s.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: g }),
            s.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!i.body.payment_id) throw (0, c.i0)("payment id cannot be null on redirected confirmations.");
        return (0, c.MM)(i.body, r);
    }
}
async function v() {
    try {
        let e = { purchase_token: (0, h.r)() };
        return {
            ...(
                await i.Bo.post({
                    url: E.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body,
        };
    } catch (e) {
        throw e instanceof a.Ey ? e : new a.Ey(e);
    }
}
function N() {
    s.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
