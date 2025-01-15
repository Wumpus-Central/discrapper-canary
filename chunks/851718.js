n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(823379),
    a = n(106976),
    l = n(270144),
    o = n(301935),
    c = n(630656),
    d = n(10970),
    u = n(388032);
function m(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [m, g] = r.useState({ route: c.j.HOME }),
        { route: h } = m,
        p = () => {
            g({ route: c.j.HOME });
        },
        x = (e) => {
            g({
                route: c.j.SWITCH_APP_PLANS,
                ...e
            }),
                n(u.intl.string(u.t.VFqtkJ), p);
        },
        [f, _] = r.useState({});
    r.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null === (e = n.items[0]) || void 0 === e ? void 0 : e.planId;
            null != t &&
                (_((e) => ({
                    ...e,
                    [n.id]: o.G.LOADING
                })),
                (0, a.vY)(t)
                    .then(() => {
                        _((e) => ({
                            ...e,
                            [n.id]: o.G.DONE
                        }));
                    })
                    .catch(() => {
                        _((e) => ({
                            ...e,
                            [n.id]: o.G.ERROR
                        }));
                    }));
        }
    }, [t]);
    let { loadState: E } = (0, l.qz)(),
        C = E !== l.jd.LOADED;
    switch (h) {
        case c.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: x,
                            loadingState: C ? o.G.LOADING : null !== (t = f[e.id]) && void 0 !== t ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: T, ...S } = m;
            return (0, i.jsx)(d.Z, {
                ...S,
                navigateToHome: p
            });
        default:
            (0, s.vE)(h);
    }
}
