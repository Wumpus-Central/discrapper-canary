n.d(t, {
    E: () => u,
    Z: () => A
});
var r,
    l = n(200651),
    s = n(120356),
    a = n.n(s),
    o = n(468194),
    i = n(471445),
    E = n(686546),
    c = n(292895),
    u = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let _ = { SMALL_32: 24 },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        var t;
        let { className: n, iconClassName: r, size: s, channel: u, guild: A, locked: T, hasActiveThreads: N } = e;
        if (null == A) return null;
        let I = A.getIconURL(48),
            O = d[s],
            R = _[s],
            g = (0, i.KS)(u, A, {
                locked: T,
                hasActiveThreads: N
            });
        if (null == g) return null;
        let f = (0, o.Zg)(null != (t = null == A ? void 0 : A.toString()) ? t : null);
        return (0, l.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, l.jsx)(E.ZP, {
                    mask: E.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != I
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: I,
                                  className: c.channelGuildIcon,
                                  style: {
                                      width: R,
                                      height: R
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: a()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: f.length - 1 > O.length ? O[O.length - 1] : O[f.length - 1],
                                      width: R,
                                      height: R
                                  },
                                  children: f
                              })
                }),
                (0, l.jsx)(g, {
                    className: a()(c.icon, c.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
