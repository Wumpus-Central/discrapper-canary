l.d(t, { F: () => I });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(562465),
    o = l(821609),
    s = l(534514),
    d = l(834730),
    c = l(270003),
    u = l(691885),
    p = l(830382),
    m = l(323082),
    b = l(156312),
    h = l(192087),
    x = l(295405),
    y = l(71532),
    v = l(252561),
    g = l(689614),
    f = l(652215),
    _ = l(818348),
    E = l(76488);
let C = (0, g.R)();
async function S(e) {
    return (await i.Bo.post({ url: f.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function j(e) {
    return (await i.Bo.get({ url: f.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function T(e, t) {
    await i.Bo.patch({
        url: f.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function P() {
    let [e, t] = n.useState(!1),
        [l, i] = n.useState(!1),
        [b, g] = n.useState(null),
        [P, I] = n.useState(null),
        [A, k] = n.useState(C.defaultValue),
        [R, N] = n.useState(null),
        M = (0, r.bG)([x.A], () => x.A.paymentSources),
        D = (0, r.bG)([x.A], () => x.A.hasFetchedPaymentSources),
        L = (0, r.bG)([x.A], () => x.A.defaultPaymentSourceId);
    n.useEffect(() => {
        D || (0, m.$o)();
    }, [D]),
        n.useEffect(() => {
            null != L && null == R && N(L);
        }, [L, R]);
    let w = n.useRef(null);
    n.useEffect(() => {
        if (null == P || "" === P) {
            w.current = R;
            return;
        }
        if (R !== w.current) {
            if (null == R || "" === R) {
                w.current = R;
                return;
            }
            T(P, R)
                .then(() => {
                    g(`Order updated successfully!
Order ID: ${P}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    g(`Failed to update order: ${t}`);
                }),
                (w.current = R);
        }
    }, [P, R]);
    let O = n.useMemo(
            () =>
                Object.values(M).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = h.w[t]) ? l() : String(t));
                    if (e.type === _.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [M],
        ),
        B = async () => {
            if (null == R || "" === R) return void g("Please select a payment source first.");
            if (null == A || "" === A || A === f.dJq) return void g("Please select a SKU ID.");
            t(!0), g(null), I(null);
            try {
                let e = await (0, p.Aj)(A, R, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                I(e), g(`Order created successfully! Order ID: ${e}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                g(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        V = async () => {
            if (null == P || "" === P) return void g("No order ID available. Please create an order first.");
            i(!0);
            try {
                let e = await S(P);
                if (null == e.errors) {
                    g(`Order signed successfully! Order ID: ${P}`), I(null);
                    return;
                }
                let t = e.errors[0];
                if (1e3 === t)
                    g(`Order signing in progress!
Order ID: ${P}
This order requires additional authentication (3DS).`),
                        (async () => {
                            try {
                                let t = e.billing_facet;
                                if (null == t) throw Error("Order does not have billing facet information");
                                let l = t.order_signing_deferral_context;
                                if (null == l) throw Error("Order does not have payment redirect context");
                                let a = l.stripe_3ds_context;
                                if (null == a) throw Error("Order does not have 3DS context information");
                                let n = await (0, y.Cv)();
                                if (null == n) throw Error("Stripe not loaded");
                                let r = a.client_secret;
                                if (null == r || "" === r) throw Error("No client secret found in 3DS context");
                                let { error: i, paymentIntent: o } = await n.confirmCardPayment(r, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != i) throw Error(`3DS authentication failed: ${i.message}`);
                                if (null == o) throw Error("No payment intent returned from 3DS authentication");
                                let s = e.id ?? P ?? "Unknown";
                                I(null),
                                    g(`3DS authentication completed successfully!
Order ID: ${s}`);
                            } catch (a) {
                                let t = a instanceof Error ? a.message : String(a),
                                    l = e.id ?? P ?? "Unknown";
                                g(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                            }
                        })();
                else if (1001 === t) {
                    let t, l, a, n, r, i, o, s;
                    g(`Order signing in progress!
Order ID: ${P}
This order requires redirection to complete the payment.
Polling order status...`),
                        (t = e.billing_facet),
                        (l = t?.order_signing_deferral_context?.payment_redirect_context),
                        (a = l?.redirect_url),
                        null != a && window.open(a),
                        (n = Date.now()),
                        (r = null),
                        (i = () => {
                            let e = Date.now() - n,
                                t = Math.min(3e3, 3e4 - e);
                            t > 0 &&
                                (r = setTimeout(() => {
                                    s().catch((e) => {
                                        let t = e instanceof Error ? e.message : String(e);
                                        g(`Failed to poll order status!
Order ID: ${P}
Error: ${t}`);
                                    });
                                }, t));
                        }),
                        (o = () => {
                            null != r && clearTimeout(r);
                        }),
                        (s = async () => {
                            let e = Date.now() - n;
                            if (e >= 3e4) {
                                try {
                                    var t;
                                    (t = (await j(P)).status),
                                        g(`Order signing timed out.
Order ID: ${P}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        o();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    g(`Order signing timed out.
Order ID: ${P}
Error: ${e}`),
                                        o();
                                }
                                return;
                            }
                            try {
                                let e = (await j(P)).status;
                                if (2 === e) {
                                    g(`Order signed successfully!
Order ID: ${P}
Payment redirect completed.`),
                                        I(null),
                                        o();
                                    return;
                                }
                                if (1 === e) {
                                    g(`Order signed unsuccessfully
Order ID: ${P}`),
                                        o();
                                    return;
                                }
                                i();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? i()
                                    : (g(`Order signing timed out.
Order ID: ${P}
Error: ${t}`),
                                      o());
                            }
                        })().catch((e) => {
                            let t = e instanceof Error ? e.message : String(e);
                            g(`Failed to start polling order status!
Order ID: ${P}
Error: ${t}`);
                        });
                } else
                    g(`Order signing failed
Order ID: ${P}
Error: ${t}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                g(`Failed to sign order: ${e}`);
            } finally {
                i(!1);
            }
        };
    return (0, a.jsxs)(v.wn, {
        children: [
            (0, a.jsx)(s.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, a.jsxs)(v.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, a.jsx)(d.E, {
                        variant: "text-md/normal",
                        className: E.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, a.jsxs)(c.n, {
                        label: "Configuration",
                        children: [
                            (0, a.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, a.jsx)(u.l, {
                                    selectionMode: "single",
                                    value: A,
                                    onSelectionChange: k,
                                    options: C.options,
                                    formatOption: (e) => {
                                        let { value: t, label: l } = e;
                                        return { id: t, value: t, label: l };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, a.jsx)(u.l, {
                                        selectionMode: "single",
                                        value: R,
                                        onSelectionChange: N,
                                        options: O,
                                        placeholder: "Select a payment source...",
                                        disabled: !D,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !D &&
                                        (0, a.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: E.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, a.jsx)(o.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: B,
                                disabled: e || null == R || "" === R || null == A || "" === A || A === f.dJq,
                            }),
                            (0, a.jsx)(o.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: V,
                                disabled: l || null == P || "" === P,
                            }),
                        ],
                    }),
                    null != b &&
                        (0, a.jsx)("div", {
                            className: E.cW,
                            children: b
                                .split("\n")
                                .map((e, t) =>
                                    (0, a.jsx)(
                                        d.E,
                                        {
                                            variant: "text-md/normal",
                                            style: {
                                                display: "block",
                                                marginBottom: t < b.split("\n").length - 1 ? "4px" : "0",
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
let I = {
    name: "Order SKU",
    component: function () {
        return (0, a.jsx)(b.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsx)(P, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
