i.d(e, { Aj: () => I, EX: () => R, NY: () => A, O1: () => S, T3: () => f, XU: () => U, lo: () => T });
var r = i(635358),
    o = i(636537),
    _ = i(228366),
    s = i(913122),
    n = i(136857),
    c = i(178253),
    a = i(753390),
    d = i(977445),
    E = i(67480),
    l = i(739508),
    p = i(403362),
    u = i(107351),
    y = i(371794),
    h = i(652215);
async function R(t, e, i, o) {
    if (null == E.A.get(e)) {
        _.h.dispatch({ type: "SKU_FETCH_START", skuId: e });
        try {
            let s = (0, d.Fs)(t),
                n = { url: s ? h.Rsh.STORE_SKU(e) : h.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 },
                c = {};
            i === r.g.VARIANTS_GROUP && (c.variants_return_style = i),
                o && (c.include_unpublished = !0),
                Object.keys(c).length > 0 && (n.query = c);
            let a = await (0, y.aP)(n);
            _.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: s ? a.body : a.body.sku }),
                s || _.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: a.body });
        } catch (t) {
            throw (_.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }), new c.A(`Failed to fetch SKU ${e}`));
        }
    }
}
async function S(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, d.Fs)(t) && e) throw Error("this should only be used in test mode");
    let i = (await (0, y.aP)({ url: h.Rsh.APPLICATION_SKUS(t), rejectWithError: !1 })).body;
    return _.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: i }), i;
}
async function A(t) {
    let { applicationId: e, skuId: i, paymentSourceId: r, isGift: o, currency: _ } = t,
        c = { payment_source_id: r, gift: o, currency: _ };
    (0, d.Fs)(e) && (c.test_mode = !0);
    try {
        return (await (0, y.aP)({ url: h.Rsh.STORE_SKU_PURCHASE(i), query: c, oldFormErrors: !0, rejectWithError: !1 }))
            .body;
    } catch (e) {
        let t = e instanceof s.Ey ? e : new s.Ey(e);
        if (
            t.code === n.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            t.code === n.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            t.code === n.tG.INVALID_BILLING_ADDRESS
        )
            throw t;
        return null;
    }
}
let C = { isGift: !1 };
async function I(t, e, i, r, n) {
    _.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let s = {
            order_line_items: [{ sku_id: t, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: e },
            location_facet: { request_gateway_country_code: i },
        };
        r &&
            (s.gifting_facet = {
                is_gift: !0,
                gift_customization: {
                    recipient_id: n.recipient_id,
                    gift_style: n.gift_style,
                    emoji_id: n.emoji_id,
                    emoji_name: n.emoji_name,
                    sound_id: n.sound_id,
                    reward_sku_ids: n.reward_sku_ids,
                    custom_message_contents: n.custom_message,
                },
            });
        let c = (await o.Bo.post({ url: h.Rsh.ORDER_CREATE, body: s, rejectWithError: !1 })).body,
            a = c.id;
        return _.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: a, order: c }), a;
    } catch (t) {
        throw (_.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new s.Ey(`Failed to create order: ${t}`));
    }
}
async function U(t, e, i) {
    let {
        paymentSource: r,
        expectedAmount: c,
        expectedCurrency: E,
        analyticsLoadId: y,
        isGift: R,
        giftInfoOptions: S,
        subscriptionPlanId: A,
        loadId: I,
        countryCode: U,
        orderId: T,
    } = { ...C, ...i };
    _.h.wait(() => {
        _.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: t, skuId: e });
    });
    let f = (0, d.Fs)(t);
    try {
        let t = {
            gift: R,
            sku_subscription_plan_id: A,
            gateway_checkout_context: await (0, l.ob)(r),
            load_id: I,
            gift_info_options: S,
        };
        if (f) t.test_mode = !0;
        else {
            if (
                null != r &&
                ((t.payment_source_id = r.id), (t.payment_source_token = await (0, a.jV)(r)), h.KcG.has(r.type))
            ) {
                let e = await (0, a.jf)(r.type);
                t.return_url =
                    (0, o.TP)() + h.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, e ?? "", "success");
            }
            null != U && (t.country_code = U);
        }
        null != c && (t.expected_amount = c),
            null != E && (t.expected_currency = E),
            (t.purchase_token = (0, u.r)()),
            null != T && (t.order_id = T);
        let i = await o.Bo.post({
            url: h.Rsh.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: y },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            _.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: e,
                libraryApplications:
                    null != i.body.library_applications ? i.body.library_applications.filter(p.Vq) : [],
                entitlements: i.body.entitlements,
                appliedUserDiscounts: i.body.applied_user_discounts,
                giftCode: i.body.gift_code,
            }),
            { ...i.body, appliedUserDiscounts: i.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (o) {
        let i = o instanceof s.Ey ? o : new s.Ey(o);
        if (
            ((i.code === n.tG.CONFIRMATION_REQUIRED || i.code === n.tG.AUTHENTICATION_REQUIRED) &&
                _.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: e, isGift: R }),
            _.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: t, skuId: e, error: i }),
            i.code !== n.tG.CONFIRMATION_REQUIRED)
        )
            throw i;
        if (!o.body.payment_id) throw (0, a.i0)("payment id cannot be null on redirected confirmations.");
        return (0, a.MM)(o.body, r);
    }
}
async function T() {
    try {
        let t = { purchase_token: (0, u.r)() };
        return {
            ...(
                await o.Bo.post({
                    url: h.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body,
        };
    } catch (t) {
        throw t instanceof s.Ey ? t : new s.Ey(t);
    }
}
function f() {
    _.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
