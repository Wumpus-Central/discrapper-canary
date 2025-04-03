n.d(t, {
    E: () => d,
    Z: () => b
});
var i,
    r = n(200651),
    a = n(120356),
    l = n.n(a),
    s = n(468194),
    c = n(471445),
    o = n(686546),
    u = n(292895),
    d = (((i = {}).SMALL_32 = 'SMALL_32'), i);
let f = { SMALL_32: 24 },
    p = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    b = function (e) {
        var t;
        let { className: n, iconClassName: i, size: a, channel: d, guild: b, locked: I, hasActiveThreads: E } = e;
        if (null == b) return null;
        let _ = b.getIconURL(48),
            g = p[a],
            y = f[a],
            S = (0, c.KS)(d, b, {
                locked: I,
                hasActiveThreads: E
            });
        if (null == S) return null;
        let A = (0, s.Zg)(null != (t = null == b ? void 0 : b.toString()) ? t : null);
        return (0, r.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, r.jsx)(o.ZP, {
                    mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != _
                            ? (0, r.jsx)('img', {
                                  alt: '',
                                  src: _,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: y,
                                      height: y
                                  }
                              })
                            : (0, r.jsx)('div', {
                                  className: l()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: A.length - 1 > g.length ? g[g.length - 1] : g[A.length - 1],
                                      width: y,
                                      height: y
                                  },
                                  children: A
                              })
                }),
                (0, r.jsx)(S, {
                    className: l()(u.icon, u.iconWithGuildIcon, i),
                    color: 'currentColor'
                })
            ]
        });
    };
