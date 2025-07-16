i.d(n, { default: () => g });
var t = i(255367);
i(73800);
var l = i(374470),
    s = i(481060),
    r = i(239091),
    o = i(299206),
    a = i(26737),
    c = i(905041),
    d = i(89013),
    u = i(449751),
    p = i(601184),
    _ = i(168405),
    b = i(536639),
    h = i(388032);
function g(e) {
    var n;
    let i,
        g,
        f,
        { channel: m, message: x, target: k, attachment: v, onSelect: I } = e,
        Z = k;
    if (null != v) g = i = v.url;
    else for (; (0, l.k)(Z); ) ((0, l.k)(Z, HTMLImageElement) && null != Z.src && (g = Z.src), (0, l.k)(Z, HTMLAnchorElement) && null != Z.href && ((i = Z.href), (f = Z.textContent)), (Z = Z.parentNode));
    let N = null == (n = document.getSelection()) ? void 0 : n.toString(),
        P = (0, a.Z)(N),
        T = (0, d.Z)(N),
        C = (0, b.Z)(x, m),
        S = (0, _.Z)(x, m),
        j = (0, u.Z)(x, m),
        M = (0, p.Z)(x, m),
        E = (0, c.Z)(null != i ? i : g, f),
        O = (0, o.Z)({
            id: x.id,
            label: h.intl.string(h.t.zBoHlZ),
            shiftId: ''.concat(x.channel_id, '-').concat(x.id)
        }),
        w = (0, o.Z)({
            id: x.author.id,
            label: h.intl.string(h.t.Muw4ws)
        });
    return (0, t.jsxs)(s.v2r, {
        navId: 'message',
        onClose: r.Zy,
        'aria-label': h.intl.string(h.t.ChPNkJ),
        onSelect: I,
        children: [
            (0, t.jsx)(s.kSQ, { children: P }),
            (0, t.jsx)(s.kSQ, { children: T }),
            (0, t.jsxs)(s.kSQ, {
                children: [C, S, j, M]
            }),
            (0, t.jsx)(s.kSQ, { children: E }),
            (0, t.jsxs)(s.kSQ, {
                children: [O, w]
            })
        ]
    });
}
