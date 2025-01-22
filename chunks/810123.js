n.d(t, {
    E: function () {
        return l;
    }
});
var l,
    i = n(200651),
    a = n(120356),
    r = n.n(a),
    s = n(468194),
    o = n(471445),
    c = n(686546),
    u = n(311533);
(l || (l = {})).SMALL_32 = 'SMALL_32';
let d = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    };
t.Z = function (e) {
    var t, n, l;
    let { className: a, iconClassName: f, size: _, channel: g, guild: m, locked: E, hasActiveThreads: I } = e;
    if (null == m) return null;
    let p = m.getIconURL(48),
        S = h[_],
        A = d[_],
        C = (0, o.KS)(g, m, {
            locked: E,
            hasActiveThreads: I
        });
    if (null == C) return null;
    let v = (0, s.Zg)(null !== (t = null == m ? void 0 : m.toString()) && void 0 !== t ? t : null);
    return (0, i.jsxs)('div', {
        role: 'img',
        className: a,
        children: [
            (0, i.jsx)(c.ZP, {
                mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children:
                    null != p
                        ? (0, i.jsx)('img', {
                              alt: '',
                              src: p,
                              className: u.channelGuildIcon,
                              style: {
                                  width: A,
                                  height: A
                              }
                          })
                        : (0, i.jsx)('div', {
                              className: r()(u.channelGuildIcon, u.acronym),
                              style: {
                                  fontSize: ((n = S), (l = v).length - 1 > n.length ? n[n.length - 1] : n[l.length - 1]),
                                  width: A,
                                  height: A
                              },
                              children: v
                          })
            }),
            (0, i.jsx)(C, {
                className: r()(u.icon, u.iconWithGuildIcon, f),
                color: 'currentColor'
            })
        ]
    });
};
