n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(951284),
    s = n(442837),
    a = n(139387),
    o = n(726542),
    c = n(690221),
    u = n(434404),
    d = n(999382),
    m = n(981631),
    g = n(388032);
function p(e) {
    let t = (0, s.e7)([d.Z], () => d.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t) {
                var n, i, s, d;
                let p;
                if (!e.managed) return null;
                let f = null == (n = e.tags) ? void 0 : n.bot_id,
                    h = null == (i = e.tags) ? void 0 : i.integration_id,
                    x = (null == (s = e.tags) ? void 0 : s.premium_subscriber) !== void 0,
                    b = (null == (d = e.tags) ? void 0 : d.guild_connections) !== void 0;
                if (
                    (null != f
                        ? (p =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === f;
                                    }))
                        : null != h &&
                          (p =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        let { id: t } = e;
                                        return t === h;
                                    })),
                    null != p && null != p.application && null != p.name)
                ) {
                    let e = p.application.id,
                        t = p.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(p.type) && (t = ''.concat(o.Z.get(p.type).name, ' - ').concat(t));
                    let n = () => {
                        u.Z.setSection(m.pNK.INTEGRATIONS), a.Z.setSection(m.b4C.APPLICATION, e);
                    };
                    return g.intl.format(g.t.FuXsWl, {
                        name: t,
                        integrationNameHook: (e, t) =>
                            (0, r.jsx)(
                                c.Z,
                                {
                                    onClick: n,
                                    children: e
                                },
                                t
                            )
                    });
                }
                return x ? g.intl.string(g.t.oF6FYW) : b ? g.intl.string(g.t.ZQ37tL) : g.intl.string(g.t.k5d7DA);
            })(e, t),
        [e, t]
    );
}
