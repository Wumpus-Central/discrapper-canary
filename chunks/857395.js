s.d(l, { Z: () => m });
var a = s(200651),
    n = s(192379),
    i = s(442837),
    t = s(481060),
    r = s(249842),
    c = s(838367),
    d = s(576306),
    o = s(83474),
    u = s(914620);
function m(e) {
    let { guildId: l, channelId: s, messageId: m, name: h, ...x } = e,
        j = (0, d.h)(),
        { unavailable: g, guild: v } = (0, i.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(l),
                unavailable: c.Z.hasFetchFailed(l)
            }),
            [l]
        ),
        f = null != v,
        N = n.useCallback(async () => {
            if (!j)
                try {
                    f || (await (0, r.P)(l));
                } catch {}
        }, [j, f, l]);
    return g
        ? (0, a.jsx)(t.yRy, {
              position: 'right',
              renderPopout: (e) => (0, a.jsx)(o.SK, {}),
              ...x,
              clickTrap: !0
          })
        : (0, a.jsx)(t.yRy, {
              position: 'right',
              preload: N,
              clickTrap: !0,
              renderPopout: (e) =>
                  j
                      ? (0, a.jsx)(u.Z, {
                            ...e,
                            guildId: l,
                            name: h
                        })
                      : null == v
                        ? (0, a.jsx)(a.Fragment, {})
                        : (0, a.jsx)(o.sK, {
                              ...e,
                              guild: v,
                              channelId: s,
                              messageId: m
                          }),
              ...x
          });
}
