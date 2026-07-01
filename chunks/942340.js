"use strict";
n.d(t, { E: () => f, p: () => p }), n(321073);
var i = n(64700),
    r = n(602853),
    s = n(661531),
    a = n(964486),
    o = n(626584),
    l = n(739508),
    u = n(71532),
    c = n(648335),
    d = n(908166),
    _ = n(818348);
let h = new o.A("useStripePaymentElementOptions");
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.r)(s.A.colors.MODAL_BACKGROUND),
        n = (0, r.r)(s.A.colors.TEXT_STRONG),
        a = (0, r.r)(s.A.colors.INPUT_BACKGROUND_DEFAULT),
        o = e.theme ?? "flat",
        l = e.colorText ?? n.hex(),
        u = e.colorBackground ?? t.hex(),
        c = e.inputBackgroundColor ?? a.hex(),
        d = e.tabBackgroundColor ?? a.hex(),
        _ = e.tabSelectedBackgroundColor ?? null;
    return {
        elementsAppearance: i.useMemo(
            () => ({
                theme: o,
                variables: { colorText: l, colorBackground: u },
                rules: {
                    ".Input": { backgroundColor: c },
                    ".Tab": { backgroundColor: d },
                    ...(null != _ ? { ".Tab--selected": { backgroundColor: _ } } : {}),
                },
            }),
            [o, l, u, c, d, _],
        ),
        elementsAppearanceOptions: {
            theme: o,
            colorText: l,
            colorBackground: u,
            inputBackgroundColor: c,
            tabBackgroundColor: d,
        },
    };
}
function p(e) {
    let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
        [r, s] = i.useState(void 0),
        [o, p] = i.useState(null),
        [E, m] = i.useState(!0),
        [g, A] = i.useState([]),
        { createSetupIntentDeduped: I } = (0, d.x)(),
        [T, S] = i.useState([]),
        { customPaymentMethods: y, customPaymentMethodIdsToSourceTypes: C } = i.useMemo(
            () => ({
                customPaymentMethods: (0, c.Dd)(g),
                customPaymentMethodIdsToSourceTypes: g.reduce(
                    (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                    {},
                ),
            }),
            [g],
        ),
        N = i.useCallback(async () => {
            try {
                let e,
                    t,
                    { client_secret: n, custom_payment_methods: i, payment_method_order: r } = await I();
                A(i),
                    s(n),
                    S(
                        null != r && Array.isArray(r)
                            ? r
                            : ((e = ["pix", "card"]),
                              (t = i.find((e) => e.payment_source_type === _.he.PAYPAL)),
                              null != t && e.push(t.custom_payment_method_id),
                              e),
                    );
            } catch (e) {
                p(e),
                    null != t && t(e),
                    h.error("there was an error on setup for Payment Elements: ", e),
                    (0, l.pM)(e, { tags: { source: "payment_elements" } });
            }
            m(!1);
        }, [t, I]);
    (0, a.Ay)(() => {
        N();
    });
    let { elementsAppearance: v, elementsAppearanceOptions: R } = f(n),
        O = (0, u.PU)(),
        b = i.useMemo(
            () =>
                E
                    ? null
                    : {
                          clientSecret: r,
                          appearance: v,
                          locale: O,
                          customPaymentMethods: y,
                          paymentMethodCreation: "manual",
                      },
            [v, O, r, y, E],
        ),
        D = {
            setupError: o,
            customPaymentMethods: y,
            customPaymentMethodIdsToSourceTypes: C,
            paymentMethodOrder: T,
            elementsAppearanceOptions: R,
        };
    return null == r || null == b || E
        ? { ...D, isLoading: !0, elementsOptions: b, setupIntentSecret: r }
        : { ...D, isLoading: !1, elementsOptions: b, setupIntentSecret: r };
}
