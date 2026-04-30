n.d(t, { Aj: () => T, EX: () => A, O1: () => y, QX: () => I, T3: () => N, XU: () => S, lo: () => R });
var o = n(635358),
    r = n(636537),
    a = n(228366),
    i = n(845584),
    l = n(136857),
    u = n(178253),
    s = n(323082),
    _ = n(977445),
    d = n(67480),
    C = n(739508),
    E = n(403362),
    p = n(107351),
    h = n(371794),
    c = n(652215);
async function A(e, t, n, r) {
    if (null == d.A.get(t)) {
        a.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let i = (0, _.F)(e),
                l = { url: i ? c.Rsh.STORE_SKU(t) : c.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
                u = {};
            n === o.g.VARIANTS_GROUP && (u.variants_return_style = n),
                r && (u.include_unpublished = !0),
                Object.keys(u).length > 0 && (l.query = u);
            let s = await (0, h.aP)(l);
            a.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: i ? s.body : s.body.sku }),
                i || a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: s.body });
        } catch (e) {
            throw (a.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new u.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, _.F)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, h.aP)({ url: c.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function I(e, t, n, o) {
    let r,
        u = { payment_source_id: n, gift: o?.isGift, currency: o?.currency };
    (0, _.F)(e) && (u.test_mode = !0), a.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
    try {
        (r = await (0, h.aP)({ url: c.Rsh.STORE_SKU_PURCHASE(t), query: u, oldFormErrors: !0, rejectWithError: !1 })),
            a.h.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: r.body,
                checkoutSessionId: o?.loadId,
            });
    } catch (n) {
        a.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE", skuId: t });
        let e = n instanceof i.Ey ? n : new i.Ey(n);
        if (
            e.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === l.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
    }
    return r;
}
let m = { isGift: !1 };
async function T(e, t, n, o, l) {
    a.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let i = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        o &&
            (i.gifting_facet = {
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
        let u = (await r.Bo.post({ url: c.Rsh.ORDER_CREATE, body: i, rejectWithError: !1 })).body,
            s = u.id;
        return a.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: s, order: u }), s;
    } catch (e) {
        throw (a.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new i.Ey(`Failed to create order: ${e}`));
    }
}
async function S(e, t, n) {
    let {
        paymentSource: o,
        expectedAmount: u,
        expectedCurrency: d,
        analyticsLoadId: h,
        isGift: A,
        giftInfoOptions: y,
        subscriptionPlanId: I,
        loadId: T,
        countryCode: S,
        orderId: R,
    } = { ...m, ...n };
    a.h.wait(() => {
        a.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let N = (0, _.F)(e);
    try {
        let e = {
            gift: A,
            sku_subscription_plan_id: I,
            gateway_checkout_context: await (0, C.ob)(o),
            load_id: T,
            gift_info_options: y,
        };
        if (N) e.test_mode = !0;
        else {
            if (
                null != o &&
                ((e.payment_source_id = o.id), (e.payment_source_token = await (0, s.jV)(o)), c.KcG.has(o.type))
            ) {
                let t = await (0, s.jf)(o.type);
                e.return_url =
                    (0, r.TP)() + c.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.type, t ?? "", "success");
            }
            null != S && (e.country_code = S);
        }
        null != u && (e.expected_amount = u),
            null != d && (e.expected_currency = d),
            (e.purchase_token = (0, p.r)()),
            null != R && (e.order_id = R);
        let n = await r.Bo.post({
            url: c.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            a.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications:
                    null != n.body.library_applications ? n.body.library_applications.filter(E.Vq) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            { ...n.body, appliedUserDiscounts: n.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (r) {
        let n = r instanceof i.Ey ? r : new i.Ey(r);
        if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED || n.code === l.tG.AUTHENTICATION_REQUIRED) &&
                a.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: A }),
            a.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, s.i0)("payment id cannot be null on redirected confirmations.");
        return (0, s.MM)(r.body, o);
    }
}
async function R() {
    try {
        let e = { purchase_token: (0, p.r)() };
        return {
            ...(
                await r.Bo.post({
                    url: c.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body,
        };
    } catch (e) {
        throw e instanceof i.Ey ? e : new i.Ey(e);
    }
}
function N() {
    a.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
