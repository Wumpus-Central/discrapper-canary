n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(823379),
    a = n(106976),
    l = n(270144),
    o = n(301935),
    c = n(630656),
    d = n(10970),
    u = n(388032);
function m(e) {
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
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
function p(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [p, h] = i.useState({ route: c.j.HOME }),
        { route: f } = p,
        b = () => {
            h({ route: c.j.HOME });
        },
        N = (e) => {
            h(m({ route: c.j.SWITCH_APP_PLANS }, e)), n(u.NW.string(u.t.VFqtkJ), b);
        },
        [x, _] = i.useState({});
    i.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (_((e) => g(m({}, e), { [n.id]: o.G.LOADING })),
                (0, a.vY)(t)
                    .then(() => {
                        _((e) => g(m({}, e), { [n.id]: o.G.DONE }));
                    })
                    .catch(() => {
                        _((e) => g(m({}, e), { [n.id]: o.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: E } = (0, l.qz)(),
        j = E !== l.jd.LOADED;
    switch (f) {
        case c.j.HOME:
            return (0, r.jsx)(r.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: N,
                            loadingState: j ? o.G.LOADING : null != (t = x[e.id]) ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: O } = p,
                C = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(p, ['route']);
            return (0, r.jsx)(d.Z, g(m({}, C), { navigateToHome: b }));
        default:
            (0, s.vE)(f);
    }
}
