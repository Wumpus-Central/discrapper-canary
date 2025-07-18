t.d(e, {
    E: () => f,
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
    f = (((n = {}).SMALL_32 = 'SMALL_32'), n);
let c = { SMALL_32: 24 },
    v = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    h = function (A) {
        let { className: e, iconClassName: t, size: n, channel: l, guild: f, locked: h, hasActiveThreads: u } = A;
        if (null == f) return null;
        let E = (0, o.EB)(f, 48),
            d = v[n],
            C = c[n],
            B = (0, s.KS)(l, f, {
                locked: h,
                hasActiveThreads: u
            });
        if (null == B) return null;
        let w = null != f ? (0, o.gM)(f) : '';
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
