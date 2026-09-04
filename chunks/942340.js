t.d(e, { E: () => p, p: () => x }), t(321073);
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
let m = new i.A("useStripePaymentElementOptions");
function p() {
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = (0, n.r)(r.A.colors.MODAL_BACKGROUND),
        t = (0, n.r)(r.A.colors.TEXT_STRONG),
        s = (0, n.r)(r.A.colors.INPUT_BACKGROUND_DEFAULT),
        i = a.theme ?? "flat",
        c = a.colorText ?? t.hex(),
        o = a.colorBackground ?? e.hex(),
        d = a.inputBackgroundColor ?? s.hex(),
        h = a.tabBackgroundColor ?? s.hex(),
        u = a.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: i,
                variables: { colorText: c, colorBackground: o },
                rules: {
                    ".Input": { backgroundColor: d },
                    ".Tab": { backgroundColor: h },
                    ...(null != u ? { ".Tab--selected": { backgroundColor: u } } : {}),
                },
            }),
            [i, c, o, d, h, u],
        ),
        elementsAppearanceOptions: {
            theme: i,
            colorText: c,
            colorBackground: o,
            inputBackgroundColor: d,
            tabBackgroundColor: h,
        },
    };
}
function x(a) {
    let { onSetupError: e, elementsAppearanceOptions: t = {} } = a,
        [n, r] = l.useState(void 0),
        [i, x] = l.useState(null),
        [E, C] = l.useState(!0),
        [A, v] = l.useState([]),
        { createSetupIntentDeduped: g } = (0, h.x)(),
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
                    { client_secret: t, custom_payment_methods: l, payment_method_order: n } = await g();
                v(l),
                    r(t),
                    f(
                        null != n && Array.isArray(n)
                            ? n
                            : ((a = ["pix", "card"]),
                              (e = l.find((a) => a.payment_source_type === u.he.PAYPAL)),
                              null != e && a.push(e.custom_payment_method_id),
                              a),
                    );
            } catch (a) {
                x(a),
                    null != e && e(a),
                    m.error("there was an error on setup for Payment Elements: ", a),
                    (0, c.pM)(a, { tags: { source: "payment_elements" } });
            }
            C(!1);
        }, [e, g]);
    (0, s.Ay)(() => {
        M();
    });
    let { elementsAppearance: I, elementsAppearanceOptions: T } = p(t),
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
