n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(951284),
    s = n(442837),
    a = n(139387),
    o = n(726542),
    c = n(690221),
    d = n(434404),
    u = n(999382),
    m = n(981631),
    h = n(388032);
function g(e) {
    let t = (0, s.e7)([u.Z], () => u.Z.getProps().integrations);
    return r.useMemo(
        () =>
            (function (e, t) {
                var n, r, s, u;
                let g;
                if (!e.managed) return null;
                let x = null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id,
                    p = null === (r = e.tags) || void 0 === r ? void 0 : r.integration_id,
                    f = (null === (s = e.tags) || void 0 === s ? void 0 : s.premium_subscriber) !== void 0,
                    C = (null === (u = e.tags) || void 0 === u ? void 0 : u.guild_connections) !== void 0;
                if (
                    (null != x
                        ? (g =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        var t;
                                        let { application: n } = e;
                                        return (null == n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.id) === x;
                                    }))
                        : null != p &&
                          (g =
                              null == t
                                  ? void 0
                                  : t.find((e) => {
                                        let { id: t } = e;
                                        return t === p;
                                    })),
                    null != g && null != g.application && null != g.name)
                ) {
                    let e = g.application.id,
                        t = g.name;
                    [l.b.TWITCH, l.b.YOUTUBE].includes(g.type) && (t = ''.concat(o.Z.get(g.type).name, ' - ').concat(t));
                    let n = () => {
                        d.Z.setSection(m.pNK.INTEGRATIONS), a.Z.setSection(m.b4C.APPLICATION, e);
                    };
                    return h.intl.format(h.t.FuXsWl, {
                        name: t,
                        integrationNameHook: (e, t) =>
                            (0, i.jsx)(
                                c.Z,
                                {
                                    onClick: n,
                                    children: e
                                },
                                t
                            )
                    });
                }
                return f ? h.intl.string(h.t.oF6FYW) : C ? h.intl.string(h.t.ZQ37tL) : h.intl.string(h.t.k5d7DA);
            })(e, t),
        [e, t]
    );
}
