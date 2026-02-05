"use strict";
n.d(t, { E: () => f, p: () => p });
var r = n(64700),
    i = n(397927),
    a = n(964486),
    s = n(626584),
    o = n(615405),
    l = n(739508),
    u = n(219538),
    c = n(550238),
    d = n(648335);
let _ = new s.A("useStripePaymentElementOptions"),
    f = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.rdh)(i.LU0.colors.MODAL_BACKGROUND),
            n = (0, i.rdh)(i.LU0.colors.TEXT_STRONG),
            a = (0, i.rdh)(i.LU0.colors.INPUT_BACKGROUND_DEFAULT),
            s = e.theme ?? "flat",
            o = e.colorText ?? n.hex(),
            l = e.colorBackground ?? t.hex(),
            u = e.inputBackgroundColor ?? a.hex(),
            c = e.tabBackgroundColor ?? a.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: s,
                    variables: { colorText: o, colorBackground: l },
                    rules: { ".Input": { backgroundColor: u }, ".Tab": { backgroundColor: c } },
                }),
                [s, o, l, u, c],
            ),
            elementsAppearanceOptions: {
                theme: s,
                colorText: o,
                colorBackground: l,
                inputBackgroundColor: u,
                tabBackgroundColor: c,
            },
        };
    },
    p = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, s] = r.useState(void 0),
            [p, h] = r.useState(null),
            [m, g] = r.useState(!0),
            [E, A] = r.useState([]),
            [I, T] = r.useState({}),
            y = r.useCallback(async () => {
                let e = (0, c.J)({
                    ipCountryCode: o.A.ipCountryCode ?? "ALL",
                    location: "stripe_payment_element_options",
                }).countryPaymentMethods;
                try {
                    let { client_secret: t, custom_payment_methods: n } = await (0, u.w)(e),
                        r = (0, d.Dd)(n),
                        i = n.reduce((e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e), {});
                    A(r), T(i), s(t);
                } catch (e) {
                    h(e),
                        null != t && t(e),
                        _.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.pM)(e, { tags: { source: "payment_elements" } });
                }
                g(!1);
            }, [t]);
        (0, a.Ay)(() => {
            y();
        });
        let { elementsAppearance: S, elementsAppearanceOptions: v } = f(n);
        return {
            setupError: p,
            elementsOptions: r.useMemo(
                () =>
                    m
                        ? null
                        : { clientSecret: i, appearance: S, customPaymentMethods: E, paymentMethodCreation: "manual" },
                [S, i, E, m],
            ),
            setupIntentSecret: i,
            customPaymentMethods: E,
            customPaymentMethodIdsToSourceTypes: I,
            isLoading: m,
            elementsAppearanceOptions: v,
        };
    };
