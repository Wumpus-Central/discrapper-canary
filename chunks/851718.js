n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(823379),
    s = n(106976),
    l = n(270144),
    c = n(301935),
    u = n(630656),
    d = n(10970),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = "https://support.discord.com/hc/en-us";
class y extends i.PureComponent {
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, r.jsxs)(a.qXd, {
                  color: a.DM8.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      f.intl.format(f.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      f.intl.format(f.t.fh65ES, { helpLink: b }),
                  ],
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e), _(this, "state", { hasError: !1 });
    }
}
function O(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [a, _] = i.useState({ route: u.j.HOME }),
        { route: h } = a,
        E = () => {
            _({ route: u.j.HOME });
        },
        b = (e) => {
            _(p({ route: u.j.SWITCH_APP_PLANS }, e)), n(f.intl.string(f.t.VFqtkP), E);
        },
        [O, v] = i.useState({});
    i.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null == (e = n.items[0]) ? void 0 : e.planId;
            null != t &&
                (v((e) => m(p({}, e), { [n.id]: c.G.LOADING })),
                (0, s.vY)(t)
                    .then(() => {
                        v((e) => m(p({}, e), { [n.id]: c.G.DONE }));
                    })
                    .catch(() => {
                        v((e) => m(p({}, e), { [n.id]: c.G.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: I } = (0, l.qz)(),
        T = I !== l.jd.LOADED;
    switch (h) {
        case u.j.HOME:
            return (0, r.jsx)(r.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        y,
                        {
                            subscription: e,
                            children: (0, r.jsx)(c.Z, {
                                subscription: e,
                                navigateToSwitchPlan: b,
                                loadingState: T ? c.G.LOADING : null != (t = O[e.id]) ? t : c.G.LOADING,
                            }),
                        },
                        e.id,
                    );
                }),
            });
        case u.j.SWITCH_APP_PLANS:
            let { route: S } = a,
                A = g(a, ["route"]);
            return (0, r.jsx)(d.Z, m(p({}, A), { navigateToHome: E }));
        default:
            (0, o.vE)(h);
    }
}
