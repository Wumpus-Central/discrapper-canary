n.d(t, {
    E: () => _,
    Z: () => p
});
var a,
    r = n(200651),
    i = n(120356),
    o = n.n(i),
    l = n(468194),
    c = n(471445),
    s = n(686546),
    u = n(292895),
    _ = (((a = {}).SMALL_32 = 'SMALL_32'), a);
let d = { SMALL_32: 24 },
    f = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    p = function (e) {
        var t;
        let { className: n, iconClassName: a, size: i, channel: _, guild: p, locked: m, hasActiveThreads: g } = e;
        if (null == p) return null;
        let I = p.getIconURL(48),
            h = f[i],
            v = d[i],
            b = (0, c.KS)(_, p, {
                locked: m,
                hasActiveThreads: g
            });
        if (null == b) return null;
        let y = (0, l.Zg)(null != (t = null == p ? void 0 : p.toString()) ? t : null);
        return (0, r.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, r.jsx)(s.ZP, {
                    mask: s.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != I
                            ? (0, r.jsx)('img', {
                                  alt: '',
                                  src: I,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: v,
                                      height: v
                                  }
                              })
                            : (0, r.jsx)('div', {
                                  className: o()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: y.length - 1 > h.length ? h[h.length - 1] : h[y.length - 1],
                                      width: v,
                                      height: v
                                  },
                                  children: y
                              })
                }),
                (0, r.jsx)(b, {
                    className: o()(u.icon, u.iconWithGuildIcon, a),
                    color: 'currentColor'
                })
            ]
        });
    };
