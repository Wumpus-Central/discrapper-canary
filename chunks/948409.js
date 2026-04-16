l.d(t, { F: () => S });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(562465),
    o = l(732955),
    s = l(397927),
    d = l(830382),
    c = l(323082),
    u = l(156312),
    p = l(192087),
    m = l(295405),
    h = l(71532),
    x = l(252561),
    b = l(689614),
    y = l(652215),
    f = l(818348),
    g = l(76488);
let v = (0, b.R)();
async function _(e) {
    return (await i.Bo.post({ url: y.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function E(e) {
    return (await i.Bo.get({ url: y.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function C(e, t) {
    await i.Bo.patch({
        url: y.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function j() {
    let [e, t] = n.useState(!1),
        [l, i] = n.useState(!1),
        [u, b] = n.useState(null),
        [j, S] = n.useState(null),
        [T, A] = n.useState(v.defaultValue),
        [P, k] = n.useState(null),
        I = (0, r.bG)([m.A], () => m.A.paymentSources),
        R = (0, r.bG)([m.A], () => m.A.hasFetchedPaymentSources),
        N = (0, r.bG)([m.A], () => m.A.defaultPaymentSourceId);
    n.useEffect(() => {
        R || (0, c.$o)();
    }, [R]),
        n.useEffect(() => {
            null != N && null == P && k(N);
        }, [N, P]);
    let M = n.useRef(null);
    n.useEffect(() => {
        if (null == j || "" === j) {
            M.current = P;
            return;
        }
        if (P !== M.current) {
            if (null == P || "" === P) {
                M.current = P;
                return;
            }
            C(j, P)
                .then(() => {
                    b(`Order updated successfully!
Order ID: ${j}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    b(`Failed to update order: ${t}`);
                }),
                (M.current = P);
        }
    }, [j, P]);
    let D = n.useMemo(
            () =>
                Object.values(I).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = p.w[t]) ? l() : String(t));
                    if (e.type === f.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [I],
        ),
        O = async () => {
            if (null == P || "" === P) return void b("Please select a payment source first.");
            if (null == T || "" === T || T === y.dJq) return void b("Please select a SKU ID.");
            t(!0), b(null), S(null);
            try {
                let e = await (0, d.Aj)(T, P, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                S(e), b(`Order created successfully! Order ID: ${e}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                b(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        L = async () => {
            if (null == j || "" === j) return void b("No order ID available. Please create an order first.");
            i(!0);
            try {
                let e = await _(j);
                if (null == e.errors) {
                    b(`Order signed successfully! Order ID: ${j}`), S(null);
                    return;
                }
                let t = e.errors[0];
                if (1e3 === t)
                    b(`Order signing in progress!
Order ID: ${j}
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
                                let { error: i, paymentIntent: o } = await n.confirmCardPayment(r, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != i) throw Error(`3DS authentication failed: ${i.message}`);
                                if (null == o) throw Error("No payment intent returned from 3DS authentication");
                                let s = e.id ?? j ?? "Unknown";
                                S(null),
                                    b(`3DS authentication completed successfully!
Order ID: ${s}`);
                            } catch (a) {
                                let t = a instanceof Error ? a.message : String(a),
                                    l = e.id ?? j ?? "Unknown";
                                b(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                            }
                        })();
                else if (1001 === t) {
                    let t, l, a, n, r, i, o, s;
                    b(`Order signing in progress!
Order ID: ${j}
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
                                        b(`Failed to poll order status!
Order ID: ${j}
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
                                    (t = (await E(j)).status),
                                        b(`Order signing timed out.
Order ID: ${j}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        o();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    b(`Order signing timed out.
Order ID: ${j}
Error: ${e}`),
                                        o();
                                }
                                return;
                            }
                            try {
                                let e = (await E(j)).status;
                                if (2 === e) {
                                    b(`Order signed successfully!
Order ID: ${j}
Payment redirect completed.`),
                                        S(null),
                                        o();
                                    return;
                                }
                                if (1 === e) {
                                    b(`Order signed unsuccessfully
Order ID: ${j}`),
                                        o();
                                    return;
                                }
                                i();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? i()
                                    : (b(`Order signing timed out.
Order ID: ${j}
Error: ${t}`),
                                      o());
                            }
                        })().catch((e) => {
                            let t = e instanceof Error ? e.message : String(e);
                            b(`Failed to start polling order status!
Order ID: ${j}
Error: ${t}`);
                        });
                } else
                    b(`Order signing failed
Order ID: ${j}
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
            (0, a.jsx)(s.Heading, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, a.jsxs)(x.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: g.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, a.jsxs)(s.nVY, {
                        label: "Configuration",
                        children: [
                            (0, a.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, a.jsx)(s.l6P, {
                                    selectionMode: "single",
                                    value: T,
                                    onSelectionChange: A,
                                    options: v.options,
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
                                    (0, a.jsx)(s.l6P, {
                                        selectionMode: "single",
                                        value: P,
                                        onSelectionChange: k,
                                        options: D,
                                        placeholder: "Select a payment source...",
                                        disabled: !R,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !R &&
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: g.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, a.jsx)(o.$nd, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: O,
                                disabled: e || null == P || "" === P || null == T || "" === T || T === y.dJq,
                            }),
                            (0, a.jsx)(o.$nd, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: L,
                                disabled: l || null == j || "" === j,
                            }),
                        ],
                    }),
                    null != u &&
                        (0, a.jsx)("div", {
                            className: g.cW,
                            children: u
                                .split("\n")
                                .map((e, t) =>
                                    (0, a.jsx)(
                                        s.Text,
                                        {
                                            variant: "text-md/normal",
                                            style: {
                                                display: "block",
                                                marginBottom: t < u.split("\n").length - 1 ? "4px" : "0",
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
        return (0, a.jsx)(u.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsx)(j, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
