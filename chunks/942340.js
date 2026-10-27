(n.d(t, { E: () => p, p: () => C }), n(321073));
var l = n(582128),
    r = n(602853),
    i = n(661531),
    a = n(964486),
    s = n(626584),
    u = n(739508),
    c = n(71532),
    o = n(648335),
    d = n(908166),
    f = n(818348);
let h = new s.A("useStripePaymentElementOptions"),
    m = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" };
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.r)(i.A.colors.MODAL_BACKGROUND),
        n = (0, r.r)(i.A.colors.TEXT_STRONG),
        a = (0, r.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
        s = (0, r.r)(i.A.colors.INPUT_BORDER_DEFAULT),
        u = e.theme ?? "flat",
        c = e.colorText ?? n.hex(),
        o = e.colorBackground ?? t.hex(),
        d = e.inputBackgroundColor ?? a.hex(),
        f = s.hex(),
        h = e.tabBackgroundColor ?? a.hex(),
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
        [s, m] = l.useState(null),
        [C, E] = l.useState(!0),
        [y, _] = l.useState([]),
        { createSetupIntentDeduped: g } = (0, d.x)(),
        [I, S] = l.useState([]),
        { customPaymentMethods: A, customPaymentMethodIdsToSourceTypes: x } = l.useMemo(
            () => ({
                customPaymentMethods: (0, o.Dd)(y),
                customPaymentMethodIdsToSourceTypes: y.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [y],
        ),
        P = l.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: l, payment_method_order: r } = await g();
                (_(l),
                    i(n),
                    S(
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
    (0, a.Ay)(() => {
        P();
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
                          customPaymentMethods: A,
                          paymentMethodCreation: "manual",
                      },
            [v, M, r, A, C],
        ),
        L = {
            setupError: s,
            customPaymentMethods: A,
            customPaymentMethodIdsToSourceTypes: x,
            paymentMethodOrder: I,
            elementsAppearanceOptions: R,
        };
    return null == r || null == T || C
        ? { ...L, isLoading: !0, elementsOptions: T, setupIntentSecret: r }
        : { ...L, isLoading: !1, elementsOptions: T, setupIntentSecret: r };
}
