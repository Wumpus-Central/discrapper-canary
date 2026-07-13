i.d(e, { Aj: () => U, EX: () => S, NY: () => I, O1: () => A, T3: () => m, XU: () => T, lo: () => f });
var o = i(635358),
    r = i(636537),
    _ = i(228366),
    s = i(913122),
    n = i(136857),
    a = i(178253),
    c = i(277984),
    d = i(977445),
    l = i(937427),
    u = i(67480),
    E = i(739508),
    p = i(403362),
    y = i(107351),
    h = i(371794),
    R = i(652215);
async function S(t, e, i, r) {
    if (null == u.A.get(e)) {
        _.h.dispatch({ type: "SKU_FETCH_START", skuId: e });
        try {
            let s = (0, d.Fs)(t),
                n = { url: s ? R.Rsh.STORE_SKU(e) : R.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e), rejectWithError: !1 },
                a = {};
            i === o.g.VARIANTS_GROUP && (a.variants_return_style = i),
                r && (a.include_unpublished = !0),
                Object.keys(a).length > 0 && (n.query = a);
            let c = await (0, h.aP)(n);
            _.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: s ? c.body : c.body.sku }),
                s || _.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: c.body });
        } catch (t) {
            throw (_.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }), new a.A(`Failed to fetch SKU ${e}`));
        }
    }
}
async function A(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, d.Fs)(t) && e) throw Error("this should only be used in test mode");
    let i = (await (0, h.aP)({ url: R.Rsh.APPLICATION_SKUS(t), rejectWithError: !1 })).body;
    return _.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: i }), i;
}
async function I(t) {
    let { applicationId: e, skuId: i, paymentSourceId: o, isGift: r, currency: _ } = t,
        a = { payment_source_id: o, gift: r, currency: _ };
    (0, d.Fs)(e) && (a.test_mode = !0);
    let c = l.A.getPromotionIdOverride();
    null != c && (a.promotion_id_override = c);
    try {
        return (await (0, h.aP)({ url: R.Rsh.STORE_SKU_PURCHASE(i), query: a, oldFormErrors: !0, rejectWithError: !1 }))
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
async function U(t, e, i, o, n) {
    _.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let s = {
            order_line_items: [{ sku_id: t, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: e },
            location_facet: { request_gateway_country_code: i },
        };
        o &&
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
        let a = (await r.Bo.post({ url: R.Rsh.ORDER_CREATE, body: s, rejectWithError: !1 })).body,
            c = a.id;
        return _.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: c, order: a }), c;
    } catch (t) {
        throw (_.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new s.Ey(`Failed to create order: ${t}`));
    }
}
async function T(t, e, i) {
    let {
        paymentSource: o,
        expectedAmount: a,
        expectedCurrency: u,
        analyticsLoadId: h,
        isGift: S,
        giftInfoOptions: A,
        subscriptionPlanId: I,
        loadId: U,
        countryCode: T,
        quantity: f,
    } = { ...C, ...i };
    _.h.wait(() => {
        _.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: t, skuId: e });
    });
    let m = (0, d.Fs)(t);
    try {
        let t = {
                gift: S,
                sku_subscription_plan_id: I,
                gateway_checkout_context: await (0, E.ob)(o),
                load_id: U,
                gift_info_options: A,
            },
            i = l.A.getPromotionIdOverride();
        if ((null != i && (t.promotion_id_override = i), m)) t.test_mode = !0;
        else {
            if (
                null != o &&
                ((t.payment_source_id = o.id), (t.payment_source_token = await (0, c.jV)(o)), R.KcG.has(o.type))
            ) {
                let e = await (0, c.jf)(o.type);
                t.return_url =
                    (0, r.TP)() + R.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.type, e ?? "", "success");
            }
            null != T && (t.country_code = T);
        }
        null != a && (t.expected_amount = a),
            null != u && (t.expected_currency = u),
            (t.purchase_token = (0, y.r)()),
            null != f && (t.quantity = f);
        let s = await r.Bo.post({
            url: R.Rsh.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return (
            _.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: e,
                libraryApplications:
                    null != s.body.library_applications ? s.body.library_applications.filter(p.Vq) : [],
                entitlements: s.body.entitlements,
                appliedUserDiscounts: s.body.applied_user_discounts,
                giftCode: s.body.gift_code,
            }),
            { ...s.body, appliedUserDiscounts: s.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (r) {
        let i = r instanceof s.Ey ? r : new s.Ey(r);
        if (
            ((i.code === n.tG.CONFIRMATION_REQUIRED || i.code === n.tG.AUTHENTICATION_REQUIRED) &&
                _.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: e, isGift: S }),
            _.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: t, skuId: e, error: i }),
            i.code !== n.tG.CONFIRMATION_REQUIRED)
        )
            throw i;
        if (!r.body.payment_id) throw (0, c.i0)("payment id cannot be null on redirected confirmations.");
        return (0, c.Oj)(r.body, o);
    }
}
async function f() {
    try {
        let t = { purchase_token: (0, y.r)() };
        return {
            ...(
                await r.Bo.post({
                    url: R.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
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
function m() {
    _.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
