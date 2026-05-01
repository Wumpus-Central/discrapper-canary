n.d(t, { Aj: () => T, EX: () => A, O1: () => I, QX: () => y, T3: () => N, XU: () => S, lo: () => R });
var o = n(635358),
    r = n(636537),
    i = n(228366),
    a = n(845584),
    l = n(136857),
    s = n(178253),
    u = n(323082),
    _ = n(977445),
    d = n(67480),
    C = n(739508),
    E = n(403362),
    p = n(107351),
    h = n(371794),
    c = n(652215);
async function A(e, t, n, r) {
    if (null == d.A.get(t)) {
        i.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let a = (0, _.F)(e),
                l = { url: a ? c.Rsh.STORE_SKU(t) : c.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
                s = {};
            n === o.g.VARIANTS_GROUP && (s.variants_return_style = n),
                r && (s.include_unpublished = !0),
                Object.keys(s).length > 0 && (l.query = s);
            let u = await (0, h.aP)(l);
            i.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: a ? u.body : u.body.sku }),
                a || i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: u.body });
        } catch (e) {
            throw (i.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new s.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, _.F)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, h.aP)({ url: c.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return i.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function y(e, t, n, o) {
    let r,
        s = { payment_source_id: n, gift: o?.isGift, currency: o?.currency };
    (0, _.F)(e) && (s.test_mode = !0), i.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
    try {
        (r = await (0, h.aP)({ url: c.Rsh.STORE_SKU_PURCHASE(t), query: s, oldFormErrors: !0, rejectWithError: !1 })),
            i.h.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: r.body,
                checkoutSessionId: o?.loadId,
            });
    } catch (n) {
        i.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE", skuId: t });
        let e = n instanceof a.Ey ? n : new a.Ey(n);
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
    i.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let a = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        o &&
            (a.gifting_facet = {
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
        let s = (await r.Bo.post({ url: c.Rsh.ORDER_CREATE, body: a, rejectWithError: !1 })).body,
            u = s.id;
        return i.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: u, order: s }), u;
    } catch (e) {
        throw (i.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new a.Ey(`Failed to create order: ${e}`));
    }
}
async function S(e, t, n) {
    let {
        paymentSource: o,
        expectedAmount: s,
        expectedCurrency: d,
        analyticsLoadId: h,
        isGift: A,
        giftInfoOptions: I,
        subscriptionPlanId: y,
        loadId: T,
        countryCode: S,
        orderId: R,
    } = { ...m, ...n };
    i.h.wait(() => {
        i.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let N = (0, _.F)(e);
    try {
        let e = {
            gift: A,
            sku_subscription_plan_id: y,
            gateway_checkout_context: await (0, C.ob)(o),
            load_id: T,
            gift_info_options: I,
        };
        if (N) e.test_mode = !0;
        else {
            if (
                null != o &&
                ((e.payment_source_id = o.id), (e.payment_source_token = await (0, u.jV)(o)), c.KcG.has(o.type))
            ) {
                let t = await (0, u.jf)(o.type);
                e.return_url =
                    (0, r.TP)() + c.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.type, t ?? "", "success");
            }
            null != S && (e.country_code = S);
        }
        null != s && (e.expected_amount = s),
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
            i.h.dispatch({
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
        let n = r instanceof a.Ey ? r : new a.Ey(r);
        if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED || n.code === l.tG.AUTHENTICATION_REQUIRED) &&
                i.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: A }),
            i.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!r.body.payment_id) throw (0, u.i0)("payment id cannot be null on redirected confirmations.");
        return (0, u.MM)(r.body, o);
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
        throw e instanceof a.Ey ? e : new a.Ey(e);
    }
}
function N() {
    i.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
