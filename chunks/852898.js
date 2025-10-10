n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(951284),
    s = n(442837),
    a = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(434404),
    u = n(999382),
    g = n(981631),
    m = n(388032);
function p(e, t) {
    let n = (0, s.e7)([u.Z], () => u.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t, n) {
                var i, s, u, p;
                let f;
                if (!t.managed) return null;
                let h = null == (i = t.tags) ? void 0 : i.bot_id,
                    x = null == (s = t.tags) ? void 0 : s.integration_id,
                    b = (null == (u = t.tags) ? void 0 : u.premium_subscriber) !== void 0,
                    j = (null == (p = t.tags) ? void 0 : p.guild_connections) !== void 0;
                if (
                    (null != h
                        ? (f =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === h;
                                    }))
                        : null != x &&
                          (f =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { id: t } = e;
                                        return t === x;
                                    })),
                    null != f && null != f.application && null != f.name)
                ) {
                    let e = f.application.id,
                        t = f.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(f.type) &&
                        (t = "".concat(o.Z.get(f.type).name, " - ").concat(t));
                    let n = () => {
                        d.Z.setSection(g.pNK.INTEGRATIONS), a.Z.setSection(g.b4C.APPLICATION, e);
                    };
                    return m.intl.format(m.t.FuXsWl, {
                        name: t,
                        integrationNameHook: (e, t) =>
                            (0, r.jsx)(
                                c.Z,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                    });
                }
                return b ? m.intl.string(m.t.oF6FYW) : j ? m.intl.string(m.t.ZQ37tL) : m.intl.string(m.t.k5d7DA);
            })(0, t, n),
        [e, t, n],
    );
}
