n.d(t, { Aj: () => y, EX: () => m, O1: () => A, QX: () => I, T3: () => N, XU: () => g, lo: () => S });
var r = n(635358),
    a = n(636537),
    i = n(228366),
    o = n(845584),
    l = n(136857),
    s = n(178253),
    d = n(323082),
    u = n(977445),
    c = n(67480),
    _ = n(739508),
    p = n(403362),
    C = n(107351),
    h = n(371794),
    E = n(652215);
async function m(e, t, n, a) {
    if (null == c.A.get(t)) {
        i.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
        try {
            let o = (0, u.F)(e),
                l = { url: o ? E.Rsh.STORE_SKU(t) : E.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t), rejectWithError: !1 },
                s = {};
            n === r.g.VARIANTS_GROUP && (s.variants_return_style = n),
                a && (s.include_unpublished = !0),
                Object.keys(s).length > 0 && (l.query = s);
            let d = await (0, h.aP)(l);
            i.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: o ? d.body : d.body.sku }),
                o || i.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: d.body });
        } catch (e) {
            throw (i.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new s.A(`Failed to fetch SKU ${t}`));
        }
    }
}
async function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, u.F)(e) && t) throw Error("this should only be used in test mode");
    let n = (await (0, h.aP)({ url: E.Rsh.APPLICATION_SKUS(e), rejectWithError: !1 })).body;
    return i.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
}
async function I(e, t, n, r) {
    let a,
        s = { payment_source_id: n, gift: r?.isGift, currency: r?.currency };
    (0, u.F)(e) && (s.test_mode = !0), i.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
    try {
        (a = await (0, h.aP)({ url: E.Rsh.STORE_SKU_PURCHASE(t), query: s, oldFormErrors: !0, rejectWithError: !1 })),
            i.h.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: a.body,
                checkoutSessionId: r?.loadId,
            });
    } catch (n) {
        i.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE", skuId: t });
        let e = n instanceof o.Ey ? n : new o.Ey(n);
        if (
            e.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === l.tG.INVALID_BILLING_ADDRESS
        )
            throw e;
    }
    return a;
}
let T = { isGift: !1 };
async function y(e, t, n, r, l) {
    i.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let o = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
        };
        r &&
            (o.gifting_facet = {
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
        let s = (await a.Bo.post({ url: E.Rsh.ORDER_CREATE, body: o, rejectWithError: !1 })).body,
            d = s.id;
        return i.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: d, order: s }), d;
    } catch (e) {
        throw (i.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new o.Ey(`Failed to create order: ${e}`));
    }
}
async function g(e, t, n) {
    let {
        paymentSource: r,
        expectedAmount: s,
        expectedCurrency: c,
        analyticsLoadId: h,
        isGift: m,
        giftInfoOptions: A,
        subscriptionPlanId: I,
        loadId: y,
        countryCode: g,
        orderId: S,
    } = { ...T, ...n };
    i.h.wait(() => {
        i.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t });
    });
    let N = (0, u.F)(e);
    try {
        let e = {
            gift: m,
            sku_subscription_plan_id: I,
            gateway_checkout_context: await (0, _.ob)(r),
            load_id: y,
            gift_info_options: A,
        };
        if (N) e.test_mode = !0;
        else {
            if (
                null != r &&
                ((e.payment_source_id = r.id), (e.payment_source_token = await (0, d.jV)(r)), E.KcG.has(r.type))
            ) {
                let t = await (0, d.jf)(r.type);
                e.return_url =
                    (0, a.TP)() + E.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, t ?? "", "success");
            }
            null != g && (e.country_code = g);
        }
        null != s && (e.expected_amount = s),
            null != c && (e.expected_currency = c),
            (e.purchase_token = (0, C.r)()),
            null != S && (e.order_id = S);
        let n = await a.Bo.post({
            url: E.Rsh.STORE_SKU_PURCHASE(t),
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
                    null != n.body.library_applications ? n.body.library_applications.filter(p.Vq) : [],
                entitlements: n.body.entitlements,
                appliedUserDiscounts: n.body.applied_user_discounts,
                giftCode: n.body.gift_code,
            }),
            { ...n.body, appliedUserDiscounts: n.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (a) {
        let n = a instanceof o.Ey ? a : new o.Ey(a);
        if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED || n.code === l.tG.AUTHENTICATION_REQUIRED) &&
                i.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: m }),
            i.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: e, skuId: t, error: n }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
        )
            throw n;
        if (!a.body.payment_id) throw (0, d.i0)("payment id cannot be null on redirected confirmations.");
        return (0, d.MM)(a.body, r);
    }
}
async function S() {
    try {
        let e = { purchase_token: (0, C.r)() };
        return {
            ...(
                await a.Bo.post({
                    url: E.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body,
        };
    } catch (e) {
        throw e instanceof o.Ey ? e : new o.Ey(e);
    }
}
function N() {
    i.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
