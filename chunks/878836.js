(n.d(t, { S: () => f }), n(388685));
var r = n(73800),
    i = n(481060),
    a = n(355467),
    o = n(801937),
    s = n(493773),
    l = n(351402),
    c = n(561448);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            }));
    }
    return e;
}
let f = (e) => {
    let { shouldGenerateSetupIntent: t } = e,
        [n, u] = r.useState(void 0),
        [f, _] = r.useState(!0),
        [p, h] = r.useState([]),
        m = r.useCallback(async () => {
            var e;
            let n = (0, o.Q8)(null != (e = l.Z.ipCountryCode) ? e : 'ALL').countryPaymentMethods;
            (h((0, c.lS)(n)), t && u(await (0, a.R5)(n.length > 0 ? { regionalPaymentMethods: n } : void 0)), _(!1));
        }, [t]);
    (0, s.ZP)(() => {
        m();
    });
    let g = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
        E = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
        b = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND);
    return {
        elementsOptions: r.useMemo(() => {
            if (f) return null;
            let e = {
                appearance: {
                    theme: 'flat',
                    variables: {
                        colorText: E.hex(),
                        colorBackground: g.hex()
                    },
                    rules: {
                        '.Input': { backgroundColor: b.hex() },
                        '.Tab': { backgroundColor: b.hex() }
                    }
                },
                customPaymentMethods: p,
                paymentMethodCreation: 'manual'
            };
            return null != n
                ? d({ clientSecret: n }, e)
                : d(
                      {
                          mode: 'setup',
                          currency: 'usd'
                      },
                      e
                  );
        }, [g, E, b, n, p, f]),
        setupIntentSecret: n,
        customPaymentMethods: p,
        isLoading: f
    };
};
