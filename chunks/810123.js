n.d(t, {
    E: () => d,
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
    d = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let E = { SMALL_32: 24 },
    _ = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        let { className: t, iconClassName: n, size: r, channel: i, guild: d, locked: A, hasActiveThreads: m } = e;
        if (null == d) return null;
        let f = (0, u.EB)(d, 48),
            T = _[r],
            g = E[r],
            I = (0, a.KS)(i, d, {
                locked: A,
                hasActiveThreads: m
            });
        if (null == I) return null;
        let h = null != d ? (0, u.gM)(d) : '';
        return (0, l.jsxs)('div', {
            role: 'img',
            className: t,
            children: [
                (0, l.jsx)(o.ZP, {
                    mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != f
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: f,
                                  className: c.channelGuildIcon,
                                  style: {
                                      width: g,
                                      height: g
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: s()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: h.length - 1 > T.length ? T[T.length - 1] : T[h.length - 1],
                                      width: g,
                                      height: g
                                  },
                                  children: h
                              })
                }),
                (0, l.jsx)(I, {
                    className: s()(c.icon, c.iconWithGuildIcon, n),
                    color: 'currentColor'
                })
            ]
        });
    };
