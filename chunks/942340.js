(n.d(t, { E: () => h, p: () => C }), n(321073));
var r = n(582128),
    o = n(602853),
    l = n(661531),
    s = n(964486),
    i = n(626584),
    a = n(739508),
    u = n(71532),
    c = n(648335),
    d = n(908166),
    p = n(818348);
let x = new i.A("useStripePaymentElementOptions"),
    m = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, o.r)(l.A.colors.MODAL_BACKGROUND),
        n = (0, o.r)(l.A.colors.TEXT_STRONG),
        s = (0, o.r)(l.A.colors.INPUT_BACKGROUND_DEFAULT),
        i = (0, o.r)(l.A.colors.INPUT_BORDER_DEFAULT),
        a = e.theme ?? "flat",
        u = e.colorText ?? n.hex(),
        c = e.colorBackground ?? t.hex(),
        d = e.inputBackgroundColor ?? s.hex(),
        p = i.hex(),
        x = e.tabBackgroundColor ?? s.hex(),
        h = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: r.useMemo(
            () => ({
                theme: a,
                variables: { colorText: u, colorBackground: c },
                rules: {
                    ".Label": { ...m, color: u, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: p, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...m },
                    ".CheckboxInput": { border: `1px solid ${p}` },
                    ".Tab": { backgroundColor: x },
                    ...(null != h ? { ".Tab--selected": { backgroundColor: h } } : {}),
                },
            }),
            [a, u, c, d, p, x, h],
        ),
        elementsAppearanceOptions: {
            theme: a,
            colorText: u,
            colorBackground: c,
            inputBackgroundColor: d,
            tabBackgroundColor: x,
        },
    };
}
function C(e) {
    let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
        [o, l] = r.useState(void 0),
        [i, m] = r.useState(null),
        [C, j] = r.useState(!0),
        [g, y] = r.useState([]),
        { createSetupIntentDeduped: k } = (0, d.x)(),
        [v, f] = r.useState([]),
        { customPaymentMethods: b, customPaymentMethodIdsToSourceTypes: A } = r.useMemo(
            () => ({
                customPaymentMethods: (0, c.Dd)(g),
                customPaymentMethodIdsToSourceTypes: g.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [g],
        ),
        _ = r.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: r, payment_method_order: o } = await k();
                (y(r),
                    l(n),
                    f(
                        null != o && Array.isArray(o)
                            ? o
                            : ((e = ["pix", "card"]),
                              (t = r.find((e) => e.payment_source_type === p.he.PAYPAL)),
                              null != t && e.push(t.custom_payment_method_id),
                              e),
                    ));
            } catch (e) {
                (m(e),
                    null != t && t(e),
                    x.error("there was an error on setup for Payment Elements: ", e),
                    (0, a.pM)(e, { tags: { source: "payment_elements" } }));
            }
            j(!1);
        }, [t, k]);
    (0, s.Ay)(() => {
        _();
    });
    let { elementsAppearance: S, elementsAppearanceOptions: E } = h(n),
        T = (0, u.PU)(),
        N = r.useMemo(
            () =>
                C
                    ? null
                    : {
                          clientSecret: o,
                          appearance: S,
                          locale: T,
                          customPaymentMethods: b,
                          paymentMethodCreation: "manual",
                      },
            [S, T, o, b, C],
        ),
        I = {
            setupError: i,
            customPaymentMethods: b,
            customPaymentMethodIdsToSourceTypes: A,
            paymentMethodOrder: v,
            elementsAppearanceOptions: E,
        };
    return null == o || null == N || C
        ? { ...I, isLoading: !0, elementsOptions: N, setupIntentSecret: o }
        : { ...I, isLoading: !1, elementsOptions: N, setupIntentSecret: o };
}
