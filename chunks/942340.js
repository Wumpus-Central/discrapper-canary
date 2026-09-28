(t.d(e, { E: () => x, p: () => E }), t(321073));
var l = t(582128),
    n = t(602853),
    r = t(661531),
    s = t(964486),
    i = t(626584),
    c = t(739508),
    o = t(71532),
    d = t(648335),
    h = t(908166),
    u = t(818348);
let m = new i.A("useStripePaymentElementOptions"),
    p = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function x() {
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = (0, n.r)(r.A.colors.MODAL_BACKGROUND),
        t = (0, n.r)(r.A.colors.TEXT_STRONG),
        s = (0, n.r)(r.A.colors.INPUT_BACKGROUND_DEFAULT),
        i = (0, n.r)(r.A.colors.INPUT_BORDER_DEFAULT),
        c = a.theme ?? "flat",
        o = a.colorText ?? t.hex(),
        d = a.colorBackground ?? e.hex(),
        h = a.inputBackgroundColor ?? s.hex(),
        u = i.hex(),
        m = a.tabBackgroundColor ?? s.hex(),
        x = a.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: c,
                variables: { colorText: o, colorBackground: d },
                rules: {
                    ".Label": { ...p, color: o, marginBottom: "8px" },
                    ".Input": { backgroundColor: h, borderColor: u, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...p },
                    ".CheckboxInput": { border: `1px solid ${u}` },
                    ".Tab": { backgroundColor: m },
                    ...(null != x ? { ".Tab--selected": { backgroundColor: x } } : {}),
                },
            }),
            [c, o, d, h, u, m, x],
        ),
        elementsAppearanceOptions: {
            theme: c,
            colorText: o,
            colorBackground: d,
            inputBackgroundColor: h,
            tabBackgroundColor: m,
        },
    };
}
function E(a) {
    let { onSetupError: e, elementsAppearanceOptions: t = {} } = a,
        [n, r] = l.useState(void 0),
        [i, p] = l.useState(null),
        [E, C] = l.useState(!0),
        [A, g] = l.useState([]),
        { createSetupIntentDeduped: v } = (0, h.x)(),
        [j, f] = l.useState([]),
        { customPaymentMethods: b, customPaymentMethodIdsToSourceTypes: y } = l.useMemo(
            () => ({
                customPaymentMethods: (0, d.Dd)(A),
                customPaymentMethodIdsToSourceTypes: A.reduce(
                    (a, e) => ((a[e.custom_payment_method_id] = e.payment_source_type), a),
                    {},
                ),
            }),
            [A],
        ),
        M = l.useCallback(async () => {
            try {
                let a,
                    e,
                    { client_secret: t, custom_payment_methods: l, payment_method_order: n } = await v();
                (g(l),
                    r(t),
                    f(
                        null != n && Array.isArray(n)
                            ? n
                            : ((a = ["pix", "card"]),
                              (e = l.find((a) => a.payment_source_type === u.he.PAYPAL)),
                              null != e && a.push(e.custom_payment_method_id),
                              a),
                    ));
            } catch (a) {
                (p(a),
                    null != e && e(a),
                    m.error("there was an error on setup for Payment Elements: ", a),
                    (0, c.pM)(a, { tags: { source: "payment_elements" } }));
            }
            C(!1);
        }, [e, v]);
    (0, s.Ay)(() => {
        M();
    });
    let { elementsAppearance: I, elementsAppearanceOptions: T } = x(t),
        L = (0, o.PU)(),
        R = l.useMemo(
            () =>
                E
                    ? null
                    : {
                          clientSecret: n,
                          appearance: I,
                          locale: L,
                          customPaymentMethods: b,
                          paymentMethodCreation: "manual",
                      },
            [I, L, n, b, E],
        ),
        _ = {
            setupError: i,
            customPaymentMethods: b,
            customPaymentMethodIdsToSourceTypes: y,
            paymentMethodOrder: j,
            elementsAppearanceOptions: T,
        };
    return null == n || null == R || E
        ? { ..._, isLoading: !0, elementsOptions: R, setupIntentSecret: n }
        : { ..._, isLoading: !1, elementsOptions: R, setupIntentSecret: n };
}
