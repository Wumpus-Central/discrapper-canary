"use strict";
n.d(t, { Aj: () => T, EX: () => m, NY: () => A, O1: () => g, T3: () => y, XU: () => S, lo: () => N });
var i = n(635358),
    r = n(636537),
    s = n(228366),
    a = n(845584),
    o = n(136857),
    l = n(178253),
    u = n(753390),
    c = n(977445),
    d = n(67480),
    _ = n(739508),
    f = n(403362),
    h = n(107351),
    p = n(371794),
    E = n(652215);
async function m(e, t, n, r) {
    if (null == d.A.get(t)) {
        s.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let a = (0, c.F)(e),
                o = { url: a ? E.Rsh.STORE_SKU(t) : E.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
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
async function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, c.F)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, p.aP)({ url: E.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function A(e) {
    let { applicationId: t, skuId: n, paymentSourceId: i, isGift: r, currency: s } = e,
        l = { payment_source_id: i, gift: r, currency: s };
    (0, c.F)(t) && (l.test_mode = !0);
    try {
        return (await (0, p.aP)({ url: E.Rsh.STORE_SKU_PURCHASE(n), query: l, oldFormErrors: !0, rejectWithError: !1 }))
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
let I = { isGift: !1 };
async function T(e, t, n, i, o) {
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
        let l = (await r.Bo.post({ url: E.Rsh.ORDER_CREATE, body: a, rejectWithError: !1 })).body,
            u = l.id;
        return s.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: u, order: l }), u;
    } catch (e) {
        throw (s.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new a.Ey(`Failed to create order: ${e}`));
    }
}
async function S(e, t, n) {
    let {
        paymentSource: i,
        expectedAmount: l,
        expectedCurrency: d,
        analyticsLoadId: p,
        isGift: m,
        giftInfoOptions: g,
        subscriptionPlanId: A,
        loadId: T,
        countryCode: S,
        orderId: N,
    } = { ...I, ...n };
    s.h.wait(() => {
        s.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let y = (0, c.F)(e);
    try {
        let e = {
            gift: m,
            sku_subscription_plan_id: A,
            gateway_checkout_context: await (0, _.ob)(i),
            load_id: T,
            gift_info_options: g,
        };
        if (y) e.test_mode = !0;
        else {
            if (
                null != i &&
                ((e.payment_source_id = i.id), (e.payment_source_token = await (0, u.jV)(i)), E.KcG.has(i.type))
            ) {
                let t = await (0, u.jf)(i.type);
                e.return_url =
                    (0, r.TP)() + E.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, t ?? "", "success");
            }
            null != S && (e.country_code = S);
        }
        null != l && (e.expected_amount = l),
            null != d && (e.expected_currency = d),
            (e.purchase_token = (0, h.r)()),
            null != N && (e.order_id = N);
        let n = await r.Bo.post({
            url: E.Rsh.STORE_SKU_PURCHASE(t),
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
                    null != n.body.library_applications ? n.body.library_applications.filter(f.Vq) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            { ...n.body, appliedUserDiscounts: n.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (r) {
        let n = r instanceof a.Ey ? r : new a.Ey(r);
        if (
            ((n.code === o.tG.CONFIRMATION_REQUIRED || n.code === o.tG.AUTHENTICATION_REQUIRED) &&
                s.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: m }),
            s.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== o.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, u.i0)("payment id cannot be null on redirected confirmations.");
        return (0, u.MM)(r.body, i);
    }
}
async function N() {
    try {
        let e = { purchase_token: (0, h.r)() };
        return {
            ...(
                await r.Bo.post({
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
function y() {
    s.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
