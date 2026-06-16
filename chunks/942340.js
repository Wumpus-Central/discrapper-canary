"use strict";
n.d(t, { E: () => f, p: () => p }), n(321073);
var i = n(64700),
    r = n(602853),
    s = n(661531),
    a = n(964486),
    o = n(626584),
    l = n(739508),
    u = n(71532),
    c = n(219538),
    d = n(648335),
    _ = n(818348);
let h = new o.A("useStripePaymentElementOptions"),
    f = function () {
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
    },
    p = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [r, s] = i.useState(void 0),
            [o, p] = i.useState(null),
            [E, m] = i.useState(!0),
            [g, A] = i.useState([]),
            I = i.useMemo(() => {
                let e = ["card"],
                    t = g.find((e) => e.payment_source_type === _.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [g]),
            { customPaymentMethods: T, customPaymentMethodIdsToSourceTypes: S } = i.useMemo(
                () => ({
                    customPaymentMethods: (0, d.Dd)(g),
                    customPaymentMethodIdsToSourceTypes: g.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [g],
            ),
            y = i.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.w)();
                    A(t), s(e);
                } catch (e) {
                    p(e),
                        null != t && t(e),
                        h.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.pM)(e, { tags: { source: "payment_elements" } });
                }
                m(!1);
            }, [t]);
        (0, a.Ay)(() => {
            y();
        });
        let { elementsAppearance: C, elementsAppearanceOptions: N } = f(n),
            v = (0, u.PU)(),
            R = i.useMemo(
                () =>
                    E
                        ? null
                        : {
                              clientSecret: r,
                              appearance: C,
                              locale: v,
                              customPaymentMethods: T,
                              paymentMethodCreation: "manual",
                          },
                [C, v, r, T, E],
            ),
            O = {
                setupError: o,
                customPaymentMethods: T,
                customPaymentMethodIdsToSourceTypes: S,
                paymentMethodOrder: I,
                elementsAppearanceOptions: N,
            };
        return null == r || null == R || E
            ? { ...O, isLoading: !0, elementsOptions: R, setupIntentSecret: r }
            : { ...O, isLoading: !1, elementsOptions: R, setupIntentSecret: r };
    };
