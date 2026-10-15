(n.d(t, { E: () => m, p: () => C }), n(321073));
var r = n(582128),
    l = n(602853),
    i = n(661531),
    s = n(964486),
    a = n(626584),
    u = n(739508),
    c = n(71532),
    o = n(648335),
    d = n(908166),
    f = n(818348);
let h = new a.A("useStripePaymentElementOptions"),
    p = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.r)(i.A.colors.MODAL_BACKGROUND),
        n = (0, l.r)(i.A.colors.TEXT_STRONG),
        s = (0, l.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
        a = (0, l.r)(i.A.colors.INPUT_BORDER_DEFAULT),
        u = e.theme ?? "flat",
        c = e.colorText ?? n.hex(),
        o = e.colorBackground ?? t.hex(),
        d = e.inputBackgroundColor ?? s.hex(),
        f = a.hex(),
        h = e.tabBackgroundColor ?? s.hex(),
        m = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: r.useMemo(
            () => ({
                theme: u,
                variables: { colorText: c, colorBackground: o },
                rules: {
                    ".Label": { ...p, color: c, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: f, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...p },
                    ".CheckboxInput": { border: `1px solid ${f}` },
                    ".Tab": { backgroundColor: h },
                    ...(null != m ? { ".Tab--selected": { backgroundColor: m } } : {}),
                },
            }),
            [u, c, o, d, f, h, m],
        ),
        elementsAppearanceOptions: {
            theme: u,
            colorText: c,
            colorBackground: o,
            inputBackgroundColor: d,
            tabBackgroundColor: h,
        },
    };
}
function C(e) {
    let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
        [l, i] = r.useState(void 0),
        [a, p] = r.useState(null),
        [C, E] = r.useState(!0),
        [y, I] = r.useState([]),
        { createSetupIntentDeduped: S } = (0, d.x)(),
        [g, _] = r.useState([]),
        { customPaymentMethods: P, customPaymentMethodIdsToSourceTypes: x } = r.useMemo(
            () => ({
                customPaymentMethods: (0, o.Dd)(y),
                customPaymentMethodIdsToSourceTypes: y.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [y],
        ),
        A = r.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: r, payment_method_order: l } = await S();
                (I(r),
                    i(n),
                    _(
                        null != l && Array.isArray(l)
                            ? l
                            : ((e = ["pix", "card"]),
                              (t = r.find((e) => e.payment_source_type === f.he.PAYPAL)),
                              null != t && e.push(t.custom_payment_method_id),
                              e),
                    ));
            } catch (e) {
                (p(e),
                    null != t && t(e),
                    h.error("there was an error on setup for Payment Elements: ", e),
                    (0, u.pM)(e, { tags: { source: "payment_elements" } }));
            }
            E(!1);
        }, [t, S]);
    (0, s.Ay)(() => {
        A();
    });
    let { elementsAppearance: v, elementsAppearanceOptions: R } = m(n),
        M = (0, c.PU)(),
        T = r.useMemo(
            () =>
                C
                    ? null
                    : {
                          clientSecret: l,
                          appearance: v,
                          locale: M,
                          customPaymentMethods: P,
                          paymentMethodCreation: "manual",
                      },
            [v, M, l, P, C],
        ),
        L = {
            setupError: a,
            customPaymentMethods: P,
            customPaymentMethodIdsToSourceTypes: x,
            paymentMethodOrder: g,
            elementsAppearanceOptions: R,
        };
    return null == l || null == T || C
        ? { ...L, isLoading: !0, elementsOptions: T, setupIntentSecret: l }
        : { ...L, isLoading: !1, elementsOptions: T, setupIntentSecret: l };
}
