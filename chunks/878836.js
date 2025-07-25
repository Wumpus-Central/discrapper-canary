(n.d(t, { S: () => p }), n(388685));
var r = n(73800),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
let p = (e) => {
    let { onSetupError: t } = e,
        [n, f] = r.useState(void 0),
        [p, h] = r.useState(null),
        [m, g] = r.useState(!0),
        [E, b] = r.useState([]),
        y = r.useCallback(async () => {
            var e;
            let n = (0, l.vP)(),
                r = n
                    ? (0, u.Q)({
                          ipCountryCode: null != (e = s.Z.ipCountryCode) ? e : 'ALL',
                          location: 'stripe_payment_element_options'
                      }).countryPaymentMethods
                    : [];
            b((0, d.lS)(r, n));
            try {
                let e = await (0, c.V)(r);
                f(e);
            } catch (e) {
                (h(e), null != t && t(e), (0, a.SQ)(e));
            }
            g(!1);
        }, [t]);
    (0, o.ZP)(() => {
        y();
    });
    let O = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
        v = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
        I = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND);
    return {
        setupError: p,
        elementsOptions: r.useMemo(
            () =>
                m
                    ? null
                    : _(
                          { clientSecret: n },
                          {
                              appearance: {
                                  theme: 'flat',
                                  variables: {
                                      colorText: v.hex(),
                                      colorBackground: O.hex()
                                  },
                                  rules: {
                                      '.Input': { backgroundColor: I.hex() },
                                      '.Tab': { backgroundColor: I.hex() }
                                  }
                              },
                              customPaymentMethods: E,
                              paymentMethodCreation: 'manual'
                          }
                      ),
            [O, v, I, n, E, m]
        ),
        setupIntentSecret: n,
        customPaymentMethods: E,
        isLoading: m
    };
};
