n.d(t, {
    M: () => p,
    S: () => h,
}),
    n(388685);
var r = n(647438),
    i = n(481060),
    a = n(355467),
    o = n(493773),
    s = n(351402),
    l = n(51144),
    c = n(947673),
    u = n(720452),
    d = n(561448);
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
function _(e) {
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
let p = function () {
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
    h = (e) => {
        let { onSetupError: t, elementsAppearanceOptions: n = {} } = e,
            [i, f] = r.useState(void 0),
            [h, m] = r.useState(null),
            [g, E] = r.useState(!0),
            [b, y] = r.useState([]),
            O = r.useCallback(async () => {
                var e;
                let n = (0, l.vP)(),
                    r = n
                        ? (0, u.Q)({
                              ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : "ALL",
                              location: "stripe_payment_element_options",
                          }).countryPaymentMethods
                        : [];
                y((0, d.lS)(r, n));
                try {
                    let e = await (0, c.V)(r);
                    f(e);
                } catch (e) {
                    m(e), null != t && t(e), (0, a.SQ)(e);
                }
                E(!1);
            }, [t]);
        (0, o.ZP)(() => {
            O();
        });
        let { elementsAppearance: v, elementsAppearanceOptions: I } = p(n);
        return {
            setupError: h,
            elementsOptions: r.useMemo(
                () =>
                    g
                        ? null
                        : _(
                              { clientSecret: i },
                              {
                                  appearance: v,
                                  customPaymentMethods: b,
                                  paymentMethodCreation: "manual",
                              },
                          ),
                [v, i, b, g],
            ),
            setupIntentSecret: i,
            customPaymentMethods: b,
            isLoading: g,
            elementsAppearanceOptions: I,
        };
    };
