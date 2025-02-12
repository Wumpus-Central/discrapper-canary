t.d(i, {
    E: () => u,
    Z: () => E
});
var n,
    a = t(200651),
    l = t(120356),
    s = t.n(l),
    r = t(468194),
    d = t(471445),
    c = t(686546),
    o = t(557600),
    u = (((n = {}).SMALL_32 = 'SMALL_32'), n);
let I = { SMALL_32: 24 },
    _ = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    E = function (e) {
        var i;
        let { className: t, iconClassName: n, size: l, channel: u, guild: E, locked: A, hasActiveThreads: S } = e;
        if (null == E) return null;
        let g = E.getIconURL(48),
            h = _[l],
            f = I[l],
            L = (0, d.KS)(u, E, {
                locked: A,
                hasActiveThreads: S
            });
        if (null == L) return null;
        let p = (0, r.Zg)(null !== (i = null == E ? void 0 : E.toString()) && void 0 !== i ? i : null);
        return (0, a.jsxs)('div', {
            role: 'img',
            className: t,
            children: [
                (0, a.jsx)(c.ZP, {
                    mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != g
                            ? (0, a.jsx)('img', {
                                  alt: '',
                                  src: g,
                                  className: o.channelGuildIcon,
                                  style: {
                                      width: f,
                                      height: f
                                  }
                              })
                            : (0, a.jsx)('div', {
                                  className: s()(o.channelGuildIcon, o.acronym),
                                  style: {
                                      fontSize: p.length - 1 > h.length ? h[h.length - 1] : h[p.length - 1],
                                      width: f,
                                      height: f
                                  },
                                  children: p
                              })
                }),
                (0, a.jsx)(L, {
                    className: s()(o.icon, o.iconWithGuildIcon, n),
                    color: 'currentColor'
                })
            ]
        });
    };
