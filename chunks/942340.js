"use strict";
n.d(t, { E: () => p, p: () => E }), n(321073);
var i = n(64700),
    r = n(602853),
    s = n(661531),
    a = n(964486),
    o = n(655857),
    l = n(626584),
    u = n(739508),
    c = n(71532),
    d = n(219538),
    _ = n(648335),
    h = n(818348);
let f = new l.A("useStripePaymentElementOptions"),
    p = function () {
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
    E = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [r, s] = i.useState(void 0),
            [l, E] = i.useState(null),
            [m, g] = i.useState(!0),
            [A, I] = i.useState([]),
            { displayCurrency: T } = (0, o.Jn)(),
            S = i.useMemo(() => {
                let e = ["pix", "card"],
                    t = A.find((e) => e.payment_source_type === h.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [A]),
            { customPaymentMethods: y, customPaymentMethodIdsToSourceTypes: C } = i.useMemo(
                () => ({
                    customPaymentMethods: (0, _.Dd)(A),
                    customPaymentMethodIdsToSourceTypes: A.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [A],
            ),
            N = i.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, d.w)({ body: { currency: T } });
                    I(t), s(e);
                } catch (e) {
                    E(e),
                        null != t && t(e),
                        f.error("there was an error on setup for Payment Elements: ", e),
                        (0, u.pM)(e, { tags: { source: "payment_elements" } });
                }
                g(!1);
            }, [t, T]);
        (0, a.Ay)(() => {
            N();
        });
        let { elementsAppearance: v, elementsAppearanceOptions: R } = p(n),
            O = (0, c.PU)(),
            b = i.useMemo(
                () =>
                    m
                        ? null
                        : {
                              clientSecret: r,
                              appearance: v,
                              locale: O,
                              customPaymentMethods: y,
                              paymentMethodCreation: "manual",
                          },
                [v, O, r, y, m],
            ),
            D = {
                setupError: l,
                customPaymentMethods: y,
                customPaymentMethodIdsToSourceTypes: C,
                paymentMethodOrder: S,
                elementsAppearanceOptions: R,
            };
        return null == r || null == b || m
            ? { ...D, isLoading: !0, elementsOptions: b, setupIntentSecret: r }
            : { ...D, isLoading: !1, elementsOptions: b, setupIntentSecret: r };
    };
