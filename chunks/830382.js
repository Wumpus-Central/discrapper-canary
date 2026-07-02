"use strict";
n.d(t, { Aj: () => S, EX: () => g, NY: () => I, O1: () => A, T3: () => y, XU: () => N, lo: () => C });
var i = n(635358),
    r = n(636537),
    s = n(228366),
    a = n(913122),
    o = n(136857),
    l = n(178253),
    u = n(277984),
    d = n(977445),
    c = n(937427),
    _ = n(67480),
    h = n(739508),
    f = n(403362),
    E = n(107351),
    p = n(371794),
    m = n(652215);
async function g(e, t, n, r) {
    if (null == _.A.get(t)) {
        s.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let a = (0, d.Fs)(e),
                o = { url: a ? m.Rsh.STORE_SKU(t) : m.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
                l = {};
            n === i.g.VARIANTS_GROUP && (l.variants_return_style = n),
                r && (l.include_unpublished = !0),
                Object.keys(l).length > 0 && (o.query = l);
            let u = await (0, p.aP)(o);
            s.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: a ? u.body : u.body.sku }),
                a || s.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: u.body });
        } catch (e) {
            throw (s.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new l.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, d.Fs)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, p.aP)({ url: m.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function I(e) {
    let { applicationId: t, skuId: n, paymentSourceId: i, isGift: r, currency: s } = e,
        l = { payment_source_id: i, gift: r, currency: s };
    (0, d.Fs)(t) && (l.test_mode = !0);
    let u = c.A.getPromotionIdOverride();
    null != u && (l.promotion_id_override = u);
    try {
        return (await (0, p.aP)({ url: m.Rsh.STORE_SKU_PURCHASE(n), query: l, oldFormErrors: !0, rejectWithError: !1 }))
            .body;
    } catch (t) {
        let e = t instanceof a.Ey ? t : new a.Ey(t);
        if (
            e.code === o.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === o.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === o.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
        return null;
    }
}
let T = { isGift: !1 };
async function S(e, t, n, i, o) {
    s.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let a = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        i &&
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
        let l = (await r.Bo.post({ url: m.Rsh.ORDER_CREATE, body: a, rejectWithError: !1 })).body,
            u = l.id;
        return s.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: u, order: l }), u;
    } catch (e) {
        throw (s.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new a.Ey(`Failed to create order: ${e}`));
    }
}
async function N(e, t, n) {
    let {
        paymentSource: i,
        expectedAmount: l,
        expectedCurrency: _,
        analyticsLoadId: p,
        isGift: g,
        giftInfoOptions: A,
        subscriptionPlanId: I,
        loadId: S,
        countryCode: N,
        orderId: C,
        quantity: y,
    } = { ...T, ...n };
    s.h.wait(() => {
        s.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let v = (0, d.Fs)(e);
    try {
        let e = {
                gift: g,
                sku_subscription_plan_id: I,
                gateway_checkout_context: await (0, h.ob)(i),
                load_id: S,
                gift_info_options: A,
            },
            n = c.A.getPromotionIdOverride();
        if ((null != n && (e.promotion_id_override = n), v)) e.test_mode = !0;
        else {
            if (
                null != i &&
                ((e.payment_source_id = i.id), (e.payment_source_token = await (0, u.jV)(i)), m.KcG.has(i.type))
            ) {
                let t = await (0, u.jf)(i.type);
                e.return_url =
                    (0, r.TP)() + m.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, t ?? "", "success");
            }
            null != N && (e.country_code = N);
        }
        null != l && (e.expected_amount = l),
            null != _ && (e.expected_currency = _),
            (e.purchase_token = (0, E.r)()),
            null != C && (e.order_id = C),
            null != y && (e.quantity = y);
        let a = await r.Bo.post({
            url: m.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: p },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != a.body.library_applications ? a.body.library_applications.filter(f.Vq) : [],
                entitlements: a.body.entitlements,
                appliedUserDiscounts: a.body.applied_user_discounts,
                giftCode: a.body.gift_code,
            }),
            { ...a.body, appliedUserDiscounts: a.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (r) {
        let n = r instanceof a.Ey ? r : new a.Ey(r);
        if (
            ((n.code === o.tG.CONFIRMATION_REQUIRED || n.code === o.tG.AUTHENTICATION_REQUIRED) &&
                s.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: g }),
            s.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, u.i0)("payment id cannot be null on redirected confirmations.");
        return (0, u.Oj)(r.body, i);
    }
}
async function C() {
    try {
        let e = { purchase_token: (0, E.r)() };
        return {
            ...(
                await r.Bo.post({
                    url: m.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
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
function y() {
    s.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
