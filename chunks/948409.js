n.d(t, { F: () => C }), n(65821), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(562465),
    o = n(732955),
    l = n(397927),
    c = n(384904),
    u = n(830382),
    d = n(156312),
    f = n(192087),
    p = n(295405),
    _ = n(71532),
    h = n(252561),
    m = n(689614),
    g = n(652215),
    E = n(818348),
    b = n(825057);
let y = (0, m.R)();
async function O(e) {
    return (
        await s.Bo.post({
            url: g.Rsh.ORDER_SIGN(e),
            rejectWithError: !0,
        })
    ).body;
}
async function A(e) {
    return (
        await s.Bo.get({
            url: g.Rsh.ORDER_UPDATE(e),
            rejectWithError: !0,
        })
    ).body;
}
async function v(e, t) {
    let n = { billing_facet: { payment_source_id: t } };
    await s.Bo.patch({
        url: g.Rsh.ORDER_UPDATE(e),
        body: n,
        rejectWithError: !0,
    });
}
function S(e, t, n, r) {
    var i;
    let a = e.billing_facet,
        s = null == a || null == (i = a.order_signing_deferral_context) ? void 0 : i.payment_redirect_context,
        o = null == s ? void 0 : s.redirect_url;
    null != o && window.open(o);
    let l = 3000,
        c = 30000,
        u = Date.now(),
        d = null,
        f = () => {
            let e = Math.min(l, c - (Date.now() - u));
            e > 0 &&
                (d = setTimeout(() => {
                    h().catch((e) => {
                        let r = e instanceof Error ? e.message : String(e);
                        n("Failed to poll order status!\nOrder ID: ".concat(t, "\nError: ").concat(r));
                    });
                }, e));
        },
        p = () => {
            null != d && clearTimeout(d);
        },
        _ = (e) => {
            n(
                "Order signing timed out.\nOrder ID: "
                    .concat(t, "\nStatus: ")
                    .concat(null != e ? e : "unknown", "\nPlease check the order status manually."),
            ),
                p();
        },
        h = async () => {
            let e = Date.now() - u;
            if (e >= c) {
                try {
                    let e = await A(t);
                    _(e.status);
                } catch (r) {
                    let e = r instanceof Error ? r.message : String(r);
                    n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(e)), p();
                }
                return;
            }
            try {
                let e = (await A(t)).status;
                if (2 === e) {
                    n("Order signed successfully!\nOrder ID: ".concat(t, "\nPayment redirect completed.")),
                        r(null),
                        p();
                    return;
                }
                if (1 === e) {
                    n("Order signed unsuccessfully\nOrder ID: ".concat(t)), p();
                    return;
                }
                f();
            } catch (i) {
                let r = i instanceof Error ? i.message : String(i);
                e < c ? f() : (n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(r)), p());
            }
        };
    h().catch((e) => {
        let r = e instanceof Error ? e.message : String(e);
        n("Failed to start polling order status!\nOrder ID: ".concat(t, "\nError: ").concat(r));
    });
}
function I(e, t, n, r) {
    (async () => {
        var i, a, s, o;
        try {
            let s = e.billing_facet;
            if (null == s) throw Error("Order does not have billing facet information");
            let o = s.order_signing_deferral_context;
            if (null == o) throw Error("Order does not have payment redirect context");
            let l = o.stripe_3ds_context;
            if (null == l) throw Error("Order does not have 3DS context information");
            let c = await (0, _.Cv)();
            if (null == c) throw Error("Stripe not loaded");
            let u = l.client_secret;
            if (null == u || "" === u) throw Error("No client secret found in 3DS context");
            let { error: d, paymentIntent: f } = await c.confirmCardPayment(u, { payment_method: l.payment_method_id });
            if (null != d) throw Error("3DS authentication failed: ".concat(d.message));
            if (null == f) throw Error("No payment intent returned from 3DS authentication");
            let p = null != (i = null != (a = e.id) ? a : t) ? i : "Unknown";
            r(null), n("3DS authentication completed successfully!\nOrder ID: ".concat(p));
        } catch (a) {
            let r = a instanceof Error ? a.message : String(a),
                i = null != (s = null != (o = e.id) ? o : t) ? s : "Unknown";
            n("Failed to complete 3DS!\nOrder ID: ".concat(i, "\nError: ").concat(r));
        }
    })();
}
function T() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(!1),
        [d, _] = i.useState(null),
        [m, A] = i.useState(null),
        [T, C] = i.useState(y.defaultValue),
        [N, R] = i.useState(null),
        w = (0, a.bG)([p.A], () => p.A.paymentSources),
        P = (0, a.bG)([p.A], () => p.A.hasFetchedPaymentSources),
        D = (0, a.bG)([p.A], () => p.A.defaultPaymentSourceId);
    i.useEffect(() => {
        P || (0, c.$o)();
    }, [P]),
        i.useEffect(() => {
            null != D && null == N && R(D);
        }, [D, N]);
    let x = i.useRef(null);
    i.useEffect(() => {
        if (null == m || "" === m) {
            x.current = N;
            return;
        }
        if (N !== x.current) {
            if (null == N || "" === N) {
                x.current = N;
                return;
            }
            v(m, N)
                .then(() => {
                    _("Order updated successfully!\nOrder ID: ".concat(m, "\nPayment source changed."));
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    _("Failed to update order: ".concat(t));
                }),
                (x.current = N);
        }
    }, [m, N]);
    let L = i.useMemo(
            () =>
                Object.values(w).map((e) => {
                    let t = ((e) => {
                        let t = f.w[e];
                        return null != t ? t() : String(e);
                    })(e.type);
                    if (e.type === E.he.CARD && "last4" in e) {
                        var n, r;
                        let i = null != (n = e.last4) ? n : "",
                            a = null != (r = e.brand) ? r : "Unknown";
                        t += " - ****".concat(i, " (").concat(a, ")");
                    } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
                    return {
                        id: e.id,
                        value: e.id,
                        label: t,
                    };
                }),
            [w],
        ),
        j = async () => {
            if (null == N || "" === N) return void _("Please select a payment source first.");
            if (null == T || "" === T || T === g.dJq) return void _("Please select a SKU ID.");
            t(!0), _(null), A(null);
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
                    r = await (0, u.Aj)(T, N, e, t, n);
                A(r), _("Order created successfully! Order ID: ".concat(r));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                _("Failed to create order: ".concat(e));
            } finally {
                t(!1);
            }
        },
        M = async () => {
            if (null == m || "" === m) return void _("No order ID available. Please create an order first.");
            s(!0);
            try {
                let e = await O(m);
                if (null == e.errors) {
                    _("Order signed successfully! Order ID: ".concat(m)), A(null);
                    return;
                }
                let t = e.errors[0];
                1000 === t
                    ? (_(
                          "Order signing in progress!\nOrder ID: ".concat(
                              m,
                              "\nThis order requires additional authentication (3DS).",
                          ),
                      ),
                      I(e, m, _, A))
                    : 1001 === t
                      ? (_(
                            "Order signing in progress!\nOrder ID: ".concat(
                                m,
                                "\nThis order requires redirection to complete the payment.\nPolling order status...",
                            ),
                        ),
                        S(e, m, _, A))
                      : _("Order signing failed\nOrder ID: ".concat(m, "\nError: ").concat(t));
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                _("Failed to sign order: ".concat(e));
            } finally {
                s(!1);
            }
        };
    return (0, r.jsxs)(h.wn, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: "Order SKU Test",
            }),
            (0, r.jsxs)(h.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: b.cW,
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
                                    value: T,
                                    onSelectionChange: C,
                                    options: y.options,
                                    formatOption: (e) => {
                                        let { value: t, label: n } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: n,
                                        };
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
                                        value: N,
                                        onSelectionChange: R,
                                        options: L,
                                        placeholder: "Select a payment source...",
                                        disabled: !P,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !P &&
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: b.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
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
                            (0, r.jsx)(o.$nd, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: j,
                                disabled: e || null == N || "" === N || null == T || "" === T || T === g.dJq,
                            }),
                            (0, r.jsx)(o.$nd, {
                                variant: "secondary",
                                size: "sm",
                                text: n ? "Signing Order..." : "Sign Order",
                                onClick: M,
                                disabled: n || null == m || "" === m,
                            }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: b.cW,
                            children: d.split("\n").map((e, t) =>
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
let C = {
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
