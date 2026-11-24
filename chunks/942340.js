n(321073);
var l = n(582128),
    r = n(602853),
    i = n(646514),
    a = n(964486),
    s = n(558740),
    u = n(708146),
    c = n(648335),
    o = n(908166),
    d = n(818348);
let h = { fontSize: "16px", lineHeight: "20px", fontWeight: "500" },
    p = { spacingUnit: "3px", fontSizeSm: "13px" };
function f() {
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
        m = e.tabBackgroundColor ?? a.hex(),
        C = e.tabSelectedBackgroundColor ?? null,
        y = e.compact ?? !1;
    return {
        elementsAppearance: l.useMemo(
            () => ({
                theme: u,
                variables: { colorText: c, colorBackground: o, ...(y ? p : {}) },
                rules: {
                    ".Label": { ...h, color: c, marginBottom: "8px" },
                    ".Input": { backgroundColor: d, borderColor: f, borderWidth: "1px", borderStyle: "solid" },
                    ".Error": { ...h },
                    ".CheckboxInput": { border: `1px solid ${f}` },
                    ".Tab": { backgroundColor: m },
                    ...(null != C ? { ".Tab--selected": { backgroundColor: C } } : {}),
                    ".AccordionItem": { backgroundColor: o, borderColor: f },
                },
            }),
            [u, c, o, d, f, m, C, y],
        ),
        elementsAppearanceOptions: {
            theme: u,
            colorText: c,
            colorBackground: o,
            inputBackgroundColor: d,
            tabBackgroundColor: m,
        },
    };
}
n.d(
    t,
    {},
    {
        E: f,
        p: function (e) {
            let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
                [r, i] = l.useState(void 0),
                [h, p] = l.useState(null),
                [m, C] = l.useState(!0),
                [y, _] = l.useState([]),
                { createSetupIntentDeduped: E } = (0, o.x)(),
                [g, I] = l.useState([]),
                { customPaymentMethods: S, customPaymentMethodIdsToSourceTypes: A } = l.useMemo(
                    () => ({
                        customPaymentMethods: (0, c.Dd)(y),
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
                            { client_secret: n, custom_payment_methods: l, payment_method_order: r } = await E();
                        if (!Array.isArray(l)) {
                            let e = Error("Setup intent response is missing custom_payment_methods");
                            throw ((e.name = "MalformedSetupIntentResponse"), e);
                        }
                        (_(l),
                            i(n),
                            I(
                                null != r && Array.isArray(r)
                                    ? r
                                    : ((e = ["pix", "card"]),
                                      (t = l.find((e) => e.payment_source_type === d.he.PAYPAL)),
                                      null != t && e.push(t.custom_payment_method_id),
                                      e),
                            ));
                    } catch (e) {
                        (p(e), null != t && t(e), u.r.report({ site: "payment_element_setup" }, e));
                    }
                    C(!1);
                }, [t, E]);
            (0, a.Ay)(() => {
                P();
            });
            let { elementsAppearance: x, elementsAppearanceOptions: v } = f(n),
                R = (0, s.PU)(),
                T = l.useMemo(
                    () =>
                        m
                            ? null
                            : {
                                  clientSecret: r,
                                  appearance: x,
                                  locale: R,
                                  customPaymentMethods: S,
                                  paymentMethodCreation: "manual",
                              },
                    [x, R, r, S, m],
                ),
                M = {
                    setupError: h,
                    customPaymentMethods: S,
                    customPaymentMethodIdsToSourceTypes: A,
                    paymentMethodOrder: g,
                    elementsAppearanceOptions: v,
                };
            return null == r || null == T || m
                ? { ...M, isLoading: !0, elementsOptions: T, setupIntentSecret: r }
                : { ...M, isLoading: !1, elementsOptions: T, setupIntentSecret: r };
        },
    },
);
