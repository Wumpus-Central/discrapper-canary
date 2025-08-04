(n.d(t, { Z: () => b }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(823379),
    l = n(106976),
    o = n(270144),
    c = n(301935),
    d = n(630656),
    u = n(10970),
    m = n(388032);
function p(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
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
class f extends r.PureComponent {
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, i.jsxs)(s.qXd, {
                  color: s.DM8.DANGER,
                  style: { borderRadius: 0 },
                  children: [m.intl.format(m.t.IIHUUF, { subscriptionId: this.props.subscription.id }), ' ', m.intl.format(m.t.fh65ER, { helpLink: 'https://support.discord.com/hc/en-us' })]
              })
            : this.props.children;
    }
    constructor(...e) {
        (super(...e), p(this, 'state', { hasError: !1 }));
    }
}
function b(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [s, p] = r.useState({ route: d.j.HOME }),
        { route: b } = s,
        x = () => {
            p({ route: d.j.HOME });
        },
        _ = (e) => {
            (p(g({ route: d.j.SWITCH_APP_PLANS }, e)), n(m.intl.string(m.t.VFqtkJ), x));
        },
        [j, C] = r.useState({});
    r.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (C((e) => h(g({}, e), { [n.id]: c.G.LOADING })),
                (0, l.vY)(t)
                    .then(() => {
                        C((e) => h(g({}, e), { [n.id]: c.G.DONE }));
                    })
                    .catch(() => {
                        C((e) => h(g({}, e), { [n.id]: c.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: E } = (0, o.qz)(),
        O = E !== o.jd.LOADED;
    switch (b) {
        case d.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        f,
                        {
                            subscription: e,
                            children: (0, i.jsx)(c.Z, {
                                subscription: e,
                                navigateToSwitchPlan: _,
                                loadingState: O ? c.G.LOADING : null != (t = j[e.id]) ? t : c.G.LOADING
                            })
                        },
                        e.id
                    );
                })
            });
        case d.j.SWITCH_APP_PLANS:
            let { route: v } = s,
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
                            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                    }
                    return r;
                })(s, ['route']);
            return (0, i.jsx)(u.Z, h(g({}, S), { navigateToHome: x }));
        default:
            (0, a.vE)(b);
    }
}
