i.d(e, { Aj: () => I, EX: () => S, NY: () => T, O1: () => A, T3: () => m, XU: () => C, lo: () => U });
var r = i(635358),
    o = i(636537),
    _ = i(228366),
    n = i(913122),
    s = i(136857),
    a = i(178253),
    c = i(277984),
    d = i(977445),
    l = i(937427),
    E = i(67480),
    u = i(739508),
    p = i(403362),
    y = i(107351),
    h = i(371794),
    R = i(652215);
async function S(t, e, i, n) {
    if (null == E.A.get(e)) {
        _.h.dispatch({ type: "SKU_FETCH_START", skuId: e });
        try {
            let s = (0, d.Fs)(t),
                a = {
                    url: s ? R.Rsh.STORE_SKU(e) : R.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
                    rejectWithError: (0, o.fT)(),
                },
                c = {};
            i === r.g.VARIANTS_GROUP && (c.variants_return_style = i),
                n && (c.include_unpublished = !0),
                Object.keys(c).length > 0 && (a.query = c);
            let l = await (0, h.aP)(a);
            _.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: s ? l.body : l.body.sku }),
                s || _.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: l.body });
        } catch (t) {
            throw (_.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }), new a.A(`Failed to fetch SKU ${e}`));
        }
    }
}
async function A(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(0, d.Fs)(t) && e) throw Error("this should only be used in test mode");
    let i = (await (0, h.aP)({ url: R.Rsh.APPLICATION_SKUS(t), rejectWithError: (0, o.fT)() })).body;
    return _.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: i }), i;
}
async function T(t) {
    let { applicationId: e, skuId: i, paymentSourceId: r, isGift: _, currency: a } = t,
        c = { payment_source_id: r, gift: _, currency: a };
    (0, d.Fs)(e) && (c.test_mode = !0);
    let E = l.A.getPromotionIdOverride();
    null != E && (c.promotion_id_override = E);
    try {
        return (
            await (0, h.aP)({
                url: R.Rsh.STORE_SKU_PURCHASE(i),
                query: c,
                oldFormErrors: !0,
                rejectWithError: (0, o.fT)(),
            })
        ).body;
    } catch (e) {
        let t = e instanceof n.Ey ? e : new n.Ey(e);
        if (
            t.code === s.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            t.code === s.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            t.code === s.tG.INVALID_BILLING_ADDRESS
        )
            throw t;
        return null;
    }
}
let f = { isGift: !1 };
async function I(t, e, i, r, s) {
    _.h.dispatch({ type: "ORDER_CREATE_START" });
    try {
        let n = {
            order_line_items: [{ sku_id: t, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: e },
            location_facet: { request_gateway_country_code: i },
        };
        r &&
            (n.gifting_facet = {
                is_gift: !0,
                gift_customization: {
                    recipient_id: s.recipient_id,
                    gift_style: s.gift_style,
                    emoji_id: s.emoji_id,
                    emoji_name: s.emoji_name,
                    sound_id: s.sound_id,
                    reward_sku_ids: s.reward_sku_ids,
                    custom_message_contents: s.custom_message,
                },
            });
        let a = (await o.Bo.post({ url: R.Rsh.ORDER_CREATE, body: n, rejectWithError: (0, o.fT)() })).body,
            c = a.id;
        return _.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: c, order: a }), c;
    } catch (t) {
        throw (_.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new n.Ey(`Failed to create order: ${t}`));
    }
}
async function C(t, e, i) {
    let {
        paymentSource: r,
        expectedAmount: a,
        expectedCurrency: E,
        analyticsLoadId: h,
        isGift: S,
        giftInfoOptions: A,
        subscriptionPlanId: T,
        loadId: I,
        countryCode: C,
        quantity: U,
    } = { ...f, ...i };
    _.h.wait(() => {
        _.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: t, skuId: e });
    });
    let m = (0, d.Fs)(t);
    try {
        let t = {
                gift: S,
                sku_subscription_plan_id: T,
                gateway_checkout_context: await (0, u.ob)(r),
                load_id: I,
                gift_info_options: A,
            },
            i = l.A.getPromotionIdOverride();
        if ((null != i && (t.promotion_id_override = i), m)) t.test_mode = !0;
        else {
            if (
                null != r &&
                ((t.payment_source_id = r.id), (t.payment_source_token = await (0, c.jV)(r)), R.KcG.has(r.type))
            ) {
                let e = await (0, c.jf)(r.type);
                t.return_url =
                    (0, o.TP)() + R.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, e ?? "", "success");
            }
            null != C && (t.country_code = C);
        }
        null != a && (t.expected_amount = a),
            null != E && (t.expected_currency = E),
            (t.purchase_token = (0, y.r)()),
            null != U && (t.quantity = U);
        let n = await o.Bo.post({
            url: R.Rsh.STORE_SKU_PURCHASE(e),
            body: t,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: (0, o.fT)(),
        });
        return (
            _.h.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: e,
                libraryApplications:
                    null != n.body.library_applications ? n.body.library_applications.filter(p.Vq) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code,
            }),
            { ...n.body, appliedUserDiscounts: n.body.applied_user_discounts, redirectConfirmation: !1 }
        );
    } catch (o) {
        let i = o instanceof n.Ey ? o : new n.Ey(o);
        if (
            ((i.code === s.tG.CONFIRMATION_REQUIRED || i.code === s.tG.AUTHENTICATION_REQUIRED) &&
                _.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: e, isGift: S }),
            _.h.dispatch({ type: "SKU_PURCHASE_FAIL", applicationId: t, skuId: e, error: i }),
            i.code !== s.tG.CONFIRMATION_REQUIRED)
        )
            throw i;
        if (!o.body.payment_id) throw (0, c.i0)("payment id cannot be null on redirected confirmations.");
        return (0, c.Oj)(o.body, r);
    }
}
async function U() {
    try {
        let t = { purchase_token: (0, y.r)() };
        return {
            ...(
                await o.Bo.post({
                    url: R.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0,
                    rejectWithError: (0, o.fT)(),
                })
            ).body,
        };
    } catch (t) {
        throw t instanceof n.Ey ? t : new n.Ey(t);
    }
}
function m() {
    _.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
}
