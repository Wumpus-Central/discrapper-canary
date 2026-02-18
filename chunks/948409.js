l.d(t, { F: () => C });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(562465),
    s = l(732955),
    o = l(397927),
    u = l(384904),
    c = l(830382),
    d = l(156312),
    p = l(192087),
    m = l(295405),
    h = l(71532),
    x = l(252561),
    b = l(689614),
    g = l(652215),
    y = l(818348),
    E = l(825057);
let f = (0, b.R)();
async function v(e) {
    return (await i.Bo.post({ url: g.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function S(e) {
    return (await i.Bo.get({ url: g.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function j(e, t) {
    await i.Bo.patch({
        url: g.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function T() {
    let [e, t] = n.useState(!1),
        [l, i] = n.useState(!1),
        [d, b] = n.useState(null),
        [T, C] = n.useState(null),
        [P, R] = n.useState(f.defaultValue),
        [A, _] = n.useState(null),
        N = (0, r.bG)([m.A], () => m.A.paymentSources),
        I = (0, r.bG)([m.A], () => m.A.hasFetchedPaymentSources),
        k = (0, r.bG)([m.A], () => m.A.defaultPaymentSourceId);
    n.useEffect(() => {
        I || (0, u.$o)();
    }, [I]),
        n.useEffect(() => {
            null != k && null == A && _(k);
        }, [k, A]);
    let D = n.useRef(null);
    n.useEffect(() => {
        if (null == T || "" === T) {
            D.current = A;
            return;
        }
        if (A !== D.current) {
            if (null == A || "" === A) {
                D.current = A;
                return;
            }
            j(T, A)
                .then(() => {
                    b(`Order updated successfully!
Order ID: ${T}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    b(`Failed to update order: ${t}`);
                }),
                (D.current = A);
        }
    }, [T, A]);
    let M = n.useMemo(
            () =>
                Object.values(N).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = p.w[t]) ? l() : String(t));
                    if (e.type === y.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [N],
        ),
        O = async () => {
            if (null == A || "" === A) return void b("Please select a payment source first.");
            if (null == P || "" === P || P === g.dJq) return void b("Please select a SKU ID.");
            t(!0), b(null), C(null);
            try {
                let e = await (0, c.Aj)(P, A, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                C(e), b(`Order created successfully! Order ID: ${e}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                b(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        B = async () => {
            if (null == T || "" === T) return void b("No order ID available. Please create an order first.");
            i(!0);
            try {
                let e = await v(T);
                if (null == e.errors) {
                    b(`Order signed successfully! Order ID: ${T}`), C(null);
                    return;
                }
                let t = e.errors[0];
                if (1e3 === t)
                    b(`Order signing in progress!
Order ID: ${T}
This order requires additional authentication (3DS).`),
                        (async () => {
                            try {
                                let t = e.billing_facet;
                                if (null == t) throw Error("Order does not have billing facet information");
                                let l = t.order_signing_deferral_context;
                                if (null == l) throw Error("Order does not have payment redirect context");
                                let a = l.stripe_3ds_context;
                                if (null == a) throw Error("Order does not have 3DS context information");
                                let n = await (0, h.Cv)();
                                if (null == n) throw Error("Stripe not loaded");
                                let r = a.client_secret;
                                if (null == r || "" === r) throw Error("No client secret found in 3DS context");
                                let { error: i, paymentIntent: s } = await n.confirmCardPayment(r, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != i) throw Error(`3DS authentication failed: ${i.message}`);
                                if (null == s) throw Error("No payment intent returned from 3DS authentication");
                                let o = e.id ?? T ?? "Unknown";
                                C(null),
                                    b(`3DS authentication completed successfully!
Order ID: ${o}`);
                            } catch (a) {
                                let t = a instanceof Error ? a.message : String(a),
                                    l = e.id ?? T ?? "Unknown";
                                b(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                            }
                        })();
                else if (1001 === t) {
                    let t, l, a, n, r, i, s, o;
                    b(`Order signing in progress!
Order ID: ${T}
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
                                    o().catch((e) => {
                                        let t = e instanceof Error ? e.message : String(e);
                                        b(`Failed to poll order status!
Order ID: ${T}
Error: ${t}`);
                                    });
                                }, t));
                        }),
                        (s = () => {
                            null != r && clearTimeout(r);
                        }),
                        (o = async () => {
                            let e = Date.now() - n;
                            if (e >= 3e4) {
                                try {
                                    var t;
                                    (t = (await S(T)).status),
                                        b(`Order signing timed out.
Order ID: ${T}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        s();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    b(`Order signing timed out.
Order ID: ${T}
Error: ${e}`),
                                        s();
                                }
                                return;
                            }
                            try {
                                let e = (await S(T)).status;
                                if (2 === e) {
                                    b(`Order signed successfully!
Order ID: ${T}
Payment redirect completed.`),
                                        C(null),
                                        s();
                                    return;
                                }
                                if (1 === e) {
                                    b(`Order signed unsuccessfully
Order ID: ${T}`),
                                        s();
                                    return;
                                }
                                i();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? i()
                                    : (b(`Order signing timed out.
Order ID: ${T}
Error: ${t}`),
                                      s());
                            }
                        })().catch((e) => {
                            let t = e instanceof Error ? e.message : String(e);
                            b(`Failed to start polling order status!
Order ID: ${T}
Error: ${t}`);
                        });
                } else
                    b(`Order signing failed
Order ID: ${T}
Error: ${t}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                b(`Failed to sign order: ${e}`);
            } finally {
                i(!1);
            }
        };
    return (0, a.jsxs)(x.wn, {
        children: [
            (0, a.jsx)(o.Heading, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, a.jsxs)(x.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: E.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, a.jsxs)(o.nVY, {
                        label: "Configuration",
                        children: [
                            (0, a.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, a.jsx)(o.l6P, {
                                    selectionMode: "single",
                                    value: P,
                                    onSelectionChange: R,
                                    options: f.options,
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
                                    (0, a.jsx)(o.l6P, {
                                        selectionMode: "single",
                                        value: A,
                                        onSelectionChange: _,
                                        options: M,
                                        placeholder: "Select a payment source...",
                                        disabled: !I,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !I &&
                                        (0, a.jsx)(o.Text, {
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
                            (0, a.jsx)(s.$nd, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: O,
                                disabled: e || null == A || "" === A || null == P || "" === P || P === g.dJq,
                            }),
                            (0, a.jsx)(s.$nd, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: B,
                                disabled: l || null == T || "" === T,
                            }),
                        ],
                    }),
                    null != d &&
                        (0, a.jsx)("div", {
                            className: E.cW,
                            children: d
                                .split("\n")
                                .map((e, t) =>
                                    (0, a.jsx)(
                                        o.Text,
                                        {
                                            variant: "text-md/normal",
                                            style: {
                                                display: "block",
                                                marginBottom: t < d.split("\n").length - 1 ? "4px" : "0",
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
let C = {
    name: "Order SKU",
    component: function () {
        return (0, a.jsx)(d.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsx)(T, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
