n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(951284),
    s = n(442837),
    a = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(232062),
    u = n(434404),
    m = n(999382),
    g = n(981631),
    p = n(388032);
function f(e, t) {
    let n = (0, s.e7)([m.Z], () => m.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t, n) {
                var i, s, m, f;
                let h;
                if (!t.managed) return null;
                let x = null == (i = t.tags) ? void 0 : i.bot_id,
                    b = null == (s = t.tags) ? void 0 : s.integration_id,
                    j = (null == (m = t.tags) ? void 0 : m.premium_subscriber) !== void 0,
                    v = (null == (f = t.tags) ? void 0 : f.guild_connections) !== void 0;
                if (
                    (null != x
                        ? (h =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === x;
                                    }))
                        : null != b &&
                          (h =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { id: t } = e;
                                        return t === b;
                                    })),
                    null != h && null != h.application && null != h.name)
                ) {
                    let e = h.application.id,
                        t = h.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(h.type) && (t = ''.concat(o.Z.get(h.type).name, ' - ').concat(t));
                    let n = () => {
                        (u.Z.setSection(g.pNK.INTEGRATIONS), a.Z.setSection(g.b4C.APPLICATION, e));
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
