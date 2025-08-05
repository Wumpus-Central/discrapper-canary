e.d(t, {
    E: () => i,
    Z: () => a
});
var r,
    g = e(255367),
    v = e(120356),
    n = e.n(v),
    f = e(471445),
    B = e(686546),
    l = e(601964),
    h = e(292895),
    i = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let o = { SMALL_32: 24 },
    C = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    a = function (A) {
        let { className: t, iconClassName: e, size: r, channel: v, guild: i, locked: a, hasActiveThreads: w } = A;
        if (null == i) return null;
        let s = (0, l.EB)(i, 48),
            Q = C[r],
            H = o[r],
            c = (0, f.KS)(v, i, {
                locked: a,
                hasActiveThreads: w
            });
        if (null == c) return null;
        let D = null != i ? (0, l.gM)(i) : '';
        return (0, g.jsxs)('div', {
            role: 'img',
            className: t,
            children: [
                (0, g.jsx)(B.ZP, {
                    mask: B.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != s
                            ? (0, g.jsx)('img', {
                                  alt: '',
                                  src: s,
                                  className: h.channelGuildIcon,
                                  style: {
                                      width: H,
                                      height: H
                                  }
                              })
                            : (0, g.jsx)('div', {
                                  className: n()(h.channelGuildIcon, h.acronym),
                                  style: {
                                      fontSize: D.length - 1 > Q.length ? Q[Q.length - 1] : Q[D.length - 1],
                                      width: H,
                                      height: H
                                  },
                                  children: D
                              })
                }),
                (0, g.jsx)(c, {
                    className: n()(h.icon, h.iconWithGuildIcon, e),
                    color: 'currentColor'
                })
            ]
        });
    };
