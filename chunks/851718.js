n.d(t, { Z: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(823379),
    l = n(106976),
    a = n(270144),
    o = n(301935),
    c = n(630656),
    d = n(10970),
    u = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [g, h] = r.useState({ route: c.j.HOME }),
        { route: f } = g,
        b = () => {
            h({ route: c.j.HOME });
        },
        _ = (e) => {
            h(m({ route: c.j.SWITCH_APP_PLANS }, e)), n(u.intl.string(u.t.VFqtkJ), b);
        },
        [x, E] = r.useState({});
    r.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (E((e) => p(m({}, e), { [n.id]: o.G.LOADING })),
                (0, l.vY)(t)
                    .then(() => {
                        E((e) => p(m({}, e), { [n.id]: o.G.DONE }));
                    })
                    .catch(() => {
                        E((e) => p(m({}, e), { [n.id]: o.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: j } = (0, a.qz)(),
        C = j !== a.jd.LOADED;
    switch (f) {
        case c.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: _,
                            loadingState: C ? o.G.LOADING : null != (t = x[e.id]) ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: O } = g,
                S = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                s = Object.keys(e);
                            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    }
                    return r;
                })(g, ['route']);
            return (0, i.jsx)(d.Z, p(m({}, S), { navigateToHome: b }));
        default:
            (0, s.vE)(f);
    }
}
