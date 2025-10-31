n.d(t, { y: () => S }), n(415506), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(544891),
    s = n(159691),
    l = n(481060),
    c = n(355467),
    u = n(16084),
    d = n(563132),
    f = n(853872),
    _ = n(622999),
    p = n(29594),
    h = n(981631),
    m = n(231338),
    g = n(328310);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function v(e) {
    return (
        await o.tn.post({
            url: h.ANM.ORDER_SIGN(e),
            rejectWithError: !0,
        })
    ).body;
}
async function I(e) {
    try {
        let t = (
            await o.tn.get({
                url: h.ANM.ORDER_UPDATE(e),
                rejectWithError: !0,
            })
        ).body;
        console.log("Order data:", t);
        let n = t.billing_facet;
        if (null == n) throw Error("Order does not have billing facet information");
        let r = n.order_signing_deferral_context;
        if (null == r) throw Error("Order does not have payment redirect context");
        let i = r.stripe_3ds_context;
        if (null == i) throw Error("Order does not have 3DS context information");
        console.log("3DS Context:", i);
        let a = await (0, _.d2)();
        if (null == a) throw Error("Stripe not loaded");
        let s = i.client_secret;
        if (null == s || "" === s) throw Error("No client secret found in 3DS context");
        let { error: l, paymentIntent: c } = await a.confirmCardPayment(s, { payment_method: i.payment_method_id });
        if (null != l) throw Error("3DS authentication failed: ".concat(l.message));
        if (null == c) throw Error("No payment intent returned from 3DS authentication");
        console.log("3DS authentication completed successfully:", c);
    } catch (e) {
        throw (console.error("3DS completion error:", e), e);
    }
}
function T() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        [d, _] = i.useState(!1),
        [h, E] = i.useState(null),
        [y, T] = i.useState(null),
        [S, A] = i.useState(null),
        [C, N] = i.useState(!1),
        R = (0, a.e7)([f.Z], () => f.Z.paymentSources),
        P = (0, a.e7)([f.Z], () => f.Z.hasFetchedPaymentSources),
        w = (0, a.e7)([f.Z], () => f.Z.defaultPaymentSourceId);
    i.useEffect(() => {
        P || (0, c.tZ)();
    }, [P]),
        i.useEffect(() => {
            null != w && null == S && A(w);
        }, [w, S]);
    let D = i.useMemo(
            () =>
                Object.values(R).map((e) => {
                    let t = String(e.type);
                    if (e.type === m.He.CARD && "last4" in e) {
                        var n, r;
                        let i = null != (n = e.last4) ? n : "",
                            a = null != (r = e.brand) ? r : "Unknown";
                        t += " - ****".concat(i, " (").concat(a, ")");
                    } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
                    return {
                        value: e.id,
                        label: t,
                    };
                }),
            [R],
        ),
        x = (0, l.nVN)({
            value: S,
            onChange: A,
        }),
        L = async () => {
            if (null == S || "" === S) return void E("Please select a payment source first.");
            t(!0), E(null), T(null), N(!1);
            try {
                let e = "1420045362965512212",
                    t = "US",
                    n = !1,
                    r = {
                        gift_style: null,
                        recipient_id: void 0,
                        custom_message: void 0,
                        emoji_id: void 0,
                        emoji_name: void 0,
                        sound_id: void 0,
                        reward_sku_ids: void 0,
                    },
                    i = await (0, u.t_)(e, S, t, n, r);
                T(i),
                    E("Order created successfully! Order ID: ".concat(i)),
                    console.log("Order created successfully with ID:", i);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                E("Failed to create order: ".concat(e)), console.error("Failed to create order:", t);
            } finally {
                t(!1);
            }
        },
        M = async () => {
            if (null == y || "" === y) return void E("No order ID available. Please create an order first.");
            o(!0);
            try {
                var e;
                let t = (await v(y)).billing_facet,
                    n =
                        (null == t || null == (e = t.order_signing_deferral_context) ? void 0 : e.stripe_3ds_context) !=
                        null;
                N(n);
                let r = "Order signed successfully! Order ID: ".concat(y);
                n &&
                    (r = "Order signing in progress! Order ID: ".concat(
                        y,
                        ". This order requires additional authentication (3DS).",
                    )),
                    E(r);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                E("Failed to sign order: ".concat(e)), console.error("Failed to sign order:", t);
            } finally {
                o(!1);
            }
        },
        j = async () => {
            if (null == y || "" === y) return void E("No order ID available. Please create an order first.");
            _(!0);
            try {
                await I(y),
                    E("3DS authentication completed successfully! Order ID: ".concat(y)),
                    console.log("3DS authentication completed successfully for order:", y);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                E("Failed to complete 3DS: ".concat(e)), console.error("Failed to complete 3DS:", t);
            } finally {
                _(!1);
            }
        };
    return (0, r.jsxs)(p.$0, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: "Order SKU Test",
            }),
            (0, r.jsxs)(p.E_, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: g.labelSpacing,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication with example parameters. Check the console for detailed logs.",
                    }),
                    (0, r.jsxs)("div", {
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                className: g.labelSpacing,
                                children: "Payment Source:",
                            }),
                            (0, r.jsx)(
                                l.PhF,
                                O(b({}, x), {
                                    options: D,
                                    placeholder: "Select a payment source...",
                                    isDisabled: !P,
                                    label: "Payment Source",
                                    clearable: !0,
                                }),
                            ),
                            !P &&
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: g.labelSpacing,
                                    children: "Loading payment sources...",
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            marginBottom: "8px",
                            flexWrap: "wrap",
                        },
                        children: [
                            (0, r.jsx)(s.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: L,
                                disabled: e || null == S || "" === S,
                            }),
                            (0, r.jsx)(s.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: M,
                                disabled: n || null == y || "" === y,
                            }),
                            (0, r.jsx)(s.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? "Completing 3DS..." : "Complete 3DS",
                                onClick: j,
                                disabled: d || null == y || "" === y || !C,
                            }),
                        ],
                    }),
                    null != h &&
                        (0, r.jsx)("div", {
                            className: g.labelSpacing,
                            children: h.split("\n").map((e, t) =>
                                (0, r.jsx)(
                                    l.Text,
                                    {
                                        variant: "text-md/normal",
                                        style: {
                                            display: "block",
                                            marginBottom: t < h.split("\n").length - 1 ? "4px" : "0",
                                        },
                                        children: e,
                                    },
                                    t,
                                ),
                            ),
                        }),
                ],
            }),
        ],
    });
}
let S = {
    name: "Order SKU",
    component: function () {
        return (0, r.jsx)(d.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsx)(T, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
