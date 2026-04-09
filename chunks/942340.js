"use strict";
n.d(t, { E: () => _, p: () => f });
var r = n(64700),
    i = n(397927),
    s = n(964486),
    a = n(626584),
    o = n(739508),
    l = n(71532),
    u = n(219538),
    c = n(648335);
let d = new a.A("useStripePaymentElementOptions"),
    _ = function () {
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
    f = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, a] = r.useState(void 0),
            [f, p] = r.useState(null),
            [h, m] = r.useState(!0),
            [E, g] = r.useState([]),
            [A, I] = r.useState({}),
            T = r.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, u.w)(),
                        n = (0, c.Dd)(t),
                        r = t.reduce((e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e), {});
                    g(n), I(r), a(e);
                } catch (e) {
                    p(e),
                        null != t && t(e),
                        d.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                m(!1);
            }, [t]);
        (0, s.Ay)(() => {
            T();
        });
        let { elementsAppearance: S, elementsAppearanceOptions: y } = _(n),
            v = (0, l.PU)();
        return {
            setupError: f,
            elementsOptions: r.useMemo(
                () =>
                    h
                        ? null
                        : {
                              clientSecret: i,
                              appearance: S,
                              locale: v,
                              customPaymentMethods: E,
                              paymentMethodCreation: "manual",
                          },
                [S, v, i, E, h],
            ),
            setupIntentSecret: i,
            customPaymentMethods: E,
            customPaymentMethodIdsToSourceTypes: A,
            isLoading: h,
            elementsAppearanceOptions: y,
        };
    };
