"use strict";
n.d(t, { E: () => p, p: () => h }), n(321073);
var r = n(64700),
    i = n(602853),
    s = n(827734),
    a = n(964486),
    o = n(626584),
    l = n(739508),
    u = n(71532),
    c = n(219538),
    d = n(648335),
    _ = n(818348);
let f = new o.A("useStripePaymentElementOptions"),
    p = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.r)(s.A.colors.MODAL_BACKGROUND),
            n = (0, i.r)(s.A.colors.TEXT_STRONG),
            a = (0, i.r)(s.A.colors.INPUT_BACKGROUND_DEFAULT),
            o = e.theme ?? "flat",
            l = e.colorText ?? n.hex(),
            u = e.colorBackground ?? t.hex(),
            c = e.inputBackgroundColor ?? a.hex(),
            d = e.tabBackgroundColor ?? a.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: o,
                    variables: { colorText: l, colorBackground: u },
                    rules: { ".Input": { backgroundColor: c }, ".Tab": { backgroundColor: d } },
                }),
                [o, l, u, c, d],
            ),
            elementsAppearanceOptions: {
                theme: o,
                colorText: l,
                colorBackground: u,
                inputBackgroundColor: c,
                tabBackgroundColor: d,
            },
        };
    },
    h = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, s] = r.useState(void 0),
            [o, h] = r.useState(null),
            [E, m] = r.useState(!0),
            [g, A] = r.useState([]),
            I = r.useMemo(() => {
                let e = ["card"],
                    t = g.find((e) => e.payment_source_type === _.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [g]),
            { customPaymentMethods: T, customPaymentMethodIdsToSourceTypes: S } = r.useMemo(
                () => ({
                    customPaymentMethods: (0, d.Dd)(g),
                    customPaymentMethodIdsToSourceTypes: g.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [g],
            ),
            y = r.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.w)();
                    A(t), s(e);
                } catch (e) {
                    h(e),
                        null != t && t(e),
                        f.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.pM)(e, { tags: { source: "payment_elements" } });
                }
                m(!1);
            }, [t]);
        (0, a.Ay)(() => {
            y();
        });
        let { elementsAppearance: N, elementsAppearanceOptions: v } = p(n),
            C = (0, u.PU)();
        return {
            setupError: o,
            elementsOptions: r.useMemo(
                () =>
                    E
                        ? null
                        : {
                              clientSecret: i,
                              appearance: N,
                              locale: C,
                              customPaymentMethods: T,
                              paymentMethodCreation: "manual",
                          },
                [N, C, i, T, E],
            ),
            setupIntentSecret: i,
            customPaymentMethods: T,
            customPaymentMethodIdsToSourceTypes: S,
            paymentMethodOrder: I,
            isLoading: E,
            elementsAppearanceOptions: v,
        };
    };
