n.d(t, {
    E: () => c,
    Z: () => A
});
var r,
    l = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(468194),
    o = n(471445),
    E = n(686546),
    u = n(311533),
    c = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let _ = { SMALL_32: 24 },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    A = function (e) {
        var t;
        let { className: n, iconClassName: r, size: i, channel: c, guild: A, locked: T, hasActiveThreads: I } = e;
        if (null == A) return null;
        let N = A.getIconURL(48),
            g = d[i],
            O = _[i],
            S = (0, o.KS)(c, A, {
                locked: T,
                hasActiveThreads: I
            });
        if (null == S) return null;
        let R = (0, s.Zg)(null !== (t = null == A ? void 0 : A.toString()) && void 0 !== t ? t : null);
        return (0, l.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, l.jsx)(E.ZP, {
                    mask: E.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != N
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: N,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: O,
                                      height: O
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: a()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: R.length - 1 > g.length ? g[g.length - 1] : g[R.length - 1],
                                      width: O,
                                      height: O
                                  },
                                  children: R
                              })
                }),
                (0, l.jsx)(S, {
                    className: a()(u.icon, u.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
