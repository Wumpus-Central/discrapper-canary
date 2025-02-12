n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(823379),
    r = n(106976),
    a = n(270144),
    o = n(301935),
    c = n(630656),
    d = n(10970),
    u = n(388032);
function h(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [h, m] = s.useState({ route: c.j.HOME }),
        { route: g } = h,
        x = () => {
            m({ route: c.j.HOME });
        },
        _ = (e) => {
            m({
                route: c.j.SWITCH_APP_PLANS,
                ...e
            }),
                n(u.intl.string(u.t.VFqtkJ), x);
        },
        [p, E] = s.useState({});
    s.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null === (e = n.items[0]) || void 0 === e ? void 0 : e.planId;
            null != t &&
                (E((e) => ({
                    ...e,
                    [n.id]: o.G.LOADING
                })),
                (0, r.vY)(t)
                    .then(() => {
                        E((e) => ({
                            ...e,
                            [n.id]: o.G.DONE
                        }));
                    })
                    .catch(() => {
                        E((e) => ({
                            ...e,
                            [n.id]: o.G.ERROR
                        }));
                    }));
        }
    }, [t]);
    let { loadState: C } = (0, a.qz)(),
        f = C !== a.jd.LOADED;
    switch (g) {
        case c.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: _,
                            loadingState: f ? o.G.LOADING : null !== (t = p[e.id]) && void 0 !== t ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: N, ...I } = h;
            return (0, i.jsx)(d.Z, {
                ...I,
                navigateToHome: x
            });
        default:
            (0, l.vE)(g);
    }
}
