n.d(t, {
    E: () => u,
    Z: () => h
});
var a,
    l = n(200651),
    i = n(120356),
    s = n.n(i),
    r = n(468194),
    o = n(471445),
    c = n(686546),
    d = n(954528),
    u = (((a = {}).SMALL_32 = 'SMALL_32'), a);
let m = { SMALL_32: 24 },
    _ = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    h = function (e) {
        var t;
        let { className: n, iconClassName: a, size: i, channel: u, guild: h, locked: g, hasActiveThreads: p } = e;
        if (null == h) return null;
        let f = h.getIconURL(48),
            E = _[i],
            I = m[i],
            C = (0, o.KS)(u, h, {
                locked: g,
                hasActiveThreads: p
            });
        if (null == C) return null;
        let x = (0, r.Zg)(null !== (t = null == h ? void 0 : h.toString()) && void 0 !== t ? t : null);
        return (0, l.jsxs)('div', {
            role: 'img',
            className: n,
            children: [
                (0, l.jsx)(c.ZP, {
                    mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != f
                            ? (0, l.jsx)('img', {
                                  alt: '',
                                  src: f,
                                  className: d.channelGuildIcon,
                                  style: {
                                      width: I,
                                      height: I
                                  }
                              })
                            : (0, l.jsx)('div', {
                                  className: s()(d.channelGuildIcon, d.acronym),
                                  style: {
                                      fontSize: x.length - 1 > E.length ? E[E.length - 1] : E[x.length - 1],
                                      width: I,
                                      height: I
                                  },
                                  children: x
                              })
                }),
                (0, l.jsx)(C, {
                    className: s()(d.icon, d.iconWithGuildIcon, a),
                    color: 'currentColor'
                })
            ]
        });
    };
