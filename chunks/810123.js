n.d(t, {
    E: () => E,
    Z: () => A
});
var r,
    l = n(255367),
    i = n(120356),
    s = n.n(i),
    a = n(471445),
    o = n(686546),
    u = n(601964),
    c = n(292895),
    E = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let d = { SMALL_32: 24 },
    _ = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        let { className: t, iconClassName: n, size: r, channel: i, guild: E, locked: A, hasActiveThreads: T } = e;
        if (null == E) return null;
        let I = (0, u.EB)(E, 48),
            g = _[r],
            m = d[r],
            f = (0, a.KS)(i, E, {
                locked: A,
                hasActiveThreads: T
            });
        if (null == f) return null;
        let O = null != E ? (0, u.gM)(E) : '';
        return (0, l.jsxs)('div', {
            role: 'img',
            className: t,
            children: [
                (0, l.jsx)(o.ZP, {
                    mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != I
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: I,
                                  className: c.channelGuildIcon,
                                  style: {
                                      width: m,
                                      height: m
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: s()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: O.length - 1 > g.length ? g[g.length - 1] : g[O.length - 1],
                                      width: m,
                                      height: m
                                  },
                                  children: O
                              })
                }),
                (0, l.jsx)(f, {
                    className: s()(c.icon, c.iconWithGuildIcon, n),
                    color: 'currentColor'
                })
            ]
        });
    };
