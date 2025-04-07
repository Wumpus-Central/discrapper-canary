n.d(t, {
    E: () => u,
    Z: () => A
});
var r,
    l = n(200651),
    a = n(120356),
    s = n.n(a),
    i = n(468194),
    o = n(471445),
    E = n(686546),
    c = n(292895),
    u = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let _ = { SMALL_32: 24 },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        var t;
        let { className: n, iconClassName: r, size: a, channel: u, guild: A, locked: T, hasActiveThreads: N } = e;
        if (null == A) return null;
        let I = A.getIconURL(48),
            O = d[a],
            g = _[a],
            f = (0, o.KS)(u, A, {
                locked: T,
                hasActiveThreads: N
            });
        if (null == f) return null;
        let R = (0, i.Zg)(null != (t = null == A ? void 0 : A.toString()) ? t : null);
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
                                      width: g,
                                      height: g
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: s()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: R.length - 1 > O.length ? O[O.length - 1] : O[R.length - 1],
                                      width: g,
                                      height: g
                                  },
                                  children: R
                              })
                }),
                (0, l.jsx)(f, {
                    className: s()(c.icon, c.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
