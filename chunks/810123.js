n.d(t, {
    E: () => d,
    Z: () => f
});
var l,
    i = n(200651),
    a = n(120356),
    s = n.n(a),
    r = n(468194),
    o = n(471445),
    c = n(686546),
    u = n(311533),
    d = (((l = {}).SMALL_32 = 'SMALL_32'), l);
let _ = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    f = function (e) {
        var t;
        let { className: n, iconClassName: l, size: a, channel: d, guild: f, locked: g, hasActiveThreads: m } = e;
        if (null == f) return null;
        let E = f.getIconURL(48),
            p = h[a],
            I = _[a],
            A = (0, o.KS)(d, f, {
                locked: g,
                hasActiveThreads: m
            });
        if (null == A) return null;
        let S = (0, r.Zg)(null !== (t = null == f ? void 0 : f.toString()) && void 0 !== t ? t : null);
        return (0, i.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, i.jsx)(c.ZP, {
                    mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != E
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  src: E,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: I,
                                      height: I
                                  }
                              })
                            : (0, i.jsx)('div', {
                                  className: s()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: S.length - 1 > p.length ? p[p.length - 1] : p[S.length - 1],
                                      width: I,
                                      height: I
                                  },
                                  children: S
                              })
                }),
                (0, i.jsx)(A, {
                    className: s()(u.icon, u.iconWithGuildIcon, l),
                    color: 'currentColor'
                })
            ]
        });
    };
