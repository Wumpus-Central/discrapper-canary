n.d(t, { Z: () => c });
var r = n(192379),
    i = n(766434),
    s = n(310291),
    a = n(730647),
    l = n(495298),
    o = n(198139);
function c(e, t) {
    let n = null == t ? void 0 : t.team,
        { payoutsByPeriod: c, loading: d } = (0, s.Z)(null == t ? void 0 : t.id, {
            groupType: o.uw.SERVER_ROLE_SUBSCRIPTION,
            teamId: null == n ? void 0 : n.id
        }),
        u = (0, a.f)('useEarningMetrics'),
        m = (0, l.Z)(e),
        {
            currentPeriod: g,
            previousPeriods: p,
            metrics: h
        } = r.useMemo(() => {
            var e, t;
            let { currentPeriod: n, previousPeriods: r } = (0, i.Br)(c),
                s = (0, i.Uj)(n, r[0]);
            return {
                currentPeriod: n,
                previousPeriods: r,
                metrics:
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, s)),
                    (t = t =
                        {
                            subscribers: m,
                            subscriberChange: s.paymentsCountChange
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
            };
        }, [c, m]);
    return {
        loading: d || !u,
        team: n,
        currentPeriod: g,
        previousPeriods: p,
        allPeriods: c,
        metrics: h
    };
}
