i.d(n, { default: () => h });
var l = i(255367);
i(73800);
var t = i(374470),
    s = i(481060),
    o = i(239091),
    r = i(299206),
    a = i(26737),
    c = i(905041),
    d = i(89013),
    u = i(449751),
    p = i(601184),
    _ = i(168405),
    I = i(536639),
    b = i(388032);
function h(e) {
    var n;
    let i,
        h,
        g,
        { channel: f, message: m, target: v, attachment: x, onSelect: k } = e,
        N = v;
    if (null != x) h = i = x.url;
    else for (; (0, t.k)(N); ) ((0, t.k)(N, HTMLImageElement) && null != N.src && (h = N.src), (0, t.k)(N, HTMLAnchorElement) && null != N.href && ((i = N.href), (g = N.textContent)), (N = N.parentNode));
    let P = null == (n = document.getSelection()) ? void 0 : n.toString(),
        T = (0, a.Z)(P),
        Z = (0, d.Z)(P),
        S = (0, I.Z)(m, f),
        O = (0, _.Z)(m, f),
        C = (0, u.Z)(m, f),
        M = (0, p.Z)(m, f),
        j = (0, c.Z)(null != i ? i : h, g),
        A = (0, r.Z)({
            id: m.id,
            label: b.intl.string(b.t.zBoHlZ),
            shiftId: ''.concat(m.channel_id, '-').concat(m.id)
        }),
        E = (0, r.Z)({
            id: m.author.id,
            label: b.intl.string(b.t.Muw4ws)
        });
    return (0, l.jsxs)(s.v2r, {
        navId: 'message',
        onClose: o.Zy,
        'aria-label': b.intl.string(b.t.ChPNkJ),
        onSelect: k,
        children: [
            (0, l.jsx)(s.kSQ, { children: T }),
            (0, l.jsx)(s.kSQ, { children: Z }),
            (0, l.jsxs)(s.kSQ, {
                children: [S, O, C, M]
            }),
            (0, l.jsx)(s.kSQ, { children: j }),
            (0, l.jsxs)(s.kSQ, {
                children: [A, E]
            })
        ]
    });
}
