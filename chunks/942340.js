n.d(t, { E: () => h, p: () => C }), n(321073);
var l = n(64700),
    a = n(602853),
    i = n(661531),
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
            t = (0, a.r)(i.A.colors.MODAL_BACKGROUND),
            n = (0, a.r)(i.A.colors.TEXT_STRONG),
            r = (0, a.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
            s = e.theme ?? "flat",
            o = e.colorText ?? n.hex(),
            u = e.colorBackground ?? t.hex(),
            c = e.inputBackgroundColor ?? r.hex(),
            d = e.tabBackgroundColor ?? r.hex(),
            p = e.tabSelectedBackgroundColor ?? null;
        return {
            elementsAppearance: l.useMemo(
                () => ({
                    theme: s,
                    variables: { colorText: o, colorBackground: u },
                    rules: {
                        ".Input": { backgroundColor: c },
                        ".Tab": { backgroundColor: d },
                        ...(null != p ? { ".Tab--selected": { backgroundColor: p } } : {}),
                    },
                }),
                [s, o, u, c, d, p],
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
    C = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [a, i] = l.useState(void 0),
            [s, C] = l.useState(null),
            [A, E] = l.useState(!0),
            [y, P] = l.useState([]),
            S = l.useMemo(() => {
                let e = ["card"],
                    t = y.find((e) => e.payment_source_type === p.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [y]),
            { customPaymentMethods: _, customPaymentMethodIdsToSourceTypes: T } = l.useMemo(
                () => ({
                    customPaymentMethods: (0, d.Dd)(y),
                    customPaymentMethodIdsToSourceTypes: y.reduce(
                        (e, t) => ((e[t.custom_payment_method_id] = t.payment_source_type), e),
                        {},
                    ),
                }),
                [y],
            ),
            f = l.useCallback(async () => {
                try {
                    let { client_secret: e, custom_payment_methods: t } = await (0, c.w)();
                    P(t), i(e);
                } catch (e) {
                    C(e),
                        null != t && t(e),
                        m.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                E(!1);
            }, [t]);
        (0, r.Ay)(() => {
            f();
        });
        let { elementsAppearance: x, elementsAppearanceOptions: N } = h(n),
            I = (0, u.PU)();
        return {
            setupError: s,
            elementsOptions: l.useMemo(
                () =>
                    A
                        ? null
                        : {
                              clientSecret: a,
                              appearance: x,
                              locale: I,
                              customPaymentMethods: _,
                              paymentMethodCreation: "manual",
                          },
                [x, I, a, _, A],
            ),
            setupIntentSecret: a,
            customPaymentMethods: _,
            customPaymentMethodIdsToSourceTypes: T,
            paymentMethodOrder: S,
            isLoading: A,
            elementsAppearanceOptions: N,
        };
    };
