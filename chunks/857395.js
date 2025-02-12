a.d(l, { Z: () => m });
var s = a(200651),
    n = a(192379),
    i = a(442837),
    t = a(481060),
    r = a(249842),
    d = a(838367),
    c = a(576306),
    o = a(83474),
    u = a(914620);
function m(e) {
    let { guildId: l, channelId: a, messageId: m, name: h, ...x } = e,
        j = (0, c.h)(),
        { unavailable: g, guild: v } = (0, i.cj)(
            [d.Z],
            () => ({
                guild: d.Z.getGuild(l),
                unavailable: d.Z.hasFetchFailed(l)
            }),
            [l]
        ),
        N = null != v,
        f = n.useCallback(async () => {
            if (!j)
                try {
                    N || (await (0, r.P)(l));
                } catch {}
        }, [j, N, l]);
    return g
        ? (0, s.jsx)(t.yRy, {
              position: 'right',
              renderPopout: (e) => (0, s.jsx)(o.SK, {}),
              ...x,
              clickTrap: !0
          })
        : (0, s.jsx)(t.yRy, {
              position: 'right',
              preload: f,
              clickTrap: !0,
              renderPopout: (e) =>
                  j
                      ? (0, s.jsx)(u.Z, {
                            ...e,
                            guildId: l,
                            name: h
                        })
                      : null == v
                        ? (0, s.jsx)(s.Fragment, {})
                        : (0, s.jsx)(o.sK, {
                              ...e,
                              guild: v,
                              channelId: a,
                              messageId: m
                          }),
              ...x
          });
}
