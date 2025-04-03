n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    s = n(951284),
    a = n(442837),
    l = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(434404),
    u = n(999382),
    m = n(981631),
    g = n(388032);
function p(e) {
    let t = (0, a.e7)([u.Z], () => u.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t) {
                var n, i, a, u;
                let p;
                if (!e.managed) return null;
                let h = null == (n = e.tags) ? void 0 : n.bot_id,
                    f = null == (i = e.tags) ? void 0 : i.integration_id,
                    b = (null == (a = e.tags) ? void 0 : a.premium_subscriber) !== void 0,
                    x = (null == (u = e.tags) ? void 0 : u.guild_connections) !== void 0;
                if (
                    (null != h
                        ? (p =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === h;
                                    }))
                        : null != f &&
                          (p =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        let { id: t } = e;
                                        return t === f;
                                    })),
                    null != p && null != p.application && null != p.name)
                ) {
                    let e = p.application.id,
                        t = p.name;
                    [s.b.TWITCH, s.b.YOUTUBE].includes(p.type) && (t = ''.concat(o.Z.get(p.type).name, ' - ').concat(t));
                    let n = () => {
                        d.Z.setSection(m.pNK.INTEGRATIONS), l.Z.setSection(m.b4C.APPLICATION, e);
                    };
                    return g.NW.format(g.t.FuXsWl, {
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
                return b ? g.NW.string(g.t.oF6FYW) : x ? g.NW.string(g.t.ZQ37tL) : g.NW.string(g.t.k5d7DA);
            })(e, t),
        [e, t]
    );
}
