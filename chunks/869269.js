n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(289393),
    o = n(723047),
    c = n(727843),
    d = n(587431),
    u = n(86126),
    m = n(880193),
    g = n(516448),
    p = n(975331),
    h = n(231610),
    f = n(388032),
    x = n(301849),
    b = n(948695);
function j(e) {
    var t, n;
    let { allSubscriptionListings: j, priceTiers: v, loading: _, error: O, handlePublishTier: y, onDeleteEditState: C } = e,
        { editStateId: N } = (0, c.N)(),
        I = (0, l.e7)([s.Z], () => s.Z.getSubscriptionListing(N)),
        E = (0, o.mY)(),
        S = i.useMemo(() => {
            let e = j
                .filter((e) => e.id !== N)
                .map((e) => {
                    var t;
                    return null == (t = e.subscription_plans[0]) ? void 0 : t.price;
                });
            return null == v ? void 0 : v.filter((t) => !e.includes(t));
        }, [j, N, v]),
        T = null == I,
        P = null != (t = null == I ? void 0 : I.published) && t,
        w = null != (n = null == I ? void 0 : I.archived) && n;
    return (0, r.jsxs)('div', {
        className: b.body,
        children: [
            null != O && (0, r.jsx)(d.Z, { children: O.getAnyErrorMessage() }),
            !P &&
                !E &&
                !w &&
                (0, r.jsxs)('div', {
                    className: b.publishListing,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: b.publishListingInfoHeader,
                                    children: f.intl.string(f.t.WOlcS0)
                                }),
                                (0, r.jsx)(a.R94, {
                                    type: a.R94.Types.DESCRIPTION,
                                    children: f.intl.string(f.t.rMulDQ)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.ua7, {
                            shouldShow: T,
                            tooltipClassName: x.autoWidth,
                            text: f.intl.string(f.t.v7lRIi),
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    'div',
                                    ((t = (function (e) {
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
                                                    var r;
                                                    ((r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r));
                                                }));
                                        }
                                        return e;
                                    })({}, e)),
                                    (n = n =
                                        {
                                            children: (0, r.jsx)(a.zxk, {
                                                disabled: T,
                                                variant: 'secondary',
                                                onClick: y,
                                                loading: _,
                                                text: f.intl.string(f.t.Lj6R5u)
                                            })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t)
                                );
                            }
                        })
                    ]
                }),
            (0, r.jsx)(m.Z, { priceTiers: S }),
            (0, r.jsx)(g.Z, { allSubscriptionListings: j }),
            (0, r.jsx)(p.Z, {}),
            (0, r.jsx)(h.Z, {}),
            (0, r.jsx)(u.Z, { onDeleteEditState: C })
        ]
    });
}
