n.d(t, {
    E: () => c,
    Z: () => A
});
var r,
    l = n(255367),
    s = n(120356),
    i = n.n(s),
    a = n(468194),
    o = n(471445),
    E = n(686546),
    u = n(292895),
    c = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let _ = { SMALL_32: 24 },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        var t;
        let { className: n, iconClassName: r, size: s, channel: c, guild: A, locked: T, hasActiveThreads: I } = e;
        if (null == A) return null;
        let O = A.getIconURL(48),
            N = d[s],
            R = _[s],
            g = (0, o.KS)(c, A, {
                locked: T,
                hasActiveThreads: I
            });
        if (null == g) return null;
        let f = (0, a.Zg)(null != (t = null == A ? void 0 : A.toString()) ? t : null);
        return (0, l.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, l.jsx)(E.ZP, {
                    mask: E.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != O
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: O,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: R,
                                      height: R
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: i()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: f.length - 1 > N.length ? N[N.length - 1] : N[f.length - 1],
                                      width: R,
                                      height: R
                                  },
                                  children: f
                              })
                }),
                (0, l.jsx)(g, {
                    className: i()(u.icon, u.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
