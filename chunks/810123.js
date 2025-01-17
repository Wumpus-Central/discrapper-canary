n.d(t, {
    E: function () {
        return r;
    }
});
var r,
    l = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(468194),
    o = n(471445),
    E = n(686546),
    u = n(311533);
(r || (r = {})).SMALL_32 = 'SMALL_32';
let c = { SMALL_32: 24 },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    };
t.Z = function (e) {
    var t, n, r;
    let { className: i, iconClassName: _, size: A, channel: T, guild: I, locked: N, hasActiveThreads: f } = e;
    if (null == I) return null;
    let g = I.getIconURL(48),
        O = d[A],
        R = c[A],
        S = (0, o.KS)(T, I, {
            locked: N,
            hasActiveThreads: f
        });
    if (null == S) return null;
    let D = (0, a.Zg)(null !== (t = null == I ? void 0 : I.toString()) && void 0 !== t ? t : null);
    return (0, l.jsxs)('div', {
        role: 'img',
        className: i,
        children: [
            (0, l.jsx)(E.ZP, {
                mask: E.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children:
                    null != g
                        ? (0, l.jsx)('img', {
                              alt: '',
                              src: g,
                              className: u.channelGuildIcon,
                              style: {
                                  width: R,
                                  height: R
                              }
                          })
                        : (0, l.jsx)('div', {
                              className: s()(u.channelGuildIcon, u.acronym),
                              style: {
                                  fontSize: ((n = O), (r = D).length - 1 > n.length ? n[n.length - 1] : n[r.length - 1]),
                                  width: R,
                                  height: R
                              },
                              children: D
                          })
            }),
            (0, l.jsx)(S, {
                className: s()(u.icon, u.iconWithGuildIcon, _),
                color: 'currentColor'
            })
        ]
    });
};
