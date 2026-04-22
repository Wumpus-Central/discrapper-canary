n.d(t, { E: () => h, p: () => A }), n(321073);
var l = n(64700),
    i = n(602853),
    a = n(827734),
    r = n(964486),
    s = n(626584),
    o = n(739508),
    u = n(71532),
    c = n(219538),
    d = n(648335),
    p = n(818348);
let m = new s.A("useStripePaymentElementOptions"),
    h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, i.r)(a.A.colors.MODAL_BACKGROUND),
            n = (0, i.r)(a.A.colors.TEXT_STRONG),
            r = (0, i.r)(a.A.colors.INPUT_BACKGROUND_DEFAULT),
            s = e.theme ?? "flat",
            o = e.colorText ?? n.hex(),
            u = e.colorBackground ?? t.hex(),
            c = e.inputBackgroundColor ?? r.hex(),
            d = e.tabBackgroundColor ?? r.hex();
        return {
            elementsAppearance: l.useMemo(
                () => ({
                    theme: s,
                    variables: { colorText: o, colorBackground: u },
                    rules: { ".Input": { backgroundColor: c }, ".Tab": { backgroundColor: d } },
                }),
                [s, o, u, c, d],
            ),
            elementsAppearanceOptions: {
                theme: s,
                colorText: o,
                colorBackground: u,
                inputBackgroundColor: c,
                tabBackgroundColor: d,
            },
        };
    },
    A = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, a] = l.useState(void 0),
            [s, A] = l.useState(null),
            [_, C] = l.useState(!0),
            [E, y] = l.useState([]),
            f = l.useMemo(() => {
                let e = ["card"],
                    t = E.find((e) => e.payment_source_type === p.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [E]),
            { customPaymentMethods: P, customPaymentMethodIdsToSourceTypes: S } = l.useMemo(
                () => ({
                    customPaymentMethods: (0, d.Dd)(E),
                    customPaymentMethodIdsToSourceTypes: E.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [E],
            ),
            x = l.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.w)();
                    y(t), a(e);
                } catch (e) {
                    A(e),
                        null != t && t(e),
                        m.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                C(!1);
            }, [t]);
        (0, r.Ay)(() => {
            x();
        });
        let { elementsAppearance: T, elementsAppearanceOptions: N } = h(n),
            g = (0, u.PU)();
        return {
            setupError: s,
            elementsOptions: l.useMemo(
                () =>
                    _
                        ? null
                        : {
                              clientSecret: i,
                              appearance: T,
                              locale: g,
                              customPaymentMethods: P,
                              paymentMethodCreation: "manual",
                          },
                [T, g, i, P, _],
            ),
            setupIntentSecret: i,
            customPaymentMethods: P,
            customPaymentMethodIdsToSourceTypes: S,
            paymentMethodOrder: f,
            isLoading: _,
            elementsAppearanceOptions: N,
        };
    };
