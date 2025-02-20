n.d(t, { Z: () => g });
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
    p = n(388032);
function g(e) {
    let t = (0, a.e7)([u.Z], () => u.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t) {
                var n, i, a, u;
                let g;
                if (!e.managed) return null;
                let h = null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id,
                    f = null === (i = e.tags) || void 0 === i ? void 0 : i.integration_id,
                    b = (null === (a = e.tags) || void 0 === a ? void 0 : a.premium_subscriber) !== void 0,
                    x = (null === (u = e.tags) || void 0 === u ? void 0 : u.guild_connections) !== void 0;
                if (
                    (null != h
                        ? (g =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.id) === h;
                                    }))
                        : null != f &&
                          (g =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        let { id: t } = e;
                                        return t === f;
                                    })),
                    null != g && null != g.application && null != g.name)
                ) {
                    let e = g.application.id,
                        t = g.name;
                    [s.b.TWITCH, s.b.YOUTUBE].includes(g.type) && (t = ''.concat(o.Z.get(g.type).name, ' - ').concat(t));
                    let n = () => {
                        d.Z.setSection(m.pNK.INTEGRATIONS), l.Z.setSection(m.b4C.APPLICATION, e);
                    };
                    return p.NW.format(p.t.FuXsWl, {
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
                return b ? p.NW.string(p.t.oF6FYW) : x ? p.NW.string(p.t.ZQ37tL) : p.NW.string(p.t.k5d7DA);
            })(e, t),
        [e, t]
    );
}
