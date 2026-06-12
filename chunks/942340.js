n.d(t, { E: () => h, p: () => A }), n(321073);
var l = n(64700),
    r = n(602853),
    i = n(661531),
    a = n(964486),
    s = n(626584),
    o = n(739508),
    u = n(71532),
    c = n(219538),
    d = n(648335),
    p = n(818348);
let m = new s.A("useStripePaymentElementOptions"),
    h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, r.r)(i.A.colors.MODAL_BACKGROUND),
            n = (0, r.r)(i.A.colors.TEXT_STRONG),
            a = (0, r.r)(i.A.colors.INPUT_BACKGROUND_DEFAULT),
            s = e.theme ?? "flat",
            o = e.colorText ?? n.hex(),
            u = e.colorBackground ?? t.hex(),
            c = e.inputBackgroundColor ?? a.hex(),
            d = e.tabBackgroundColor ?? a.hex(),
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
    A = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [r, i] = l.useState(void 0),
            [s, A] = l.useState(null),
            [E, C] = l.useState(!0),
            [y, _] = l.useState([]),
            S = l.useMemo(() => {
                let e = ["card"],
                    t = y.find((e) => e.payment_source_type === p.he.PAYPAL);
                return null != t && e.push(t.custom_payment_method_id), e;
            }, [y]),
            { customPaymentMethods: P, customPaymentMethodIdsToSourceTypes: I } = l.useMemo(
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
                    _(t), i(e);
                } catch (e) {
                    A(e),
                        null != t && t(e),
                        m.error("there was an error on setup for Payment Elements: ", e),
                        (0, o.pM)(e, { tags: { source: "payment_elements" } });
                }
                C(!1);
            }, [t]);
        (0, a.Ay)(() => {
            f();
        });
        let { elementsAppearance: T, elementsAppearanceOptions: N } = h(n),
            g = (0, u.PU)(),
            v = l.useMemo(
                () =>
                    E
                        ? null
                        : {
                              clientSecret: r,
                              appearance: T,
                              locale: g,
                              customPaymentMethods: P,
                              paymentMethodCreation: "manual",
                          },
                [T, g, r, P, E],
            ),
            x = {
                setupError: s,
                customPaymentMethods: P,
                customPaymentMethodIdsToSourceTypes: I,
                paymentMethodOrder: S,
                elementsAppearanceOptions: N,
            };
        return null == r || null == v || E
            ? { ...x, isLoading: !0, elementsOptions: v, setupIntentSecret: r }
            : { ...x, isLoading: !1, elementsOptions: v, setupIntentSecret: r };
    };
