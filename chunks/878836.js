n.d(t, {
    M: () => m,
    S: () => g,
}),
    n(388685);
var r = n(473749),
    i = n(481060),
    a = n(493773),
    o = n(710845),
    s = n(351402),
    l = n(122289),
    c = n(51144),
    u = n(947673),
    d = n(720452),
    f = n(561448);
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = new o.Z("useStripePaymentElementOptions"),
    m = function () {
        var e, t, n, a, o;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            l = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
            c = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
            u = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND),
            d = null != (e = s.theme) ? e : "flat",
            f = null != (t = s.colorText) ? t : c.hex(),
            _ = null != (n = s.colorBackground) ? n : l.hex(),
            p = null != (a = s.inputBackgroundColor) ? a : u.hex(),
            h = null != (o = s.tabBackgroundColor) ? o : u.hex();
        return {
            elementsAppearance: r.useMemo(
                () => ({
                    theme: d,
                    variables: {
                        colorText: f,
                        colorBackground: _,
                    },
                    rules: {
                        ".Input": { backgroundColor: p },
                        ".Tab": { backgroundColor: h },
                    },
                }),
                [d, f, _, p, h],
            ),
            elementsAppearanceOptions: {
                theme: d,
                colorText: f,
                colorBackground: _,
                inputBackgroundColor: p,
                tabBackgroundColor: h,
            },
        };
    },
    g = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, o] = r.useState(void 0),
            [_, g] = r.useState(null),
            [E, b] = r.useState(!0),
            [y, O] = r.useState([]),
            v = r.useCallback(async () => {
                var e;
                let n = (0, c.vP)(),
                    r = (0, d.Q)({
                        ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
                        location: "stripe_payment_element_options",
                    }).countryPaymentMethods;
                O((0, f.lS)(r, n));
                try {
                    let e = await (0, u.V)(r);
                    o(e);
                } catch (e) {
                    g(e),
                        null != t && t(e),
                        h.error("there was an error on setup for Payment Elements: ", e),
                        (0, l.q2)(e, { tags: { source: "payment_elements" } });
                }
                b(!1);
            }, [t]);
        (0, a.ZP)(() => {
            v();
        });
        let { elementsAppearance: I, elementsAppearanceOptions: T } = m(n);
        return {
            setupError: _,
            elementsOptions: r.useMemo(
                () =>
                    E
                        ? null
                        : p(
                              { clientSecret: i },
                              {
                                  appearance: I,
                                  customPaymentMethods: y,
                                  paymentMethodCreation: "manual",
                              },
                          ),
                [I, i, y, E],
            ),
            setupIntentSecret: i,
            customPaymentMethods: y,
            isLoading: E,
            elementsAppearanceOptions: T,
        };
    };
