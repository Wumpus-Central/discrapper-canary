n.d(t, { E: () => C, p: () => h }), n(321073);
var l = n(582128),
    i = n(602853),
    r = n(661531),
    a = n(964486),
    s = n(626584),
    o = n(739508),
    u = n(71532),
    c = n(648335),
    d = n(908166),
    p = n(818348);
let m = new s.A("useStripePaymentElementOptions");
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, i.r)(r.A.colors.MODAL_BACKGROUND),
        n = (0, i.r)(r.A.colors.TEXT_STRONG),
        a = (0, i.r)(r.A.colors.INPUT_BACKGROUND_DEFAULT),
        s = e.theme ?? "flat",
        o = e.colorText ?? n.hex(),
        u = e.colorBackground ?? t.hex(),
        c = e.inputBackgroundColor ?? a.hex(),
        d = e.tabBackgroundColor ?? a.hex(),
        p = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: s,
                variables: { colorText: o, colorBackground: u },
                rules: {
                    ".Input": { backgroundColor: c },
                    ".Tab": { backgroundColor: d },
                    ...(null != p ? { ".Tab--selected": { backgroundColor: p } } : {}),
                },
            }),
            [s, o, u, c, d, p],
        ),
        elementsAppearanceOptions: {
            theme: s,
            colorText: o,
            colorBackground: u,
            inputBackgroundColor: c,
            tabBackgroundColor: d,
        },
    };
}
function h(e) {
    let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
        [i, r] = l.useState(void 0),
        [s, h] = l.useState(null),
        [E, f] = l.useState(!0),
        [A, S] = l.useState([]),
        { createSetupIntentDeduped: y } = (0, d.x)(),
        [P, I] = l.useState([]),
        { customPaymentMethods: _, customPaymentMethodIdsToSourceTypes: T } = l.useMemo(
            () => ({
                customPaymentMethods: (0, c.Dd)(A),
                customPaymentMethodIdsToSourceTypes: A.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [A],
        ),
        g = l.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: l, payment_method_order: i } = await y();
                S(l),
                    r(n),
                    I(
                        null != i && Array.isArray(i)
                            ? i
                            : ((e = ["pix", "card"]),
                              (t = l.find((e) => e.payment_source_type === p.he.PAYPAL)),
                              null != t && e.push(t.custom_payment_method_id),
                              e),
                    );
            } catch (e) {
                h(e),
                    null != t && t(e),
                    m.error("there was an error on setup for Payment Elements: ", e),
                    (0, o.pM)(e, { tags: { source: "payment_elements" } });
            }
            f(!1);
        }, [t, y]);
    (0, a.Ay)(() => {
        g();
    });
    let { elementsAppearance: v, elementsAppearanceOptions: x } = C(n),
        N = (0, u.PU)(),
        R = l.useMemo(
            () =>
                E
                    ? null
                    : {
                          clientSecret: i,
                          appearance: v,
                          locale: N,
                          customPaymentMethods: _,
                          paymentMethodCreation: "manual",
                      },
            [v, N, i, _, E],
        ),
        b = {
            setupError: s,
            customPaymentMethods: _,
            customPaymentMethodIdsToSourceTypes: T,
            paymentMethodOrder: P,
            elementsAppearanceOptions: x,
        };
    return null == i || null == R || E
        ? { ...b, isLoading: !0, elementsOptions: R, setupIntentSecret: i }
        : { ...b, isLoading: !1, elementsOptions: R, setupIntentSecret: i };
}
