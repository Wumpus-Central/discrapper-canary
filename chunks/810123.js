t.d(e, {
    E: () => v,
    Z: () => h
});
var n,
    r = t(255367),
    l = t(120356),
    i = t.n(l),
    s = t(471445),
    a = t(686546),
    o = t(601964),
    g = t(292895),
    v = (((n = {}).SMALL_32 = 'SMALL_32'), n);
let f = { SMALL_32: 24 },
    c = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    h = function (A) {
        let { className: e, iconClassName: t, size: n, channel: l, guild: v, locked: h, hasActiveThreads: u } = A;
        if (null == v) return null;
        let E = (0, o.EB)(v, 48),
            d = c[n],
            C = f[n],
            B = (0, s.KS)(l, v, {
                locked: h,
                hasActiveThreads: u
            });
        if (null == B) return null;
        let w = null != v ? (0, o.gM)(v) : '';
        return (0, r.jsxs)('div', {
            role: 'img',
            className: e,
            children: [
                (0, r.jsx)(a.ZP, {
                    mask: a.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != E
                            ? (0, r.jsx)('img', {
                                  alt: '',
                                  src: E,
                                  className: g.channelGuildIcon,
                                  style: {
                                      width: C,
                                      height: C
                                  }
                              })
                            : (0, r.jsx)('div', {
                                  className: i()(g.channelGuildIcon, g.acronym),
                                  style: {
                                      fontSize: w.length - 1 > d.length ? d[d.length - 1] : d[w.length - 1],
                                      width: C,
                                      height: C
                                  },
                                  children: w
                              })
                }),
                (0, r.jsx)(B, {
                    className: i()(g.icon, g.iconWithGuildIcon, t),
                    color: 'currentColor'
                })
            ]
        });
    };
