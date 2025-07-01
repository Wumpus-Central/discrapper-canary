n.d(t, {
    E: () => d,
    Z: () => A
});
var r,
    l = n(255367),
    i = n(120356),
    s = n.n(i),
    a = n(468194),
    o = n(471445),
    u = n(686546),
    c = n(292895),
    d = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let E = { SMALL_32: 24 },
    _ = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        var t;
        let { className: n, iconClassName: r, size: i, channel: d, guild: A, locked: m, hasActiveThreads: T } = e;
        if (null == A) return null;
        let f = A.getIconURL(48),
            g = _[i],
            I = E[i],
            h = (0, o.KS)(d, A, {
                locked: m,
                hasActiveThreads: T
            });
        if (null == h) return null;
        let O = (0, a.Zg)(null != (t = null == A ? void 0 : A.toString()) ? t : null);
        return (0, l.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, l.jsx)(u.ZP, {
                    mask: u.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != f
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: f,
                                  className: c.channelGuildIcon,
                                  style: {
                                      width: I,
                                      height: I
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: s()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: O.length - 1 > g.length ? g[g.length - 1] : g[O.length - 1],
                                      width: I,
                                      height: I
                                  },
                                  children: O
                              })
                }),
                (0, l.jsx)(h, {
                    className: s()(c.icon, c.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
