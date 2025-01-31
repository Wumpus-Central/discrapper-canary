n.d(l, { Z: () => m });
var i = n(200651),
    t = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(249842),
    c = n(838367),
    d = n(576306),
    o = n(83474),
    u = n(914620);
function m(e) {
    let { guildId: l, channelId: n, messageId: m, name: h, ...x } = e,
        j = (0, d.h)(),
        { unavailable: f, guild: v } = (0, a.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(l),
                unavailable: c.Z.hasFetchFailed(l)
            }),
            [l]
        ),
        g = null != v,
        N = t.useCallback(async () => {
            if (!j)
                try {
                    g || (await (0, r.P)(l));
                } catch {}
        }, [j, g, l]);
    return f
        ? (0, i.jsx)(s.yRy, {
              position: 'right',
              renderPopout: (e) => (0, i.jsx)(o.SK, {}),
              ...x,
              clickTrap: !0
          })
        : (0, i.jsx)(s.yRy, {
              position: 'right',
              preload: N,
              clickTrap: !0,
              renderPopout: (e) =>
                  j
                      ? (0, i.jsx)(u.Z, {
                            ...e,
                            guildId: l,
                            name: h
                        })
                      : null == v
                        ? (0, i.jsx)(i.Fragment, {})
                        : (0, i.jsx)(o.sK, {
                              ...e,
                              guild: v,
                              channelId: n,
                              messageId: m
                          }),
              ...x
          });
}
