var i = n(635358),
    r = n(620632),
    a = n(73153),
    s = n(627784),
    l = n(136857),
    o = n(178253),
    d = n(669815),
    c = n(977445),
    u = n(937427),
    _ = n(67480),
    E = n(949192),
    A = n(403362),
    f = n(107351),
    h = n(371794),
    I = n(652215);
let p = { isGift: !1 };
function m(e) {
    a.h.dispatch({ type: "SKU_PURCHASE_SUCCESS", ...e });
}
n.d(
    t,
    {},
    {
        Aj: async function (e, t, n, i) {
            a.h.dispatch({ type: "ORDER_CREATE_START" });
            try {
                let s = {
                    order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
                    billing_facet: { payment_source_id: t },
                };
                n &&
                    (s.gifting_facet = {
                        is_gift: !0,
                        gift_customization: {
                            recipient_id: i.recipient_id,
                            gift_style: i.gift_style,
                            emoji_id: i.emoji_id,
                            emoji_name: i.emoji_name,
                            sound_id: i.sound_id,
                            reward_sku_ids: i.reward_sku_ids,
                            custom_message_contents: i.custom_message,
                        },
                    });
                let l = (await r.Bo.post({ url: I.Rsh.ORDER_CREATE, body: s, rejectWithError: (0, r.fT)() })).body,
                    o = l.id;
                return (a.h.dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: o, order: l }), o);
            } catch (e) {
                throw (a.h.dispatch({ type: "ORDER_CREATE_FAIL" }), new s.Ey(e));
            }
        },
        EX: async function (e, t, n, s) {
            if (null == _.A.get(t)) {
                a.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
                try {
                    let l = (0, c.Fs)(e),
                        o = {
                            url: l ? I.Rsh.STORE_SKU(t) : I.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t),
                            rejectWithError: (0, r.fT)(),
                        },
                        d = {};
                    (n === i.g.VARIANTS_GROUP && (d.variants_return_style = n),
                        s && (d.include_unpublished = !0),
                        Object.keys(d).length > 0 && (o.query = d));
                    let u = await (0, h.aP)(o);
                    (a.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: l ? u.body : u.body.sku }),
                        l || a.h.dispatch({ type: "STORE_LISTING_FETCH_SUCCESS", storeListing: u.body }));
                } catch (e) {
                    throw (a.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }), new o.A(`Failed to fetch SKU ${t}`));
                }
            }
        },
        NY: async function (e) {
            let {
                    applicationId: t,
                    skuId: n,
                    paymentSourceId: i,
                    isGift: a,
                    currency: o,
                    applyWalletBalance: d,
                    previousTotal: _,
                } = e,
                E = { payment_source_id: i, gift: a, currency: o };
            (null != d && (E.apply_wallet_balance = d),
                null != _ && (E.previous_total = _),
                (0, c.Fs)(t) && (E.test_mode = !0));
            let A = u.A.getPromotionIdOverride();
            null != A && (E.promotion_id_override = A);
            try {
                return (
                    await (0, h.aP)({
                        url: I.Rsh.STORE_SKU_PURCHASE(n),
                        query: E,
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
        },
        O1: async function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (!(0, c.Fs)(e) && t) throw Error("this should only be used in test mode");
            let n = (await (0, h.aP)({ url: I.Rsh.APPLICATION_SKUS(e), rejectWithError: (0, r.fT)() })).body;
            return (a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n);
        },
        T3: function () {
            a.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
        },
        XU: async function (e, t, n) {
            let {
                paymentSource: i,
                expectedAmount: o,
                expectedCurrency: _,
                analyticsLoadId: h,
                isGift: g,
                giftInfoOptions: T,
                subscriptionPlanId: S,
                loadId: N,
                countryCode: C,
                quantity: O,
                applyWalletBalance: R,
                expectedPaymentLegs: L,
            } = { ...p, ...n };
            a.h.dispatch({ type: "SKU_PURCHASE_START", applicationId: e, skuId: t, isGift: g, loadId: N });
            let y = (0, c.Fs)(e);
            try {
                let e = {
                        gift: g,
                        sku_subscription_plan_id: S,
                        gateway_checkout_context: await (0, E.ob)(i),
                        load_id: N,
                        gift_info_options: T,
                    },
                    n = u.A.getPromotionIdOverride();
                if ((null != n && (e.promotion_id_override = n), y)) e.test_mode = !0;
                else {
                    if (
                        null != i &&
                        ((e.payment_source_id = i.id), (e.payment_source_token = await (0, d.jV)(i)), I.KcG.has(i.type))
                    ) {
                        let t = await (0, d.jf)(i.type);
                        e.return_url =
                            (0, r.TP)() +
                            I.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(i.type, t ?? "", "success");
                    }
                    null != C && (e.country_code = C);
                }
                (null != o && (e.expected_amount = o),
                    null != _ && (e.expected_currency = _),
                    (e.purchase_token = (0, f.r)()),
                    null != O && (e.quantity = O),
                    (e.apply_wallet_balance = R ?? !1),
                    null != L &&
                        (e.expected_payment_legs = L.map((e) => {
                            let { payment_gateway: t, amount: n } = e;
                            return { payment_gateway: t, amount: n };
                        })));
                let a = await r.Bo.post({
                    url: I.Rsh.STORE_SKU_PURCHASE(t),
                    body: e,
                    context: { load_id: h },
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                });
                return (
                    m({
                        skuId: t,
                        libraryApplications:
                            null != a.body.library_applications ? a.body.library_applications.filter(A.Vq) : [],
                        entitlements: a.body.entitlements,
                        giftCode: a.body.gift_code,
                        loadId: N,
                    }),
                    { ...a.body, appliedUserDiscounts: a.body.applied_user_discounts, redirectConfirmation: !1 }
                );
            } catch (r) {
                let n = r instanceof s.Ey ? r : new s.Ey(r);
                if (
                    ((n.code === l.tG.CONFIRMATION_REQUIRED || n.code === l.tG.AUTHENTICATION_REQUIRED) &&
                        a.h.dispatch({ type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: t, isGift: g }),
                    a.h.dispatch({ type: "SKU_PURCHASE_FAIL", loadId: N, applicationId: e, skuId: t, error: n }),
                    n.code !== l.tG.CONFIRMATION_REQUIRED)
                )
                    throw n;
                if (!r.body.payment_id)
                    throw (0, d.J0)("payment_confirmation", "payment id cannot be null on redirected confirmations.");
                return (0, d.Oj)(r.body, i);
            }
        },
        fM: async function (e) {
            if (null == _.A.get(e)) {
                a.h.dispatch({ type: "SKU_FETCH_START", skuId: e });
                try {
                    let t = await (0, h.aP)({ url: I.Rsh.STORE_SKU_PUBLIC(e), rejectWithError: (0, r.fT)() });
                    a.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: t.body.sku });
                } catch (t) {
                    throw (
                        a.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: e }), new o.A(`Failed to fetch public SKU ${e}`)
                    );
                }
            }
        },
        lo: async function () {
            try {
                let e = { purchase_token: (0, f.r)() };
                return {
                    ...(
                        await r.Bo.post({
                            url: I.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                            body: e,
                            oldFormErrors: !0,
                            rejectWithError: (0, r.fT)(),
                        })
                    ).body,
                };
            } catch (e) {
                throw e instanceof s.Ey ? e : new s.Ey(e);
            }
        },
        mF: m,
    },
);
