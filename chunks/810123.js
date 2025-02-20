n.d(t, {
    E: () => d,
    Z: () => h
});
var a,
    r = n(200651),
    l = n(120356),
    i = n.n(l),
    s = n(468194),
    o = n(471445),
    c = n(686546),
    u = n(713892),
    d = (((a = {}).SMALL_32 = 'SMALL_32'), a);
let m = { SMALL_32: 24 },
    p = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    h = function (e) {
        var t;
        let { className: n, iconClassName: a, size: l, channel: d, guild: h, locked: g, hasActiveThreads: _ } = e;
        if (null == h) return null;
        let f = h.getIconURL(48),
            b = p[l],
            y = m[l],
            E = (0, o.KS)(d, h, {
                locked: g,
                hasActiveThreads: _
            });
        if (null == E) return null;
        let I = (0, s.Zg)(null !== (t = null == h ? void 0 : h.toString()) && void 0 !== t ? t : null);
        return (0, r.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, r.jsx)(c.ZP, {
                    mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != f
                            ? (0, r.jsx)('img', {
                                  alt: '',
                                  src: f,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: y,
                                      height: y
                                  }
                              })
                            : (0, r.jsx)('div', {
                                  className: i()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: I.length - 1 > b.length ? b[b.length - 1] : b[I.length - 1],
                                      width: y,
                                      height: y
                                  },
                                  children: I
                              })
                }),
                (0, r.jsx)(E, {
                    className: i()(u.icon, u.iconWithGuildIcon, a),
                    color: 'currentColor'
                })
            ]
        });
    };
