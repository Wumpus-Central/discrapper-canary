"use strict";
n.d(t, { F: () => N });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(562465),
    o = n(732955),
    l = n(397927),
    u = n(384904),
    c = n(830382),
    d = n(156312),
    _ = n(192087),
    f = n(295405),
    p = n(71532),
    h = n(252561),
    m = n(689614),
    g = n(652215),
    E = n(818348),
    A = n(825057);
let I = (0, m.R)();
async function T(e) {
    return (await s.Bo.post({ url: g.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function y(e) {
    return (await s.Bo.get({ url: g.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function S(e, t) {
    let n = { billing_facet: { payment_source_id: t } };
    await s.Bo.patch({ url: g.Rsh.ORDER_UPDATE(e), body: n, rejectWithError: !0 });
}
function v(e, t, n, r) {
    let i = e.billing_facet,
        a = i?.order_signing_deferral_context?.payment_redirect_context,
        s = a?.redirect_url;
    null != s && window.open(s);
    let o = 3e3,
        l = 3e4,
        u = Date.now(),
        c = null,
        d = () => {
            let e = Math.min(o, l - (Date.now() - u));
            e > 0 &&
                (c = setTimeout(() => {
                    p().catch((e) => {
                        let r = e instanceof Error ? e.message : String(e);
                        n(`Failed to poll order status!
Order ID: ${t}
Error: ${r}`);
                    });
                }, e));
        },
        _ = () => {
            null != c && clearTimeout(c);
        },
        f = (e) => {
            n(`Order signing timed out.
Order ID: ${t}
Status: ${e ?? "unknown"}
Please check the order status manually.`),
                _();
        },
        p = async () => {
            let e = Date.now() - u;
            if (e >= l) {
                try {
                    let e = await y(t);
                    f(e.status);
                } catch (r) {
                    let e = r instanceof Error ? r.message : String(r);
                    n(`Order signing timed out.
Order ID: ${t}
Error: ${e}`),
                        _();
                }
                return;
            }
            try {
                let e = (await y(t)).status;
                if (2 === e) {
                    n(`Order signed successfully!
Order ID: ${t}
Payment redirect completed.`),
                        r(null),
                        _();
                    return;
                }
                if (1 === e) {
                    n(`Order signed unsuccessfully
Order ID: ${t}`),
                        _();
                    return;
                }
                d();
            } catch (i) {
                let r = i instanceof Error ? i.message : String(i);
                e < l
                    ? d()
                    : (n(`Order signing timed out.
Order ID: ${t}
Error: ${r}`),
                      _());
            }
        };
    p().catch((e) => {
        let r = e instanceof Error ? e.message : String(e);
        n(`Failed to start polling order status!
Order ID: ${t}
Error: ${r}`);
    });
}
function C(e, t, n, r) {
    (async () => {
        try {
            let i = e.billing_facet;
            if (null == i) throw Error("Order does not have billing facet information");
            let a = i.order_signing_deferral_context;
            if (null == a) throw Error("Order does not have payment redirect context");
            let s = a.stripe_3ds_context;
            if (null == s) throw Error("Order does not have 3DS context information");
            let o = await (0, p.Cv)();
            if (null == o) throw Error("Stripe not loaded");
            let l = s.client_secret;
            if (null == l || "" === l) throw Error("No client secret found in 3DS context");
            let { error: u, paymentIntent: c } = await o.confirmCardPayment(l, { payment_method: s.payment_method_id });
            if (null != u) throw Error(`3DS authentication failed: ${u.message}`);
            if (null == c) throw Error("No payment intent returned from 3DS authentication");
            let d = e.id ?? t ?? "Unknown";
            r(null),
                n(`3DS authentication completed successfully!
Order ID: ${d}`);
        } catch (a) {
            let r = a instanceof Error ? a.message : String(a),
                i = e.id ?? t ?? "Unknown";
            n(`Failed to complete 3DS!
Order ID: ${i}
Error: ${r}`);
        }
    })();
}
function b() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(!1),
        [d, p] = i.useState(null),
        [m, y] = i.useState(null),
        [b, N] = i.useState(I.defaultValue),
        [R, O] = i.useState(null),
        D = (0, a.bG)([f.A], () => f.A.paymentSources),
        L = (0, a.bG)([f.A], () => f.A.hasFetchedPaymentSources),
        w = (0, a.bG)([f.A], () => f.A.defaultPaymentSourceId);
    i.useEffect(() => {
        L || (0, u.$o)();
    }, [L]),
        i.useEffect(() => {
            null != w && null == R && O(w);
        }, [w, R]);
    let x = i.useRef(null);
    i.useEffect(() => {
        if (null == m || "" === m) {
            x.current = R;
            return;
        }
        if (R !== x.current) {
            if (null == R || "" === R) {
                x.current = R;
                return;
            }
            S(m, R)
                .then(() => {
                    p(`Order updated successfully!
Order ID: ${m}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    p(`Failed to update order: ${t}`);
                }),
                (x.current = R);
        }
    }, [m, R]);
    let P = i.useMemo(
            () =>
                Object.values(D).map((e) => {
                    let t = ((e) => {
                        let t = _.w[e];
                        return null != t ? t() : String(e);
                    })(e.type);
                    if (e.type === E.he.CARD && "last4" in e) {
                        let n = e.last4 ?? "",
                            r = e.brand ?? "Unknown";
                        t += ` - ****${n} (${r})`;
                    } else null != e.brand && "" !== e.brand && (t += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: t };
                }),
            [D],
        ),
        M = async () => {
            if (null == R || "" === R) return void p("Please select a payment source first.");
            if (null == b || "" === b || b === g.dJq) return void p("Please select a SKU ID.");
            t(!0), p(null), y(null);
            try {
                let e = "US",
                    t = !1,
                    n = {
                        gift_style: null,
                        recipient_id: void 0,
                        custom_message: void 0,
                        emoji_id: void 0,
                        emoji_name: void 0,
                        sound_id: void 0,
                        reward_sku_ids: void 0,
                    },
                    r = await (0, c.Aj)(b, R, e, t, n);
                y(r), p(`Order created successfully! Order ID: ${r}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                p(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        k = async () => {
            if (null == m || "" === m) return void p("No order ID available. Please create an order first.");
            s(!0);
            try {
                let e = await T(m);
                if (null == e.errors) {
                    p(`Order signed successfully! Order ID: ${m}`), y(null);
                    return;
                }
                let t = e.errors[0];
                1e3 === t
                    ? (p(`Order signing in progress!
Order ID: ${m}
This order requires additional authentication (3DS).`),
                      C(e, m, p, y))
                    : 1001 === t
                      ? (p(`Order signing in progress!
Order ID: ${m}
This order requires redirection to complete the payment.
Polling order status...`),
                        v(e, m, p, y))
                      : p(`Order signing failed
Order ID: ${m}
Error: ${t}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                p(`Failed to sign order: ${e}`);
            } finally {
                s(!1);
            }
        };
    return (0, r.jsxs)(h.wn, {
        children: [
            (0, r.jsx)(l.Heading, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, r.jsxs)(h.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: A.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, r.jsxs)(l.nVY, {
                        label: "Configuration",
                        children: [
                            (0, r.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, r.jsx)(l.l6P, {
                                    selectionMode: "single",
                                    value: b,
                                    onSelectionChange: N,
                                    options: I.options,
                                    formatOption: (e) => {
                                        let { value: t, label: n } = e;
                                        return { id: t, value: t, label: n };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, r.jsx)(l.l6P, {
                                        selectionMode: "single",
                                        value: R,
                                        onSelectionChange: O,
                                        options: P,
                                        placeholder: "Select a payment source...",
                                        disabled: !L,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !L &&
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: A.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, r.jsx)(o.$nd, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: M,
                                disabled: e || null == R || "" === R || null == b || "" === b || b === g.dJq,
                            }),
                            (0, r.jsx)(o.$nd, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: k,
                                disabled: n || null == m || "" === m,
                            }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: A.cW,
                            children: d
                                .split("\n")
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        l.Text,
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
let N = {
    name: "Order SKU",
    component: function () {
        return (0, r.jsx)(d.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsx)(b, {}),
        });
    },
    id: "order-sku-test",
    controls: {},
};
