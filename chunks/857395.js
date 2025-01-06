t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(249842),
    c = t(838367),
    o = t(576306),
    u = t(83474),
    d = t(914620);
function h(e) {
    let { guildId: n, channelId: t, messageId: h, name: m, ...f } = e,
        x = (0, o.h)(),
        { unavailable: g, guild: j } = (0, r.cj)(
            [c.Z],
            () => ({
                guild: c.Z.getGuild(n),
                unavailable: c.Z.hasFetchFailed(n)
            }),
            [n]
        ),
        v = null != j,
        N = l.useCallback(async () => {
            if (!x)
                try {
                    !v && (await (0, s.P)(n));
                } catch {}
        }, [x, v, n]);
    return g
        ? (0, i.jsx)(a.Popout, {
              position: 'right',
              renderPopout: (e) => (0, i.jsx)(u.SK, {}),
              ...f
          })
        : (0, i.jsx)(a.Popout, {
              position: 'right',
              preload: N,
              renderPopout: (e) =>
                  x
                      ? (0, i.jsx)(d.Z, {
                            ...e,
                            guildId: n,
                            name: m
                        })
                      : null == j
                        ? (0, i.jsx)(i.Fragment, {})
                        : (0, i.jsx)(u.sK, {
                              ...e,
                              guild: j,
                              channelId: t,
                              messageId: h
                          }),
              ...f
          });
}
