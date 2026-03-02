"use strict";
n.d(t, { E: () => d, p: () => _ });
var r = n(64700),
    i = n(397927),
    s = n(964486),
    a = n(626584),
    o = n(739508),
    l = n(219538),
    u = n(648335);
let c = new a.A("useStripePaymentElementOptions"),
    d = function () {
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
    _ = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, a] = r.useState(void 0),
            [_, f] = r.useState(null),
            [p, h] = r.useState(!0),
            [m, E] = r.useState([]),
            [g, A] = r.useState({}),
            I = r.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, l.w)(),
                        n = (0, u.Dd)(t),
                        r = t.reduce((e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e), {});
                    E(n), A(r), a(e);
                } catch (e) {
                    f(e),
                        null != t && t(e),
                        c.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                h(!1);
            }, [t]);
        (0, s.Ay)(() => {
            I();
        });
        let { elementsAppearance: T, elementsAppearanceOptions: S } = d(n);
        return {
            setupError: _,
            elementsOptions: r.useMemo(
                () =>
                    p
                        ? null
                        : { clientSecret: i, appearance: T, customPaymentMethods: m, paymentMethodCreation: "manual" },
                [T, i, m, p],
            ),
            setupIntentSecret: i,
            customPaymentMethods: m,
            customPaymentMethodIdsToSourceTypes: g,
            isLoading: p,
            elementsAppearanceOptions: S,
        };
    };
