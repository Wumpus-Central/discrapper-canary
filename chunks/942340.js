n.d(t, {
    E: () => h,
    p: () => m,
}),
    n(896048);
var r = n(64700),
    i = n(397927),
    a = n(964486),
    s = n(626584),
    o = n(615405),
    l = n(739508),
    c = n(219538),
    u = n(550238),
    d = n(648335);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = new s.A("useStripePaymentElementOptions"),
    h = function () {
        var e, t, n, a, s;
        let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            l = (0, i.rdh)(i.LU0.colors.MODAL_BACKGROUND),
            c = (0, i.rdh)(i.LU0.colors.TEXT_STRONG),
            u = (0, i.rdh)(i.LU0.colors.INPUT_BACKGROUND_DEFAULT),
            d = null != (e = o.theme) ? e : "flat",
            f = null != (t = o.colorText) ? t : c.hex(),
            p = null != (n = o.colorBackground) ? n : l.hex(),
            _ = null != (a = o.inputBackgroundColor) ? a : u.hex(),
            h = null != (s = o.tabBackgroundColor) ? s : u.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: d,
                    variables: {
                        colorText: f,
                        colorBackground: p,
                    },
                    rules: {
                        ".Input": { backgroundColor: _ },
                        ".Tab": { backgroundColor: h },
                    },
                }),
                [d, f, p, _, h],
            ),
            elementsAppearanceOptions: {
                theme: d,
                colorText: f,
                colorBackground: p,
                inputBackgroundColor: _,
                tabBackgroundColor: h,
            },
        };
    },
    m = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, s] = r.useState(void 0),
            [f, m] = r.useState(null),
            [g, E] = r.useState(!0),
            [b, y] = r.useState([]),
            [O, A] = r.useState({}),
            v = r.useCallback(async () => {
                var e;
                let n = (0, u.J)({
                    ipCountryCode: null != (e = o.A.ipCountryCode) ? e : "ALL",
                    location: "stripe_payment_element_options",
                }).countryPaymentMethods;
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.w)(n),
                        r = (0, d.Dd)(t),
                        i = t.reduce((e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e), {});
                    y(r), A(i), s(e);
                } catch (e) {
                    m(e),
                        null != t && t(e),
                        _.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.pM)(e, { tags: { source: "payment_elements" } });
                }
                E(!1);
            }, [t]);
        (0, a.Ay)(() => {
            v();
        });
        let { elementsAppearance: S, elementsAppearanceOptions: I } = h(n);
        return {
            setupError: f,
            elementsOptions: r.useMemo(
                () =>
                    g
                        ? null
                        : p(
                              { clientSecret: i },
                              {
                                  appearance: S,
                                  customPaymentMethods: b,
                                  paymentMethodCreation: "manual",
                              },
                          ),
                [S, i, b, g],
            ),
            setupIntentSecret: i,
            customPaymentMethods: b,
            customPaymentMethodIdsToSourceTypes: O,
            isLoading: g,
            elementsAppearanceOptions: I,
        };
    };
