n.d(t, {
    E: () => _,
    Z: () => m
});
var r,
    a = n(255367),
    i = n(120356),
    o = n.n(i),
    l = n(468194),
    c = n(471445),
    s = n(686546),
    u = n(292895),
    _ = (((r = {}).SMALL_32 = 'SMALL_32'), r);
let d = { SMALL_32: 24 },
    f = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    m = function (e) {
        var t;
        let { className: n, iconClassName: r, size: i, channel: _, guild: m, locked: p, hasActiveThreads: g } = e;
        if (null == m) return null;
        let v = m.getIconURL(48),
            b = f[i],
            h = d[i],
            I = (0, c.KS)(_, m, {
                locked: p,
                hasActiveThreads: g
            });
        if (null == I) return null;
        let y = (0, l.Zg)(null != (t = null == m ? void 0 : m.toString()) ? t : null);
        return (0, a.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, a.jsx)(s.ZP, {
                    mask: s.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != v
                            ? (0, a.jsx)('img', {
                                  alt: '',
                                  src: v,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: h,
                                      height: h
                                  }
                              })
                            : (0, a.jsx)('div', {
                                  className: o()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: y.length - 1 > b.length ? b[b.length - 1] : b[y.length - 1],
                                      width: h,
                                      height: h
                                  },
                                  children: y
                              })
                }),
                (0, a.jsx)(I, {
                    className: o()(u.icon, u.iconWithGuildIcon, r),
                    color: 'currentColor'
                })
            ]
        });
    };
