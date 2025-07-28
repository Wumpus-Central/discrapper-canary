n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(951284),
    a = n(442837),
    s = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(232062),
    u = n(434404),
    m = n(999382),
    g = n(981631),
    p = n(388032);
function h(e, t) {
    let n = (0, a.e7)([m.Z], () => m.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t, n) {
                var i, a, m, h;
                let f;
                if (!t.managed) return null;
                let x = null == (i = t.tags) ? void 0 : i.bot_id,
                    b = null == (a = t.tags) ? void 0 : a.integration_id,
                    j = (null == (m = t.tags) ? void 0 : m.premium_subscriber) !== void 0,
                    v = (null == (h = t.tags) ? void 0 : h.guild_connections) !== void 0;
                if (
                    (null != x
                        ? (f =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === x;
                                    }))
                        : null != b &&
                          (f =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { id: t } = e;
                                        return t === b;
                                    })),
                    null != f && null != f.application && null != f.name)
                ) {
                    let e = f.application.id,
                        t = f.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(f.type) && (t = ''.concat(o.Z.get(f.type).name, ' - ').concat(t));
                    let n = () => {
                        (u.Z.setSection(g.pNK.INTEGRATIONS), s.Z.setSection(g.b4C.APPLICATION, e));
                    };
                    return p.intl.format(p.t.FuXsWl, {
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
                return j ? ((0, d.Tq)(e, 'useManagedRoleWarningText') ? p.intl.string(p.t.NqRten) : p.intl.string(p.t.oF6FYW)) : v ? p.intl.string(p.t.ZQ37tL) : p.intl.string(p.t.k5d7DA);
            })(e, t, n),
        [e, t, n]
    );
}
