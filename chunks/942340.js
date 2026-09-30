(l.d(e, { E: () => x, p: () => A }), l(321073));
var t = l(582128),
    r = l(602853),
    s = l(661531),
    n = l(964486),
    h = l(626584),
    i = l(739508),
    o = l(71532),
    c = l(648335),
    d = l(908166),
    u = l(818348);
let m = new h.A("useStripePaymentElementOptions"),
    p = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function x() {
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = (0, r.r)(s.A.colors.MODAL_BACKGROUND),
        l = (0, r.r)(s.A.colors.TEXT_STRONG),
        n = (0, r.r)(s.A.colors.INPUT_BACKGROUND_DEFAULT),
        h = (0, r.r)(s.A.colors.INPUT_BORDER_DEFAULT),
        i = a.theme ?? "flat",
        o = a.colorText ?? l.hex(),
        c = a.colorBackground ?? e.hex(),
        d = a.inputBackgroundColor ?? n.hex(),
        u = h.hex(),
        m = a.tabBackgroundColor ?? n.hex(),
        x = a.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: t.useMemo(
            () => ({
                theme: i,
                variables: { colorText: o, colorBackground: c },
                rules: {
                    ".Label": { ...p, color: o, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: u, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...p },
                    ".CheckboxInput": { border: `1px solid ${u}` },
                    ".Tab": { backgroundColor: m },
                    ...(null != x ? { ".Tab--selected": { backgroundColor: x } } : {}),
                },
            }),
            [i, o, c, d, u, m, x],
        ),
        elementsAppearanceOptions: {
            theme: i,
            colorText: o,
            colorBackground: c,
            inputBackgroundColor: d,
            tabBackgroundColor: m,
        },
    };
}
function A(a) {
    let { onSetupError: e, elementsAppearanceOptions: l = {} } = a,
        [r, s] = t.useState(void 0),
        [h, p] = t.useState(null),
        [A, C] = t.useState(!0),
        [M, g] = t.useState([]),
        { createSetupIntentDeduped: E } = (0, d.x)(),
        [_, j] = t.useState([]),
        { customPaymentMethods: T, customPaymentMethodIdsToSourceTypes: v } = t.useMemo(
            () => ({
                customPaymentMethods: (0, c.Dd)(M),
                customPaymentMethodIdsToSourceTypes: M.reduce(
                    (a, e) => ((a[e.custom_payment_method_id] = e.payment_source_type), a),
                    {},
                ),
            }),
            [M],
        ),
        L = t.useCallback(async () => {
            try {
                let a,
                    e,
                    { client_secret: l, custom_payment_methods: t, payment_method_order: r } = await E();
                (g(t),
                    s(l),
                    j(
                        null != r && Array.isArray(r)
                            ? r
                            : ((a = ["pix", "card"]),
                              (e = t.find((a) => a.payment_source_type === u.he.PAYPAL)),
                              null != e && a.push(e.custom_payment_method_id),
                              a),
                    ));
            } catch (a) {
                (p(a),
                    null != e && e(a),
                    m.error("there was an error on setup for Payment Elements: ", a),
                    (0, i.pM)(a, { tags: { source: "payment_elements" } }));
            }
            C(!1);
        }, [e, E]);
    (0, n.Ay)(() => {
        L();
    });
    let { elementsAppearance: I, elementsAppearanceOptions: P } = x(l),
        H = (0, o.PU)(),
        R = t.useMemo(
            () =>
                A
                    ? null
                    : {
                          clientSecret: r,
                          appearance: I,
                          locale: H,
                          customPaymentMethods: T,
                          paymentMethodCreation: "manual",
                      },
            [I, H, r, T, A],
        ),
        Z = {
            setupError: h,
            customPaymentMethods: T,
            customPaymentMethodIdsToSourceTypes: v,
            paymentMethodOrder: _,
            elementsAppearanceOptions: P,
        };
    return null == r || null == R || A
        ? { ...Z, isLoading: !0, elementsOptions: R, setupIntentSecret: r }
        : { ...Z, isLoading: !1, elementsOptions: R, setupIntentSecret: r };
}
