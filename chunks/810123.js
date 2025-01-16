i.d(t, {
    E: function () {
        return a;
    }
});
var a,
    n = i(200651),
    l = i(120356),
    s = i.n(l),
    r = i(468194),
    c = i(471445),
    d = i(686546),
    o = i(311533);
(a || (a = {})).SMALL_32 = 'SMALL_32';
let u = { SMALL_32: 24 },
    A = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    };
t.Z = function (e) {
    var t, i, a;
    let { className: l, iconClassName: I, size: S, channel: _, guild: E, locked: f, hasActiveThreads: h } = e;
    if (null == E) return null;
    let g = E.getIconURL(48),
        p = A[S],
        L = u[S],
        N = (0, c.KS)(_, E, {
            locked: f,
            hasActiveThreads: h
        });
    if (null == N) return null;
    let b = (0, r.Zg)(null !== (t = null == E ? void 0 : E.toString()) && void 0 !== t ? t : null);
    return (0, n.jsxs)('div', {
        role: 'img',
        className: l,
        children: [
            (0, n.jsx)(d.ZP, {
                mask: d.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children:
                    null != g
                        ? (0, n.jsx)('img', {
                              alt: '',
                              src: g,
                              className: o.channelGuildIcon,
                              style: {
                                  width: L,
                                  height: L
                              }
                          })
                        : (0, n.jsx)('div', {
                              className: s()(o.channelGuildIcon, o.acronym),
                              style: {
                                  fontSize: ((i = p), (a = b).length - 1 > i.length ? i[i.length - 1] : i[a.length - 1]),
                                  width: L,
                                  height: L
                              },
                              children: b
                          })
            }),
            (0, n.jsx)(N, {
                className: s()(o.icon, o.iconWithGuildIcon, I),
                color: 'currentColor'
            })
        ]
    });
};
