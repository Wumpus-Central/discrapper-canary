t.d(a, { E: () => p, p: () => x }), t(321073);
var l = t(582128),
    n = t(602853),
    r = t(661531),
    s = t(964486),
    i = t(626584),
    c = t(739508),
    o = t(71532),
    u = t(648335),
    d = t(908166),
    h = t(818348);
let m = new i.A("useStripePaymentElementOptions");
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = (0, n.r)(r.A.colors.MODAL_BACKGROUND),
        t = (0, n.r)(r.A.colors.TEXT_STRONG),
        s = (0, n.r)(r.A.colors.INPUT_BACKGROUND_DEFAULT),
        i = e.theme ?? "flat",
        c = e.colorText ?? t.hex(),
        o = e.colorBackground ?? a.hex(),
        u = e.inputBackgroundColor ?? s.hex(),
        d = e.tabBackgroundColor ?? s.hex(),
        h = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: i,
                variables: { colorText: c, colorBackground: o },
                rules: {
                    ".Input": { backgroundColor: u },
                    ".Tab": { backgroundColor: d },
                    ...(null != h ? { ".Tab--selected": { backgroundColor: h } } : {}),
                },
            }),
            [i, c, o, u, d, h],
        ),
        elementsAppearanceOptions: {
            theme: i,
            colorText: c,
            colorBackground: o,
            inputBackgroundColor: u,
            tabBackgroundColor: d,
        },
    };
}
function x(e) {
    let { onSetupError: a, elementsAppearanceOptions: t = {} } = e,
        [n, r] = l.useState(void 0),
        [i, x] = l.useState(null),
        [C, E] = l.useState(!0),
        [g, v] = l.useState([]),
        { createSetupIntentDeduped: f } = (0, d.x)(),
        [j, A] = l.useState([]),
        { customPaymentMethods: b, customPaymentMethodIdsToSourceTypes: y } = l.useMemo(
            () => ({
                customPaymentMethods: (0, u.Dd)(g),
                customPaymentMethodIdsToSourceTypes: g.reduce(
                    (e, a) => ((e[a.custom_payment_method_id] = a.payment_source_type), e),
                    {},
                ),
            }),
            [g],
        ),
        I = l.useCallback(async () => {
            try {
                let e,
                    a,
                    { client_secret: t, custom_payment_methods: l, payment_method_order: n } = await f();
                v(l),
                    r(t),
                    A(
                        null != n && Array.isArray(n)
                            ? n
                            : ((e = ["pix", "card"]),
                              (a = l.find((e) => e.payment_source_type === h.he.PAYPAL)),
                              null != a && e.push(a.custom_payment_method_id),
                              e),
                    );
            } catch (e) {
                x(e),
                    null != a && a(e),
                    m.error("there was an error on setup for Payment Elements: ", e),
                    (0, c.pM)(e, { tags: { source: "payment_elements" } });
            }
            E(!1);
        }, [a, f]);
    (0, s.Ay)(() => {
        I();
    });
    let { elementsAppearance: M, elementsAppearanceOptions: T } = p(t),
        R = (0, o.PU)(),
        L = l.useMemo(
            () =>
                C
                    ? null
                    : {
                          clientSecret: n,
                          appearance: M,
                          locale: R,
                          customPaymentMethods: b,
                          paymentMethodCreation: "manual",
                      },
            [M, R, n, b, C],
        ),
        P = {
            setupError: i,
            customPaymentMethods: b,
            customPaymentMethodIdsToSourceTypes: y,
            paymentMethodOrder: j,
            elementsAppearanceOptions: T,
        };
    return null == n || null == L || C
        ? { ...P, isLoading: !0, elementsOptions: L, setupIntentSecret: n }
        : { ...P, isLoading: !1, elementsOptions: L, setupIntentSecret: n };
}
