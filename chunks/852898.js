n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(951284),
    a = n(442837),
    s = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(434404),
    u = n(999382),
    g = n(981631),
    f = n(388032);
function m(e, t) {
    let n = (0, a.e7)([u.Z], () => u.Z.getProps().integrations);
    return i.useMemo(
        () =>
            (function (e, t, n) {
                var i, a, u, m;
                let b;
                if (!t.managed) return null;
                let p = null == (i = t.tags) ? void 0 : i.bot_id,
                    h = null == (a = t.tags) ? void 0 : a.integration_id,
                    x = (null == (u = t.tags) ? void 0 : u.premium_subscriber) !== void 0,
                    j = (null == (m = t.tags) ? void 0 : m.guild_connections) !== void 0;
                if (
                    (null != p
                        ? (b =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n || null == (t = n.bot) ? void 0 : t.id) === p;
                                    }))
                        : null != h &&
                          (b =
                              null == n
                                  ? void 0
                                  : n.find((e) => {
                                        let { id: t } = e;
                                        return t === h;
                                    })),
                    null != b && null != b.application && null != b.name)
                ) {
                    let e = b.application.id,
                        t = b.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(b.type) &&
                        (t = "".concat(o.Z.get(b.type).name, " - ").concat(t));
                    let n = () => {
                        d.Z.setSection(g.pNK.INTEGRATIONS), s.Z.setSection(g.b4C.APPLICATION, e);
                    };
                    return f.intl.format(f.t.FuXsWm, {
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
                return x ? f.intl.string(f.t.oF6FYT) : j ? f.intl.string(f.t.ZQ37tH) : f.intl.string(f.t.k5d7DJ);
            })(0, t, n),
        [e, t, n],
    );
}
