"use strict";
n.d(t, { E: () => f, p: () => p }), n(321073);
var r = n(64700),
    i = n(397927),
    s = n(964486),
    a = n(626584),
    o = n(739508),
    l = n(71532),
    u = n(219538),
    c = n(648335),
    d = n(818348);
let _ = new a.A("useStripePaymentElementOptions"),
    f = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.rdh)(i.LU0.colors.MODAL_BACKGROUND),
            n = (0, i.rdh)(i.LU0.colors.TEXT_STRONG),
            s = (0, i.rdh)(i.LU0.colors.INPUT_BACKGROUND_DEFAULT),
            a = e.theme ?? "flat",
            o = e.colorText ?? n.hex(),
            l = e.colorBackground ?? t.hex(),
            u = e.inputBackgroundColor ?? s.hex(),
            c = e.tabBackgroundColor ?? s.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: a,
                    variables: { colorText: o, colorBackground: l },
                    rules: { ".Input": { backgroundColor: u }, ".Tab": { backgroundColor: c } },
                }),
                [a, o, l, u, c],
            ),
            elementsAppearanceOptions: {
                theme: a,
                colorText: o,
                colorBackground: l,
                inputBackgroundColor: u,
                tabBackgroundColor: c,
            },
        };
    },
    p = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, a] = r.useState(void 0),
            [p, h] = r.useState(null),
            [m, E] = r.useState(!0),
            [g, A] = r.useState([]),
            I = r.useMemo(() => {
                let e = ["card"],
                    t = g.find((e) => e.payment_source_type === d.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [g]),
            { customPaymentMethods: T, customPaymentMethodIdsToSourceTypes: S } = r.useMemo(
                () => ({
                    customPaymentMethods: (0, c.Dd)(g),
                    customPaymentMethodIdsToSourceTypes: g.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [g],
            ),
            y = r.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, u.w)();
                    A(t), a(e);
                } catch (e) {
                    h(e),
                        null != t && t(e),
                        _.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                E(!1);
            }, [t]);
        (0, s.Ay)(() => {
            y();
        });
        let { elementsAppearance: v, elementsAppearanceOptions: N } = f(n),
            C = (0, l.PU)();
        return {
            setupError: p,
            elementsOptions: r.useMemo(
                () =>
                    m
                        ? null
                        : {
                              clientSecret: i,
                              appearance: v,
                              locale: C,
                              customPaymentMethods: T,
                              paymentMethodCreation: "manual",
                          },
                [v, C, i, T, m],
            ),
            setupIntentSecret: i,
            customPaymentMethods: T,
            customPaymentMethodIdsToSourceTypes: S,
            paymentMethodOrder: I,
            isLoading: m,
            elementsAppearanceOptions: N,
        };
    };
