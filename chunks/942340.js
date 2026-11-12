n(321073);
var l = n(582128),
    r = n(602853),
    i = n(646514),
    a = n(964486),
    s = n(626584),
    u = n(949192),
    c = n(558740),
    o = n(648335),
    d = n(908166),
    h = n(818348);
let f = new s.A("useStripePaymentElementOptions"),
    p = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" },
    m = { spacingUnit: "3px", fontSizeSm: "13px" };
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.r)(i.A.colors.MODAL_BACKGROUND),
        n = (0, r.r)(i.A.colors.TEXT_STRONG),
        a = (0, r.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
        s = (0, r.r)(i.A.colors.INPUT_BORDER_DEFAULT),
        u = e.theme ?? "flat",
        c = e.colorText ?? n.hex(),
        o = e.colorBackground ?? t.hex(),
        d = e.inputBackgroundColor ?? a.hex(),
        h = s.hex(),
        f = e.tabBackgroundColor ?? a.hex(),
        C = e.tabSelectedBackgroundColor ?? null,
        y = e.compact ?? !1;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: u,
                variables: { colorText: c, colorBackground: o, ...(y ? m : {}) },
                rules: {
                    ".Label": { ...p, color: c, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: h, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...p },
                    ".CheckboxInput": { border: `1px solid ${h}` },
                    ".Tab": { backgroundColor: f },
                    ...(null != C ? { ".Tab--selected": { backgroundColor: C } } : {}),
                    ".AccordionItem": { backgroundColor: o, borderColor: h },
                },
            }),
            [u, c, o, d, h, f, C, y],
        ),
        elementsAppearanceOptions: {
            theme: u,
            colorText: c,
            colorBackground: o,
            inputBackgroundColor: d,
            tabBackgroundColor: f,
        },
    };
}
n.d(
    t,
    {},
    {
        E: C,
        p: function (e) {
            let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
                [r, i] = l.useState(void 0),
                [s, p] = l.useState(null),
                [m, y] = l.useState(!0),
                [E, _] = l.useState([]),
                { createSetupIntentDeduped: g } = (0, d.x)(),
                [S, I] = l.useState([]),
                { customPaymentMethods: A, customPaymentMethodIdsToSourceTypes: P } = l.useMemo(
                    () => ({
                        customPaymentMethods: (0, o.Dd)(E),
                        customPaymentMethodIdsToSourceTypes: E.reduce(
                            (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                            {},
                        ),
                    }),
                    [E],
                ),
                x = l.useCallback(async () => {
                    try {
                        let e,
                            t,
                            { client_secret: n, custom_payment_methods: l, payment_method_order: r } = await g();
                        (_(l),
                            i(n),
                            I(
                                null != r && Array.isArray(r)
                                    ? r
                                    : ((e = ["pix", "card"]),
                                      (t = l.find((e) => e.payment_source_type === h.he.PAYPAL)),
                                      null != t && e.push(t.custom_payment_method_id),
                                      e),
                            ));
                    } catch (e) {
                        (p(e),
                            null != t && t(e),
                            f.error("there was an error on setup for Payment Elements: ", e),
                            (0, u.pM)(e, { tags: { source: "payment_elements" } }));
                    }
                    y(!1);
                }, [t, g]);
            (0, a.Ay)(() => {
                x();
            });
            let { elementsAppearance: v, elementsAppearanceOptions: R } = C(n),
                T = (0, c.PU)(),
                M = l.useMemo(
                    () =>
                        m
                            ? null
                            : {
                                  clientSecret: r,
                                  appearance: v,
                                  locale: T,
                                  customPaymentMethods: A,
                                  paymentMethodCreation: "manual",
                              },
                    [v, T, r, A, m],
                ),
                b = {
                    setupError: s,
                    customPaymentMethods: A,
                    customPaymentMethodIdsToSourceTypes: P,
                    paymentMethodOrder: S,
                    elementsAppearanceOptions: R,
                };
            return null == r || null == M || m
                ? { ...b, isLoading: !0, elementsOptions: M, setupIntentSecret: r }
                : { ...b, isLoading: !1, elementsOptions: M, setupIntentSecret: r };
        },
    },
);
