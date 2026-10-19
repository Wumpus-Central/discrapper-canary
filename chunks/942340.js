(n.d(t, { E: () => p, p: () => C }), n(321073));
var l = n(582128),
    r = n(602853),
    i = n(661531),
    s = n(964486),
    a = n(626584),
    u = n(739508),
    c = n(71532),
    o = n(648335),
    d = n(908166),
    f = n(818348);
let h = new a.A("useStripePaymentElementOptions"),
    m = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.r)(i.A.colors.MODAL_BACKGROUND),
        n = (0, r.r)(i.A.colors.TEXT_STRONG),
        s = (0, r.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
        a = (0, r.r)(i.A.colors.INPUT_BORDER_DEFAULT),
        u = e.theme ?? "flat",
        c = e.colorText ?? n.hex(),
        o = e.colorBackground ?? t.hex(),
        d = e.inputBackgroundColor ?? s.hex(),
        f = a.hex(),
        h = e.tabBackgroundColor ?? s.hex(),
        p = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: u,
                variables: { colorText: c, colorBackground: o },
                rules: {
                    ".Label": { ...m, color: c, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: f, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...m },
                    ".CheckboxInput": { border: `1px solid ${f}` },
                    ".Tab": { backgroundColor: h },
                    ...(null != p ? { ".Tab--selected": { backgroundColor: p } } : {}),
                },
            }),
            [u, c, o, d, f, h, p],
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
        [r, i] = l.useState(void 0),
        [a, m] = l.useState(null),
        [C, E] = l.useState(!0),
        [y, I] = l.useState([]),
        { createSetupIntentDeduped: g } = (0, d.x)(),
        [S, _] = l.useState([]),
        { customPaymentMethods: x, customPaymentMethodIdsToSourceTypes: P } = l.useMemo(
            () => ({
                customPaymentMethods: (0, o.Dd)(y),
                customPaymentMethodIdsToSourceTypes: y.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [y],
        ),
        A = l.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: l, payment_method_order: r } = await g();
                (I(l),
                    i(n),
                    _(
                        null != r && Array.isArray(r)
                            ? r
                            : ((e = ["pix", "card"]),
                              (t = l.find((e) => e.payment_source_type === f.he.PAYPAL)),
                              null != t && e.push(t.custom_payment_method_id),
                              e),
                    ));
            } catch (e) {
                (m(e),
                    null != t && t(e),
                    h.error("there was an error on setup for Payment Elements: ", e),
                    (0, u.pM)(e, { tags: { source: "payment_elements" } }));
            }
            E(!1);
        }, [t, g]);
    (0, s.Ay)(() => {
        A();
    });
    let { elementsAppearance: v, elementsAppearanceOptions: R } = p(n),
        M = (0, c.PU)(),
        T = l.useMemo(
            () =>
                C
                    ? null
                    : {
                          clientSecret: r,
                          appearance: v,
                          locale: M,
                          customPaymentMethods: x,
                          paymentMethodCreation: "manual",
                      },
            [v, M, r, x, C],
        ),
        L = {
            setupError: a,
            customPaymentMethods: x,
            customPaymentMethodIdsToSourceTypes: P,
            paymentMethodOrder: S,
            elementsAppearanceOptions: R,
        };
    return null == r || null == T || C
        ? { ...L, isLoading: !0, elementsOptions: T, setupIntentSecret: r }
        : { ...L, isLoading: !1, elementsOptions: T, setupIntentSecret: r };
}
