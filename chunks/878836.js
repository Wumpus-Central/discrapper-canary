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
    let { shouldGenerateSetupIntent: t } = e,
        [n, d] = r.useState(void 0),
        [_, p] = r.useState(!0),
        [h, m] = r.useState([]),
        g = r.useCallback(async () => {
            var e;
            let n = (0, c.vP)(),
                r = n ? (0, o.Q8)(null != (e = l.Z.ipCountryCode) ? e : 'ALL').countryPaymentMethods : [];
            if ((m((0, u.lS)(r, n)), t))
                try {
                    let e = await (0, a.R5)(r.length > 0 ? { regionalPaymentMethods: r } : void 0);
                    d(e);
                } catch (e) {
                    (0, a.SQ)(e);
                }
            p(!1);
        }, [t]);
    (0, s.ZP)(() => {
        g();
    });
    let E = (0, i.dQu)(i.TVs.colors.MODAL_BACKGROUND),
        b = (0, i.dQu)(i.TVs.colors.TEXT_PRIMARY),
        y = (0, i.dQu)(i.TVs.colors.INPUT_BACKGROUND);
    return {
        elementsOptions: r.useMemo(() => {
            if (_) return null;
            let e = {
                appearance: {
                    theme: 'flat',
                    variables: {
                        colorText: b.hex(),
                        colorBackground: E.hex()
                    },
                    rules: {
                        '.Input': { backgroundColor: y.hex() },
                        '.Tab': { backgroundColor: y.hex() }
                    }
                },
                customPaymentMethods: h,
                paymentMethodCreation: 'manual'
            };
            return null != n
                ? f({ clientSecret: n }, e)
                : f(
                      {
                          mode: 'setup',
                          currency: 'usd'
                      },
                      e
                  );
        }, [E, b, y, n, h, _]),
        setupIntentSecret: n,
        customPaymentMethods: h,
        isLoading: _
    };
};
