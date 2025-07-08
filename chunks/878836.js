(n.d(t, { S: () => _ }), n(388685));
var r = n(73800),
    i = n(481060),
    a = n(355467),
    o = n(801937),
    s = n(493773),
    l = n(351402),
    c = n(51144),
    u = n(561448);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
let _ = (e) => {
    let { onSetupError: t } = e,
        [n, d] = r.useState(void 0),
        [_, p] = r.useState(null),
        [h, m] = r.useState(!0),
        [g, E] = r.useState([]),
        b = r.useCallback(async () => {
            var e;
            let n = (0, c.vP)(),
                r = n ? (0, o.Q8)(null != (e = l.Z.ipCountryCode) ? e : 'ALL').countryPaymentMethods : [];
            E((0, u.lS)(r, n));
            try {
                let e = await (0, a.R5)({ failImmediatelyWhenRateLimited: !0 }, r.length > 0 ? { regionalPaymentMethods: r } : void 0);
                d(e);
            } catch (e) {
                (p(e), null != t && t(e), (0, a.SQ)(e));
            }
            m(!1);
        }, [t]);
    (0, s.ZP)(() => {
        b();
    });
    let y = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
        O = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
        v = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND);
    return {
        setupError: _,
        elementsOptions: r.useMemo(
            () =>
                h
                    ? null
                    : f(
                          { clientSecret: n },
                          {
                              appearance: {
                                  theme: 'flat',
                                  variables: {
                                      colorText: O.hex(),
                                      colorBackground: y.hex()
                                  },
                                  rules: {
                                      '.Input': { backgroundColor: v.hex() },
                                      '.Tab': { backgroundColor: v.hex() }
                                  }
                              },
                              customPaymentMethods: g,
                              paymentMethodCreation: 'manual'
                          }
                      ),
            [y, O, v, n, g, h]
        ),
        setupIntentSecret: n,
        customPaymentMethods: g,
        isLoading: h
    };
};
